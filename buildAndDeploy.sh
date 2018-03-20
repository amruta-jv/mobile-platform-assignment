#!/bin/sh

cd mobile-platform-ui
npm install
node_modules/.bin/ng --version
node_modules/.bin/ng build --prod
echo "-----------------------"
ls
echo "Generating tar file of deployable"
tar -zcvf mobile-platform-ui.tar.gz dist
echo "Generated tar file of deployable"
ls
