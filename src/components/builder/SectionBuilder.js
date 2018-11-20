import React, { Component } from 'react'
import TwoColImageComponent from "../two-col-img";

class HeaderExample extends Component {
  render() {
    return (
      <h1>Option #1</h1>
    )
  }
}
const options = [
  { name: "Header 1", value: TwoColImageComponent },
  { name: "Header 2", value: HeaderExample },
  { name: "Header 3", value: HeaderExample },
];

export default class SectionBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Preview: null,
    };
    this.onDropDownChange = this.onDropDownChange.bind(this);
  }
  renderOptions() {
    return options.map((opt, i) => <option key={i} value={opt.name}>{opt.name}</option>);
  }
  onDropDownChange(event) {
    let searchResults = options.filter(x => x.name == event.target.value);
    if (searchResults.length <= 0) return;
    let newPreview = searchResults[0].value;
    this.setState({
      Preview: newPreview
    });
  }
  render() {
    let {Preview} = this.state;
    console.log('====================================');
    console.log("Prev", Preview);
    console.log('====================================');
    return (
      <div>
        <p>Select Your Preferred Section</p>
        <select className="browser-default custom-select" onChange={this.onDropDownChange} >
          <option>Choose your option</option>
          {this.renderOptions()}
        </select>
        <br/>
        <br/>
        {(() => Preview? <Preview />: null)()}
      </div>
    )
  }
}
