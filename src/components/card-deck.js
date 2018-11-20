import React, { Component } from "react";
import {
  Button,
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardGroup,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";
import DocsLink from "./DocsLink";

class CardDeckComponent extends Component {
  render() {
    return (
      <CardGroup deck className="mt-3">
        <Card>
          <CardImage
            src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
            alt="Card image cap"
            top
            hover
            overlay="white-slight"
          />
          <CardBody>
            <CardTitle tag="h5">Panel title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
                </CardText>
            <Button color="primary" size="md">
              read more
                </Button>
          </CardBody>
        </Card>

        <Card>
          <CardImage
            src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
            alt="Card image cap"
            top
            hover
            overlay="white-slight"
          />
          <CardBody>
            <CardTitle tag="h5">Panel title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
                </CardText>
            <Button color="primary" size="md">
              read more
                </Button>
          </CardBody>
        </Card>

        <Card>
          <CardImage
            src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
            alt="Card image cap"
            top
            hover
            overlay="white-slight"
          />
          <CardBody>
            <CardTitle tag="h5">Panel title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
                </CardText>
            <Button color="primary" size="md">
              read more
                </Button>
          </CardBody>
        </Card>
      </CardGroup>

    );
  }
}

export default CardDeckComponent;
