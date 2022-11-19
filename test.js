let req = new XMLHttpRequest();
req.responseType = "document";
req.open("GET", "http://testphp.vulnweb.com/userinfo.php");
req.addEventListener("load", function () {
	let res = req.responseXML;
	console.log(res.body);
	alert(res.body.querySelector("#content > div:nth-child(3) > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]"));
});
req.send();
