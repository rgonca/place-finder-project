import React, { Component } from 'react'

import OfferService from "../../../../../services/OfferService"

import OfferCard from './card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'




class OfferList extends Component {
    constructor() {
        super()
        this.state = {
            offers: []
        }
        this.offerService = new OfferService()
    }
    componentDidMount = () => this.updateEventOffers(this.props.eventId)

    updateEventOffers = eventId => {
        this.offerService.getAllEventsOffers(eventId)
            .then(response => this.setState({ offers: response.data }))
            .catch(err => err.response && this.props.handleToast(true, err.response.data.message)) 
    }

    render() {
       
        return (
            <section>

           
                <Row>
                    {this.props.loggedInUser && this.state.offers.length > 1 &&<Col className='offer-title'><h2>Offer</h2></Col>}
                        
                    {this.props.loggedInUser && this.state.offers.length > 0 && this.state.offers.map(offer =>
                        (this.props.loggedInUser._id == this.props.event.owner || 
                        this.props.loggedInUser._id == offer.local.owner._id) ?
                        
                            <OfferCard event={this.props.event} updateEventOffers={this.updateEventOffers} loggedInUser={this.props.loggedInUser} offer={offer} handleToast={this.props.handleToast}/>
                          
                        :
                        null)
                   }
                </Row>
            </section>
        )
    }
}

export default OfferList

