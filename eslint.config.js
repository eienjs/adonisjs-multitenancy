import eienjs from '@eienjs/eslint-config';

export default eienjs({
  adonisjs: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
    erasableSyntaxOnly: true,
  },
});
