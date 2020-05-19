@ayhan3
Feature: API Test

  Scenario: Counting posts for user 5

    When I get a list of blog posts using the API endpoint
    Then user 5 should have 10 posts

  Scenario: Counting posts for user 7

    When I get a list of blog posts using the API endpoint
    Then user 7 should have 10 posts

  Scenario: Counting posts for user 9

    When I get a list of blog posts using the API endpoint
    Then user 9 should have 10 posts

  Scenario: Unique ID per post

    When I get a list of blog posts using the API endpoint
    Then each blog post should have a unique ID
