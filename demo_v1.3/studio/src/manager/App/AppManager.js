import React, { Component, useContext } from 'react';
import { PageVo } from '../vo';
import { AppContext, PageContext } from '../context';
import Page from '../Page';
import style from '../style';

export default class AppManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      count: 0,
    };
  }

  addOne = () => {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
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
  
  renderPlugins = () => {
    if (window.renderCompsFromCompLib1) {
      console.log("renderCompsFromCompLib1")
      window.renderCompsFromCompLib1();
    }
    if (window.renderCompsFromCompLib2) {
      console.log("renderCompsFromCompLib2")
      window.renderCompsFromCompLib2();
    }
  }

  render() {
    return (
      <AppContext.Provider value={{
          count: this.state.count,
          pages: this.state.pages,
          addOne: this.addOne,
          addPage: this.addPage,
          renderPlugins: this.renderPlugins,
        }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
