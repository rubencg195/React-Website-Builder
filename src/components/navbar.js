import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Container,
  FormInline
} from "mdbreact";
import logo from "../assets/images/signature.gif";

class NavbarComponent extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  generateRoutes() {
    return Object.keys(this.props.routes).map((key, index) => <NavItem key={`nav-item-${index}`}>
      <NavLink
        exact
        to={this.props.routes[key]}
        onClick={this.toggleCollapse("navbarCollapse")}
      >
        {key}
      </NavLink>
    </NavItem>);
  }
  render() {
    return (

      <Navbar
        color="white"
        style={{ marginTop: "0px" }}
        light
        expand="md"
        scrolling
        fixed="top"
      >
        <Container>
          <NavbarBrand href="/">
            {/* <strong className="white-text">MDB</strong> */}
            {/* <img src={logo} height="50"/> */}
            <img src={"https://mdbootstrap.com/img/logo/mdb-transparent.png"} height="30"/>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse("navbarCollapse")}
          />
          <Collapse
            id="navbarCollapse"
            isOpen={this.state.collapseID}
            navbar
          >
            <NavbarNav left>
              {this.generateRoutes()}
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <FormInline waves>
                  <div className="md-form my-0">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </FormInline>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Container>
      </Navbar>

    );
  }
}

export default NavbarComponent;
