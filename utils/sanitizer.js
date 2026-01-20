
const escapeHTML = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str.replace(
    /[&<>"']/g,
    (match) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      }[match])
  );
};

export const sanitizeData = (data) => {
  const sanitized = {};
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      if (typeof value === 'string') {
        sanitized[key] = escapeHTML(value);
      } else {
        sanitized[key] = value;
      }
    }
  }
  return sanitized;
};
