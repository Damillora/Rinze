var linksCache = {}

const shortenerBase = process.env.SHORTENER_BASE || 'https://link.nanao.moe';

export async function get({ params }) {
        var path = params.link;
        if (linksCache[path]) {
                if (linksCache[path] != 'none') {
                        return {
                                status: 302,
                                headers: {
                                        "Location": linksCache[path]
                                },
                        }
                }
        }
        var fetchres = await fetch(shortenerBase + "/" + path, { redirect: "manual" });

        var unshortenedUrl = fetchres.headers.get('Location');
        if (unshortenedUrl == shortenerBase + "/") {
                linksCache[path] = "none";
        } else {
                return {
                        status: 302,
                        headers: {
                                "Location": unshortenedUrl
                        },
                }

        }
}
