$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page Test",
  "description": "",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2586252000,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 11,
  "name": "User should see six products are displayed on homepage",
  "description": "",
  "id": "login-page-test;user-should-see-six-products-are-displayed-on-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter email id in email field",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see six products are displayed on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iEnterEmailIdInEmailField()"
});
formatter.result({
  "duration": 219833100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 84161100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 95029900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldSeeSixProductsAreDisplayedOnHomePage()"
});
formatter.result({
  "duration": 43532000,
  "status": "passed"
});
formatter.after({
  "duration": 644161100,
  "status": "passed"
});
});