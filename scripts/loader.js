var jewel = {
  screens : {}
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

  if(Modernizr.standalone){
    Modernizr.load([
    {
      load : ["scripts/screen.main-menu.js"]
    }
    ]);
  }
}, false);