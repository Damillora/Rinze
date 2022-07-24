

// Public webhook URL for forms.
let webhookUrl = "https://n8n.nanao.moe/webhook/fd943cbe-fd27-47f8-98ec-01c14b5104fe";

export async function POST({ body }) {
    if (!body.message) {
        return {
            status: 400,
            body: {
                error: "No message!"
            }
        }
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

    return {
        body: {
            success: true,
        }
    }
}