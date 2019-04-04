module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'UMD',
      externals: {
        react: 'React'
      }
    }
  }
}
