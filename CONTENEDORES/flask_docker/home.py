from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return '''
    <html>
        <head>
            <title>Aplicación Flask</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f2f2f2;
                }
                .container {
                    text-align: center;
                }
                .message {
                    color: #333;
                    font-size: 2em;
                    margin-bottom: 0.5em;
                }
                .welcome {
                    color: #b7153d;
                    font-size: 1.5em;
                    margin-bottom: 1em;
                }
                #emojiButton {
                    padding: 10px 20px;
                    font-size: 1em;
                    color: #fff;
                    background-color: #b7153d;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                #emojiContainer {
                    font-size: 2em;
                    margin-top: 20px;
                    display: none;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="message">DESPLEGASTE TUS CONTENEDORES!</div>
                <div class="welcome">Bienvenido a la aplicación de Flask :D</div>
                <button id="emojiButton">Mostrar/Ocultar</button>
                <div id="emojiContainer">😄😃😀😊😁</div>
            </div>

            <script>
                document.getElementById('emojiButton').onclick = function() {
                    var emojiContainer = document.getElementById('emojiContainer');
                    if (emojiContainer.style.display === "none") {
                        emojiContainer.style.display = "block";
                    } else {
                        emojiContainer.style.display = "none";
                    }
                };
            </script>
        </body>
    </html>
    '''

if __name__ == '__main__':
    app.run(threaded=True, host='0.0.0.0', port=8080)
