//Remember to set up your two variables in the Configure menu to your left <---
//watson_apikey and watson_url from your IBM Cloud dashboard

exports.handler = function(context, event, callback) {
  const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
  const { IamAuthenticator } = require('ibm-watson/auth'); 
  const analyzeParams = {
    'url': 'http://news.google.com',
    'features': {
      "sentiment": {},
      "categories": {},
      "concepts": {},
      "entities": {},
      "keywords": {}
    }
  };
  
  const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2020-06-12',
    authenticator: new IamAuthenticator({
      apikey: context.watson_apikey,
    }),
    url: context.watson_url,
  });
  
  naturalLanguageUnderstanding.analyze(analyzeParams)
    .then(analysisResults => {
      callback(null, JSON.stringify(analysisResults, null, 2));
    })
    .catch(err => {
      callback(null, 'Error: ' + err);
    });
};
