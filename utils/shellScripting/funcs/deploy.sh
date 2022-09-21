deploy() {
local commitMsg=$(readData "What is your commit message to git?")
buildClient
git add .
git commit -m "$commitMsg"
git push origin master
local script=$( cat << EOF
cd /var/www/app;
git pull origin master;
docker-compose -f docker-compose-prod-ssl.yml stop;
docker-compose -f docker-compose-prod-ssl.yml up --build -d;
docker system prune --volumes
EOF
)
ssh $SERVER_ALIAS "$script" 
}