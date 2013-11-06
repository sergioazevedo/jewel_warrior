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

  function fillBoard(){
    var x, y, type;
    jewels = [];
    for( x = 0; x < cols; x++){
      jewels[x] = [];
      for ( y = 0; y < rows; y++){
        type = randomJewel();
        while( (type === getJewel(x-1, y)) &&
               (type === getJewel(x-2, y)) ||
               (type === getJewel(x, y-1)) &&
               (type === getJewel(x, y-2)) ){
            type = randomJewel();
        }
        jewels[x][y] = type;
      }
    }
    console.log(jewels);
  }

  function getJewel(x, y){
    if (x < 0 || x > cols-1 || y < 0 || y > rows+1 ){
      return -1;
    } else {
      return jewels[x][y];
    }
  }

  function randomJewel(){
    return Math.floor(Math.random() * numJewelTypes);
  }

  function print(){
    var str = "";
    for( var y=0; y < rows; y++){
      for (var x=0; x < cols; x++){
        str += getJewel(x, y) + " ";
      }
      str += "\r\n";
    }
    console.log(str);
  }


  //return the number jewels in the longest chain that includes (x,y)
  function chekcChain(x, y){
    var type = getJewel(x,y);
    var left = 0, right = 0, down = 0, up =0;

    //look right
    while ( type === getJewel(x + right + 1, y) ){
      right++
    }

    //look left
    while ( type === getJewel(x - left - 1, y) ){
      left++
    }

    //look up
    while ( type === getJewel(x, y + up + 1) ){
      up++
    }

    //look down
    while ( type === getJewel(x, y - up - 1) ){
      down++
    }

    return Math.max(left + 1 + right, up + 1 + down);
  }

  function isAdjacent(x1, y1, x2, y2){
    var dx = Math.abs(x1 - x2);
        dy = Math.abs(y1 - y2);

    return (dx + dy === 1);
  }

  function canSwap(x1, y1, x2, y2){
    var type1 = getJewel(x1, y1),
        type2 = getJewel(x2, y2),
        _canSwap;

    if( !isAdjacent(x1, y1, x2, y2) ){
      return false;
    }
    //temporarily swap
    jewels[x1][y1] = type2;
    jewels[x2][y2] = type1;

    _canSwap = (chekcChain(x2, y2) > 2 || checkChain(x1, y1) > 2);

    //swap back
    jewels[x1][y1] = type1;
    jewels[x2][y2] = type2;

    return _canSwap;

  }


  return{
    /* exposed function go here */
    initialize : initialize,
    print : print,
    canSwap : canSwap
  };

})();