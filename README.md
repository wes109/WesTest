# BusPatrol Test Suite

Below you will find the instructions to install the the script and run it. First, I will outline the tools I decided to use:

1. **cucumberJS**

This is a great entry point into testing with JS. This allowed me to apply my usual BDD format to each step, and therefore create reusable steps.

2. **BDD - Why use it?**

The reasoning behind using Behavior Driven Development format is pretty simple:
Create reusable steps that still fit testing standard/best practices. This allows for automated test engineers to save a plethora of time, while not sacrificing quality. Not only that, you are given an easier, more direct approach to debugging.

3. **selenium-webdriver and selenium-standalone**

This is more of a personal choice as there are many tools out there to achieve the same goal. Selenium is great for frondend testing.


# How to install

1. cd into any folder (Ex. cd /Users/Wesley/Desktop)
2. git clone https://github.com/wes109/WesTest.git
3. Open WesTest folder (or cd into it)
4. npm install - This installs dev dependencies I added to the project

## If you are having issues related to your npm version
I tested my project by downloading it on my mac and attempting to run it. My NPM version was stuck <10.0.0. This article can help you fix that https://stackoverflow.com/questions/11284634/upgrade-node-js-to-the-latest-version-on-mac-os

# How to run
npm test


# Issues / Notes to consider

1. RGB Xpath Steps

Unable to automate by RGB, as all of my locator knowledge is based on inline styling and attributes (such as id=this). I went ahead and left my attempted code in there.

2. Side-bar clicking on w3Schools

I could not circumvent "element not interactable" selenium error. This is usually caused when the website has an invisible element in from of the item I am trying to click.

3. Checking //input field value

This one I blame myself for. I could not get anything other than undefined. Tried every suggestion on stack overflow, but unfortunately I did not figure it out in time.

4. BoardGameGeek - Novel-Based step

This goes back to #1 above. The only possible attribute to use is aria-hidden, however I noticed no html changes when you expand that field.

5. Strings on W3Schools

You will notice in the very first Scenario that I split up a string into parts. This is due to the fact W3Schools used html tags rather than styling to bold/italicize their text.



# Conclusion

While developing this project, I learned a lot more about Javascript than I previously thought I knew. Specifically, I always had a grim outlook on xpaths being too temperamental. However, when you look through my code you will see they are still broad in their "locating", and this is due to simply *how* I used them. In other words, any tool is right if you use it in the correct way.

Another key important lesson I learned is how important it is to code your website in a way that automation engineers can work with. W3Schools is the perfect example, as many of their titles, buttons, and links were hidden behind other elements. In other words, "element not interactable" is one of, if not the MOST common error with frontend testing, and we should avoid it at all costs!
