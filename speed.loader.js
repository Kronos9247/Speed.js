if (Speed)
{
  class ComponentProperty {
    constructor(attributes) {
      this.attributes = attributes;
    }
  }

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
  Speed.initComponent = function (type, element) {
    let component = type;
    if(component === null) component = element.attr('type');
    if(typeof component === "string") component = eval(`${component};`);

    if(component) {
      return Speed.DOM.init(component, transformAttr($(element)));
    }

    return null;
  }

  Speed.handleChild = function (_child) {
    let child = $(_child);
    if(child.prop('tagName') == "COMPONENT") return Speed.initComponent(null, child);

    return new ComponentProperty(transformAttr($(child)));
  }

  Speed.loadChildren = function (parent) {
    let children = $(parent).children(), childs = [];
    for (var i = 0; i < children.length; i++) {
      let property = Speed.handleChild(children[i]);

      if (property)
        childs[i] = property;
    }

    return childs;
  }

  Speed.prepare = function (element, type) {
    /*let component = eval(`${type};`); //need to be changed later

    if (component) {
      let object = Speed.DOM.init(component, transformAttr($(element)));


      $(object.render()).insertAfter(element);
      element.remove();
    }*/
    let component = Speed.initComponent(type, $(element));
    if (component) {
      let childs = Speed.loadChildren($(element));
      if (childs.length > 0) component.props.children = childs;
      
      $(component.render()).insertAfter(element);
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
