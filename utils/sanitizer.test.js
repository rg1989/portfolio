import sanitize from './sanitizer';

describe('sanitize', () => {
  it('should replace < and > with HTML entities', () => {
    const input = '<script>alert("xss")</script>';
    const expected = '&lt;script&gt;alert("xss")&lt;/script&gt;';
    expect(sanitize(input)).toBe(expected);
  });

  it('should handle empty strings', () => {
    const input = '';
    const expected = '';
    expect(sanitize(input)).toBe(expected);
  });

  it('should handle strings with no special characters', () => {
    const input = 'Hello, world!';
    const expected = 'Hello, world!';
    expect(sanitize(input)).toBe(expected);
  });

  it('should handle non-string inputs', () => {
    expect(sanitize(null)).toBe('');
    expect(sanitize(undefined)).toBe('');
    expect(sanitize(123)).toBe('');
    expect(sanitize({})).toBe('');
    expect(sanitize([])).toBe('');
  });
});
