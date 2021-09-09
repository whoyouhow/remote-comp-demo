import React, { Component, useContext } from 'react';
import { PageVo, CompVo } from '../vo';
import { AppContext, PageContext } from '../context';
import Comp from '../Comp';
import style from '../style';
import PageUI from './PageUI';
import PageManager from './PageManager';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div style={{...style, borderColor: "blue"}}>
        <PageManager {...this.props}>
          <PageUI />
        </PageManager>
      </div>
    );
  }
}
