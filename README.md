If course if you want to run it , install npm from instructions: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
After installing npm , install Cypress in command prompt:  npm install cypress –save-dev
To run cypress in browser : use npx cypress open

Special Note: 
I excluded the file 'cypress.env.json ' as I store the username and password there and thats just good practice in doing that 
The content of that file should you choose to recreate it looks like this: 


{
    "user_email": "email",
    "user_password": "password",   
    "user_passwordinvald": "invalid password"
}    



