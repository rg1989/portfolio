// utils/sanitizer.test.js
import { sanitize } from './sanitizer';

describe('sanitize', () => {
  it('should escape HTML special characters', () => {
    const input = '<script>alert("xss")</script>';
    const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;';
    expect(sanitize(input)).toBe(expected);
  });

  it('should handle an empty string', () => {
    const input = '';
    const expected = '';
    expect(sanitize(input)).toBe(expected);
  });

  it('should not modify a string with no special characters', () => {
    const input = 'This is a clean string.';
    const expected = 'This is a clean string.';
    expect(sanitize(input)).toBe(expected);
  });

  it('should handle a string with all special characters', () => {
    const input = '&<>"\'/';
    const expected = '&amp;&lt;&gt;&quot;&#x27;&#x2F;';
    expect(sanitize(input)).toBe(expected);
  });
});
