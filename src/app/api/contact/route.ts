import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "re_MHv29TqL_8Uh8eBx8EVnzkBCbxgvRPvCF";
const resend = new Resend(resendApiKey);

const recipientEmail = process.env.CONTACT_EMAIL_TO || "dassourik558@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 3) {
      return NextResponse.json(
        { error: "Please include a message describing your project." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Lead <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: `⚡ New Project Inquiry: ${projectType || "General"} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #12110F; color: #F5F1EA; margin: 0; padding: 24px; }
            .card { background-color: #1B1A17; border: 1px solid #2A2823; border-radius: 12px; max-width: 580px; margin: 0 auto; overflow: hidden; }
            .header { background-color: #23221E; padding: 20px 24px; border-bottom: 1px solid #2A2823; }
            .tag { display: inline-block; background-color: rgba(242, 96, 61, 0.15); color: #F2603D; font-family: monospace; font-size: 11px; padding: 3px 8px; border-radius: 4px; font-weight: bold; }
            .title { margin: 10px 0 0 0; color: #F5F1EA; font-size: 20px; font-weight: bold; }
            .body { padding: 24px; }
            .field { margin-bottom: 18px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #A8A29B; margin-bottom: 4px; font-family: monospace; }
            .value { font-size: 15px; color: #F5F1EA; font-weight: 500; }
            .message-box { background-color: #12110F; border: 1px solid #2A2823; border-radius: 8px; padding: 14px; color: #F5F1EA; font-size: 14px; line-height: 1.5; white-space: pre-wrap; }
            .footer { padding: 16px 24px; background-color: #161513; border-top: 1px solid #2A2823; font-size: 12px; color: #736E67; text-align: center; }
            .btn { display: inline-block; background-color: #F2603D; color: #12110F; text-decoration: none; font-weight: bold; padding: 10px 18px; border-radius: 6px; font-size: 13px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <span class="tag">&lt;SD/&gt; INBOUND INQUIRY</span>
              <h1 class="title">New Client Lead</h1>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">Client Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #F2603D; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Project Track</div>
                <div class="value">${projectType || "Not Specified"}</div>
              </div>
              <div class="field">
                <div class="label">Message / Project Brief</div>
                <div class="message-box">${message}</div>
              </div>
              <div class="field" style="margin-bottom: 0;">
                <div class="label">Received At</div>
                <div class="value" style="font-size: 12px; color: #A8A29B;">${timestamp} (IST)</div>
              </div>
              <div style="margin-top: 20px;">
                <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(projectType || "Freelance Project")}%20Inquiry" class="btn">Reply to ${name}</a>
              </div>
            </div>
            <div class="footer">
              Sourik Das Portfolio • Next.js 14 Lead Dispatcher
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("[Resend Error]", error);
      return NextResponse.json(
        { 
          error: error.message || "Email delivery provider reported an issue. Please check your Resend API Key or recipient configuration.",
          details: error 
        },
        { status: 500 }
      );
    }

    console.log("[Resend Success] Email dispatched to:", recipientEmail, "ID:", data?.id);

    return NextResponse.json({
      success: true,
      message: "Thanks for reaching out! Your message was sent directly to Sourik's inbox.",
      id: data?.id,
    });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again or email directly." },
      { status: 500 }
    );
  }
}
