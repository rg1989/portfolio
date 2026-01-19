import { isValidEmail } from '../check-email.js';

describe('Email Validation', () => {
  it('should return true for valid email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('test.name@example.co.uk')).toBe(true);
  });

  it('should return false for invalid email addresses', () => {
    expect(isValidEmail('test@')).toBe(false);
    expect(isValidEmail('test@example')).toBe(false);
    expect(isValidEmail('test@.com')).toBe(false);
    expect(isValidEmail('test')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('test@example.')).toBe(false);
  });

  it('should return false for empty strings', () => {
    expect(isValidEmail('')).toBe(false);
  });

  it('should return false for null and undefined', () => {
    expect(isValidEmail(null)).toBe(false);
    expect(isValidEmail(undefined)).toBe(false);
  });
});
