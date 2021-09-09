import React, { useEffect } from "react";
export function generatePlugin(type) {
    const TYPE_CLASS_MAP = {
      input: "studioComp2-input",
      select: "studioComp2-select",
      button: "studioComp1-button",
      table: "studioComp1-table",
    }
    return (
      <div style={{
        width: "90%",
        border: "solid",
        borderColor: "yellow",
        margin: "1%",
        padding: "1%",
      }}>
        <div className={TYPE_CLASS_MAP[type]} />
      </div>
    );
}

export function useScript() {
    useEffect(() => {
      const script1 = document.createElement('script');
      const script2 = document.createElement('script');
      const script3 = document.createElement('script');
      const script4 = document.createElement('script');
      const script5 = document.createElement('script');
      const script6 = document.createElement('script');
  
      script1.src = "http://localhost:3001/static/js/bundle.js";
      script2.src = "http://localhost:3001/static/js/vendors~main.chunk.js";
      script3.src = "http://localhost:3001/static/js/main.chunk.js";
      script4.src = "http://localhost:3002/static/js/bundle.js";
      script5.src = "http://localhost:3002/static/js/vendors~main.chunk.js";
      script6.src = "http://localhost:3002/static/js/main.chunk.js";
      script1.async = true;
      script2.async = true;
      script3.async = true;
      script4.async = true;
      script5.async = true;
      script6.async = true;
  
      document.body.appendChild(script1);
      document.body.appendChild(script2);
      document.body.appendChild(script3);
      document.body.appendChild(script4);
      document.body.appendChild(script5);
      document.body.appendChild(script6);
      console.log('document',document)
  
      return () => {
        // document.body.removeChild(script1);
        // document.body.removeChild(script2);
        // document.body.removeChild(script3);
        // document.body.removeChild(script4);
        // document.body.removeChild(script5);
        // document.body.removeChild(script6);
      }
    }, []);
  };