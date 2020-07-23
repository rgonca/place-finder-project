import React, { Component } from 'react'

import UserService from "../../../../../services/UserService"

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CompanyForm extends Component {
    constructor() {
        super()
        this.state = {
            description: "",
            phone: "",
            address: "",   
            facebook: "",
            instagram: "",
            website: "",
            username: "",
            password: "",
            username: "",
            errorMsg: null,
        }
        this.userService = new UserService()
    }
    componentDidMount = () => {
        const id = this.props.match.params.id
        this.userService
            .getUserDetails(id)
                .then(response => this.updateStateFromApi(response.data))
                .catch(err => err)
    }
    updateStateFromApi = data => {
        this.setState({
            username: data.username,
            description: data.companyDetails.description,
            phone: data.companyDetails.phone,
            address: data.companyDetails.location.address,
            facebook: this.mapSocialMediaInfo(data.companyDetails.socialMedia, "facebook"),
            instagram: this.mapSocialMediaInfo(data.companyDetails.socialMedia, "instagram"),
            website: this.mapSocialMediaInfo(data.companyDetails.socialMedia, "website"),
        })
    }
    mapSocialMediaInfo = (socialMedia, name) => socialMedia.filter(social => social.name === name).map(social => social.mediaUrl)[0]
    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault() 
        this.userService
            .editUserProfile(this.props.loggedInUser._id , this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/profile')
            })
            .catch(err => this.setState({errorMsg: err.response.data.message}))   

    }
    enterUsernameStateValue = user => this.setState({ username: user.username })

    render() {
        return (
            <>
            { this.state.username.length < 1 ? <h1>Cargando</h1> :
                <Container as="section">
                    <Form onSubmit={this.handleFormSubmit}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={this.handleInputChange} value={this.state.username} name="username" type="textarea" readOnly={true}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.password} name="password" type="password" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control onChange={this.handleInputChange} value={this.state.phone} name="phone" type="number" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="textarea" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={this.handleInputChange} value={this.state.address} name="address" type="text" />
                        </Form.Group>
                        <h5>Social Media</h5>
                        <Form.Group>
                            <Form.Label>Instagram</Form.Label>
                            <Form.Control onChange={this.handleInputChange} value={this.state.instagram} name="instagram" type="text" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Facebook</Form.Label>
                            <Form.Control onChange={this.handleInputChange} value={this.state.facebook} name="facebook" type="text" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Website</Form.Label>
                            <Form.Control onChange={this.handleInputChange} value={this.state.website} name="website" type="text" />
                            </Form.Group>
                            {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
                        <Button variant="dark" type="submit">Submit</Button>
                    </Form>
                </Container>
            }
            </>
        )
    } 
}

export default CompanyForm