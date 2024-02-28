aws ecr create-repository --repository-name repomluna --region us-east-1

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 904569689818.dkr.ecr.us-east-1.amazonaws.com


docker build -t flaskimage ./flask_docker


docker tag flaskimage 904569689818.dkr.ecr.us-east-1.amazonaws.com/repomluna:flask

docker push  904569689818.dkr.ecr.us-east-1.amazonaws.com/repomluna:flask