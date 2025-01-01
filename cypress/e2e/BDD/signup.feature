Feature: Sign Up Flow

  Scenario: User creates an account successfully
    Given The user is on the registration page
    When The user fills in valid account details
    And Submits the form
    Then The account should be created successfully

 
