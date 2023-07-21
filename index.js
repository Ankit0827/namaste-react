import React from "react";
import  ReactDOM  from "react-dom/client";


const heading=React.createElement("h1",{id:"heading"},"React wihtout jsx");

const HeadingComponent=()=>
      (
        <>
        <h1>
            React with function component
        </h1>
        <h1>Hello Namaste React</h1>
        </>
      )


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);

