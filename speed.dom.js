/*
  Copyright (c) 2018 Rafael Orman
  
  This file is a part of "Speed.js" which is licensed under the MIT License.
*/

if (!Speed)
{
  Speed = {};
}

const DOM = {};
DOM.init = function (component, props) {
  let object = new component();
  object.props = props;

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
