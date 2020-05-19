package TestAutomation.stepDefinitions;

import Environment.DriverUtil;
import TestAutomation.methods.AssertionMethods;
import TestAutomation.methods.BaseTest;
import TestAutomation.methods.TestCaseFailed;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.io.File;
import java.util.Date;

public class PredefinedStepDefinitions extends AssertionMethods implements BaseTest {

    public static long DEFAULT_WAIT = 20;
    protected WebDriver driver = DriverUtil.getDefaultDriver();
    protected static String baseUrl = "https://www.amazon.com/";
    protected static WebElement element;
    protected static WebDriverWait wait;

    protected static Date date = new Date();
    protected static long ts = date.getTime();
    protected static String txtFileName = ts + "_result.txt";
    protected static File file = new File(txtFileName);

    @Given("^I go to main page$")
    public void iGoToMainPage() {
        driver.get(baseUrl);
    }

    //Assertion steps

    /**
     * page title checking
     *
     * @param present :
     * @param title   :
     */
    @Then("^I should\\s*((?:not)?)\\s+see page title as \"(.+)\"$")
    public void check_title(String present, String title) throws TestCaseFailed {
        //System.out.println("Present :" + present.isEmpty());
        assertionObj.checkTitle(title, present.isEmpty());
    }

    @Then("^I see? (.+) \"(.*?)\" element$")
    public void iSeeCheckElement(String type, String accessName) throws TestCaseFailed {
        miscmethodObj.validateLocator(type);
        assertionObj.isElementDisplayed(type, accessName);
    }

    // step to check element text
    @Then("^element having (.+) \"([^\"]*)\" should\\s*((?:not)?)\\s+have text as \"(.*?)\"$")
    public void check_element_text(String type, String accessName, String present, String value) throws TestCaseFailed {
        miscmethodObj.validateLocator(type);
        assertionObj.checkElementText(type, value, accessName, present.isEmpty());
    }

    // enter text into input field steps
    @Then("^I enter \"([^\"]*)\" into input field having (.+) \"([^\"]*)\"$")
    public void enter_text(String text, String type, String accessName) throws TestCaseFailed {
        miscmethodObj.validateLocator(type);
        inputObj.enterText(type, text, accessName);
    }

    // clear input field steps
    @Then("^I clear input field having (.+) \"([^\"]*)\"$")
    public void clear_text(String type, String accessName) throws TestCaseFailed {
        miscmethodObj.validateLocator(type);
        inputObj.clearText(type, accessName);
    }

    // click on web element
    @Then("^I click on element having (.+) \"(.*?)\"$")
    public void click(String type, String accessName) throws TestCaseFailed {
        miscmethodObj.validateLocator(type);
        clickObj.click(type, accessName);
    }

    //Progress methods

    // wait for specific period of time
    @Then("^I wait for (\\d+) seconds$")
    public void wait(String time) throws NumberFormatException, InterruptedException {
        progressObj.wait(time);
    }

    //wait for specific element to display for specific period of time
    @Then("^I wait (\\d+) seconds for element having (.+) \"(.*?)\" to display$")
    public void wait_for_ele_to_display(String duration, String type, String accessName) throws TestCaseFailed {
        miscmethodObj.validateLocator(type);
        progressObj.waitForElementToDisplay(type, accessName, duration);
    }

    //create new txt file
    @And("^I create new txt file$")
    public static void iCreateNewTxtFile() {
        assertionObj.createTxtFile(file);
    }

    //get of page info
    @And("^I get of page info$")
    public void iGetOfPageInfo() {
        String currentTitle = driver.getTitle();
        String currentUrl = driver.getCurrentUrl();
        String responseCode = restAPI(currentUrl);

        assertionObj.writeTxtFile(file, currentUrl, currentTitle, responseCode);

    }

    //send email
    @And("^I send email$")
    public void iSendEmail() {
        sendMailobj.sendMail(file);
    }

    //get a list of blog posts using the API endpoint
    @When("^I get a list of blog posts using the API endpoint$")
    public void iGetAListOfBlogPostsUsingTheAPIEndpoint() {
        assertionObj.restAPITest();
    }

    //compare parametric userId of blog posts using the API endpoint
    @Then("user {int} should have {int} posts")
    public void userShouldHavePosts(int userId, int numposts) {
        int APInumposts = assertionObj.restAPITestUser(userId, numposts);
        Assert.assertEquals(userId, numposts, "Numposts is equal API response!");
    }

    //check each blog post should have a unique ID
    @Then("each blog post should have a unique ID")
    public void eachBlogPostShouldHaveAUniqueID() {
        assertionObj.numPostsAPI();
    }

    //Step to close the browser
    @Then("^I close browser$")
    public void close_browser()
    {
        progressObj.closeDriver();
    }
}
