jewel.screens['main-menu'] = (function(){
  var dom = jewel.dom,
     game = jewel.game,
     firstRun = true;

  function setup(){
    dom.bind('#main-menu', "click", function(e){
      if( e.target.nodeName.toLowerCase() === "button" ){
        var screenId = e.target.getAttribute("name");
        game.showScreen(screenId);
      }
    });
  }

  function run(){
    if (firstRun){
      setup();
      firstRun = false;
    }
  }

  return {
    run: run
  };

})();