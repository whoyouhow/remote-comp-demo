import React from 'react';
import App from './App';

export default class Basic extends React.Component {
  render() {
    return (
      <div>
        <div>
          在basic的基础上加上context，Comp改为函数组件。用context实现跨层控制一个counter。
        </div>
        <App />
      </div>
    );
  }
}

