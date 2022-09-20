module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'selector-class-pattern': null, // 设置类名选择器不遵循 kebab-case
    'block-no-empty': true,
    'comment-empty-line-before': [
      'always',
      {
        ignore: ['stylelint-commands', 'after-comment']
      }
    ],
    indentation: [2],
    'max-empty-lines': 2
  }
}
