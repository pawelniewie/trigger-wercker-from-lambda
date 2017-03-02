'use strict';

module.exports.triggerBuild = (event, context, callback) => {
  const request = require('request');

  const payload = {
    'pipelineId': process.env.applicationId,
    'message': "Automatically triggered"
  };

  const req = request.post({
    url: 'https://app.wercker.com/api/v3/runs/',
    body: payload,
    json: true,
    headers: {
      'Authorization': 'Bearer ' + process.env.apiKey
    }
  }, (error, response, body) => {
    callback(null, body);
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.fetchApplications = (event, context, callback) => {
const request = require('request');
  const req = request.get({
    url: 'https://app.wercker.com/api/v3/applications/' + process.env.username,
    json: true,
    headers: {
      'Authorization': 'Bearer ' + process.env.apiKey
    }
  }, (error, response, body) => {
    const apps = body.map((app) => {
      return {
        id: app.id,
        name: app.name,
        stack: app.stack
      }
    });
    callback(null, apps);
  });
}