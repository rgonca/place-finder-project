import React, { Component } from 'react'
import UserService from "../../../../services/UserService"

import Container from 'react-bootstrap/Container'

import LocalList from "./local/local-list"

import { Link } from "react-router-dom"

class CompanyProfile extends Component {
    constructor() {
        super()
        this.state = {
            user: undefined
        }
        this.userService = new UserService()
    }
    isUserTheProfileOwner = () => this.props.loggedInUser._id === this.props.paramId
    render() {
        const company = this.props.userDetails.companyDetails
        const socialMedia = company.socialMedia.map(social => <li>{`${social.name}:  ${social.mediaUrl}`}</li>)
        return (
            <Container as="section">
                <h4>Description</h4>
                <p>{company.description}</p>
                <h4>Contact</h4>
                <ul>
                    <li>phone: {company.phone}</li>
                    {socialMedia}
                </ul>
                {this.isUserTheProfileOwner() &&
                    <>
                        <Link to={`/profile/edit/company/${this.props.loggedInUser._id}`}>Edit profile</Link>
                        <Link to={`/user/${this.props.userDetails._id}/local/add`}>Add new local</Link>
                    </>
                }
                <h4>Locals</h4>
                <LocalList user={this.props.userDetails._id} loggedInUser={this.props.loggedInUser} />
            </Container>
        )
    }
}

export default CompanyProfile