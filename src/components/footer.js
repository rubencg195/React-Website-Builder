import React, { Component } from 'react'
import {
    Footer,
  } from "mdbreact";
export default class FooterComponent extends Component {
    render() {
        return (
            <Footer color="light-grey">
                <p className="footer-copyright mb-0 py-3 text-center">
                    &copy; {this.props.year} Copyright:{" "}
                    <a href={this.props.link}> {this.props.description} </a>
                </p>
            </Footer>
        )
    }
}
