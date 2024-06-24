# Express-gmail-intergration

This api allows developers to send emails from there server using the package nodemailer, developers need to have a gmail account create a project in google console (setup steps below). This route can be used in existing projects, the data sent can be added from the frontend. check https://www.nodemailer.com/message/ for more infomation on what data can be passed to nodemailer.

## REQUIRED PACKAGES

- `npm i Express google-auth-library googleapis nodemailer && npm i --save-dev nodemon dotenv`

## SETUP APP

- Clone the repository
- Install required packages from above
- Create .env file and populate with corresponding data
- run command `npm run dev`
- Navigate to http://localhost:3000/sendemail/

## SETUP GOOGLE CONSOLE

1. Create a new project in google console
2. Navigate API's & services
3. Click OAuth consent screen
4. Create an External app this is ok for development apps but your api refresh_token is only valide for 7 days whereas internal doesn't expire (so production apps should use internal)
5. Use the same app name, add a support email and developer email, then continue to the test users and add the developer email. all emails can be the same. Save
6. Now from the the API's & Services tab click Credientals, then create credients and OAuth client ID
7. Select Web Application
8. Authorize Redirects URI's add this address "https://developers.google.com/oauthplayground", (no closing slash)
9. then hit the setting icon top right of screen
10. then click Use your own OAuth credients and add your Client ID and client secret from the google app you just created
11. On the left side scroll and select the Gmail API v1, then click "https://mail.google.com/"
12. Now Click Authorize API's, it should redirect to your email, you will have to log in. this allows permissons to the app to send, receive, delete emails.
13. Now copy the Refresh token from under the Authorize API's button we need this in our .env

Instructive Video for setting up Google project / app <br>
[![Instructive youtube video](https://img.youtube.com/vi/cqdAS49RthQ/0.jpg)](https://www.youtube.com/watch?v=cqdAS49RthQ)
