module.exports = {
  template: 'banquet-child-spa',
  version: '1',
  cssScope: 'crdis',
  storybook: {
    stories: [
      'src/**/*.story.@(js|jsx|ts|tsx|mdx)',
      'packages/**/*.story.@(js|jsx|ts|tsx|mdx)'
    ]
  }
}
