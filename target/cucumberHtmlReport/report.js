$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/1)%20Acceptance.feature");
formatter.feature({
  "name": "Acceptance Criteria Implementation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ayhan1"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I go to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.iGoToMainPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title as \"Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs \u0026 more\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.check_title(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait 5 seconds for element having id \"twotabsearchtextbox\" to display",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait_for_ele_to_display(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see id \"twotabsearchtextbox\" element",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.iSeeCheckElement(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element having id \"nav-link-accountList\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait 5 seconds for element having id \"continue\" to display",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait_for_ele_to_display(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d81.0.4044.138)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027AYHANU7\u0027, ip: \u0027192.168.10.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d81.0.4044.138 (8c6c7ba89cc9453625af54f11fd83179e23450fa-refs/branch-heads/4044@{#999}), userDataDir\u003dC:\\Users\\ayhan\\AppData\\Local\\Temp\\scoped_dir18156_1399784942}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:62975}, acceptInsecureCerts\u003dfalse, browserVersion\u003d81.0.4044.138, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 7980179ff593fb90f6727667b665c536\n*** Element info: {Using\u003did, value\u003dcontinue}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:457)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat TestAutomation.methods.ProgressMethods.waitForElementToDisplay(ProgressMethods.java:31)\r\n\tat TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait_for_ele_to_display(PredefinedStepDefinitions.java:97)\r\n\tat ✽.I wait 5 seconds for element having id \"continue\" to display(classpath:features/1)%20Acceptance.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I see id \"continue\" element",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.iSeeCheckElement(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Valid login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ayhan1"
    }
  ]
});
formatter.step({
  "name": "I click on element having id \"ap_email\"",
  "keyword": "Given "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"ayhanuzundal@gmail.com\" into input field having id \"ap_email\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.enter_text(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having id \"continue\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait 5 seconds for element having id \"ap_password\" to display",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait_for_ele_to_display(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see id \"ap_password\" element",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.iSeeCheckElement(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I go to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.iGoToMainPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d81.0.4044.138)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027AYHANU7\u0027, ip: \u0027192.168.10.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d81.0.4044.138 (8c6c7ba89cc9453625af54f11fd83179e23450fa-refs/branch-heads/4044@{#999}), userDataDir\u003dC:\\Users\\ayhan\\AppData\\Local\\Temp\\scoped_dir18156_1399784942}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:62975}, acceptInsecureCerts\u003dfalse, browserVersion\u003d81.0.4044.138, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 7980179ff593fb90f6727667b665c536\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:368)\r\n\tat TestAutomation.stepDefinitions.PredefinedStepDefinitions.iGoToMainPage(PredefinedStepDefinitions.java:34)\r\n\tat ✽.I go to main page(classpath:features/1)%20Acceptance.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see page title as \"Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs \u0026 more\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.check_title(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait 5 seconds for element having id \"twotabsearchtextbox\" to display",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait_for_ele_to_display(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see id \"twotabsearchtextbox\" element",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.iSeeCheckElement(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having id \"nav-link-accountList\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait 5 seconds for element having id \"continue\" to display",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait_for_ele_to_display(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see id \"continue\" element",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.iSeeCheckElement(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Invalid login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ayhan1"
    }
  ]
});
formatter.step({
  "name": "I click on element having id \"ap_email\"",
  "keyword": "Given "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"654654645648486@gmail.com\" into input field having id \"ap_email\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.enter_text(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having id \"continue\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait 5 seconds for element having id \"auth-error-message-box\" to display",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait_for_ele_to_display(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see id \"auth-error-message-box\" element",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.iSeeCheckElement(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});