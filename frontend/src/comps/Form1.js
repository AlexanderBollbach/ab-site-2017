import './style.css'
import axios from 'axios'
import React from 'react'

class Form1 extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleChange( event ) {

    this.setState({ value: event.target.value });
  }

  handleSubmit( event ) {

    var name = this.state;

    axios.post('http://localhost:8080/newProject', { projectName: name.value }).then( function( response ) {}).catch( function( error ) {});

    event.preventDefault( );
  }

  render( ) {
    return ( < form onSubmit = {
      this.handleSubmit
    }
    className = "Form1" > < label > Name : < input type = "text" value = {
      this.state.value
    }
    onChange = {
      this.handleChange
    } /> < /label>
        <
        input
        type = "submit"
        value = "Submit" / > < /form>
      );
    }
}

export default Form1
