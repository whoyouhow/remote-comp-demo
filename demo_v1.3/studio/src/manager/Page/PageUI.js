import React, { Component, useContext, useState, useEffect } from 'react';
import { PageVo, CompVo } from '../vo';
import { AppContext, PageContext } from '../context';
import Comp from '../Comp';
import style from '../style';
import { generatePlugin } from '../plugin';

export default React.memo((props) => {
  const [privateCount, setPrivateCount] = useState(0);

  const {
    count: appCount,
    addOne: appAddOne,
    renderPlugins: renderPluginContents,
  } = useContext(AppContext);

  const {
    pageId,
    count,
    comps,
    plugins,
    addOne,
    addComp,
    addPlugin,
  } = useContext(PageContext);

  const privateAddOne = () => {
    setPrivateCount(count => count + 1);
  };

  const renderComps = () => {
    if (!comps || comps.length === 0) {
      return null;
    }
    return comps.map(comp => {
      return (
        <Comp vo={comp} key={comp.id}/>
      );
    });
  };

  const renderPlugins = () => {
    console.log('plugins', plugins);
    if (!plugins || plugins.length === 0) {
      return null;
    }
    return plugins.map(plugin => generatePlugin(plugin.type));
  };

  useEffect(() => {
    renderPluginContents();
  }, [plugins]);

  return (
    <>
      <div>
        {pageId}
      </div>
      {/* <div>
        {`app count = ${appCount}`}
      </div>
      <div>
        {`page count = ${count}`}
      </div>
      <div>
        {`private count = ${privateCount}`}
      </div> */}
      {/* <div><button onClick={addComp}>addComp</button></div> */}
      <div>
        <button onClick={() => {addPlugin("input")}}>add input</button>
        <button onClick={() => {addPlugin("select")}}>add select</button>
        <button onClick={() => {addPlugin("button")}}>add button</button>
        <button onClick={() => {addPlugin("table")}}>add table</button>
      </div>
      {/* <div><button onClick={addOne}>page+1</button></div>
      <div><button onClick={appAddOne}>app+1</button></div>
      <div><button onClick={privateAddOne}>private +1</button></div> */}
      <div>
        {renderComps()}
        {renderPlugins()}
      </div>
    </>
  );
})
