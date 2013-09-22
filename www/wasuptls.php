<?php
  $array = array('version' => $_SERVER['SSL_PROTOCOL'], 'cipher' => $_SERVER['SSL_CIPHER'], 'keysize' => $_SERVER['SSL_CIPHER_USEKEYSIZE']);
  echo(json_encode($array));
?>
