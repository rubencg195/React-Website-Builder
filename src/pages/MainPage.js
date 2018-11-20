import React, { Component } from 'react'
import ImageGrid from '../components/image-grid';
export default class MainPages extends Component {

  render() {
    return (
      <div>
        <ImageGrid min={300} max={500} />
      </div>
    )
  }
}
