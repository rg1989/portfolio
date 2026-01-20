import { sanitizeData } from '../utils/sanitizer';

describe('Sanitizer', () => {
  it('should escape HTML characters in string properties', () => {
    const data = {
      name: '<script>alert("xss")</script>',
      email: 'test@example.com',
      message: 'Hello > world',
    };
    const sanitized = sanitizeData(data);
    expect(sanitized.name).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
    expect(sanitized.email).toBe('test@example.com');
    expect(sanitized.message).toBe('Hello &gt; world');
  });

  it('should not modify non-string properties', () => {
    const data = {
      age: 25,
      isAdmin: false,
    };
    const sanitized = sanitizeData(data);
    expect(sanitized.age).toBe(25);
    expect(sanitized.isAdmin).toBe(false);
  });

  it('should handle an empty object', () => {
    const data = {};
    const sanitized = sanitizeData(data);
    expect(sanitized).toEqual({});
  });

  it('should handle an object with a null property', () => {
    const data = { name: null };
    const sanitized = sanitizeData(data);
    expect(sanitized.name).toBeNull();
  });
});
