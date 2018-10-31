describe('All demo', function() {
	function Add(a,b)
	{
		 element(by.model("first")).sendKeys(a);
		 element(by.model("second")).sendKeys(b);
		 element(by.id("gobutton")).click();
	}
	it('Open Angular js website', function() {
		

	    browser.get('http://juliemr.github.io/protractor-demo/');
	     Add(2,3);
		 Add(4,3);
		 Add(8,3);
		 Add(2,3);
		 Add(9,3);
		     
	    //Hier verwendet man die dropdown liste mit folgendem Befehl:
	    element(by.model("operator")).element(by.css("option:nth-child(2)")).click();
	
  
	    element.all(by.repeater("result in memory")).count().then(function(text){
	    	console.log(text)
	    });
	    
	    element.all(by.repeater("result in memory")).each(function(item){
	    	
	    	
	    item.element(by.css("td:nth-child(3)")).getText().then(function(text)
	    		{
	    	console.log(text);
	    		})    		
	    
	})

})
})