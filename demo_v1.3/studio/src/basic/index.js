import React from 'react';
import App from './App';

export default class Basic extends React.Component {
  render() {
    return (
      <div>
        <div>
          基础版样子货，通过父子vo结构来渲染出组件树，因为没有跨层传递，vo并不是树形。
        </div>
        <App />
      </div>
    );
  }
}

