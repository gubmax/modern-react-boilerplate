export const CONFIG_ENV = {
  isTestEnv: process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD,
  isProdEnv: process.env.NODE_ENV === 'production',
  logLevel: process.env.LOG_LEVEL || 'trace',
  port: parseInt(process.env.PORT, 10) || 3000,
}
