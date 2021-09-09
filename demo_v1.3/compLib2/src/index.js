import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button } from 'antd';

const inputComp = (
  <React.StrictMode>
    <div style={{
      width: "90%",
      border: "solid",
      borderColor: "red",
      margin: "1%",
      padding: "1%",
    }}>
      <div>
        compLib2-input
      </div>
      <div>
        <Button onClick={()=>{alert("clicked!")}}>alert</Button>
      </div>
    </div>
  </React.StrictMode>
);

const selectComp = (
  <React.StrictMode>
    <div style={{
      width: "90%",
      border: "solid",
      borderColor: "red",
      margin: "1%",
      padding: "1%",
    }}>
      <div>
        compLib2-select
      </div>
      <div>
        <Button onClick={()=>{alert("clicked!")}}>alert</Button>
      </div>
    </div>
  </React.StrictMode>
);

function renderToElements(toRender, elements) {
  console.log('compLib2 class render', toRender);
  for (var i = 0; i < elements.length; i++) {
    console.log('i=',i);
    ReactDOM.render(toRender, elements[i]);
  }
}

// renderToElements(inputComp, document.getElementsByClassName("compLib2-input"));
// renderToElements(selectComp, document.getElementsByClassName("compLib2-select"));

window.renderCompsFromCompLib2 = function() {
  console.log('compLib2 render');
  renderToElements(inputComp, document.getElementsByClassName("compLib2-input"));
  renderToElements(selectComp, document.getElementsByClassName("compLib2-select"));
}

