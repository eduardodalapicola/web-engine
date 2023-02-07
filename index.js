import * as dotenv from 'dotenv'
import * as http from 'http'
import * as path from 'path'
import * as fs from 'fs'
import * as mime from 'mime-types'
import * as url from 'url'

dotenv.config()

const {hostname: host, port} = url.parse(process.env.APP_URL || 'http://localhost:80')

const server = http.createServer(async (req, res) => {
    let {url, method} = req

    const __dirname = path.resolve();

    let fullpath = __dirname + '/src' + url

    try {
        if (fs.statSync(fullpath).isDirectory()) {
            fullpath += fullpath.endsWith('/') ? 'index.html' : '/index.html'
        }

        const s = fs.createReadStream(fullpath);
        const filename = path.basename(fullpath)
        s.on('open', () => {
            res.setHeader('Content-Type', mime.contentType(filename));
            s.pipe(res);
        })
        s.on('error', () => {
            res.writeHead('404', {'Content-Type': 'text/plain'})
            res.end('File not Found')
        })
    } catch (error) {
        res.writeHead('404', {'Content-Type': 'text/plain'})
        res.end('File not Found')
    }
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});