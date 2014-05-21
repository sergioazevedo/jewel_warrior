var jewel = {
  screens  : {},
  settings : {
    rows : 8,
    cols : 8,
    baseScore : 100,
    numJewelTypes : 7
  }
};

window.addEventListener("load", function(){
  Modernizr.addTest("standalone",function(){
    var standalone = window.navigator.standalone;
    return ( standalone !== true);
  });

  //starts the dynamic loading
  Modernizr.load([
  {
    //always load these files
    load : [
      "scripts/sizzle.js",
      "scripts/dom.js",
      "scripts/game.js"
    ]
  },
  //standalone detection
  {
    test : Modernizr.standalone,
    yep  : "scripts/screen.splash.js",
    nope : "scripts/screen.install.js",
    complete : function(){
      if (Modernizr.standalone){
        jewel.game.showScreen("splash-screen");
      }
      else{
        jewel.game.showScreen("install-screen");
      }
    }
  }
  ]);
  //loading stage 2
  if(Modernizr.standalone){
    Modernizr.load([
    {
      load : [
        "scripts/screen.main-menu.js",
        "scripts/board.js"
      ]
    }
    ]);
  }
}, false);