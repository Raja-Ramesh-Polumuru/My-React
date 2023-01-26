const ReactDom = {
  render: (element, container) => {
    let child;
    if (typeof element === "string") child = document.createTextNode(element);
    else if (typeof element.type === "function") {
      child = createDomElement(element.type());
    } else {
      child = createDomElement(element);
    }
    if (container) {
      container.appendChild(child);
    }
  }
};

const createDomElement = (element) => {
  const domElement =
    typeof element.type === "string"
      ? document.createElement(element.type)
      : document.createElement("div");
  if (element?.props) {
    setAttributes(element.props, domElement);
  }
  element.children.forEach((child) => ReactDom.render(child, domElement));
  return domElement;
};

const setAttributes = (props, domElement) => {
  Object.keys(props).forEach((propKey) => {
    domElement.setAttribute(propKey, props[propKey]);
  });
};

export default ReactDom;
