import { envs } from "../../config";



export class DiscordService {



    private readonly discordWebHookUrl = envs.DISCORD_WEBHOOK_URL;

    constructor() { }


    async notify(message: string) {

        const body = {
            content: message,
            embeds: [
                {
                    image: { url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjhrdm9oeDF2cTFzdDgwbzhjZXFmdGtybTZ0ODYzdDN5OXZoM3M2ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uU3oBlPJTx184/giphy.gif' }
                }
            ]
        }

        const resp = await fetch(this.discordWebHookUrl, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (!resp.ok) {
            console.log('Error sendind message to Discord');
            return false;
        }
        return true;
    }
}

