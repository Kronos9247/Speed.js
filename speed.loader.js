if (Speed)
{
  var transformAttr = function (element) {
    let attrib = element[0];
    let attr = {};

    if (attrib) {
      attrib = Array.from(attrib.attributes);

      for(index in attrib) {
        let attribute = attrib[index];

        if(attribute) {
          if(attribute.name != "type") attr[attribute.name] = attribute.value;
        }
      }
    }

    return attr;
  }

  Speed.prepare = function (element, type) {
    let component = eval(`${type};`); //need to be changed later

    if (component) {
      let object = Speed.DOM.init(component, transformAttr($(element)));
      $(object.render()).insertAfter(element);

      element.remove();
    }
  };

  var onload = function (node) {
    if(node.find) {
      let components = node.find("component");

      if (components) {
        components.each(function (index, ele) {
          if (ele) {
            let element = $(ele);
            let type = element.attr('type');

            if (type) {
              Speed.prepare(element, type);
            }
          }
        });
      }
    }
  }

  $(document).ready(function () {
    let script = $(document.currentScript);
    let target = script.attr('target');

    if (target) {
      let elements = $(target);

      if(Array.isArray(elements)) {
        onload(elements[0]);
      }
      else {
        onload(elements);
      }
    }
    else {
      //console.log("hi");
      onload($(document.body));
    }
  });
}
