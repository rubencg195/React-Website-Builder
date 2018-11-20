import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class ReverseCascadeComponent extends React.Component {
    render() {
        return (
            <div >
                <Card
                style={{
                   paddingBottom: 50,
                   marginBottom : 150,
                }}
                >
                    <CardImage className="img-fluid" src="http://davignonmartin.ca/_graphics/bg_marquee.jpg" />
                    <Card
                        style={{
                            marginLeft: "50px",
                            marginRight: "50px",
                            position: "relative",
                            bottom: "-150px",
                            marginTop: "-200px",
                            zIndex: "99",
                            textAlign: "center"
                        }}
                    >
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            {/* <Button href="#">Button</Button> */}
                        </CardBody>
                    </Card>
                </Card>

            </div>
        )
    }
}
export default ReverseCascadeComponent;