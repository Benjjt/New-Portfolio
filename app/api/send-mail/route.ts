import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.EMAIL_KEY);

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  try {
    await sgMail.send({
      to: process.env.MY_EMAIL, // Your email where you'll receive emails
      from: process.env.MY_EMAIL, // your website email address here
      subject: `Sendgrid Contact Form`,
      text: `Name: ${name}, Email: ${email}, Message: ${message}`,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Sendgrid Contact From</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);">
              <tr>
                  <td style="text-align: left;">
                      <h1 style="color: #333333;">From: ${name}</h1>
                  </td>
              </tr>
      
              <tr>
                  <td style="text-align: left; padding-top: 20px;">
                  <h2 style="color: #333333;">Message:</h2>
                      <p style="color: #999999;">${message}</p>
                  </td>
              </tr>
              <tr>
              <td style="text-align: left; padding-top: 20px;">
              <h2 style="color: #333333;">Email:</h2>
                  <p style="color: #999999;">${email}</p>
              </td>
          </tr>
          </table>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return NextResponse.error;
  }

  return NextResponse.json({ message: "success" });
}
