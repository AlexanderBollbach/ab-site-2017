import './style.css'
import React from 'react'
// const API = require('../utils/api')
const axios = require( 'axios' );

class Projects extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      projects: [ ]
    };
  }

  componentDidMount( ) {

    axios.get( `/projects` ).then(res => {

      var projects = res.data
      this.setState({ projects: projects });

    });
  }
  render( ) {

    const listItems = this.state.projects.map(( proj, index ) => <div key={index} className="ProjectItem">{proj.projectName}</div>);

    console.log( listItems );
    return (
      <div className='ProjectContainer'>
        {listItems}
      </div>
    )
  }
}

export default Projects
