import React, {Component} from 'react'

import ChatBot from 'react-simple-chatbot';

class Chatbotcontainer extends Component {
    constructor (props){
        super (props)
        this.state = {
            loggedUser : this.props.loggedInUser,
            stepsLogged: [
                {
                    id: '1',
                    message: "Hi! My name is Faindy. What is your name?",
                    trigger: '2',
                },
                {
                    id: '2',
                    user: true,
                    trigger: '3',
                },
                {
                    id: '3',
                    message: "Hi {previousValue}, nice to meet you! I'm here to help you, what can I do for you?",
                    trigger: '4',
                },
                {
                    id: '4',
                    options: [
                        { value: 1, label: 'What events are near me?', trigger: '5' },
                        { value: 2, label: 'Suggest me an event', trigger: '6' },
                        { value: 3, label: 'What are my plans for this week?', trigger: '7' },
                    ],
                },
                {
                    id: '5',
                    message: "These are the events near you",
                    end: true
                },
                {
                    id: '6',
                    message: "This is my suggestion",
                    end: true
                },
                {
                    id: '7',
                    message: "These are your plans for the week",
                    end: true
                }
                    
            ], 
            stepsNoLogged: [
                {
                    id: '1',
                    message: "Hi! My name is Faindy. What is your name?",
                    trigger: '2',
                },
                {
                    id: '2',
                    user: true,
                    trigger: '3',
                },
                {
                    id: '3',
                    message: "tonta",
                    trigger: '4',
                },
                {
                    id: '4',
                    options: [
                        { value: 1, label: 'What events are near me?', trigger: '5' },
                        { value: 2, label: 'Suggest me an event', trigger: '6' },
                        { value: 3, label: 'What are my plans for this week?', trigger: '7' },
                    ],
                },
                {
                    id: '5',
                    message: "These are the events near you",
                    end: true
                },
                {
                    id: '6',
                    message: "This is my suggestion",
                    end: true
                },
                {
                    id: '7',
                    message: "These are your plans for the week",
                    end: true
                }
                    
            ]
        }
    }



    //componentDidUpdate = prevProps => this.props.loggedInUser !== prevProps.loggedInUser && this.render()
    render() {
        
        return (
            <>
                {this.props.loggedInUser && 
                <ChatBot floating="true"
                    steps={this.state.stepsLogged}
                    
                />
                }
                {!this.props.loggedInUser && 
                <ChatBot floating="true"
                    steps={this.state.stepsNoLogged}
                    
                />}
            </>
        )
    }
}

export default Chatbotcontainer