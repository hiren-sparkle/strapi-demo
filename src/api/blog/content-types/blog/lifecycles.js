module.exports = {
  //   Triggered after creating a Blog entry.

  async afterCreate(event) {
    const { result } = event;
    console.log("Blog created:", result.Photo[0]?.url);

    // // Send the email
    try {
      await strapi
        .plugin("email")
        .service("email")
        .send({
          to: "hg.sparkle015@gmail.com", // Replace with your email address
          from: "lm.sparkle077@gmail.com",
          subject: "New Blog Post: " + result.Title,
          html: blogContent(result),
        });
      // Set the flag to indicate the email has been sent
      console.log("Email sent successfully");
    } catch (err) {
      console.error("Error sending email:", err);
    }
  },
};

const blogContent = (data) => {
  return ` <html>
    <body style="font-family: Arial, sans-serif; background-color: #f4f7f6; padding: 20px; color: #333;">

      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
        
        <h2 style="font-size: 22px; color: #333; margin-bottom: 20px;">New Blog Post Added</h2>

        <p style="font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 20px;">
          <strong>Title:</strong> ${data.Title}
        </p>

        <p style="font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 20px;">
          <strong>Click below to read the full blog:</strong>
        </p>

        <a href="http://192.168.1.21:3000/blog/${data.documentId}" style="background-color: #007bff; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
          Visit the Blog
        </a>

        <p style="font-size: 16px; color: #555; line-height: 1.6; margin-top: 20px;">
          Thank you for staying updated with our latest content!
        </p>

      </div>

    </body>
  </html>`;
};
