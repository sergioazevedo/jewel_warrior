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

  function bind(element, event, handler){
    if (typeof element == "string"){
      element = $(element)[0];
    }
    element.addEventListener(event, handler, false);
  }

  return{
    $ : $,
    hasClass : hasClass,
    addClass : addClass,
    removeClass : removeClass,
    bind : bind
  };

})();