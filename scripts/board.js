jewel.board = (function(){
  /* game function go here */
  var settings, jewels, cols, rows, baseScore, numJewelTypes;

  function initialize(callback){
    settings = jewel.settings;
    numJewelTypes = settings.numJewelTypes;
    baseScore = settings.baseScore;
    cols = settings.cols;
    rows = settings.rows;
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

  return{
    /* exposed function go here */
    initialize : initialize,
    print : print
  };

})();