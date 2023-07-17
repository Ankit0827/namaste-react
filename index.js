
const heading=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"heading1"},"I am heading one")
        
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h2",{id:"heading2"},"I am heading two")
    ]),

]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

