
import sanitize from './sanitizer';

describe('Sanitizer', () => {
  it('should escape HTML special characters', () => {
    const input = '<script>alert("xss")</script>';
    const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;';
    expect(sanitize(input)).toBe(expected);
  });

  it('should handle empty strings', () => {
    const input = '';
    const expected = '';
    expect(sanitize(input)).toBe(expected);
  });

  it('should handle strings with no special characters', () => {
    const input = 'This is a clean string.';
    const expected = 'This is a clean string.';
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
