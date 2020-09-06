Cypress.Commands.add("fnLogin", (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()

    cy.get("#signin_button").contains("Signin").click()

    cy.get("#user_login").clear().type(username, {delay: 200})
    cy.get("#user_password").clear().type(password)

    cy.get("#user_remember_me").check()
    cy.get("#user_remember_me").should("be.checked")

    cy.get("input[value='Sign in']").click()
})


Cypress.Commands.add("Key__Press",(buttonName) => {

    cy.log("Button to press.......... "+ buttonName)
    var num_of_chars = buttonName.length
    
    for (var i=0; i<num_of_chars; i++){    
        switch (buttonName.charAt(i)){

            case "C":
                cy.get("#canvas").click(400, 150)    // Clear
                break;

            case "7":
                cy.get("#canvas").click(50, 250)    //7
                break;

            case "4":
                cy.get("#canvas").click(50, 350)    //4
                break;

            case "1":
                cy.get("#canvas").click(50, 450)    //1
                break;

            case "0":
                cy.get("#canvas").click(50, 500)    //0
                break;

            case "/":
                cy.get("#canvas").click(330, 250)    // Divide
                break;

            case "*":
                cy.get("#canvas").click(330, 350)    // Multiply
                break;
                
            case "-":
                cy.get("#canvas").click(330, 450)    // Minus
                break;

            case "+":
                cy.get("#canvas").click(330, 500)    // Add
                break;

            case "8":
                cy.get("#canvas").click(150, 250)    //8
                break;

            case "5":
                cy.get("#canvas").click(150, 350)    //5
                break;

            case "2":
                cy.get("#canvas").click(150, 450)    //2
                break;

            case ".":
                cy.get("#canvas").click(150, 500)    //. (dot)
                break;

            case "9":
                cy.get("#canvas").click(230, 250)    //9
                break;

            case "6":
                cy.get("#canvas").click(230, 350)    //6
                break;

            case "3":
                cy.get("#canvas").click(230, 450)    //3
                break;

            case "m":
                cy.get("#canvas").click(230, 500)    // +/-
                break;            

            case "=":
                cy.get("#canvas").click(400, 500)    // Equal to
                break;
        }
    }
})


import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command"

addMatchImageSnapshotCommand({
    failureTreshold: 10.0,
    failureTresholdType: "percent",
    customDiffConfig: { treshold: 10.0 },
    capture: "viewport"
})

Cypress.Commands.add("setResolution", size => {
    if(Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
    }

    else{
        cy.viewport(size)
    }
})

import promisify from 'cypress-promise'
Cypress.Commands.add("callTeseract", async ()=> {
    const filePath = '../screenshots/calculatorSteps/calculatorSteps.feature/';
    var fileName = '1-Substraction-calc-image.png';
    var res = cy.Read__Image(filePath+fileName+".png")
    return res
})
