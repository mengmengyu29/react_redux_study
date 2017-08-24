import React , { Component } from "react";
import { connect } from "react-redux";

class App extends Component{
	//构造器
	constructor({a , b , add , minus}){
		super();
	}

	//渲染
	render(){
		return <div>
			<h1>a的值是 : {this.props.a}</h1>
			<button onClick={()=>{this.props.add()}}>让a加1</button>
			<button onClick={()=>{this.props.minus()}}>让a减1</button>
			<h1>b的值是 : {this.props.b}</h1>
 		</div>
	}
}

export default connect(
	(state)=>{
		return {
			a : state.a ,
			b : state.b
		}
	},
	(dispatch)=>{
		return {
			add(){
				dispatch({"type" : "JIA_A"});
			},
			minus(){
				dispatch({"type" : "JIAN_A"});
			}
		}
	}
)(App);