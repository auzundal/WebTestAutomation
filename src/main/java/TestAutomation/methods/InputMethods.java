package TestAutomation.methods;

import org.openqa.selenium.support.ui.ExpectedConditions;

public class InputMethods extends SelectElementByType implements BaseTest {

    /**
     * Method to enter text into text field
     *
     * @param accessType : String : Locator type (id, name, class, xpath, css)
     * @param text       : String : Text value to enter in field
     * @param accessName : String : Locator value
     */
    public void enterText(String accessType, String text, String accessName) {
        wait.until(ExpectedConditions.presenceOfElementLocated(getElementByType(accessType, accessName)));
        driver.findElement(getElementByType(accessType, accessName)).sendKeys(text);
    }

    /**
     * Method to clear text of text field
     *
     * @param accessType : String : Locator type (id, name, class, xpath, css)
     * @param accessName : String : Locator value
     */
    public void clearText(String accessType, String accessName) {
        wait.until(ExpectedConditions.presenceOfElementLocated(getElementByType(accessType, accessName)));
        driver.findElement(getElementByType(accessType, accessName)).clear();
    }
}
