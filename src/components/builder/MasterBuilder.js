import React, { Component } from 'react'

export default class MasterBuilder extends Component {
  constructor(props){
    super(props);
    this.generateContent = this.generateContent.bind(this);
  }
  generateContent(){
    let {structure} = this.props;
    if(!structure) return;
    
    let widgetStructure =  Object.keys(structure).map((key, i) => {
      let {MainWidget, DefaultWidget, properties, Children, Classes} = structure[key];
      let WidgetList = (MainWidget)? <MainWidget key={i} {...properties} Children={Children} Classes={Classes} /> : <DefaultWidget  key={i}  {...properties}  Children={Children} Classes={Classes} />;
      return WidgetList;
    });

    return widgetStructure;
  }
  render() {
    return (
      <div  >
        {this.generateContent()}
      </div>
    )
  }
}
