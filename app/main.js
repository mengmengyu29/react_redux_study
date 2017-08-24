import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer.js";

//创建store
const store = createStore(reducer);

ReactDOM.render(
	//Provider使Redux的store在所有下辖的组件中可以通过connect函数调用来获得它
	<Provider store={store}>
		<App></App>
	</Provider>
	,
	document.getElementById("root")
);