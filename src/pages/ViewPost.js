import React, { Component } from 'react'
import ReverseCascadeComponent from "../components/reverse-cascade";
import TwoColImageComponent from "../components/two-col-img";
import ImageGridComponent from "../components/image-grid";

export default class ViewPost extends Component {
  render() {
    return (
      <div className="container">
        <ReverseCascadeComponent />
        <TwoColImageComponent />
        <ImageGridComponent min={100} max={200}/>
      </div>
    )
  }
}
