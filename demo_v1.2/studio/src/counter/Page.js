import React, { Component, useContext } from 'react';
import { PageVo, CompVo } from './vo';
import { AppContext, PageContext } from './context';
import Comp from './Comp';
import style from './style';

export default class Page extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    const { vo } = props;
    this.id = vo.id;
    this.state = {
      comps: vo.comps,
      count: 0,
      privateCount: 0,
    };
  }
  addOne = () => {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }
  // setCount = (newCount) => {
  //   this.setState({ count: newCount });
  // }
  privateAddOne = () => {
    const newCount = this.state.privateCount + 1;
    this.setState({ privateCount: newCount });
  }
  addComp = () => {
    const newComps = [];
    this.state.comps.forEach((comp) => {
      newComps.push(comp);
    })
    const id = `${this.id}.comp${this.state.comps.length + 1}`;
    newComps.push(new CompVo(id, []));

    this.setState({ comps: newComps });
  }
  renderComps = () => {
    if (!this.state.comps || this.state.comps.length === 0) {
      return null;
    }
    return this.state.comps.map(comp => {
      return (
        <Comp vo={comp} key={comp.id}/>
      );
    });
  }
  componentDidMount() {
    console.log("page props", this.props, this.context);
  }
  render() {
    return (
      <div style={{...style, borderColor: "blue"}}>
        <div>
          {this.id}
        </div>
        <div>
          {`app count = ${this.context.count}`}
        </div>
        <div>
          {`page count = ${this.state.count}`}
        </div>
        <div>
          {`private count = ${this.state.privateCount}`}
        </div>
        <div><button onClick={this.addComp}>addComp</button></div>
        <div><button onClick={this.addOne}>page+1</button></div>
        <div><button onClick={this.context.addOne}>app+1</button></div>
        <div><button onClick={this.privateAddOne}>private +1</button></div>
        <div>
          <PageContext.Provider value={{
            count: this.state.count,
            // setCount: this.setCount,
            addOne: this.addOne,
          }}>
            {this.renderComps()}
          </PageContext.Provider>
        </div>
      </div>
    );
  }
}
