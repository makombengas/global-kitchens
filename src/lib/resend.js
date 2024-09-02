// lib/resend.js
import { Resend } from 'resend';

const resend = new Resend(process.env.local.EMAIL_KEY);


export default resend;
