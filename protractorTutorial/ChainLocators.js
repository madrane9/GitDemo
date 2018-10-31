describe('Chain locators demo', function() {

	it('Open Angular js website', function() {

	    browser.get('http://juliemr.github.io/protractor-demo/');
	   
	    

	    element(by.model("first")).sendKeys("10");
	    //Hier verwendet man die dropdown liste mit folgendem Befehl:
	    element(by.model("operator")).element(by.css("option:nth-child(2)")).click();
	    element(by.model("second")).sendKeys("2");
	 
	    element(by.id("gobutton")).click();
	    
	    //repeater, chain locators, And css for identical tags
	    element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
	    		{
	    	console.log(text);
	    		})

	    
	})

})