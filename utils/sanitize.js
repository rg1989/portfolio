const escape = (str) => {
  if (str === null || str === undefined) {
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
  return str.toString().replace(reg, (match)=>(map[match]));
};

export default escape;
