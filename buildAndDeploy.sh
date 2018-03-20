#!/bin/sh

cd mobile-platform-ui
npm install
node_modules/.bin/ng --version
node_modules/.bin/ng build --prod
rm mobile-platform-ui.zip
tar -zcvf mobile-platform-ui.tar.gz dist

