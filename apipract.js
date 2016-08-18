$('#submit').click(
	function(){
		grabData();
	}
)

function grabData(){
	//grab value form input field
	var name  = $('#name').val();
	//$.ajax makes a query to a websu]ite using one
	$.ajax(
		{
		url:'http://www.reddit.com/dev/api/' + name,//them web name sing the info
		success: function(result){
			//when the query is succesful, the 
			print(result); 
			}
		}
	)
}
function print(obj){
	//reset title field
	$('#content').text('');
	for (var prop in obj){
		$('#content').append('<p>' + prop + ': ' + obj[prop] + '</p>' );  
	}
}