@ayhan2
Feature: Simple Site Crawl

  Background:

    Given I go to main page
    When I should see page title as "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more"
    And I wait 5 seconds for element having id "twotabsearchtextbox" to display
    Then I see id "twotabsearchtextbox" element

  Scenario: Simple Site Crawl

    Given I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[1]"
    Then I see xpath "//*[@id="searchDropdownBox"]/option[1]" element

    When I click on element having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    When I create new txt file
    And I get of page info
    And I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[2]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[3]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[4]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[5]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[6]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[7]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[8]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[9]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[10]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[11]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[12]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[13]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[14]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[15]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[16]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[17]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[18]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[19]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[20]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[21]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[22]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[23]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[24]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[25]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[26]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[27]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    Given I get of page info
    When I click on element having id "searchDropdownBox"
    Then I see id "searchDropdownBox" element

    When I click on element having xpath "//*[@id="searchDropdownBox"]/option[28]"
    And I clear input field having id "twotabsearchtextbox"
    And I enter "apple" into input field having id "twotabsearchtextbox"
    And I click on element having xpath "//*[@class='nav-search-submit nav-sprite']//*[@value='Go']"
    Then I see id "a-autoid-0" element

    When I get of page info
    Then I send email

