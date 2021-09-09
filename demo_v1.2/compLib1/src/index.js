import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button } from 'antd';


const buttonComp = (
  <React.StrictMode>
    <div style={{
      width: "90%",
      border: "solid",
      borderColor: "red",
      margin: "1%",
      padding: "1%",
    }}>
      <div>
        compLib1-button
      </div>
      <div>
        <Button onClick={()=>{alert("clicked!")}}>alert</Button>
      </div>
    </div>
  </React.StrictMode>
);

const tableComp = (
  <React.StrictMode>
    <div style={{
      width: "90%",
      border: "solid",
      borderColor: "red",
      margin: "1%",
      padding: "1%",
    }}>
      <div>
        compLib2-table
      </div>
      <div>
        <Button onClick={()=>{alert("clicked!")}}>alert</Button>
      </div>
    </div>
  </React.StrictMode>
);

function renderToElements(toRender, elements) {
  console.log('compLib1 class render', toRender);
  for (var i = 0; i < elements.length; i++) {
    console.log('i=',i);
    ReactDOM.render(toRender, elements[i]);
  }
}

console.log('compLib1 render');
renderToElements(buttonComp, document.getElementsByClassName("compLib1-button"));
renderToElements(tableComp, document.getElementsByClassName("compLib1-table"));

window.renderCompsFromCompLib1 = function() {
  renderToElements(buttonComp, document.getElementsByClassName("compLib1-button"));
  renderToElements(tableComp, document.getElementsByClassName("compLib1-table"));
}
