import { isDevelopment, isProduction } from '../environment';

describe('isDevelopment', () => {
  it('should check if environment is `development`', () => {
    expect.assertions(2);

    expect(isDevelopment('development')).toStrictEqual(true);
    expect(isDevelopment('production')).toStrictEqual(false);
  });
});

describe('isProduction', () => {
  it('should check if environment is `production`', () => {
    expect.assertions(2);

    expect(isProduction('production')).toStrictEqual(true);
    expect(isProduction('development')).toStrictEqual(false);
  });
});
