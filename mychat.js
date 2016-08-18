var database = firebase.database().ref();

function sendMessage(){
	var name = $('#name').val();
	var message = $('#message').val();

	database.push({
		'name':name,
		'message':message
	});

	database.on('child_added', function(dataRow){
		//getting row value
		var row = dataRow.val();
		//adding to div
		$('#messageBoard').append('<p>'+ row.name +': ' + row.message +'</p>');

	})
}
