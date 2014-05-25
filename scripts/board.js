jewel.board = (function() {
    /* game function go here */
    var settings, jewels, cols, rows, baseScore, numJewelTypes;
    var removed = [],
        moved = [];

    function initialize(callback) {
        settings = jewel.settings;
        numJewelTypes = settings.numJewelTypes;
        baseScore = settings.baseScore;
        cols = settings.cols;
        rows = settings.rows;
        minSizeOfChain = 2;
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
        var nextCol = col + 1;
        while (jewelType === getJewel(nextCol + qty, row)) {
            qty++;
        }
        return qty;
    }

    function getQtyOfJewelsFromLeftNeighbordChain(jewelType, col, row) {
        var qty = 0;
        var nextCol = col - 1;
        while (jewelType === getJewel(nextCol - qty, row)) {
            qty++;
        }
        return qty;
    }

    function getQtyOfJewelsFromUpperNeighbordChain(jewelType, col, row) {
        var qty = 0;
        var nextRow = row + 1;
        while (jewelType === getJewel(col, nextRow + qty)) {
            qty++;
        }
        return qty;
    }

    function getQtyOfJewelsFromLowerNeighbordChain(jewelType, col, row) {
        var qty = 0;
        var nextRow = row - 1;
        while (jewelType === getJewel(col, nextRow - qty)) {
            qty++;
        }
        return qty;
    }

    function canSwap(col1, row1, col2, row2) {
        if (!isAdjacent(col1, row1, col2, row2)) {
            return false;
        }

        swapJewels(col1, row1, col2, row2);
        result = AnyOfTheChangedGemsHasAChainGreatherThan(col1, row1, col2, row2, minSizeOfChain);
        swapJewels(col2, row2, col1, row1);

        return result;
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

    function swapJewels(col1, row1, col2, row2) {
        jewelType1 = getJewel(col1, row1);
        jewelType2 = getJewel(col2, row2);

        jewels[col1][row1] = jewelType2;
        jewels[col2][row2] = jewelType1;
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

    function processChains() {
        var chainMap = getBoardChainLengthMap();
        var score = 0,
            gapsPerColumn = [];
        removed = [];
        moved = [];

        for (var x = 0; x < cols; x++) {
            gapsPerColumn[x] = 0;
            tryRemoveOrMoveJewelsFromColumn(x, gapsPerColumn);
            addNewJewelsToFillGaps(x, gapsPerColumn[x])
        }
    }

    function addNewJewelsToFillGaps(column, numberOfGaps) {
        for (var row = 0; row < numberOfGaps; row++) {
            jewelType = randomJewel();

            markAsMoved({
                toX: x,
                toY: y,
                fromX: x,
                fromY: y - numberOfGaps,
                type: jewelType
            });

            jewels[column][row] = jewelType;
        }
    }

    function tryRemoveOrMoveJewelsFromColumn(column, gaps) {
        for (var row = rows; row >= 0; row--) {
            if (chainMap[column][row] > 2) {
                gaps[column]++;
                markJewelAsRemoved(column, row);
            } else if (gaps[column] > 0) {
                moveJewelDownToFitGap(column, row, gaps[column]);
            }
        }
    }

    function markJewelAsRemoved(col, row) {
        removed.push({
            x: col,
            y: row,
            type: getJewel(x, y)
        });
    }

    function markAsMoved(data) {
        moved.push(data);
    }

    function moveJewelDownToFitGap(x, y, verticalGap) {
        obj = {
            toX: x,
            toY: y + verticalGap,
            fromX: x,
            fromY: y,
            type: getJewel(x, y)
        };
        markAsMoved(obj);
        jewels[x][obj.toY] = obj.type;
    }

    return {
        /* exposed function go here */
        initialize: initialize,
        print: print,
        canSwap: canSwap,
        swap: swapJewels,
        check: getBoardChainLengthMap
    };
})();