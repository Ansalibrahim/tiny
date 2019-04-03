module.exports = function tiny(string) {
  if (!string) throw new TypeError("Tiny wants a string!");
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};
