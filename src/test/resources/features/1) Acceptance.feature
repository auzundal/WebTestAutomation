@ayhan1
Feature: Acceptance Criteria Implementation

  Background:

    Given I go to main page
    When I should see page title as "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more"
    And I wait 5 seconds for element having id "twotabsearchtextbox" to display
    Then I see id "twotabsearchtextbox" element

    When I click on element having id "nav-link-accountList"
    And I wait 5 seconds for element having id "continue" to display
    Then I see id "continue" element

  Scenario: Valid login

    Given I click on element having id "ap_email"
    When I enter "ayhanuzundal@gmail.com" into input field having id "ap_email"
    And I click on element having id "continue"
    And I wait 5 seconds for element having id "ap_password" to display
    Then I see id "ap_password" element

    Given I click on element having id "ap_password"
    When I enter "Ayhan7496" into input field having id "ap_password"

    #If Amazon.com don't want to OTP code
    And I click on element having id "signInSubmit"
    Then I see id "twotabsearchtextbox" element

  Scenario: Invalid login

    Given I click on element having id "ap_email"
    When I enter "654654645648486@gmail.com" into input field having id "ap_email"
    And I click on element having id "continue"
    And I wait 5 seconds for element having id "auth-error-message-box" to display
    Then I see id "auth-error-message-box" element

    And I close browser





