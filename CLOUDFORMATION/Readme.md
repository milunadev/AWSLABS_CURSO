 CLOUDFORMATION 

## RESOURCES

1. Extension de VS Code: **CloudFormation** 

    Es una extension de VSCode que facilita el desarrollo de plantillas de CloudFormation
    Name: CloudFormation
    VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=aws-scripting-guy.cform

    ![Alt text](image-1.png)

2. Catalogo de AMIs:
    - Amazon Linux 2023 AMI: ami-0277155c3f0ab2930
    - Amazon Linux 2 AMI: ami-0cf10cdf9fcd62d37
    - Ubuntu Server 20.04 LTS: ami-06aa3f7caf3a30282

3. Subir archivos a S3:

   ```bash
    aws s3 cp file.yml s3://bucket-name/
   ```