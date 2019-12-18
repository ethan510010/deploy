WEB_PATH='/home/ec2-user/deploy'
WEB_USER='ec2-user'
WEB_USERGROUP='ec2-user'

echo "Start Deployment"
cd $WEB_PATH
echo "Pulling source code..."

git reset --hard origin/develop
git clean -f
git pull origin develop
git checkout develop
npm install
chown -R $WEB_USER:$WEB_USERGROUP $WEB_PATH
pm2 restart 1
