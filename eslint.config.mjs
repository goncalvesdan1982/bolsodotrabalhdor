import pluginNext from '@next/eslint-plugin-next'

const eslintConfig = [
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs['core-web-vitals'].rules,
      'react/no-unescaped-entities': 'off',
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
]

export default eslintConfig
