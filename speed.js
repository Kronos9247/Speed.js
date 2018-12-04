/*
  Copyright (c) 2018 Rafael Orman
  
  This file is a part of "Speed.js" which is licensed under the MIT License.
*/

const Speed = {};
if (!Speed)
{
  Speed = {};
}

class Component {
  render() {
    return $('<div></div>');
  }

  stringify() {
    return $(this.render()).prop("outerHTML");
  }
}
Speed['Component'] = Component;
