import { App } from 'vue';
// 引入组件
import { component, yButton } from './Button';
// 存放组件的数组
const components = [component];

export default {
  // 定义 install 方法，接收 Vue 作为参数。
  install: (app: App): void => {
    // 遍历 components 数组，来进行全局注册
    components.forEach(component => {
      app.component(component.name, component);
    });
  },
};

export { yButton };
