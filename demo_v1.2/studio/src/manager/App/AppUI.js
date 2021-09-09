import React, { Component, useContext } from 'react';
import { PageVo } from '../vo';
import { AppContext, PageContext } from '../context';
import Page from '../Page';
import style from '../style';

export default class AppUI extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      privateCount: 0,
    };
  }
  privateAddOne = () => {
    const newCount = this.state.privateCount + 1;
    this.setState({ privateCount: newCount });
  }
  renderPages = () => {
    console.warn('pages', this.context.pages)
    return this.context.pages.map(page => {
      return (
        <Page vo={page} key={page.id}/>
      );
    });
  }
  render() {
    return (
      <>
        <div>
          app
        </div>
        {/* <div>
          {`app count = ${this.context.count}`}
        </div>
        <div>
          {`AppUI private count = ${this.state.privateCount}`}
        </div> */}
        <div>
          <button onClick={this.context.addPage}>addPage</button>
          {/* <div><button onClick={this.context.addOne}>+1</button></div>
          <div><button onClick={this.state.privateAddOne}>private +1</button></div>
          <div>
            <button onClick={()=>{console.log(this.context.pages);}}>打印状态</button>
          </div> */}
        </div>
        {this.renderPages()}
      </>
    );
  }
}
