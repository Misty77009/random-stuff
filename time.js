let timebtn = document.getElementById('time');

timebtn.addEventListener("click", ()=>{
	document.getElementById("target").innerHTML = Date();
})
