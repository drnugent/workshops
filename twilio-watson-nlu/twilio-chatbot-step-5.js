{
	"actions": [
		{
			"collect": {
				"name": "js_survey_questions",
				"questions": [
					{
						"question": "Hello! I'm the IBM / Twilio sentiment analysis bot. Tell me about your programming habits, and I'll tell you what JavaScript framework you are! Please share a few sentences about the following topics. First, what do you think of programmers who use a graphical IDE like V S Code, as opposed to vim or emacs?",
						"name": "vim_emacs"
					},
					{
						"question": "Thanks for the feedback! Some developers contribute to open source projects, whereas others submit documentation patches or find bugs and ask for things to be fixed. What do you think of programmers who don't contribute back to open source projects in some way?",
						"name": "open_source"
					},
					{
						"question": "People can be very proud of their GitHub contribution chart, which is the visual representation of how much code they have committed each day. Should this be a point of pride for programmers?",
						"name": "contribution_chart"
					},
					{
						"question": "Nice! Some programmers believe that the number of lines of code written is extremely important. One way to pad this mystical number is to have brackets not on the same line as a line of code, but instead on a new line. What is your take on the subject?",
						"name": "lines_of_code"
					},
					{
						"question": "Last question. A new programming hire joins your team. As they start to work on their code, you realize that instead of tabs to indent their lines, they are using spaces. What do you do to them? Be as graphic as possible.",
						"name": "tabs_spaces"
					}
				],
				"on_complete": {
					"redirect": "YOUR_URL_GOES_HERE"
				}
			}
		}
	]
}
