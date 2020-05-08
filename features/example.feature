Feature: BusPatrol Test

  Scenario: W3Schools 1
    Given I am on "https://www.w3schools.com/js/js_json_intro.asp"
    Then I should see "JSON: "
    Then I should see "J"
    Then I should see "ava"
    Then I should see "S"
    Then I should see "cript "
    Then I should see "O"
    Then I should see "bject"
    Then I should see "N"
    Then I should see "otation."
    Then I should see "JSON is a syntax for storing and exchanging data."
    Then I should see "JSON is text, written with JavaScript object notation."
    Then I find 3 buttons with text "Try it Yourself"
    Then I click link "Next ❯"
    Then I verify I am on page "https://www.w3schools.com/js/js_json_syntax.asp"

  Scenario: W3Schools 2
    Given I am on "https://www.w3schools.com/js/js_json_syntax.asp"
    Then I should see "JSON Syntax Rules"
    Then I should see list item "Data is in name/value pairs"
    Then I should see list item "Data is separated by commas"
    Then I should see list item "Curly braces hold objects"
    Then I should see list item "Square brackets hold arrays"
    Then I should see " must be one of the following data types:"
    Then I should see list item "a string"
    Then I should see list item "a number"
    Then I should see list item "an object (JSON object)"
    Then I should see list item "an array"
    Then I should see list item "a boolean"
    Then I should see list item "null"
    Then I should see h2 "JSON Files"
    Then I should see list item "The file type for JSON files is "
    Then I should see list item "The MIME type for JSON text is"
    Then I find 4 buttons with text "Try it Yourself"
    Then I click last link "Next"
    Then I verify I am on page "https://www.w3schools.com/js/js_json_xml.asp"

  Scenario: W3Schools 3
    Given I am on "https://www.w3schools.com/js/js_json_xml.asp"
    Then I should see "JSON vs XML"
    Then I should see "JSON HTML" link in sidebar
    #Then I click "JSON HTML" link in sidebar
    #Then I verify I am on page "https://www.w3schools.com/js/js_json_html.asp"
    
  Scenario: W3Schools 4
    Given I am on "https://www.w3schools.com/"
    Then I should see "Learn HTML"
    Then I should see "Learn HTML" link in sidebar
    # Then I click "Learn HTML" link in sidebar
    # Then I verify I am on page "https://www.w3schools.com/html/default.asp"
    # Below is my replacement step to just get to the page so I can continue Test
    Given I am on "https://www.w3schools.com/html/default.asp"
    #Then I should see it in the rgb div
    Then I fill "//input[@name='ex1']" field with "title"

  Scenario: AlertBus
    Given I am on "https://www.alertbus.com"
    Then I should see h1 "School Bus Safety Program"
    Then I should see "Find A Citation"
    Then I fill "//input[@id='citation_number']" field with "garbage"
    Then I fill "//input[@id='license_plate']" field with "trash"
    #Then I click on link with name "commit"
    #Then I verify "citation_number" field is empty
    #Then I verify "license_plate" field is empty
    #Then I should see rgb text "Please enter the entire citation number, beginning with the state code (ex: 'TX-01-...')"
  Scenario: MarkSheet
    Given I am on "https://marksheet.io/html-forms.html"
    Then I should see "Example: a complete signup form"
    Then I click radio "miss"
    Then I fill "//p[2]//input[1]" field with "John"
    Then I fill "//p[3]//input[1]" field with "Smith"
    Then I fill "//p[4]//input[1]" field with "john.smith@test.com"
    Then I fill "//p[5]//input[1]" field with "555-5555"
    Then I fill "//p[6]//input[1]" field with "password"
    Then I fill "//p[7]//input[1]" field with "password"
    Then I select "United States" option from drop down
    Then I select checkbox "//form//label[1]//input[1]"
    Then I click button "Sign up"
    Then I verify I am on page "https://marksheet.io/signup"
  Scenario: Cupcake Ipsum
    Given I am on "http://www.cupcakeipsum.com"
    Then I should see "Cupcake Ipsum - Sugar-coated Lorem Ipsum Generator"
    # Then I check value of "number_of_paragraphs" text box
    Then I click radio "short"
    Then I click radio "startsWithCupcakeIpsum"
    Then I find 1 "Cupcake ipsum dolor sit amet"
    Then I find 0 "Copy to Clipboard"
    Then I click button "Generate"
    Then I find 2 "Cupcake ipsum dolor sit amet"

  Scenario: BoardGameGeek
    Given I am on "https://boardgamegeek.com/advsearch/boardgame"
    Then I fill "//input[@id='advsearch-title']" field with "Harry Potter and the Sorcerer's Stone Trivia Game"
    Then I fill "//input[@id='advsearch-yearpublished-min']" field with "1999"
    Then I fill "//input[@id='advsearch-yearpublished-max']" field with "2000"
    Then I select "15 minutes" option from "advsearch-min-playing-time" drop down
    Then I select "1.5 hours" option from "advsearch-max-playing-time" drop down
    Then I find 0 "Novel-based" on boardgamegeek
    Then I click link "Filter on Board Game Category »"
    #Then I find 1 "Novel-based" on boardgamegeek ---- Does not work due to HTML not changing
    Then I click on button with name "B1"
    Then I verify I am on page "https://boardgamegeek.com/geeksearch.php?action=search&advsearch=1&objecttype=boardgame&q=Harry%20Potter%20and%20the%20Sorcerer%27s%20Stone%20Trivia%20Game&include%5Bdesignerid%5D=&geekitemname=&geekitemname=&include%5Bpublisherid%5D=&range%5Byearpublished%5D%5Bmin%5D=1999&range%5Byearpublished%5D%5Bmax%5D=2000&range%5Bminage%5D%5Bmax%5D=&floatrange%5Bavgrating%5D%5Bmin%5D=&floatrange%5Bavgrating%5D%5Bmax%5D=&range%5Bnumvoters%5D%5Bmin%5D=&floatrange%5Bavgweight%5D%5Bmin%5D=&floatrange%5Bavgweight%5D%5Bmax%5D=&range%5Bnumweights%5D%5Bmin%5D=&colfiltertype=&searchuser=&range%5Bminplayers%5D%5Bmax%5D=&range%5Bmaxplayers%5D%5Bmin%5D=&playerrangetype=normal&range%5Bleastplaytime%5D%5Bmin%5D=15&range%5Bplaytime%5D%5Bmax%5D=90&B1=Submit"
    Then I should see "Harry Potter and the Sorcerer"

  Scenario: gluons
    Given I am on "https://gluons.github.io/vue-radio-toggle-buttons"
    Then I click radio "Value 3" on github
    # Selecting by value=3 results in Value 4 radio being selected, yet putting 5 or 2 works
    Then I should see "Value 3" on github
    Then I click radio "Value 5" on github
    Then I should see "Value 5" on github
