import React, { Component } from 'react'

export default class NavBuilder extends Component {
  render() {
    return (
      <div>
        <h2>NavBar</h2>
        <br/>
        <div>
          <h4>Choose a theme</h4>
          <select className="browser-default custom-select">
            <option value="1">Dark</option>
            <option value="2">Light</option>
          </select>
        </div>
        <br/>
        <div>
          <h4>Choose a Background Color</h4>
          <select className="browser-default custom-select">
            <option value="1">Blue</option>
            <option value="2">Green</option>
            <option value="3">Red</option>
          </select>
        </div>
        <br/>
        <div>
          <h4>Add Links</h4>
          <select className="browser-default custom-select">
            <option value="1">Home</option>
            <option value="2">About</option>
            <option value="3">Contact</option>
          </select>
        </div>
      </div>
    )
  }
}
