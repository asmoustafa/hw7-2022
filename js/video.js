var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Previous video play rate: " + video.playbackRate);
	video.playbackRate *= 0.9;
	console.log("Current Video Rate: " + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current video play rate: " + video.playbackRate);
	video.playbackRate /= 0.9;
	console.log("New Video Rate: " + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Previous video at : " + video.currentTime);
	if ((video.currentTime + 10) >= video.duration) {
		video.currentTime = 0;
		video.autoplay = false;
	}
	else {
		video.currentTime += 10;
	}
	console.log("New Video at " + video.currentTime);

});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		this.innerHTML = "Unmute"
		console.log("Unmuted");
	}
	else {
		this.innerHTML = "Mute"
		video.muted = false;
		console.log("Muted");
}
	// console.log(this.innerHTML); --> displays the content of the button
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Previous video volume: " + video.volume);
	// let video's volume equal the value of the slider(put in percentage)
	// query selector takes in percentage tho, so have to convert back to whole
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	console.log("New Video Volume: " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
	console.log("style is old school");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
	console.log('style is original');
})











// Discussion - assigning mult event listeners to one thing
// document.querySelector("#demoButton").addEventListener("click", onClick);
// document.querySelector("#demoButton").addEventListener("mouseover", onHover);


// function onClick () {
// 	document.getElementById("status").innerHtml = "clicked";
// }
// function onHover () {
// 	document.getElementById("status").innerHtml = "moused over";
// }

