module.exports = {
  '(src|server|shared)/**/*.ts?(x)': [
    () => 'tsc -p tsconfig.json --noEmit',
    'npm run lint -- --fix',
  ]
}
