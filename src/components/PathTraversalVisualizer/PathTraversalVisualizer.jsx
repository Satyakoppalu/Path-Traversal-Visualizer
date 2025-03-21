import React, { Component } from "react";
import Header from '../Header/Header';


export default class PathTraversalVisualizer extends Component{


    render(){
        return (
        <Header visualize={this.visualize} isVisualizing={this.state.isVisualizing} clearBoard={this.clearBoard}/>
        )
    }


};