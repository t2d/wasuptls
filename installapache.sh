#!/bin/sh
#
# install apache from jessie

# Make sure only root can run our script
if ! [ $(id -u) = 0 ]; then
   echo "This script must be run as root" 1>&2
   exit 1
fi

/bin/echo 'APT::Default-Release "wheezy";' > /etc/apt/apt.conf.d/99DefaultRelease
/bin/echo 'deb http://ftp.debian.org/debian/ jessie main' > /etc/apt/sources.list.d/jessie.list
/bin/echo 'deb-src http://ftp.debian.org/debian/ jessie main' >> /etc/apt/sources.list.d/jessie.list

/usr/bin/apt-get update
/usr/bin/apt-get install -y -t jessie apache2
