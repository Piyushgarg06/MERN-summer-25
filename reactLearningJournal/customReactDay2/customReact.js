const element = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  text: "click me to visit google.com",
};
const renderElement = (element, container) => {
  const reactElement = document.createElement(element.type);
  reactElement.innerHTML = element.text;
  for (const prop in element.props) {
    if (prop === "children") continue;
    reactElement.setAttribute(prop, element.props[prop]);
  }
  container.appendChild(reactElement);
};
const root = document.querySelector("#root");
renderElement(element, root);
