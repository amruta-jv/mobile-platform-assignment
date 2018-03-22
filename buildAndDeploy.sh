#!/bin/sh

cd mobile-platform-ui

# Installs node modules
npm install

# Unit tests
node_modules/.bin/ng test
if [ $? -ne 0 ]; then
    echo "ERROR: Unit tests failed."
    exit 1;
fi


# e2e test
node_modules/.bin/ng serve &
node_modules/.bin/ng e2e
if [ $? -ne 0 ]; then
    echo "ERROR: e2e tests failed."
    exit 1;
fi


# Generates 'dist' deployable
node_modules/.bin/ng build --prod

# Creates a zip file
sudo zip -r mobile-platform-ui.zip dist

# Deploys to apache2 server
sudo cp -r dist/*  /srv/www/gui-builder/

# Copies to downloadable path
sudo cp mobile-platform-ui.zip /srv/www/gui-builder/



