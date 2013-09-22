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
   alert("TLS-Version: " + response.version + "\nCipher: " + response.cipher + "\nKeysize: " + response.keysize);
};
