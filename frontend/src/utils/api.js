const axios = require('axios');

module.exports = {

  fetchProjects: function() {
    return axios.get('http://localhost:8080/')
    .then(function(res) {
      return res
    })
  }
}
