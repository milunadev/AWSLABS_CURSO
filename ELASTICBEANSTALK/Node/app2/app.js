

const port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

const log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};



const zodiacSigns = {
    'Aries': 'https://pbs.twimg.com/media/FE1b-mvVIAUwy9g.jpg',
    'Tauro': 'https://images.hola.com/imagenes/mascotas/20191218155663/gatos-memes-divertidos-2019-gt/0-755-567/gato-tosiendo-z.jpg',
    'Geminis': 'https://media.tiempodesanjuan.com/p/ff21dd1b8cd966f49cdb772a4b3ff8e1/adjuntos/331/imagenes/000/103/0000103271/790x0/smart/582252jpg.jpg',
    'Cancer': 'https://www.elpais.com.co/resizer/mBPF0ANIhK9C8OBjoh-0-3RA_5c=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/ES4YNNALTVAY3I5RENIXL5WIQI.jpg',
    'Leo': 'https://pm1.aminoapps.com/8302/6ae85f798c1335374e2dd479dfe6c09da09a2e0ar1-735-727v2_hq.jpg',
    'Virgo': 'https://cdn-pro.elsalvador.com/wp-content/uploads/2019/12/Memes-de-Gatos-020-300x300.jpg',
    'Libra': 'https://gluc.mx/u/fotografias/m/2020/7/6/f850x638-29848_107337_7270.jpg',
    'Escorpio': 'https://gluc.mx/u/fotografias/m/2020/6/29/f638x638-29448_87615_5057.jpg',
    'Sagitario': 'https://www.petlife.mx/u/fotografias/m/2023/8/7/f768x1-4918_5045_69.jpg',
    'Capricornio': 'https://pm1.aminoapps.com/8302/26a22cec9597ef22abdd0209e5a41bd0aa564c21r1-736-736v2_hq.jpg',
    'Acuario': 'https://www.nuevamujer.com/resizer/9f7exq33TdJ23NEeRsHOoVfCOs8=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/HAU45CHDAFFH5EFLHBD5NPUOWY.jpg',
    'Piscis': 'https://i.pinimg.com/originals/d1/c5/03/d1c5034532c9b770fd426b0317fdfc8e.jpg'
}

const name = process.env.MY_NAME

const generateZodiacSections = () => {
    // Inicia el contenedor para todas las imágenes
    let htmlContent = '<div class="zodiac-images">';

    // Agrega cada imagen de gato dentro del contenedor
    htmlContent += Object.entries(zodiacSigns).map(([sign, imageUrl]) => {
        return `
            <div class="zodiac-image">
                <h2>${sign}</h2>
                <img src="${imageUrl}" alt="Gatito ${sign}">
            </div>
        `;
    }).join('');

    // Cierra el contenedor
    htmlContent += '</div>';
    htmlContent += `<footer>Hecho rápidamente por ${name}</footer>`;
    return htmlContent;
};
const server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        const name = process.env.MY_NAME || "NO SE SABE"
        const zodiacSections = generateZodiacSections();
        const html = fs.readFileSync('index.html', 'utf8');
        const fullHtml = html.replace('<!-- Zodiac Sections -->', zodiacSections);

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(fullHtml);
        res.end();
    }
    if (req.method === 'POST') {
        let body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {
            if (req.url === '/') {
                log('Received message: ' + body);
            } else if (req.url = '/scheduled') {
                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
            }

            res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
            res.end();
        });
    } 
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
