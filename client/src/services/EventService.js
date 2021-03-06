import axios from 'axios'

export default class EventService {

    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user/event`,
            withCredentials: true
        })
    }

    //events
    getAllEventsUser = userId => this.service.get(`/${userId}/all`)
    getAllFutureUserEvents = userId => this.service.get(`/${userId}/all/future`)
    createEvent = (event,id) => this.service.post(`/create/${id}`, event)
    getOwnedEvents = userId => this.service.get(`/${userId}/owned`)
    getParticipantEvents = userId => this.service.get(`/${userId}/participant`)
    getOneEvent = eventId => this.service.get(`/event/${eventId}`)
    getEventByName = eventName => this.service.get(`/event/name/${eventName}`)
    editEvent = (eventId, newEvent, id) => this.service.put(`/event/${eventId}/${id}`, newEvent)
    deleteEvent = (eventId, id) => this.service.delete(`/delete/${eventId}/${id}`)
    getAllEvents = () => this.service.get('/getAllEvents')
    getAllFutureEvents = () => this.service.get('/getAllFutureEvents')
    getEventOwner = eventId => this.service.get(`/getOwner/${eventId}`)
    joinEvent = (eventId, id) =>  this.service.put(`/join/${eventId}/${id}`)
    leaveEvent = (eventId, id) => this.service.put(`/leave/${eventId}/${id}`)
    updateLiveEventPictures = (eventId, picture) => this.service.put(`/live/pictures/${eventId}`, { picture })
    getAllPicturesEvent = eventId => this.service.get(`/live/pictures/${eventId}`)
    getAllCommentsEvent = eventId => this.service.get(`/live/comments/${eventId}`)
    postAComment = (eventId, comment, id) => this.service.post(`/live/comments/${eventId}/${id}`, {comment})
    getAllPicturesEvent = (eventId) => this.service.get(`/live/pictures/${eventId}`)
    getRecommendations = (userId) => this.service.get(`/${userId}/getUserRecommendations`)
    getLocalRecommendations = (localId) => this.service.get(`/${localId}/getLocalRecommendations`)

}