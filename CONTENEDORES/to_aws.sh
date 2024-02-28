aws ecr create-repository --repository-name mluna-ecs-repo

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 904569689818.dkr.ecr.us-east-1.amazonaws.com

docker build -t webpage_flask .

docker images

docker tag flask_mluna 904569689818.dkr.ecr.us-east-1.amazonaws.com/mluna-ecs-repo:flask

docker images

docker push 








aws ecr create-repository --repository-name ${reponame}

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 904569689818.dkr.ecr.us-east-1.amazonaws.com

docker images

docker tag ${image_name} 904569689818.dkr.ecr.us-east-1.amazonaws.com/${reponame}
