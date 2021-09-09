import React, { Component, useContext, useEffect } from 'react';
import { Button } from 'antd';
import { PageVo } from '../vo';
import { AppContext, PageContext } from '../context';
import Page from '../Page';
import style from '../style';
import AppManager from './AppManager';
import AppUI from './AppUI';
import { useScript } from '../plugin';

// const useScript = url => {
//   useEffect(() => {
//     const script = document.createElement('script');

//     script.src = url;
//     script.async = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     }
//   }, [url]);
// };



const ScriptUser = () => {
  useScript();
  return <div>[script user]</div>
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      flag: false
    }
  }
  render() {
    return (
      <div style={{...style, margin: "1%"}}>
        {/* <div style={{
          width: "90%",
          border: "solid",
          borderColor: "yellow",
          margin: "1%",
          padding: "1%",
        }}>
          <div className="studioComp1-button" />
          <div className="studioComp1-table" />
          <div className="studioComp2-input" />
          <div className="studioComp2-select" />
        </div> */}
        <Button onClick={()=>{
          console.log('document', document);
        }}>
          print document
        </Button>
        <Button onClick={()=>{
          this.setState({ flag: true });
          setTimeout(() => {
            this.setState({ flag: false });
          }, 0);
        }}>
          useScript
        </Button>
        {this.state.flag && <ScriptUser />}
        <hr />
        <AppManager {...this.props}>
          <AppUI />
        </AppManager>
      </div>
    );
  }
}
