module.exports = {
  'packages/**/*.ts?(x)': [
    () => 'npm run typecheck',
    'npm run lint',
  ]
}
