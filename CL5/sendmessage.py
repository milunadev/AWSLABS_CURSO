import boto3

# Inicializa un cliente de SNS
sns_client = boto3.client(
    'sns',
    region_name='us-east-1',  # Reemplaza con tu región de AWS
)

# ID del tópico al que quieres enviar un mensaje
topic_arn = 'arn:aws:sns:us-east-1:904569689818:mlunatopic'  # Reemplaza con el ARN de tu tópico

# Mensaje que quieres enviar
message = 'Este es el mensaje que quiero enviar.'

# Envía el mensaje
response = sns_client.publish(
    TopicArn=topic_arn,
    Message=message,
    Subject='MI ASUNTO'  # Opcional
)

# Imprime la respuesta de SNS
print(response)
