module.exports = (function(){
	// Variables
	var url = "https://f38a2491c6.execute-api.us-west-2.amazonaws.com/Sharp/form-submission",
		form = $("#call-to-action-section form"),
		client;

	// Modules
	var nav 		= require('./nav'),
	 	utils	 	= require('./utils'),
		jQPlugins 	= require('./jQPlugins'),
		clientjs	= require('clientjs');

	// Initiate
	function init(){
		client = new ClientJS();
	}

	function post(){
		var formData = form.serializeArray();
		console.log("formData: \n" + JSON.stringify(formData, null, 4));
		var metadata = getMetadata();
		var data = {};
		for (var i=0; i<formData.length;i++)
			data[formData[i].name] = formData[i].value;
		
		data.fingerprint	= client.getFingerprint();
		data.metadata 		= metadata;
		if(requestbodyIsComplete(data))
			sendRequest();
		function sendRequest(){
			var reqData = JSON.stringify(data, null, 4);
			console.log(reqData);	
			$.ajax({
				type: "POST",
				url: url,
				data: reqData,
				success: function(data, status, xhr){
					alert("Thank you! We will be in touch soon.");
					form.find("input[type=text], textarea").val("");
					console.log(JSON.stringify(data));
					console.log(JSON.stringify(status));
				},
				dataType: "json",
				contentType : "application/json"
			});
		}
	}
	function getMetadata(){
		var metadata = {};
		metadata.name			= "metadata";
		metadata.resolution		= client.getCurrentResolution();
		metadata.os				= client.getOS();
		metadata.browser		= client.getBrowser();
		metadata.isMobile		= client.isMobile();
		metadata.timeZone		= client.getTimeZone();
		metadata.language		= client.getLanguage();
		return metadata;
	}
	function requestbodyIsComplete(data){
		if(data.name != "")
			if(validateEmail(data.email))
				return true;
			else{
				alert("Fill in email correctly, please");
				return false;
			}
		alert("Fill in your name, please");
		return false;
		
		function validateEmail(email){
			return /\w+@\w+(\.\w+)+/.test(email);
		}
	}
	// Return object	
	var publicAPI = {
		post:post,
		init:init,
		nav:nav,
		utils:utils,
		jQPlugins:jQPlugins,
		client:client
	};
	return publicAPI;
})();
