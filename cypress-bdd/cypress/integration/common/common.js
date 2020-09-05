import { defineStep } from 'cypress-cucumber-preprocessor/steps'


defineStep("Launch online calculator", ()=> {
    const app_url = Cypress.env("online_calc_url");
    cy.visit(app_url);
})


defineStep("Verify the page URL to contain {string} and the canvas is visible", (strExpectedUrl)=>{
    cy.url().should("include", strExpectedUrl);
    cy.get("#canvas").should("be.visible");
})


// defineStep("Read the image text from path {string}",(fileName)=>{
//     var Tesseract = require('tesseract.js');
//     const fs = require('fs');
//     const filePath = '../screenshots/calculatorSteps/calculatorSteps.feature/';
//     cy.log("Reading image...")

//     Tesseract.recognize(filePath+fileName)
//     //.progress(function  (p) { console.log('progress', p)  })
//     .catch(err => cy.log("Some error reading image: "+err))
//     .then(function (result) {
//         cy.log(">>> TESSERACT: "+result.text);
//         return result.text;
//     });
// })
