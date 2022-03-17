import { isDevelopment, isProduction } from '../environment';

describe('isDevelopment', () => {
  it('should check if environment is `development`', () => {
    expect.assertions(2);

    expect(isDevelopment('development')).toBe(true);
    expect(isDevelopment('production')).toBe(false);
  });
});

describe('isProduction', () => {
  it('should check if environment is `production`', () => {
    expect.assertions(2);

    expect(isProduction('production')).toBe(true);
    expect(isProduction('development')).toBe(false);
  });
});
