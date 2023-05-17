$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerPage.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As a use I want to go on computer page",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 13,
  "name": "Verify user should navigate to Desktops page successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Computer Tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify Desktops text",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("loginpage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a user I would like to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"test123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Password \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am unable to login with invalid credentials",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("registerpage.feature");
formatter.feature({
  "line": 1,
  "name": "Register page",
  "description": "As a user i want to register with nopcommerce website",
  "id": "register-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 13,
  "name": "Verify that firstName,lastName,email,password and confirmPassword fields are mandatory",
  "description": "",
  "id": "register-page;verify-that-firstname,lastname,email,password-and-confirmpassword-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify the firstName error message",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Verify the lastName error message",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the email error message",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the password error message",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify the confirmPassword error message",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});