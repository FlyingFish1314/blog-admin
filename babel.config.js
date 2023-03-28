module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          // 引入样式
          return `element-plus/lib/theme-chalk/${name}.css`
        }
      }
    ]
  ]
}
