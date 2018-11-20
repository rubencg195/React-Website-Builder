import React, { Component } from 'react';


export function renderChildren(children){
    if (!children) return;
    return children.map((child, i) => {
      let {MainWidget, DefaultWidget, properties, Children, Classes} = child;
        
      return (MainWidget) ? <MainWidget key={i} {...properties} /> : <DefaultWidget key={i}  {...properties} />;
    });
  }