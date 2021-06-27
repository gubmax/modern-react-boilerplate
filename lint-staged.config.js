module.exports = {
  '(src|server)/**/*.ts?(x)': [
    'npm run typecheck',
    'npm run lint -- --fix'
  ]
}
