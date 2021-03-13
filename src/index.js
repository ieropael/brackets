module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  for (i = 0; i < bracketsConfig.length; i++) {
    brackets.push(bracketsConfig[i].join(''));
  }
  for (i = 0; i <= brackets.length; i++) {
    for (item of brackets) {
      while (str.includes(item)) {
        str = str.replace(item, '');
      }
    }
  }
  return str.length == 0 ? true : false;
}
