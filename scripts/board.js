jewel.board = (function(){
  /* game function go here */
  var settings, jewels, cols, rows, baseScore, numJewelTypes;

  function initialize(callback){
    settings = jewel.settings;
    numJewelTypes = settings.numJewelTypes;
    baseScore = settings.baseScore;
    cols = settings.cols;
    rows = settings.rows;
    minSizeOfChain = 2;
    fillBoard();
    callback();
  }

  function print(){
    var str = "";
    for(var y = 0; y < rows; y++){
      for(var x = 0; x < cols; x++){
        str += getJewel(x, y) + " ";
      }
      str += "\r\n";
    }
    console.log(str);
  }

  function fillBoard(){
    var x, y, type;
    jewels = [];
    for(x = 0; x < cols; x++){
      jewels[x] = [];
      for(y = 0; y < rows; y++){
        jewels[x][y] = getADifferentJewelTypeOfMyNeighbords(x, y);
      }
    }
  }

  function getADifferentJewelTypeOfMyNeighbords(col, row){
    jewelType = randomJewel();
    while ( jewelTypeIsTheSameOfTheLeftNeighbords(jewelType, col, row) || jewelTypeIsTheSameOfTheUpperNeighbords(jewelType, col, row) ){
      jewelType = randomJewel();
    }
    return jewelType;
  }

  function jewelTypeIsTheSameOfTheLeftNeighbords(jewelType, col, row){
    return ( jewelType == getJewel( col - 1, row ) && jewelType == getJewel( col - 2, row ) );
  }

  function jewelTypeIsTheSameOfTheUpperNeighbords(jewelType, col, row){
    return ( jewelType == getJewel( col, row -1 ) && jewelType == getJewel( col, row - 2 ) );
  }

  function getJewel(col, row){
    if( isValidColumn(col) && isValidRow(row)){
      return jewels[col][row];
    }
    else{
      return -1;
    }
  }

  function isValidColumn(col){
    return ( col >= 0 && col <= cols-1 );
  }

  function isValidRow(row){
    return ( row >= 0 && row <= rows-1 );
  }

  function randomJewel(){
    return Math.floor(Math.random() * numJewelTypes);
  }

  //return the number of jewels in the longest chain
  function getQtyOfJewelsFromTheLongestNeighbordChain(col, row){
    var type  = getJewel(col, row);
    var right = getQtyOfJewelsFromRigthNeighbordChain(type, col, row);
    var left  = getQtyOfJewelsFromLeftNeighbordChain(type, col, row);
    var up    = getQtyOfJewelsFromUpperNeighbordChain(type, col, row);
    var down  = getQtyOfJewelsFromLowerNeighbordChain(type, col, row);
    var totalVerticalJewels = left + 1 + right;
    var totalHorizontalJewels = up + 1 + down;

    return Math.max( totalVerticalJewels, totalHorizontalJewels);
  }

  function getQtyOfJewelsFromRigthNeighbordChain(jewelType, col, row){
    var qty = 0;
    var nextCol = col + 1;
    while( jewelType === getJewel(nextCol + qty, row) ){
      qty++;
    }
    return qty;
  }

  function getQtyOfJewelsFromLeftNeighbordChain(jewelType, col, row){
    var qty = 0;
    var nextCol = col - 1;
    while( jewelType === getJewel(nextCol - qty, row) ){
      qty++;
    }
    return qty;
  }

  function getQtyOfJewelsFromUpperNeighbordChain(jewelType, col, row){
    var qty = 0;
    var nextRow = row + 1;
    while( jewelType === getJewel(col, nextRow + qty) ){
      qty++;
    }
    return qty;
  }

  function getQtyOfJewelsFromLowerNeighbordChain(jewelType, col, row){
    var qty = 0;
    var nextRow = row - 1;
    while( jewelType === getJewel(col, nextRow - qty) ){
      qty++;
    }
    return qty;
  }

  function canSwap(col1, row1, col2, row2){
    if ( !isAdjacent(col1, row1, col2, row2) ){
      return false;
    }

    swapJewels(col1, row1, col2, row2);
    result = AnyOfTheChangedGemsHasAChainGreatherThan(col1, row1, col2, row2, minSizeOfChain);
    swapJewels(col1, row1, col2, row2);

    return result;
  }

  function isAdjacent(col1, row1, col2, row2){
    var dx, dy;
    dx = Math.abs(col1 - col2);
    dy = Math.abs(row1 - row2);
    return (dx + dy === 1);
  }

  function AnyOfTheChangedGemsHasAChainGreatherThan(col1, row1, col2, row2, minSizeOfChain){
    return getQtyOfJewelsFromTheLongestNeighbordChain(col1, row1) > minSizeOfChain || getQtyOfJewelsFromTheLongestNeighbordChain(col2, row2) > minSizeOfChain;
  }

  function swapJewels(col1, row1, col2, row2){
    jewelType1 = getJewel(col1, row1);
    jewelType2 = getJewel(col2, row2);

    jewels[col1][row1] = jewelType2;
    jewels[col2][row2] = jewelType1;
  }

  return{
    /* exposed function go here */
    initialize : initialize,
    print : print,
    canSwap: canSwap
  };

})();