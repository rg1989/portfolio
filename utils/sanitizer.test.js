import sanitize from './sanitizer';

describe('sanitize', () => {
  it('should return an empty string if input is null or undefined', () => {
    expect(sanitize(null)).toBe('');
    expect(sanitize(undefined)).toBe('');
  });

  it('should escape HTML characters to prevent XSS', () => {
    const maliciousInput = '<script>alert("XSS")</script>';
    const expectedOutput = '&lt;script&gt;alert(&quot;XSS&quot;)&lt;&#x2F;script&gt;';
    expect(sanitize(maliciousInput)).toBe(expectedOutput);
  });

  it('should handle regular strings without modification', () => {
    const regularString = 'This is a normal string.';
    expect(sanitize(regularString)).toBe(regularString);
  });

  it('should escape multiple HTML characters in a string', () => {
    const mixedInput = '<img src="x" onerror="alert(1)">';
    const expectedOutput = '&lt;img src=&quot;x&quot; onerror=&quot;alert(1)&quot;&gt;';
    expect(sanitize(mixedInput)).toBe(expectedOutput);
  });
});
