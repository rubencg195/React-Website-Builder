import React from "react";
import { Jumbotron, Button, Container } from "mdbreact";
import DocsLink from "./DocsLink";

const JumbotronComponent = props => {
  return (
    <Container className="mt-5 text-center">
      <DocsLink title="Jumbotron" href="https://mdbootstrap.com/react/" />
      <Jumbotron>
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">
            {props.description}
        </p>
        <hr className="my-2" />
        <p>
            {props.footer}
        </p>
        <p className="lead">
          <Button color="primary">{props.buttonText}</Button>
        </p>
      </Jumbotron>
    </Container>
  );
};

export default JumbotronComponent;
