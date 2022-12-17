import { json as json$1 } from '@sveltejs/kit';



// Public webhook URL for forms.
let webhookUrl = "https://n8n.nanao.moe/webhook/fd943cbe-fd27-47f8-98ec-01c14b5104fe";

export async function POST({ body }) {
    if (!body.message) {
        return json$1({
    error: "No message!"
}, {
            status: 400
        })
    }
    const data = await fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message: body.message ?? "Blank form",
        }),
    })

    return json$1({
    success: true,
})
}