import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button } from 'antd';

const inputCompGetter = (id) => {
  return (
    <React.StrictMode>
      <div style={{
        width: "90%",
        border: "solid",
        borderColor: "green",
        margin: "1%",
        padding: "1%",
      }}>
        <div>
          plugin[{id}] compLib2-input
        </div>
        <div>
          <Button onClick={()=>{alert("clicked!")}}>alert</Button>
        </div>
      </div>
    </React.StrictMode>
  );
};

const selectCompGetter = (id) => {
  return (
    <React.StrictMode>
      <div style={{
        width: "90%",
        border: "solid",
        borderColor: "green",
        margin: "1%",
        padding: "1%",
      }}>
        <div>
          plugin[{id}] compLib2-select
        </div>
        <div>
          <Button onClick={()=>{alert("clicked!")}}>alert</Button>
        </div>
      </div>
    </React.StrictMode>
  );
};

function renderToElements(compGetter, elements) {
  for (var i = 0; i < elements.length; i++) {
    const element = elements[i];
    const myAttr = element.getAttribute('myAttr')
    console.log('i=',i);
    ReactDOM.render(compGetter(myAttr), element);
  }
}

// renderToElements(inputComp, document.getElementsByClassName("compLib2-input"));
// renderToElements(selectComp, document.getElementsByClassName("compLib2-select"));

window.renderCompsFromCompLib2 = function() {
  console.log('compLib2 render');
  renderToElements(inputCompGetter, document.getElementsByClassName("compLib2-input"));
  renderToElements(selectCompGetter, document.getElementsByClassName("compLib2-select"));
}

