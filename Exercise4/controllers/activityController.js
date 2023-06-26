const axios = require("axios");

const getRandomActivity = () => {
  return axios.get('http://www.boredapi.com/api/activity/')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error.message);
    });
};

const getActivityByType = (type) => {
  return axios.get(`http://www.boredapi.com/api/activity?type=${type}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error.message);
    });
};

const getActivityByParticipants = (participants) => {
  return axios.get(`http://www.boredapi.com/api/activity?participants=${participants}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error.message);
    });
};

const getActivityByKey = (key) => {
  return axios.get(`http://www.boredapi.com/api/activity?key=${key}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error.message);
    });
};

module.exports = {
  getRandomActivity,
  getActivityByType,
  getActivityByParticipants,
  getActivityByKey
};
