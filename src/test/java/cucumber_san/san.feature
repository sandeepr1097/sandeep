Feature: This is Login Test
  This scenario is for Login

  @Login_test
  Scenario: Successful Login
    When I Enter my user id in "san" username field
    And password in "1997" password field
    And i click on login
    Then the homepage is displayed
  