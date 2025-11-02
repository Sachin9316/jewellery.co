import {NextResponse} from "next/server";
import {MailerSend, EmailParams, Sender, Recipient} from "mailersend";

export async function POST(req: Request) {
    try {
        const {to, subject, message} = await req.json();

        const mailerSend = new MailerSend({
            apiKey: process.env.MAILERSEND_API_KEY!,
        });

        const sentFrom = new Sender(
            "no-reply@test-xkjn41mn3964z781.mlsender.net",
            "Sachin"
        );
        const recipients = [new Recipient(to)];

        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setSubject(subject)
            .setHtml(message);

        await mailerSend.email.send(emailParams);

        return NextResponse.json({success: true, message: "Email sent!"});
    } catch (error: any) {
        return NextResponse.json({success: false, error: error.message});
    }
}
