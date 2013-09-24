<html>
<head>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="wasuptls.js"></script> 
</head>
<body>
<h1>TEST</h1>
<?php
echo $_SERVER['SSL_PROTOCOL'] . '<br>' . $_SERVER['SSL_CIPHER'] . '<br>' . $_SERVER['SSL_CIPHER_USEKEYSIZE'];
?>
</body>
</html>
