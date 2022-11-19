let req = new XMLHttpRequest();
req.responseType = "document";
req.open("GET", "http://testphp.vulnweb.com/userinfo.php");
req.addEventListener("load", function () {
	let res = req.responseXML;
	alert(res);
});
req.send();
