# CLOUDFORMATION LAB

1. Vamos a la consola de Cloudformation y creamos un nuevo stack (conjunto logico de recursos)
![Alt text](./static/image.png)

2. Hay 3 maneras de desplegar un stack, lo haremos con la opcion de cargar la plantilla de forma manual. Subimos el archivo "cloud-formation-vpc-1.yaml" de la carpeta VPC_changeset del repositorio actual.
![Alt text](./static/image-2.png)

3. Definimos los parametros para personalizar los recursos que levantara la plantilla.
![Alt text](./static/image-3.png)

4. En los siguientes pasos solo especificaremos el rol que AWS Cloudformation usara para levantar diferentes recursos.
![Alt text](./static/image-4.png)

    #### AMI IDs for Different Regions: Amazon Linux 2023

    | Region         | AMI ID               |
    |----------------|-----------------------|
    | us-east-1      | ami-0427090fd1714168b |
    | us-east-2      | ami-00db8dadb36c9815e |
    | us-west-1      | ami-03ed1381c73a5660e  |
    | eu-west-2      | ami-074be47313f84fa38  |
    | sa-east-1      | ami-02031d73889932104  |


5. Enviamos las configuraciones y deberia comenzar a crearse el stack.
![Alt text](./static/image-5.png)

6. CREAR UN CHANGESET: Creamos una version del stack que podria modificar/eliminar/crear recursos dependiendo de los cambios que hayamos realizado en la plantilla.
![Alt text](./static/image-6.png)

7. Seleccionamos la opcion de reemplazar la plantilla y subimos la version 2. 
![Alt text](./static/image-7.png)
![Alt text](./static/image-8.png)
![Alt text](./static/image-9.png)

8. Con estos cambios enviados ya podemos visualizar los cambios que se haran en el stack: 
![Alt text](./static/image-10.png)