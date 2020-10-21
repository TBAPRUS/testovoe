export const $qs = (selector, scope) => {
  return (scope || document).querySelector(selector);
};

export const $on = (target, type, callback) => {
  target.addEventListener(type, callback);
};