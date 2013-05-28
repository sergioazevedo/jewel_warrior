jewel.dom = (function(){
  var $ = Sizzle;

  function buildTextBetweenSpacesRegexp(className){
    return new RegExp("(ˆ|\\s)" + className + "(\\s|$)");
  }

  function hasClass(el, className){
    var regex = buildTextBetweenSpacesRegexp(className);
    return regex.test(el.className);
  }

  function addClass(el, className){
    if (!hasClass(el, className)){
      el.className += " " + className;
    }
  }

  function removeClass(el, className){
    var regex = buildTextBetweenSpacesRegexp(className);
    el.className = el.className.replace(regex, " ");
  }

  return{
    $ : $,
    hasClass : hasClass,
    addClass : addClass,
    removeClass : removeClass
  };

})();