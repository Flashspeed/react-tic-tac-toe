import React from "react";
import ReactDOM from "react-dom";
import { Game } from "./components/Game";
import "./styles.css";

console.log("Working");

const render = ()=> ReactDOM.render(<Game/>, document.getElementById('root'));
render();

if(module.hot)
{
    module.hot.accept(["./components/Game.js"], ()=>{
        render();
    });
}