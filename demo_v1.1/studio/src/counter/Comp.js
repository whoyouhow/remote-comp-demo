import React, { Component, useContext, useState } from 'react';
import { PageVo, CompVo } from './vo';
import { AppContext, PageContext } from './context';
import Comp from './Comp';
import style from './style';

export default React.memo((props) => {
  const { vo } = props;
  const [comps, setComps] = useState(vo.comps);
  const pageContext = useContext(PageContext);
  const appContext = useContext(AppContext);

  const addComp = () => {
    const newComps = [];
    comps.forEach((comp) => {
      newComps.push(comp);
    });
    const id = `${vo.id}.comp${comps.length + 1}`;
    newComps.push(new CompVo(id, []));

    setComps(newComps);
  }

  const renderComps = () => {
    if (!comps || comps.length === 0) {
      return null;
    }
    return comps.map(comp => {
      return (
        <Comp vo={comp} key={comp.id}/>
      );
    });
  }

  return (
    <div style={{...style, borderColor: "purple"}}>
      <div>
        {vo.id}
      </div>
      <div>
        {`app count = ${appContext.count}`}
      </div>
      <div>
        {`page count = ${pageContext.count}`}
      </div>
      <div><button onClick={addComp}>addComp</button></div>
      <div><button onClick={pageContext.addOne}>page+1</button></div>
      <div><button onClick={appContext.addOne}>app+1</button></div>
      {/* <div><button onClick={()=>{pageContext.setCount(pageContext.count+1)}}>+1</button></div> */}
      <div>
        {renderComps()}
      </div>
    </div>
  );
});
