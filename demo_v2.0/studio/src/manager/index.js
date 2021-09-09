import React from 'react';
import App from './App';

export default class Basic extends React.Component {
  render() {
    return (
      <div>
        <div>
          加载远程组件的demo，现在执行script使用按钮触发，应该可以封装成函数
        </div>
        <div>
          黄色边框内的部分为远程组件
        </div>
        <App />
      </div>
    );
  }
}

