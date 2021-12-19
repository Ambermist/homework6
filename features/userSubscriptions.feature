Feature: userSubscriptions

    Background:
        When I go to "https://viktor-silakov.github.io/course-sut/?quick"
        When I login as: "walker@jw.com", "password"

    Scenario: Create users and subscriptions
        When I go to "Create User" menu item
        When I fill user form:
            """
            email: 'test1@test.com'
            password: 'U&cmpYsxK9'
            Address: 'Rustaveli 20-21'
            Address2: 'flor 4'
            City: 'Tbilisi'
            Zip: 222567
            Description: 'test user1'
            Annual: 100
            """        
        When I go to "Create User" menu item
        When I fill user form:
            """
            email: 'test2@test.com'
            password: 'U&cmpYsxK9'
            Address: 'Rustaveli 20-21'
            Address2: 'flor 4'
            City: 'Tbilisi'
            Zip: 222567
            Description: 'test user2'
            Annual: 100
            """        
        When I go to "Create User" menu item
        When I fill user form:
            """
            email: 'test3@test.com'
            password: 'U&cmpYsxK9'
            Address: 'Rustaveli 20-21'
            Address2: 'flor 4'
            City: 'Tbilisi'
            Zip: 222567
            Description: 'test user3'
            Annual: 100
            """        
        When I go to "Create Subscription" menu item
        When I fill form:
            """
            plan: 'Education'
            years: '1'
            user: 'test1@test.com'
            suspend: 'yes'
            description: 'subscr1'
            """
        When I go to "Create Subscription" menu item
        When I fill form:
            """
            plan: 'Premium'
            years: '1'
            user: 'test2@test.com'
            suspend: 'yes'
            description: 'subscr2'
            """
        When I go to "Create Subscription" menu item
        When I fill form:
            """
            plan: 'Enterprise'
            years: '2'
            user: 'test3@test.com'
            suspend: 'yes'
            description: 'subscr3'
            """
        Then I check table:
            | Plan | User           | Years | Total | Suspend | Description |
            | EDU  | test1@test.com | 1     | 100   | on      | subscr1     |
            | PREM | test2@test.com | 1     | 100   | on      | subscr2     |
            | ENT  | test3@test.com | 2     | 200   | on      | subscr3     |
        When I go to "List of users" menu item
        Then I check table:
           || Email          | Role | Address 1       | Address 2 | City    | Zip    | Description |
        | | test1@test.com | user | Rustaveli 20-21 | flor 4    | Tbilisi | 222567 | test user1  |
        | | test2@test.com | user | Rustaveli 20-21 | flor 4    | Tbilisi | 222567 | test user2  |
        | | test3@test.com | user | Rustaveli 20-21 | flor 4    | Tbilisi | 222567 | test user3  |
        Then I log out


