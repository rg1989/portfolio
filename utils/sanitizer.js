
// utils/sanitizer.js
const sanitize = (input) => {
  if (typeof input !== 'string') {
    return '';
  }

  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    "/": '&#x2F;',
  };

  const reg = /[&<>"'/]/ig;
  return input.replace(reg, (match) => (map[match]));
};

export default sanitize;
