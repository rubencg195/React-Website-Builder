import { combineReducers, createStore } from 'redux';
import { structureReducer, postsReducer, modalReducer } from '../reducers';
import {MainDefault, NavDefault, IntroDefault, SectionDefault, FooterDefault} from "../components/default";

const allReducers = combineReducers({
  structure: structureReducer,
  posts: postsReducer,
  modal: modalReducer,
});

let generateWidgetStructure = (MainWidget, DefaultWidget, properties, Children, Classes) => {
  return {
    MainWidget,
    DefaultWidget,
    properties,
    Children,
    Classes
  };
}

export default createStore(allReducers, {
  modal: {
    openModal: false
  },
  structure: {
    nav: generateWidgetStructure(null, NavDefault, [], null, null),
    intro: generateWidgetStructure(null, IntroDefault, [], null, null),
    content: generateWidgetStructure(null, MainDefault, [], [
      generateWidgetStructure(null, SectionDefault, [], null, null),
    ], null),
    footer: generateWidgetStructure(null, FooterDefault, [], null, null),
  },
  posts: [{ title: "First Post" }],
  current:  {
    selectedWidget: null,
    selectedAddWidget: null,
  }
}, window.devToolsExtension && window.devToolsExtension());

