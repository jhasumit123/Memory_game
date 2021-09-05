import React, { Component } from 'react'

export default class Close extends Component {
    constructor(props) {
        super(props)
        this.handleUnload = this.handleUnload.bind(this);
      }
    
      componentDidMount() {
        window.addEventListener('beforeunload', this.handleUnload);
      }
    
      componentWillUnmount() {
        window.removeEventListener('beforeunload', this.handleUnload);
      }
    
      handleUnload(e) {
        var message = "\o/";
    
        (e || window.event).returnValue = message; //Gecko + IE
        return message;
      }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
