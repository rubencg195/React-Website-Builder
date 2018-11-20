import React, { Component } from 'react'
import ImageGrid from '../components/image-grid';
export default class PostsPage extends Component {

  render() {
    return (
      <div>
        <ImageGrid min={600} max={800} />
      </div>
    )
  }
}
