jewel.board = (function() {
    /* game function go here */
    var settings, jewels, cols, rows, baseScore, numJewelTypes, minSizeOfChainToSwap, minSizeOfChainToScore;
    var removed = [],
        moved = [];

    function initialize(callback) {
        settings = jewel.settings;
        numJewelTypes = settings.numJewelTypes;
        baseScore = settings.baseScore;
        cols = settings.cols;
        rows = settings.rows;
        minSizeOfChainToScore = 3;
        minSizeOfChainToSwap = 2;
        fillBoard();
        callback();
    }

    function print() {
        var str = "";
        for (var y = 0; y < rows; y++) {
            for (var x = 0; x < cols; x++) {
                str += getJewel(x, y) + " ";
            }
            str += "\r\n";
        }
        console.log(str);
    }

    function fillBoard() {
        var x, y, type;
        jewels = [];
        for (x = 0; x < cols; x++) {
            jewels[x] = [];
            for (y = 0; y < rows; y++) {
                jewels[x][y] = getADifferentJewelTypeOfMyNeighbords(x, y);
            }
        }

        if (!hasAvailableMoves()) {
            fillBoard();
        }
    }

    function getADifferentJewelTypeOfMyNeighbords(col, row) {
        jewelType = randomJewel();
        while (jewelTypeIsTheSameOfTheLeftNeighbords(jewelType, col, row) || jewelTypeIsTheSameOfTheUpperNeighbords(jewelType, col, row)) {
            jewelType = randomJewel();
        }
        return jewelType;
    }

    function jewelTypeIsTheSameOfTheLeftNeighbords(jewelType, col, row) {
        return (jewelType == getJewel(col - 1, row) && jewelType == getJewel(col - 2, row));
    }

    function jewelTypeIsTheSameOfTheUpperNeighbords(jewelType, col, row) {
        return (jewelType == getJewel(col, row - 1) && jewelType == getJewel(col, row - 2));
    }

    function getJewel(col, row) {
        if (isValidColumn(col) && isValidRow(row)) {
            return jewels[col][row];
        } else {
            return -1;
        }
    }

    function isValidColumn(col) {
        return (col >= 0 && col <= cols - 1);
    }

    function isValidRow(row) {
        return (row >= 0 && row <= rows - 1);
    }

    function randomJewel() {
        return Math.floor(Math.random() * numJewelTypes);
    }

    //return the number of jewels in the longest chain
    function getQtyOfJewelsFromTheLongestNeighbordChain(col, row) {
        var type = getJewel(col, row);
        var right = getQtyOfJewelsFromRigthNeighbordChain(type, col, row);
        var left = getQtyOfJewelsFromLeftNeighbordChain(type, col, row);
        var up = getQtyOfJewelsFromUpperNeighbordChain(type, col, row);
        var down = getQtyOfJewelsFromLowerNeighbordChain(type, col, row);
        var totalVerticalJewels = left + 1 + right;
        var totalHorizontalJewels = up + 1 + down;

        return Math.max(totalVerticalJewels, totalHorizontalJewels);
    }

    function getQtyOfJewelsFromRigthNeighbordChain(jewelType, col, row) {
        var qty = 0;
        if (isValidColumn(col) && isValidRow(row)) {
            var nextCol = col + 1;
            while (jewelType === getJewel(nextCol + qty, row)) {
                qty++;
            }
        }
        return qty;
    }

    function getQtyOfJewelsFromLeftNeighbordChain(jewelType, col, row) {
        var qty = 0;
        if (isValidColumn(col) && isValidRow(row)) {
            var nextCol = col - 1;
            while (jewelType === getJewel(nextCol - qty, row)) {
                qty++;
            }
        }
        return qty;
    }

    function getQtyOfJewelsFromUpperNeighbordChain(jewelType, col, row) {
        var qty = 0;
        if (isValidColumn(col) && isValidRow(row)) {
            var nextRow = row + 1;
            while (jewelType === getJewel(col, nextRow + qty)) {
                qty++;
            }
        }
        return qty;
    }

    function getQtyOfJewelsFromLowerNeighbordChain(jewelType, col, row) {
        var qty = 0;
        if (isValidColumn(col) && isValidRow(row)) {
            var nextRow = row - 1;
            while (jewelType === getJewel(col, nextRow - qty)) {
                qty++;
            }
        }
        return qty;
    }

    function canSwap(col1, row1, col2, row2) {
        if (!isValidColumn(col1) || !isValidRow(row1) || !isValidColumn(col2) || !isValidRow(row2)) {
            return false;
        } else if (!isAdjacent(col1, row1, col2, row2)) {
            return false;
        } else {
            moveJewelsFromTo(col1, row1, col2, row2);
            result = AnyOfTheChangedGemsHasAChainGreatherThan(col1, row1, col2, row2, minSizeOfChainToSwap);
            moveJewelsFromTo(col1, row1, col2, row2);
            return result;
        }
    }

    function moveJewelsFromTo(col1, row1, col2, row2) {
        jewelType1 = getJewel(col1, row1);
        jewelType2 = getJewel(col2, row2);

        jewels[col1][row1] = jewelType2;
        jewels[col2][row2] = jewelType1;
    }

    function doSwap(col1, row1, col2, row2, callback) {
        if (canSwap(col1, row1, col2, row2)) {
            moveJewelsFromTo(col1, row1, col2, row2);
            boardEvents = processChains();
            callback(boardEvents);
        } else {
            callback(false);
        }
    }

    function isAdjacent(col1, row1, col2, row2) {
        var dx, dy;
        dx = Math.abs(col1 - col2);
        dy = Math.abs(row1 - row2);
        return (dx + dy === 1);
    }

    function AnyOfTheChangedGemsHasAChainGreatherThan(col1, row1, col2, row2, minSizeOfChain) {
        return getQtyOfJewelsFromTheLongestNeighbordChain(col1, row1) > minSizeOfChain || getQtyOfJewelsFromTheLongestNeighbordChain(col2, row2) > minSizeOfChain;
    }

    function getBoardChainLengthMap() {
        var currentCol, currentRow;
        var map = [];
        for (currentCol = 0; currentCol < cols; currentCol++) {
            map[currentCol] = [];
            for (currentRow = 0; currentRow < rows; currentRow++) {
                map[currentCol][currentRow] = getQtyOfJewelsFromTheLongestNeighbordChain(currentCol, currentRow);
            }
        }
        return map;
    }

    function hasAvailableMoves() {
        for (var column = 0; column < cols; column++) {
            for (var row = 0; row < rows; row++) {
                if (canJewelMove(column, row)) {
                    return true;
                }
            }
        }
        return false;
    }

    function canJewelMove(column, row) {
        canSwapRigth = canSwap(column, row, column + 1, row);
        canSwapLeft = canSwap(column, row, column - 1, row);
        canSwapTop = canSwap(column, row, column, row + 1);
        canSwapBottom = canSwap(column, row, column, row - 1);
        return (canSwapRigth || canSwapLeft || canSwapBottom || canSwapTop);
    }

    function processChains(events) {
        var score = 0;
        var gapsPerColumn = [];
        var chainMap = getBoardChainLengthMap();

        removed = [];
        moved = [];
        events = events || [];

        for (var x = 0; x < cols; x++) {
            gapsPerColumn[x] = 0;
            tryRemoveOrMoveJewelsFromColumn(chainMap, x, gapsPerColumn, score);
            addNewJewelsToFillGaps(x, gapsPerColumn[x]);
        }

        if (removed.length > 0) {
            addProcessChainsEventLogToEvents(events, removed, score, moved);
            checkIfThereAreAvailableMovesInTheBoardForThePlayer(events);
            return processChains(events);
        } else {
            return events;
        }
    }

    function addProcessChainsEventLogToEvents(events, removed, score, moved) {
        events.push({
            type: "remove",
            data: removed
        }, {
            type: "score",
            data: score
        }, {
            type: "move",
            data: moved
        });
    }

    function checkIfThereAreAvailableMovesInTheBoardForThePlayer(events) {
        if (!hasAvailableMoves()) {
            fillBoard();
            events.push({
                type: "refill",
                data: getBoard()
            });
        }
    }

    function getBoard() {
        var copy = [];
        for (var column = 0; column < cols; column++) {
            copy[column] = jewels[column].slice(0);
        }
        return copy;
    }

    function addNewJewelsToFillGaps(column, numberOfGaps) {
        for (var row = 0; row < numberOfGaps; row++) {
            jewelType = randomJewel();

            markAsMoved({
                toX: column,
                toY: row,
                fromX: column,
                fromY: row - numberOfGaps,
                type: jewelType
            });

            jewels[column][row] = jewelType;
        }
    }

    function tryRemoveOrMoveJewelsFromColumn(chainMap, column, gaps, score) {
        for (var row = rows; row >= 0; row--) {
            if (chainMap[column][row] > 2) {
                gaps[column]++;
                markJewelAsRemoved(column, row);
                updateScore(chainMap[column][row], score);
            } else if (gaps[column] > 0) {
                moveJewelDownToFitGap(column, row, gaps[column]);
            }
        }
    }

    function updateScore(chainSize, score) {
        qtyOfExtraJewelsInTheChain = chainSize - minSizeOfChainToScore;
        score += baseScore * Math.pow(2, qtyOfExtraJewelsInTheChain);
    }

    function markJewelAsRemoved(col, row) {
        removed.push({
            x: col,
            y: row,
            type: getJewel(col, row)
        });
    }

    function markAsMoved(data) {
        moved.push(data);
    }

    function moveJewelDownToFitGap(col, row, verticalGap) {
        obj = {
            toX: col,
            toY: row + verticalGap,
            fromX: col,
            fromY: row,
            type: getJewel(col, row)
        };
        markAsMoved(obj);
        jewels[col][obj.toY] = obj.type;
    }

    return {
        /* exposed function go here */
        initialize: initialize,
        print: print,
        canSwap: canSwap,
        swap: doSwap,
        getBoard: getBoard
    };
})();