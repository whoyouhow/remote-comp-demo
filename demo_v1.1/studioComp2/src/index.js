import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button } from 'antd';
// import Basic from './basic';
// import Counter from './counter';
// import Manager from './manager';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <div style={{
//       width: "90%",
//       border: "solid",
//       borderColor: "red",
//       margin: "3%",
//       padding: "1%",
//     }}>
//       <div>
//         studioComp
//       </div>
//       <div>
//         <Button onClick={()=>{alert("clicked!")}}>alert</Button>
//       </div>
//     </div>
//   </React.StrictMode>,
//   document.getElementsByClassName('studioComp')
// );

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
        studioComp2-input
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
        studioComp2-select
      </div>
      <div>
        <Button onClick={()=>{alert("clicked!")}}>alert</Button>
      </div>
    </div>
  </React.StrictMode>
);

function renderToElements(toRender, elements) {
  console.log('studioComp2 class render', toRender);
  for (var i = 0; i < elements.length; i++) {
    console.log('i=',i);
    ReactDOM.render(toRender, elements[i]);
  }
}

console.log('studioComp2 render');
renderToElements(inputComp, document.getElementsByClassName("studioComp2-input"));
renderToElements(selectComp, document.getElementsByClassName("studioComp2-select"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
