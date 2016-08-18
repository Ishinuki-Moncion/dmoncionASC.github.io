var makeURL = "https://maker.ifttt.com/trigger/dummy/with/key/eIn9Fh9c5EIS4tuvUDGR1wLHp36VrInN3ZDGeV6ZZuF";

function submitIt(){
	console.log("high");
	var message = $("#message").val();
	var img = $("#imgURL").val();

	//the keys used are the defualts
	var sendoff = {
		"value1" : message,
		"value2" : img,
	}
	$.post(makeURL,sendoff);

	//clear input data
	$("#message").val("");
	$("#imgURL").val("");
} 
