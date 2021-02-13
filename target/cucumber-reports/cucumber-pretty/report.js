$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/EasyTrip.feature");
formatter.feature({
  "line": 1,
  "name": "Login into EasyTrip",
  "description": "",
  "id": "login-into-easytrip",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Click on LogIn button",
  "description": "",
  "id": "login-into-easytrip;click-on-login-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Navigate to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the title of the Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on My Account",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter\t\"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on Log in button",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-into-easytrip;click-on-login-button;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 13,
      "id": "login-into-easytrip;click-on-login-button;;1"
    },
    {
      "cells": [
        "Test@gmail.com",
        "Password@123"
      ],
      "line": 14,
      "id": "login-into-easytrip;click-on-login-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Click on LogIn button",
  "description": "",
  "id": "login-into-easytrip;click-on-login-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Navigate to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the title of the Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on My Account",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter\t\"Test@gmail.com\" and \"Password@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on Log in button",
  "keyword": "Then "
});
formatter.match({
  "location": "EasyTrip.user_Navigate_to_Login_Page()"
});
formatter.result({
  "duration": 14006235469,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.validate_the_title_of_the_Page()"
});
formatter.result({
  "duration": 2769527502,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.click_on_My_Account()"
});
formatter.result({
  "duration": 366335275,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.click_on_Sign_in_button()"
});
formatter.result({
  "duration": 827759424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@gmail.com",
      "offset": 7
    },
    {
      "val": "Password@123",
      "offset": 28
    }
  ],
  "location": "EasyTrip.enter_and(String,String)"
});
formatter.result({
  "duration": 1089092171,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.click_on_Log_in_button()"
});
formatter.result({
  "duration": 1616974325,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Navgate different services",
  "description": "",
  "id": "login-into-easytrip;navgate-different-services",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User Navigate to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Validate the title of the Page",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Click on Flights",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click on Hotels",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on Train",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on Bus",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click on Cab",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Click on giftcard",
  "keyword": "Then "
});
formatter.match({
  "location": "EasyTrip.user_Navigate_to_Login_Page()"
});
formatter.result({
  "duration": 15685444019,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.validate_the_title_of_the_Page()"
});
formatter.result({
  "duration": 19656069,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.click_on_Flights()"
});
formatter.result({
  "duration": 5270264328,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.click_on_Hotels()"
});
formatter.result({
  "duration": 1932042411,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.click_on_Train()"
});
formatter.result({
  "duration": 1931393638,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.click_on_Bus()"
});
formatter.result({
  "duration": 2891723892,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.click_on_Cab()"
});
formatter.result({
  "duration": 2543984282,
  "status": "passed"
});
formatter.match({
  "location": "EasyTrip.click_on_giftcard()"
});
formatter.result({
  "duration": 3497825716,
  "status": "passed"
});
});