module.exports = {
  // 不建议自动mock 可以手动mock 后面会有讲
  automock: false,
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // A list of paths to directories that Jest should use to search for files in
  // https://jestjs.io/docs/configuration#roots-arraystring
  roots: ['<rootDir>/src/'],

  // 测试覆盖率
  collectCoverage: true,

  // 测试覆盖率收集来源
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx', '!**/node_modules/**'],

  // 测试覆盖率生成的目录文件
  coverageDirectory: '<rootDir>/coverage/',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'babel',
  // babel不支持的一些文件 例如图片 css/scss 模块的映射
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
      '<rootDir>/__mocks__/fileMock.js', // 新建__mocks__/fileMock.js
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy' //className查找都会原样返回 要安装identity-obj-proxy
  },

  // Use this configuration option to add custom reporters to Jest
  // reporters: [
  //   'default',
  //   [
  //     'jest-sonar',
  //     {
  //       outputDirectory: './coverage', // 在这个文件夹下面
  //       outputName: 'test-report.xml', // 最后生成文件名字
  //       reportedFilePath: 'relative' // 相对路径
  //     }
  //   ]
  // ],
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom', // js测试环境  要安装 jest-environment-jsdom

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest']
  },
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],

  // 转换器要忽略的路径
  transformIgnorePatterns: ['[/\\\\]node_modules/(?!(antd)/)[/\\\\].+\\.(js|jsx|ts|tsx)$'],
  verbose: true
}
