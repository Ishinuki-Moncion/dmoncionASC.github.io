var url="http://maps.googleapis.com/maps/api/staticmap?center=601+W.+26th+St.+NY&zoom=16&size=600x300&AIzaSyDJXU9P8ieyia_jPLo26RSrj4tx7Kq1rg4&key=AIzaSyDJXU9P8ieyia_jPLo26RSrj4tx7Kq1rg4";

var markerStart="&markers=icon:http://files.softicons.com/download/object-icons/richs-misc-icons-by-rich-d/png/64/Pikachu%202.png%7Cshadow:true%7C601+w.+26th+st.+ny&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/150-mewtwo-icon.png%7Cshadow:true%7C601+w.+10th+st.+ny&markers=icon:http://icons.iconarchive.com/icons/hektakun/pokemon/64/384-Rayquaza-icon.png%7Cshadow:true%7C100+w.+26th+st.+ny";

var pikas =   ["601 W 26th st. ny", "100 W 26th st. ny", "601 W 10th st. ny"];


for(var i=0; i<pikas.length; i++){
	var pika = encodeURI(pikas[i]);
	url = url + markerStart + pika; 
}
//url = url + center + "&" +zoom+ "&"+size;

//var = encodingURI(url);
var htmlIMG = document.createElement("img");
$("body").append(htmlIMG);
$("img").attr("src",url);