
// Basic HTML sanitizer to prevent XSS
const escapeHTML = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      }[tag] || tag)
  );
};

export { escapeHTML };
