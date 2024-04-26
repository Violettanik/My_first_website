var count = 0;
document.getElementById("myButton").onclick = function () {
	count++;
	if (count % 2 == 0) { 
        document.getElemetnById("demo").innerHTML = "";
	} else {
        var img = document.createElement("img");
        img.src = "https://avatanplus.com/files/resources/original/569d185885b8a15255a719e4.png"
        document.getElementById("demo").appendChild(img)
	}
}