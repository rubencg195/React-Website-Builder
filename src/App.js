import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import Routes from "./Routes";
import NavbarComponent from "./components/navbar";
import FooterComponent from "./components/footer";
import {MainDefault, NavDefault, IntroDefault, SectionDefault, FooterDefault} from "./components/default";
import {MasterBuilder, BuilderModal} from "./components/builder";

import { connect } from 'react-redux';
import Actions from './actions';
let { toggleModal }  =  Actions.modalActions.methods;



const navRoutes = {
    "Home" : "/",
    "Post" : "/post",
    "Posts" : "/posts",
    "Create Post" : "/post/create",
    "CSS" : "/css",
    "Components" : "/components",
    "Advanced" : "/advanced",
    "Navigation" : "/navigation",
    "Forms" : "/forms",
    "Tables" : "/tables",
    "Modals" : "/modals",

};

class App extends Component {
  constructor(props){
    super(props);
    this.toggle         = this.toggle.bind(this);
    this.addSection     = this.addSection.bind(this);
    this.changeContent  = this.changeContent.bind(this);
    this.generateWidgetStructure = this.generateWidgetStructure.bind(this);
    this.state = {
      openModal: false,
      structure: {
        nav: this.generateWidgetStructure(null, NavDefault, this.generateDefaultProperties(), null, null),
        intro: this.generateWidgetStructure(null, IntroDefault, this.generateDefaultProperties(), null, null),
        content: this.generateWidgetStructure(null, MainDefault, this.generateDefaultProperties(), [
          this.generateWidgetStructure(null, SectionDefault, this.generateDefaultProperties(), null, null),
        ], null),
        footer: this.generateWidgetStructure(null, FooterDefault, this.generateDefaultProperties(), null, null),
      },
    };
  }
  addSection(Component){
    this.state.structure.content.Children.push(this.generateWidgetStructure(null, Component, this.generateDefaultProperties(), null, null));
    this.setState({
      structure: this.state.structure
    });
  }
  generateWidgetStructure(MainWidget, DefaultWidget, properties, Children, Classes){
    return {
      MainWidget,
      DefaultWidget,
      properties,
      Children,
      Classes
    };
  }
  generateDefaultProperties(){
    return {
      toggle: this.toggle,
      changeContent: this.changeContent,
      renderChildren: this.renderChildren 
    };
  }
  toggle(){
    this.setState({
      openModal: !this.state.openModal,
    });
  }
  changeContent(content){
    this.setState({
      modalContent: {
        title: content.title,
        description: content.description,
        children: content.children,
        Builder: content.Builder
      }
    });
  }
  render() {
    return (
      <Router >
        <div className="flyout">
          <MasterBuilder structure={this.props.structure}  />
          <BuilderModal />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  structure : state.structure
});

const mapActionsToProps = {
  onToggleModal : toggleModal,
};

// const mapStateToProps = state => state;
export default connect(mapStateToProps, mapActionsToProps)(App);


{/* <div className="flyout">
<NavDefault toggle={this.toggle} changeContent={this.changeModalContent} />
<IntroDefault toggle={this.toggle} changeContent={this.changeModalContent} />
<main className="container" style={{ marginTop: "5rem" }}>
  <SectionDefault toggle={this.toggle} changeContent={this.changeModalContent}/>
</main>
<FooterDefault toggle={this.toggle} changeContent={this.changeModalContent}/>
<BuilderModal openModal={this.state.openModal} toggle={this.toggle} content={this.state.modalContent}/>
<MasterBuilder structure={this.state.structure}  />
</div> */}