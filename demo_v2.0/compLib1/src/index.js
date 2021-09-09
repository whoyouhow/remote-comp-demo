import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button } from 'antd';


const buttonCompGetter = (id) => {
  return (
    <React.StrictMode>
      <div style={{
        width: "90%",
        border: "solid",
        borderColor: "red",
        margin: "1%",
        padding: "1%",
      }}>
        <div>
          plugin[{id}] compLib1-button
        </div>
        <div>
          <Button onClick={()=>{alert("clicked!")}}>alert</Button>
        </div>
      </div>
    </React.StrictMode>
  );
};

const tableCompGetter = (id) => {
  return (
    <React.StrictMode>
      <div style={{
        width: "90%",
        border: "solid",
        borderColor: "red",
        margin: "1%",
        padding: "1%",
      }}>
        <div>
          plugin[{id}] compLib1-table
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
    console.log('i=',i, ' element=',element,element.getAttribute('myAttr'));
    ReactDOM.render(compGetter(myAttr), elements[i]);
  }
}

// renderToElements(buttonComp, document.getElementsByClassName("compLib1-button"));
// renderToElements(tableComp, document.getElementsByClassName("compLib1-table"));

window.renderCompsFromCompLib1 = function() {
  console.log('compLib1 render');
  renderToElements(buttonCompGetter, document.getElementsByClassName("compLib1-button"));
  renderToElements(tableCompGetter, document.getElementsByClassName("compLib1-table"));
}
