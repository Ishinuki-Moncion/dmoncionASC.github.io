// $(document).keydown(function(e){
//     if (e.keyCode == 37) { 
//        document.getElementById('clap').play();
//        return false;
//     }
// });
function playMyAudio(sound){ //this is the sound perameter under playmyaudio
// document.getElementById(sound).play();
soundelement = new Audio(sound+'.mp3'); // this is what generates another audio so the button can be spammed
soundelement.play();// this play the audio when the button is pressed  
} 
alert("this javascript is linked");
console.log("this javascript is linked");
