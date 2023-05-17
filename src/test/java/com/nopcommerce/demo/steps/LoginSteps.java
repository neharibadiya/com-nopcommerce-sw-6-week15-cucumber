package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
    @When("^I click on login link$")
    public void iClickOnLoginLink() {

    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        new HomePage().clickOnLoginLink();
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) throws Throwable {
        new LoginPage().enterEmailId(email);
    }

    @And("^I enter Password \"([^\"]*)\"$")
    public void iEnterPassword(String password) throws Throwable {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on Login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I am unable to login with invalid credentials$")
    public void iAmUnableToLoginWithInvalidCredentials() {

    }

    @Then("^I should login successfully with valid credentials$")
    public void iShouldLoginSuccessfullyWithValidCredentials() {
       // Assert.assertTrue("Logout link is not displayed","Logout",new HomePage().isLogOutLinkDisplay());
    }

    @And("^I click on logout link$")
    public void iClickOnLogoutLink() {
    }

    @Then("^I should logOut successFully and i should see login link$")
    public void iShouldLogOutSuccessFullyAndIShouldSeeLoginLink() {
    }
}
