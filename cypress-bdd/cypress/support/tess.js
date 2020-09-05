import promisify from 'cypress-promise'

var Tesseract = require('tesseract.js');

function Read__Image(filePath){
    
    cy.log("Reading image from >>> "+filePath);
   
    // var res = Tesseract.recognize(filePath)
    // cy.log("Reading text  "+res);
    // return res;

    return new Cypress.Promise(resolve => {
        var res = Tesseract.recognize(filePath);
        resolve(res);
      });
    // .catch(err => cy.log(">>>   Error reading text from image: "+err))
    // .then(function (result) {
    //     cy.log(">>> TESSERACT: "+result.text);
        
    //     //process.exit(0);
    //    return result.text;
    // });
}

Cypress.Commands.add("Read__Image", Read__Image);

// Cypress.Commands.add("Read__Image", async ()=> {
//     const filePath = '../screenshots/calculatorSteps/calculatorSteps.feature/';
//     var fileName = '1-Substraction-calc-image.png';
//     var res = await Tesseract.recognize(filePath+fileName+".png")
//     return res
// })

