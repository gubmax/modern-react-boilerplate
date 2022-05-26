export const CONFIG_ENV = {
  isTestEnv: process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD,
  isProdEnv: process.env.NODE_ENV === 'production',
  logLevel: process.env.LOG_LEVEL ?? 'info',
  port: (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000,
  host: process.env.HOST ?? 'http://localhost:3000',
}
