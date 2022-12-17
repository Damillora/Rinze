var linksCache = {}

const shortenerBase = process.env.SHORTENER_BASE || 'https://link.nanao.moe';

export async function GET({ params }) {
        var path = params.link;
        if (linksCache[path]) {
                if (linksCache[path] != 'none') {
                        return new Response(undefined, {
                                status: 302,
                                headers: {
                                        "Location": linksCache[path]
                                }
                        })
                }
        }
        var fetchres = await fetch(shortenerBase + "/" + path, { redirect: "manual" });

        var unshortenedUrl = fetchres.headers.get('Location');
        if (unshortenedUrl == shortenerBase + "/") {
                linksCache[path] = "none";
        } else {
                return new Response(undefined, {
                        status: 302,
                        headers: {
                                "Location": unshortenedUrl
                        }
                })

        }
}
