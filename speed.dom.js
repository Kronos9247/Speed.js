//how to speed up web development? just use speed.js and speed.js dom

if (!Speed)
{
  Speed = {};
}

const DOM = {};
DOM.init = function (component, props) {
  let object = new component(props);

  return object;
}

DOM.append = function (element, parent) {
  if(parent) {
    $(parent).append($(element));
  }
  else {
    $(element).insertAfter($(document.currentScript));
  }
}

DOM.render = function (component, props) {
  let object = DOM.init(component, props);
  DOM.append(object.render());
}


//$$ = DOM;
Speed['DOM'] = DOM;
