const fp = require('fastify-plugin');
const app = require('fastify')();
const port = 3000;


fp(async function pluginRoutes(app) {
    // make the data as stream
    app.addContentTypeParser('*', function (request, payload, done) {
        // when we tried that no data were printed inside the on data

        // let data = ''
        // payload.on('data', chunk => { data += chunk })
        // payload.on('end', () => {
        //     done(null, data)
        // })

        done();
    });

    app.post('/registerCall', async (req, res) => {
        // didn't work
        // for await (const chunk of req.raw.readableBuffer) {
        //     console.log("chunk", chunk);
        // }
        
        // for await (const chunk of req.raw._readableState.buffer) {
        //     console.log("chunk", chunk);
        // }
        
        for await (const chunk of req.raw) {
            console.log("chunk", chunk);
        }
        res.send({ status: 200 });
    });
})(app)

app.listen(port);
console.info(`Running on port ${port}`);