module.exports = {
  //   Triggered after creating a ContactUs entry.

  async afterCreate(event) {
    const { result } = event;
    console.log(result);

    // Send the email
    try {
      await strapi
        .plugin("email")
        .service("email")
        .send({
          to: "lm.sparkle077@gmail.com", // Replace with your email address
          from: `${result?.Email}`,
          subject: "New Contact Us Submission from: " + result.Fullname,
          html: emailContent(result),
        });
      // Set the flag to indicate the email has been sent
      console.log("Email sent successfully");
    } catch (err) {
      console.error("Error sending email:", err);
    }
  },
};

// Prepare the email content with inline CSS
const emailContent = (data) => {
  return ` <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f7f6; padding: 20px; color: #333;">
  
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
              
              <h2 style="font-size: 22px; color: #333; margin-bottom: 20px;">New Contact Us Submission</h2>
              
              <p style="font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 10px;">
                <strong>Name:</strong> ${data.Fullname}
              </p>
              
              <p style="font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 10px;">
                <strong>Email:</strong> <span style="color: #007bff;">${data.Email}</span>
              </p>
              
              <p style="font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 10px;">
                <strong>Message:</strong>
              </p>
              
              <p style="font-size: 16px; color: #555; line-height: 1.6; background-color: #f4f7f6; padding: 10px; border-radius: 4px;">
                ${data.Message}
              </p>
        
            </div>
  
          </body>
        </html>`;
};
