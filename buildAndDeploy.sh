#!/bin/sh

cd mobile-platform-ui
npm install
node_modules/.bin/ng --version

node_modules/.bin/ng test
if [ $? -ne 0 ]; then
    echo "ERROR: Unit tests failed."
    exit 1;
fi


#Steps for e2e test cases
# sudo apt-get update
# sudo apt-get install xvfb -y

# wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
# sudo dpkg --unpack google-chrome-stable_current_amd64.deb
# sudo apt-get install -f -y
# sudo apt-get clean

# echo "-----------Command to know google-chrome path"
# which google-chrome
# echo "-----------Command to know google-chrome path"

# npm install webdriver-manager
# ./node_modules/protractor/bin/webdriver-manager update
# ./node_modules/protractor/bin/webdriver-manager start > log.txt &

# Xvfb :99 &
# export DISPLAY=:99
# sleep 20s

# node_modules/.bin/ng serve &
# node_modules/.bin/ng e2e
# if [ $? -ne 0 ]; then
#     echo "ERROR: End to end tests failed."
#     exit 1;
# fi

# node_modules/.bin/ng build --prod
# tar -zcvf mobile-platform-ui.tar.gz dist

