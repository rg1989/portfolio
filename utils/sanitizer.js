
// Basic HTML sanitizer to prevent XSS
const sanitize = (text) => {
  if (typeof text !== 'string') {
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
  return text.replace(reg, (match)=>(map[match]));
};

export default sanitize;
