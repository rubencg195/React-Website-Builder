import React, { Component } from 'react'
import { Container, Row, Col, Input, InputFile } from 'mdbreact';



export default class CreatePost extends Component {
    
    fileInputHandler = (files) => {
        console.log(files) // returns FileList object
    }
    render() {
        return (
            <div >
                <Container className="mt-5">
                    <Row className="mt-6">
                        <Col md="">
                            <h1 className="text-center">Create New Post</h1>
                            <Input label="Example label" icon="envelope" />
                            <Input type="textarea" label="Icon Prefix" icon="pencil" />
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="customFile" onChange={(e) => this.fileInputHandler} />
                                <label className="custom-file-label" for="customFile">Choose file</label>
                            </div>
                            <img src="" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
