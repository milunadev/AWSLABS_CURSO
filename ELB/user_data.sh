#!/bin/bash

yum update -y
sudo yum -y install nginx

TOKEN=`curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600"`

INSTANCE_ID=$(curl -H "X-aws-ec2-metadata-token: $TOKEN" -s http://169.254.169.254/latest/meta-data/instance-id)
PUBLIC_IP=$(curl -H "X-aws-ec2-metadata-token: $TOKEN" -s http://169.254.169.254/latest/meta-data/public-ipv4)

systemctl start nginx
systemctl enable nginx

cat > /usr/share/nginx/html/index.html << EOF
<!DOCTYPE html>
<html>
<head>
    <title>Bienvenida EC2</title>
</head>
<body>
    <h1>      Hola! Bienvenido a la maquina EC2</h1>
    <p>           ID de instancia: ${INSTANCE_ID}</p>
    <p>           IP publica: ${PUBLIC_IP}</p>
</body>
</html>
EOF

systemctl restart nginx




sudo yum install -y stress
stress --cpu 8 --timeout 600