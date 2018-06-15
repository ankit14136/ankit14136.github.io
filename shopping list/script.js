var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var el = document.querySelectorAll("li");



ul.addEventListener("click",function(event){
	var element = event.target.parentElement;
	if(event.target.tagName==="LI")
	{
		event.target.classList.add("done");
	}
	if(event.target.tagName==="BUTTON")
	{
		element.parentNode.removeChild(element);
	}
})

function isfieldfilled() {
	if(input.value.length>0)
		return true;
}

function isenterpressed(event) {
	if(event.keyCode===13)
		return true;
}

function newelement() {
	var li = document.createElement("li");
	var bt = document.createElement("button");
	bt.appendChild(document.createTextNode("delete"));
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(bt);
	ul.appendChild(li);
	input.value="";
}

button.addEventListener("click",function(){
	 if(isfieldfilled())
	 	newelement();
})

input.addEventListener("keypress",function(event){
	if(isfieldfilled() && isenterpressed(event))
		newelement();
})

