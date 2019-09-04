package cucumber_san;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login_sannn 
{
	@When("I Enter my user id in {string} username field")
	public void i_Enter_my_user_id_in_username_field(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		System.out.println("username:"+string);
	}

	@When("password in {string} password field")
	public void password_in_password_field(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		System.out.println("password:"+string);
	}

	@When("i click on login")
	public void i_click_on_login() {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		System.out.println("clicked login");
	}

	@Then("the homepage is displayed")
	public void the_homepage_is_displayed() {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		System.out.println("homepage displayed");
	}


}
