#!/bin/sh
export PM2_HOME=/home/ubuntu/.pm2  

pm2 delete test-node

cd /home

pm2 start ecosystem.config.js --only test-node