// when a wsfm page is opened, make popup box
alert("New songcheck session started. Do not reload or exit this page.");

// history array stores all previously played songs.
// past variable stores last played song
var history = [];
var past;

// when user exits page, make confirmation box
function confirmExit() {
	return "Are you sure you want to exit the page?";
}
window.onbeforeunload = confirmExit;


function check() {
	var today = new Date().getHours(); // get current hour
	if (today >= 7 && today < 19) { // if between 7am and 7pm
		var song = document.getElementsByClassName("song-title"); // get song title
		var artist = document.getElementsByClassName("song-artist"); // get song artist
		var time = Date.now();
		var signature = song[0].innerText + " by " + artist[0].innerText; // join title and artist together
		console.log("Current song: " + signature);
		if (signature != past) { // if the song has changed since last song
			if (!(typeof history[signature] === 'undefined')) { // if this song has been played before
				console.log("DUPLICATE SONG DETECTED");
				console.log(time + " - " + signature + " :: " + history[signature]);
				alert("DUPLICATE SONG DETECTED");
				alert(time + " - " + signature + " :: " + history[signature]);
			}
			history[signature]=time; // if not played before, store the time it was played
			past = signature;
		}
	}
}
check();
setInterval(check, 60000); // check every 60 seconds