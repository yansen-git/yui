module.exports = {
  // 代码的最大长度
  printWidth: 80,
  // 语句的末尾打印分号
  semi: true,
  // 是否使用单引号
  singleQuote: true,
  // 对象属性key字符串和非字符串都可以
  quoteProps: "preserve",
  // 在jsx中使用单引号
  jsxSingleQuote: true,
  // 数组、参数、对象后面尾随逗号
  trailingComma: "es5",
  // 大括号和key或者value之间要有空格
  bracketSpacing: true,
  // 将多行jsx元素的>放在最后一行的末尾
  jsxBracketSameLine: false,
  // 箭头函数参数的括号是否显示--当前为-尽可能省略
  arrowParens: "avoid",
  // 文件顶部书写@prettier或者@formate的多行注释，则刚文件会格式化
  requirePragma: false,
  // 是否允许文件顶部插入@formate格式化标识符
  insertPragma: false,
  // 指定 HTML 文件的全局空白敏感性
  htmlWhitespaceSensitivity: "css",
  // 是否缩进vue文件< script > 和 < style > 标记中的代码
  vueIndentScriptAndStyle: false,
  // 格式化引入的其他文件的内容
  embeddedLanguageFormatting: "auto",
  // 是否格式化标记文件
  proseWrap: "never"
};
