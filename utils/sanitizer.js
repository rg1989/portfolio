import DOMPurify from 'isomorphic-dompurify';

export const sanitize = (dirty) => {
  return DOMPurify.sanitize(dirty);
};
