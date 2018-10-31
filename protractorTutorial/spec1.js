describe('Protractor baby steps', function() {

	it('Open Angular js website', function() {
		browser.get("https://angularjs.org")
	    browser.get('http://juliemr.github.io/protractor-demo/').then(function()
	    {
			console.log("I am the last step to execute");
		})
	
	
		// write your protractor raw code

	})

	// Each it block will be called as a spec

	it('close browswer', function() {

		// code to close browser
	})

})