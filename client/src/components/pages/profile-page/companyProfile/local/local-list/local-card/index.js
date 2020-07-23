import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import LocalService from "../../../../../../../services/LocalService"

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class LocalCard extends Component {
    constructor (){
        super ()
        this.state = {

        }
        this.localService = new LocalService()
    }
    deleteCard = (id) => {
        this.localService.deleteLocal(id)
            .then(() => this.props.updateLocalList())
            .catch(err => console.log(err))
    }
    isUserTheProfileOwner = () => this.props.paramId ? this.props.loggedInUser._id === this.props.paramId : false
    render() {
        const facilities = this.props.facilities.map((facility, i) => <li key={i}>{facility}</li>)
        const services = this.props.services.map((service, i) => <li key={i}>{service}</li>)
        return (
            <Col md={4}>
                <Card className="local-card">
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Text>{this.props.localType}</Card.Text>
                        <ul>
                            {facilities}
                        </ul>
                        <ul>
                            {services}
                        </ul>
                        <Card.Text>{this.props.location.address}</Card.Text>
                    </Card.Body>
                    {this.isUserTheProfileOwner() &&
                        <>
                        <Button variant="dark" type="button" onClick={() => this.deleteCard(this.props._id)}>Delete local</Button>
                        <Link to={`/user/${this.props.owner}/local/${this.props._id}/edit`} className="btn btn-dark btn-block btn-sm">Edit local</Link>
                        </>
                    }
                    <Link to={`/profile/local/${this.props._id}/calendar`} ><Button variant="dark" type="submit">See your calendar!</Button></Link>
                    <Link to={`/user/${this.props.owner}/local/${this.props._id}`} className="btn btn-dark btn-block btn-sm">See details</Link>
                </Card>
            </Col>
        )
    }
}

export default LocalCard