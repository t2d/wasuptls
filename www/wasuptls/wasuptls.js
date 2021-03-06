$(function() {
   $.ajax({
        url: "wasuptls/index.html",
		type: "GET",
		cache: "false",
        success: function(data) { Response(data); }
   });
});
 
function Response(data) {
   // process server response
   var response = $.parseJSON(data);
   var cipher = response.cipher;
   var version = response.version;
   //alert("TLS-Version: " + response.version + "\nCipher: " + response.cipher + "\nKeysize: " + response.keysize);

   // Testing Forward Secrecy
   var usingFS;
   var m = cipher.match(/ECDH|DH/g);
   if (m == null) usingFS = false; 
   else usingFS = true; 

   // Test for RC4
   var usingRC4;
   var m = cipher.match(/RC4/g);
   if (m == null) usingRC4 = false; 
   else usingRC4 = true; 

   // Test for DES 
   var usingDES;
   var m = cipher.match(/DES/g);
   if (m == null) usingDES = false; 
   else usingDES = true; 

   // Test for 3DES 
   var using3DES;
   var m = cipher.match(/3DES/g);
   if (m == null) using3DES = false; 
   else using3DES = true; 


   // Test for SSLv3
   var usingSSLv3;
   var m = version.match(/SSLv3/g);
   if (m == null) usingSSLv3 = false; 
   else usingSSLv3 = true; 

   if(!usingFS || usingRC4 || usingDES || using3DES || usingSSLv3) {
    	var popup = '<div style="position: fixed; width: 100%; height: 100px; background-color: #3366CC; color: white; padding: 10px; bottom: 0; left:0; font-family: Helvetic, sans-serif; font-size: 12pt; box-shadow: 0 0 10px #000000 ">';
	
		popup += '<a href="#" onClick="$(this).parent().hide()"><img src="wasuptls/close_button.png" alt="(close)" style="float:right; margin-right: 20px" /></a>';
	   popup += "Your HTTPS connections doesn't use the up-to-date standards and might therefore be unsecure! Please update your browser to the newest version!<br /><ul>";
	   if (!usingFS) {
		   popup += '<li>No <a href="http://en.wikipedia.org/wiki/Forward_secrecy">Forward Secrecy</a> is used!</li>';
	   }
	   if (usingRC4) {
		   popup += '<li>The <a href="http://en.wikipedia.org/wiki/Rc4">old RC4 encryption standard</a> is used!</li>';
	   }
	   if (usingSSLv3) {
		   popup += '<li>The <a href="http://en.wikipedia.org/wiki/Transport_Layer_Security#SSL_3.0">old SSLv3 standard</a> is used!</li>';
	   }
	   if (usingDES) {
		   if (using3DES) {
			   popup += '<li>The old 3DES standard is used!</li>';
		   } else {
			   popup += '<li>The old DES standard is used!</li>';
		   }
	   }
	   popup += "</ul></div>";
	   document.write(popup);
   }
};
