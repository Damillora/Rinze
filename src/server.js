import sirv from 'sirv';
import polka from 'polka';
import fetch from 'node-fetch';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const shortenerBase = process.env.SHORTENER_BASE || 'https://link.nanao.moe';

var linksCache = {}

const links = async function(req, res, next) {
	if(linksCache[req.path]) {
		if(linksCache[req.path] == 'none') {
			next();
		} else {
			res.writeHead(301, { Location: linksCache[req.path] });
			res.end();
		}
		return;
	}

	fetch(shortenerBase+req.path, {
		redirect: 'manual',
	}).then(function(fetchres){
		var unshortenedUrl = fetchres.headers.get('Location');
		if(unshortenedUrl == shortenerBase+"/") {
			linksCache[req.path] = "none";
			next()
		} else {
			res.writeHead(301, { Location: unshortenedUrl });
			res.end();
		}
	})
}
polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		links,
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
