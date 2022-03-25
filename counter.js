let counterPlusElem = document.getElementById('counter-plus');
let counterMinusElem = document.getElementById('counter-minus');
let counterDisplayElem = document.getElementById('counter-display');
let content = counterDisplayElem.innerHTML;

let target = document.getElementById("axolotl-ppl");

let count = 0;

if (localStorage.getItem("count") !=null){
	count = localStorage.getItem("count")
}

let date = [];

if (localStorage.getItem("date") !=null){
	date = JSON.parse(localStorage.getItem("date"))
}

let loc = [];

if (localStorage.getItem("loc") !=null){
	loc = JSON.parse(localStorage.getItem("loc"))
}

counterMinusElem.addEventListener("click",()=>{
	count--;
	updateDisplay()
	updateLocalStorage()
	localStorage.setItem("count", count)
})


counterPlusElem.addEventListener("click",()=>{
	count++;
	updateDisplay()
	updateLocalStorage()
	localStorage.setItem("count", count)
});

function updateDisplay(){
	counterDisplayElem.innerHTML = content + count.toString();
	if (loc.length == 0 || date.length == 0) {
		let response = ""
		target.innerHTML = response;
	}
	else{
		let response = "Last axolotl liker seen at "+ loc[loc.length-1] + "\nat" + date[date.length-1];
		target.innerHTML = response;
	}
}

updateDisplay();

function updateLocalStorage() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition)
 	} else {
 		console.error("Geolocation is not supported.");
 	}
}

function showPosition(position) {
	date.push(Date())
	loc.push("(" + position.coords.latitude + "," + position.coords.longitude + ")")
	localStorage.setItem("date", JSON.stringify(date)) 
	localStorage.setItem("loc", JSON.stringify(loc)) 
	let response = "Last axolotl liker seen at "+"(" + position.coords.latitude + "," + position.coords.longitude + ")" + "\nat" + Date();
	target.innerHTML = response
}