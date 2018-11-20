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

class CardComponent extends Component {
    render() {
        return (

            <Card reverse style={{ width: "22rem" }}>
                <CardImage
                    cascade
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
                    waves
                />
                <CardBody cascade>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                  </CardText>
                    <Button href="#">Button</Button>
                </CardBody>
            </Card>

        );
    }
}

export default CardComponent;
