Feature: Launch the online calculator application and check basic arithmetic operations


    As a end user I should be able to perform basic
    arithmetic operations on the online calculator.


    Scenario: Verify the URL and the application canvas
        Given Launch online calculator
        And Verify the page URL to contain "www.online-calculator.com/html5/online-calculator/index" and the canvas is visible


    Scenario: Verify Addition operations on the online calculator
        Given Launch online calculator
        Then Perform "Addition" to check the functionality
            | Calculations                      | ExpectedResult |
            | 1 + 2                             | 3              |
            | 1 + 2 + 3                         | 6              |
            | 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 | 45             |
            | 99999999 + 1                      | 100 000 000    |
            | 1 + 0                             | 1              |
            | 999999999 + 0                     | 999999999      |
            | 999999999 + 1                     | 1e+9           |
            | 0.5 + 0.5 + 0.5                   | 1.5            |
            | - 2 - 1                           | -3             |


    Scenario: Verify Substraction operations on the online calculator
        Given Launch online calculator
        Then Perform "Substraction" to check the functionality
            | Calculations    | ExpectedResult |
            | - 50 - 60 + 1   | -109           |
            | 2 - 1           | 1              |
            | 1 - 2 - 3       | -4             |
            | 99999999 - 1    | 99 999 998     |
            | 0 - 1           | -1             |
            | 999999999 - 0   | 999 999 999    |
            | - 999999999 - 0 | -999 999 999   |


    Scenario: Verify Divission operations on the online calculator
        Given Launch online calculator
        Then Perform "Division" to check the functionality
            | Calculations         | ExpectedResult |
            | 4 / 2                | 2              |
            | 10 / 5 / 2           | 1              |
            | 999999999 / 0        | Error          |
            | m 4 / m 2            | 2              |
            | 4 / m 2              | -2             |
            | 50 / 2 - 10 + 2      | 17             |
            | - 50.4 / 15 - 7 + 10 | -0.36          |
