function isDevelopment(environment: string): boolean {
  return environment === 'development';
}

function isProduction(environment: string): boolean {
  return environment === 'production';
}

export { isDevelopment, isProduction };
