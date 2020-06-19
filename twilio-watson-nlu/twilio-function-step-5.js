exports.handler = function(context, event, callback) {
  const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
  const { IamAuthenticator } = require('ibm-watson/auth'); 
  const WhichX = require("whichx");
  const frameworks = {
      "angular": "If you like established, stateful toolkits favored by enterprise companies, you will find Angular.js an adequate framework.",
      "react": "You're not the newest framework out there, but you're established, popular, and youd don't have to prove anything. Nobody got fired for choosing React.",
      "vue": "No longer the new kid on the block, you're still gaining popularity and establishing yourself as a great performer. You've got all the hype and buzz!",
      "ember": "You have the vibe and backing of a supportive community and a well-designed ecosystem.",
      "backbone": "You're still being used even as the cool kids have moved on to different ecosystems. Hang in there!"
  }

  //Build our Bayesian model
  var whichfw = new WhichX();
  whichfw.addLabels(["Angular", "React", "Vue", "Ember", "Backbone"]);
  Object.keys(frameworks).forEach((p) => { whichfw.addData(p.toLowerCase(), frameworks[p].toLowerCase()) } );

  //Get answer from Memory
  const memory = JSON.parse(event.Memory);
  const inputText = Object.values(memory.twilio.collected_data.js_survey_questions.answers).reduce(
    (total, {answer}) => total + " " + answer, ""
  );
  const analyzeParams = {
    'text': inputText,
    'features': {
      "sentiment": {},
      "categories": {},
      "concepts": {},
      "entities": {},
      "keywords": {
        "limit": 3
      }
    }
  };

  const framework = whichfw.classify(inputText);
  const frameworkResponse = "Your JavaScript framework is: " + framework.toUpperCase() +
    ". " + frameworks[framework];
  
  const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2020-06-12',
    authenticator: new IamAuthenticator({
      apikey: context.watson_apikey,
    }),
    url: context.watson_url,
  });
  
  naturalLanguageUnderstanding.analyze(analyzeParams)
    .then(analysisResults => {
      const twilioResponse = {
        "actions": [
          {
          "say": "We detected " + analysisResults.result.sentiment.document.label + 
            " sentiments, and identified the keywords " +
            analysisResults.result.keywords.reduce((a,v,i) => {return a + (i===0?"":", ") + v.text}, "") +
            ". " + frameworkResponse
          }
	    ]
      };
      callback(null, twilioResponse);
    })
    .catch(err => {
      callback(null, 'Error: ' + err);
    });
};
