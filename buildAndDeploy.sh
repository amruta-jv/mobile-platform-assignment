#!/bin/sh

cd mobile-platform-ui
npm install
node_modules/.bin/ng --version

echo "Started running unit test cases"
node_modules/.bin/ng test
echo "Completed running unit test cases"

echo "Started running e2e test cases"
node_modules/.bin/ng serve &
node_modules/.bin/ng e2e
echo "Completed running e2e test cases"

node_modules/.bin/ng build --prod
ls
