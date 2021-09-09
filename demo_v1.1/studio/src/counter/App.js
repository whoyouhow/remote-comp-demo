import React, { Component, useContext } from 'react';
import { PageVo } from './vo';
import { AppContext, PageContext } from './context';
import Page from './Page';
import style from './style';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      count: 0,
      privateCount: 0,
    };
  }
  addOne = () => {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }
  privateAddOne = () => {
    const newCount = this.state.privateCount + 1;
    this.setState({ privateCount: newCount });
  }
  addPage = () => {
    const newPages = [];
    this.state.pages.forEach((page) => {
      newPages.push(page);
    })
    const id = `page${this.state.pages.length + 1}`;
    newPages.push(new PageVo(id, []));

    this.setState({ pages: newPages });
  }
  renderPages = () => {
    return this.state.pages.map(page => {
      return (
        <Page vo={page} key={page.id}/>
      );
    });
  }
  render() {
    return (
      <div style={{...style, margin: "1%"}}>
        <div>
          app
        </div>
        <div>
          {`app count = ${this.state.count}`}
        </div>
        <div>
          {`private count = ${this.state.privateCount}`}
        </div>
        <div>
          <button onClick={this.addPage}>addPage</button>
        <div><button onClick={this.addOne}>+1</button></div>
        <div><button onClick={this.privateAddOne}>private +1</button></div>
        <div>
          <button onClick={()=>{console.log(this.state.pages);}}>打印状态</button>
        </div>
        </div>
        <AppContext.Provider value={{
            count: this.state.count,
            addOne: this.addOne,
          }}>
          {this.renderPages()}
        </AppContext.Provider>
      </div>
    );
  }
}
