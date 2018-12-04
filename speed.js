//how to speed up web development? just use speed.js and speed.js dom

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
