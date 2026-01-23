const sanitize = (input) => {
  if (typeof input !== 'string') {
    return '';
  }
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

export default sanitize;
