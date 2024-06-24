const express = require("express");
const router = express.Router();
const { sendEmail } = require("../functions/mailer.js");

// Route to create a new user contact
router.get("/", async (request, response, next) => {
  // DECLARE EMAIL ADDRESS BEING SENT FROM
  const MY_EMAIL = process.env.MY_EMAIL;

  // DECLARE EMAIL ADDRESS TO SEND TO
  const SENDER_EMAIL =
    "replace this with the email you wish to sent to can be from frontend preferrable you would add validation before this though";

  // CREATE TRY CATCH BLOCK TO CATCH ERRORS
  try {
    // IF EMAIL TO THE SAME IS YOUR SENDING EMAIL
    if (SENDER_EMAIL === MY_EMAIL) {
      const error = new Error("CANNOT SEND MAIL TO YOURSELF");
      error.status = 400;
      return next(error);
    }
    if (
      SENDER_EMAIL ===
      "Add the email you wish to sent to can be from frontend preferrable you would add validation before this though"
    ) {
      const error = new Error(
        "PLEASE SPECIFIC THE EMAIL TO SEND TO IN 'sendEmailRouter.js'"
      );
      error.status = 400;
      return next(error);
    }

    // CALL THE SEND EMAIL FUNCTION WITH SENDER EMAIL
    const info = await sendEmail(SENDER_EMAIL);

    console.log("sent email");

    // RESPONSE IS RESULT OF THE SEND EMAIL FUNCTION
    response.send(info);
  } catch (error) {
    error.status = 500; // Internal Server Error
    next(error);
  }
});

module.exports = router;
