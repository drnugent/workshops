const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth'); 
 const twiml = new Twilio.twiml.MessagingResponse();
    const analyzeParams = {
        'text': event.Body,
        'features': {
        "sentiment": {},
        "categories": {}
        }
    };
    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
        version: '2020-06-12',
        authenticator: new IamAuthenticator({
            apikey: context.watson_apikey,
        }),
        url: context.watson_url
    });
    naturalLanguageUnderstanding.analyze(analyzeParams)
    .then(analysisResults => {
        const score = analysisResults.result.sentiment.document.score;
        const label = analysisResults.result.sentiment.document.label;
        const categories = JSON.stringify(analysisResults.result.categories);
        const msg = `score: ${score} \n label: ${label} \n categories: ${categories}`;

        twiml.message(msg);
        callback(null, twiml);
    })
    .catch(err => {
      callback(err);
    });
};