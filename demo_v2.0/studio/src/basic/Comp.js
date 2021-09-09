import React, { Component, useContext } from 'react';
import { PageVo, CompVo } from './vo';
import { AppContext, PageContext } from './context';
import style from './style';

export default class Comp extends Component {
  constructor(props) {
    super(props);
    const { vo } = props;
    this.id = vo.id;
    this.state = {
      comps: vo.comps,
    };
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
  render() {
    return (
      <div style={{...style, borderColor: "purple"}}>
        <div>
            {this.id}
        </div>
        <button onClick={this.addComp}>addComp</button>
        <div>
          {this.renderComps()}
        </div>
      </div>
    );
  }
}
