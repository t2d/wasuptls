$(function() {
   $.ajax({
        url: "wasuptls.php",
		type: "GET",
		cache: "false",
        success: function(data) { PHPtoJSResponse(data); }
   });
});
 
function PHPtoJSResponse(data) {
   // Antwort des Server ggf. verarbeiten
   var response = $.parseJSON(data);
   var cipher = response.cipher;
   var version = response.version;
   alert("TLS-Version: " + response.version + "\nCipher: " + response.cipher + "\nKeysize: " + response.keysize);

   // Testing Forward Secrecy
   var usingFS;
   var m = cipher.match(/^ECDH-|^DH-/g);
   if (m == null) usingFS = false; 
   else usingFS = true; 

   // Test for RC4
   var usingRC4;
   var m = cipher.match(/RC4/g);
   if (m == null) usingRC4 = false; 
   else usingRC4 = true; 

   // Test for SSLv3
   var usingSSLv3;
   var m = version.match(/SSLv3/g);
   if (m == null) usingSSLv3 = false; 
   else usingSSLv3 = true; 

   
};
