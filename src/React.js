export default {
  createElement: (type, props, ...children) => {
    return { type, props, children };
  }
};

export const useState = (initialValue) => {
  let value;
  const setValue = (newValue) => {
    if (typeof newValue === "function") {
      return newValue();
    } else value = newValue;
  };
  return [value, setValue];
};
