$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:cucumber_san/san.feature");
formatter.feature({
  "name": "This is Login Test",
  "description": "  This scenario is for Login",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful Login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I Enter my user id in username field",
  "keyword": "When "
});
formatter.match({
  "location": "Login_test.i_Enter_my_user_id_in_username_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Login_test.password_in_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Login_test.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_test.the_homepage_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Unsuccessfull Login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I Enter wrong username",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_test.i_Enter_wrong_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters wrong password",
  "keyword": "When "
});
formatter.match({
  "location": "Login_test.user_enters_wrong_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Login_test.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the homepage is not  displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_test.the_homepage_is_not_displayed()"
});
formatter.result({
  "status": "passed"
});
});