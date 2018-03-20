#!/bin/sh

cd mobile-platform-ui
npm install
node_modules/.bin/ng --version
node_modules/.bin/ng build --prod
apt-get install zip
zip -r mobile-platform-ui.zip dist
