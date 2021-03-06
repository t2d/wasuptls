wasuptls
========

The goal of wasuptls is to provide an Apache2 configuration for websites with sensible data.
It must be working _today_ and not exclude any users. Instead users with unsafe browsers should be warned.
wasuptls should be easy to embed in already existing websites.

The project consists of three parts which should be used together.
 * Apache2 config file
 * Server-side script TLS information
 * Client-side script to warn users with unsafe browsers
 
The logic is in the combination of Apache configuration and JS, server-side script is just glue.

Decisions
---------
 * Based on stable software (Debian wheezy, OpenSSL 1.0.1e and Apache 2.4)
 * Export TLS information via SSI, but easy to do in any language
 * BEAST is considered to be mitigated client-side, Priority is Forward Secrecy -> no RC4
 * Prefer ECDHE over DHE
 * HTTP Strict Transport Security
 * No Keypinning as it isn't stable at the moment.

Benchmarks
----------
 * ab results in benchmark.txt
 * Charts at https://sarwiki.informatik.hu-berlin.de/Modernes_SSL/TLS-Setup_mit_Apache#Benchmarks

Sources
-------
 * https://www.ssllabs.com/downloads/SSL_TLS_Deployment_Best_Practices_1.3.pdf
 * http://www.heise.de/security/artikel/Forward-Secrecy-testen-und-einrichten-1932806.html
 * http://hynek.me/articles/hardening-your-web-servers-ssl-ciphers/
 * https://github.com/ioerror/duraconf
