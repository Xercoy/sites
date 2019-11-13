#!/bin/bash

# This script will copy the correct static files from the default directory.

DEFAULT_DIR=/opt/prak/websites
DEFAULT_DESTINATION=/usr/share/nginx/html

cp -r "${DEFAULT_DIR}/${WEBSITE_NAME}"/*  "${DEFAULT_DESTINATION}"

nginx -g "daemon off;"