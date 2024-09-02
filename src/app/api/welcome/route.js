import { NextResponse } from "next/server";
import {EmailTemplate} from "../../../components/emails/EmailTemplate";
import resend from './../../../lib/resend';

export  async function GET(){
    try {
        const data = await resend.sendEmail({
            from: 'onboarding@resend.com',
            to: 'berlioz2001@yahoo.fr',
            subject: 'test',
            react: EmailTemplate()
        })
        return NextResponse.json(data);
        
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error }, { status: 500 });
        
    }
}
