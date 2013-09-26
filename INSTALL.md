INSTALL
=======

 * Install Apache 2.4 and OpenSSL 1.0.1e
   * You can use installapache.sh on a plain Debian wheezy
   * YOu can use Apache 2.2, but then you don't get ECDHE
 * Copy apache-vhost.conf to /etc/apache2/sites-enabled and/or adopt to your configuration 
 * Copy www/wasuptls to your virtual host (probably /var/www/)
 * Restart Apache and go to "example.com/wasuptls" to test if SSI is working
 * Include jquery.js and wasuptls.js in your website, like in www/index.html
