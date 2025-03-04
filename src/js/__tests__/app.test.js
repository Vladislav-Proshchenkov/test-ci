import { getHealthStatus } from '../app.js';

describe('getHealthStatus', () => {
  test('should return "healthy" if health is more than 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(getHealthStatus(character)).toBe('healthy');
  });

  test('should return "wounded" if health is between 15 and 50', () => {
    const character = { name: 'Маг', health: 30 };
    expect(getHealthStatus(character)).toBe('wounded');
  });

  test('should return "critical" if health is less than 15', () => {
    const character = { name: 'Маг', health: 10 };
    expect(getHealthStatus(character)).toBe('critical');
  });

  test('should return "wounded" if health is exactly 50', () => {
    const character = { name: 'Маг', health: 50 };
    expect(getHealthStatus(character)).toBe('wounded');
  });

  test('should return "wounded" if health is exactly 15', () => {
    const character = { name: 'Маг', health: 15 };
    expect(getHealthStatus(character)).toBe('wounded');
  });
});