
module.exports = function(app) {

    app.get('/lol', function(req, res) {
        var body = 'This is a lol test';
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', body.length);
        res.end(body);
    });

    app.get('/weeso', function(req, res) {
        var body = 'I am weeso';
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', body.length);
        res.end(body);
    });

}
