describe('Protractor element Demo', function() {
	var obj = require("./Jsobjectdemo.js");
	var using = require('jasmine-data-provider');
	var d = require("./data.js");
	  beforeEach(function() {
		  obj.getURL();
		  });
	    using(d.Datadriven, function (data, description) {
	    	  
	    	it('Testing calculation functionality'+description, function() {	
	    		
	    	    obj.firstinput.sendKeys(data.firstinput);
	    	    obj.secondinput.sendKeys(data.secondinput);
	    	    
	    	    obj.gobutton.click();
	    	    browser.sleep(5000);
	    	   
	    	    //Jasmine takes care of promise resolve
	    	    expect(obj.result.getText()).toBe(data.result);
	    	    

	    	    obj.result.getText().then(function(text){
	    	    	
	    	    	console.log(text);
	    	    });
	    	 

	    	})
	    	
	    });
	
	
	 afterEach(function() {
		    console.log("Test is completed");
		  });
})