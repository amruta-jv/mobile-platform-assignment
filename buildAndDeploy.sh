#!/bin/sh

cd mobile-platform-ui
npm install
node_modules/.bin/ng --version

node_modules/.bin/ng serve &

echo "-----------------------------"
node_modules/.bin/ng e2e
if [ $? -ne 0 ]; then
    echo "ERROR: e2e tests failed."
    exit 1;
fi

node_modules/.bin/ng test
if [ $? -ne 0 ]; then
    echo "ERROR: Unit tests failed."
    exit 1;
fi

# node_modules/.bin/ng build --prod
# sudo cp -r dist/*  /srv/www/gui-builder/ 



