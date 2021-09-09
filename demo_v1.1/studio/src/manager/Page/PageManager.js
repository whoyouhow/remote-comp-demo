import React, { Component, useContext } from 'react';
import { PageVo, CompVo } from '../vo';
import { AppContext, PageContext } from '../context';
import Comp from '../Comp';
import style from '../style';

export default class PageManager extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    const { vo } = props;
    this.id = vo.id;
    this.state = {
      count: 0,
      comps: vo.comps,
      plugins: [],
    };
  }
  addOne = () => {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }
  // setCount = (newCount) => {
  //   this.setState({ count: newCount });
  // }
  addComp = () => {
    const newComps = [];
    this.state.comps.forEach((comp) => {
      newComps.push(comp);
    })
    const id = `${this.id}.comp${this.state.comps.length + 1}`;
    newComps.push(new CompVo(id, []));

    this.setState({ comps: newComps });
  }
  addPlugin = (type) => {
    const newPlugins = [];
    this.state.plugins.forEach((plugin) => {
      newPlugins.push(plugin);
    })
    newPlugins.push({ type });
    this.setState({ plugins: newPlugins });
  }
  render() {
    return (
      <PageContext.Provider value={{
        pageId: this.id,
        count: this.state.count,
        comps: this.state.comps,
        plugins: this.state.plugins,
        addOne: this.addOne,
        addComp: this.addComp,
        addPlugin: this.addPlugin,
      }}>
        {this.props.children}
      </PageContext.Provider>
    );
  }
}
