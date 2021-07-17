module.exports = {
  '(src|server)/**/*.ts?(x)': [
    () => 'tsc -p tsconfig.json --noEmit',
    'npm run lint -- --fix',
  ]
}
