import './style.css'
import React from 'react'
// const API = require('../utils/api')
const axios = require('axios');


class Projects extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  componentDidMount() {

    axios.get(`http://localhost:8080`)
    .then(res => {
      this.setState({ projects: res.data });
    });
  }
  render() {

    const listItems = this.state.projects.map((proj) =>
      <div className="ProjectItem">{proj.name}</div>
    );
    return (
      <div className='ProjectContainer'>
        {listItems}
      </div>
    )
  }
}

export default Projects
