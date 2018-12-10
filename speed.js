const Speed = {};
if (!Speed)
{
  Speed = {};
}

class Component {
  constructor(props) {
    this.props = props;
  }

  render() {
    return $('<div></div>');
  }

  stringify() {
    return $(this.render()).prop("outerHTML");
  }
}
Speed['Component'] = Component;
