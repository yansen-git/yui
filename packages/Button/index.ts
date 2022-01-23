import { App } from 'vue';
// 引入组件
import Button from './src/index.vue';

// 暴露组件
export const component = Button;

export const yButton = {
  // 提供 install 安装方法，供按需引入
  install: (app: App): void => {
    // 注册组件
    app.component(Button.name, Button);
  },
};
