import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: 'AW Coffee Contact <contact@awcoffeeexport.com>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `AW Coffee Website: New Contact Inquiry from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f9f9f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

                  <!-- Header with brand colors -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0AD461 0%, #08b350 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                        AW Coffee
                      </h1>
                      <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px; font-weight: 500; letter-spacing: 0.5px; opacity: 0.95;">
                        NEW CONTACT INQUIRY
                      </p>
                    </td>
                  </tr>

                  <!-- Contact Information -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="margin: 0 0 24px 0; color: #331E0B; font-size: 24px; font-weight: 600;">
                        Contact Details
                      </h2>

                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding: 16px 20px; background-color: #f8f8f8; border-left: 4px solid #0AD461; margin-bottom: 8px;">
                            <p style="margin: 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">Name</p>
                            <p style="margin: 6px 0 0 0; color: #331E0B; font-size: 18px; font-weight: 500;">${name}</p>
                          </td>
                        </tr>
                        <tr><td style="height: 12px;"></td></tr>
                        <tr>
                          <td style="padding: 16px 20px; background-color: #f8f8f8; border-left: 4px solid #0AD461;">
                            <p style="margin: 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">Email</p>
                            <p style="margin: 6px 0 0 0; color: #331E0B; font-size: 18px; font-weight: 500;">
                              <a href="mailto:${email}" style="color: #331E0B; text-decoration: none;">${email}</a>
                            </p>
                          </td>
                        </tr>
                        ${company ? `
                          <tr><td style="height: 12px;"></td></tr>
                          <tr>
                            <td style="padding: 16px 20px; background-color: #f8f8f8; border-left: 4px solid #0AD461;">
                              <p style="margin: 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">Company</p>
                              <p style="margin: 6px 0 0 0; color: #331E0B; font-size: 18px; font-weight: 500;">${company}</p>
                            </td>
                          </tr>
                        ` : ''}
                        ${phone ? `
                          <tr><td style="height: 12px;"></td></tr>
                          <tr>
                            <td style="padding: 16px 20px; background-color: #f8f8f8; border-left: 4px solid #0AD461;">
                              <p style="margin: 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">Phone</p>
                              <p style="margin: 6px 0 0 0; color: #331E0B; font-size: 18px; font-weight: 500;">
                                <a href="tel:${phone}" style="color: #331E0B; text-decoration: none;">${phone}</a>
                              </p>
                            </td>
                          </tr>
                        ` : ''}
                      </table>
                    </td>
                  </tr>

                  <!-- Message -->
                  <tr>
                    <td style="padding: 0 30px 40px 30px;">
                      <h2 style="margin: 0 0 20px 0; color: #331E0B; font-size: 24px; font-weight: 600;">
                        Message
                      </h2>
                      <div style="padding: 24px; background-color: #f8f8f8; border-radius: 8px; border-left: 4px solid #0AD461;">
                        <p style="margin: 0; color: #331E0B; font-size: 17px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f8f8; padding: 24px 30px; border-top: 1px solid #e5e5e5;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="text-align: center;">
                            <p style="margin: 0; color: #999; font-size: 13px; line-height: 1.5;">
                              This email was sent from the<br>
                              <strong style="color: #331E0B;">AW Coffee</strong> website contact form
                            </p>
                            <p style="margin: 12px 0 0 0; color: #0AD461; font-size: 12px; font-weight: 500;">
                              The Heritage of Kaffa, The True Taste of Origin
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    // Check if Resend returned an error
    if (emailData.error) {
      console.error('Resend error:', emailData.error);
      return NextResponse.json(
        {
          error: emailData.error.message || 'Failed to send email. Please check your email configuration.'
        },
        { status: 400 }
      );
    }

    // Check if email was sent successfully
    if (!emailData.data) {
      console.error('No data returned from Resend');
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        id: emailData.data.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
