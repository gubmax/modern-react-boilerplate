module.exports = {
  '(src|server|shared|scripts)/**/*.ts?(x)': [
    () => 'tsc -p tsconfig.json --noEmit',
    'npm run lint -- --fix',
  ]
}
