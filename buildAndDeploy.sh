!/bin/sh

cd mobile-platform-ui
npm install
echo "------------------------------------"
node_modules/.bin/ng --version
echo "------------------------------------"
node_modules/.bin/ng build --prod
ng build --prod
