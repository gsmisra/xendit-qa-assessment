import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Calculator from './calculatorPage';

//var Tesseract = require('tesseract.js');
const filePath = '../screenshots/calculatorSteps/calculatorSteps.feature/';


Before(()=>{
    const app_url = Cypress.env("online_calc_url");
    cy.visit(app_url);
    Calculator.OBJ_CANVAS();
})


Then("Perform {string} to check the functionality", (calculationName, dataTable) => {
    var counter=1;
    const data = dataTable.hashes();
    data.forEach(row => {
        cy.log("The key stroke is.......... "+row.Calculations);
        var split_key_press = row.Calculations.split(" ");
        
        for(var i=0; i<split_key_press.length; i++){
            cy.Key__Press(split_key_press[i]);
        }

        cy.Key__Press("=");
        cy.wait(1000);
        cy.setResolution( [ 600, 600 ] );
        var fileName = counter+"-"+calculationName+"-calc-image";       
        cy.get("#canvas").screenshot(fileName, { clip: { x: 80, y: 27, width: 350, height: 65 } });
        //cy.matchImageSnapshot(fileName, { clip: { x: 110, y: 27, width: 390, height: 65 } });
        cy.matchImageSnapshot(fileName);
        cy.wait(1000);
        counter=counter+1;
        cy.Key__Press("C");
    });
})
