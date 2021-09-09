import React, { Component, useContext, useEffect } from 'react';
import { Button } from 'antd';
import { PageVo } from '../vo';
import { AppContext, PageContext } from '../context';
import Page from '../Page';
import style from '../style';
import AppManager from './AppManager';
import AppUI from './AppUI';
import { useScript } from '../plugin';

const ScriptUser1 = () => {
  useScript(true);
  return <div>[script user 1]</div>
}

const ScriptUser2 = () => {
  useScript(false);
  return <div>[script user 2]</div>
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      flag1: false,
      flag2: false,
    }
  }

  render() {
    return (
      <div style={{...style, margin: "1%"}}>
        {/* <Button onClick={()=>{
          console.log('document', document);
        }}>
          print document
        </Button>
        <Button onClick={()=>{
          this.setState({ flag1: true });
          setTimeout(() => {
            this.setState({ flag1: false });
          }, 0);
        }}>
          添加script然后删除
        </Button>
        <Button onClick={()=>{
          this.setState({ flag2: true });
        }}>
          添加script
        </Button>
        <Button onClick={()=>{
          callRenderFunction();
        }}>
          callRenderFunction
        </Button> */}
        {/* {this.state.flag1 && <ScriptUser1 />}
        {this.state.flag2 && <ScriptUser2 />} */}
        <ScriptUser1 />
        <hr />
        <AppManager {...this.props}>
          <AppUI />
        </AppManager>
      </div>
    );
  }
}
