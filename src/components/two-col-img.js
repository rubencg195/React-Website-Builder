import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class TwoColImageComponent extends React.Component {
    render() {
        return (
            <div style={{marginBottom: 50}}>
                <div className="row" >
                    <div className="col">
                        <Card>
                            <CardImage className="img-fluid" src="http://davignonmartin.ca/_graphics/bg_marquee.jpg" />
                        </Card>
                    </div>
                    <div className="col" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                </div>
            </div>
        )
    }
}
export default TwoColImageComponent;