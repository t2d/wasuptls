// BrowserDetect von http://www.quirksmode.org/js/detect.html
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

browser = BrowserDetect.browser;
version = BrowserDetect.version;
document.write("browser: " + browser + "<br />");
document.write("version: " + version + "<br />");




testCrime(browser, version); 

function testCrime(browser, version) {
	//console.log("Testing for Crime...");
	vulnerable = false;
	switch(browser) {
		// MSIE nicht verwundbar
		case "Chrome":
			if(version < 21.0) vulnerable = true;
			break;
		case "Safari":
			if(version < 5.1) vulnerable = true;
			break;
		case "Firefox":
			if(version < 15.0) vulnerable = true;
			break;
		case "Opera":
			if(version < 21.01) vulnerable = true;
			break;

		default:
			break;
	}
	if(vulnerable) document.write("your browser is vulnerable to CRIME");
	else document.write("your browser doesn't seem vulnerable to CRIME");

	return vulnerable;
}
function testBeast(browser, version) {
	vulnerable = false;
	switch(browser) {
		case "Chrome":
			if(version < 16.0) vulnerable = true;
			break;
		case "MSIE":
			//TODO: welche version??
			break;
		case "Safari":
			//TODO: welche version??
			break;
		case "Firefox":
			if(version < 10.0) vulnerable = true;
			break;
		case "Opera":
			//TODO: welche version??
			break;

		default:
			break;
	}
	if(vulnerable) document.write("your browser is vulnerable to BEAST");
	else document.write("your browser doesn't seem vulnerable to BEAST");

	return vulnerable;

}
function testBreach(browser, version) {
	vulnerable = false;
	switch(browser) {
		case "Chrome":
			//TODO: welche version??
			break;
		case "MSIE":
			//TODO: welche version??
			break;
		case "Safari":
			//TODO: welche version??
			break;
		case "Firefox":
			//TODO: welche version??
			break;
		case "Opera":
			//TODO: welche version??
			break;

		default:
			break;
	}
	if(vulnerable) document.write("your browser is vulnerable to BREACH");
	else document.write("your browser doesn't seem vulnerable to BREACH");

	return vulnerable;
}

function testLucky13(browser, version) {
	vulnerable = false;
	switch(browser) {
		case "Chrome":
			//TODO: welche version??
			break;
		case "MSIE":
			//TODO: welche version??
			break;
		case "Safari":
			//TODO: welche version??
			break;
		case "Firefox":
			//TODO: welche version??
			break;
		case "Opera":
			if(version < 12.13) vulnerable = true;
			break;

		default:
			break;
	}
	if(vulnerable) document.write("your browser is vulnerable to Lucky13");
	else document.write("your browser doesn't seem vulnerable to Lucky13");

	return vulnerable;
}
function testTime(browser, version) {
	vulnerable = false;
	switch(browser) {
		case "Chrome":
			if(version < 4.1) vulnerable = true;
			break;
		case "MSIE":
			if(version < 8.0) vulnerable = true;
			break;
		case "Safari":
			if(version < 4.0) vulnerable = true;
			break;
		case "Firefox":
			if(version < 3.6) vulnerable = true;
			break;
		case "Opera":
			if(version < 10.5) vulnerable = true;
			break;

		default:
			break;
	}
	if(vulnerable) document.write("your browser is vulnerable to TIME");
	else document.write("your browser doesn't seem vulnerable to TIME");

	return vulnerable;
}
