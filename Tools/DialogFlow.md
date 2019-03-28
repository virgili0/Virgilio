
# ChatBots with DialogFlow, Python and Flask

## We have 99.94847 percent probability of death, Luke
In simple terms, a [Chatbot](https://medium.com/swlh/what-is-a-chatbot-and-how-to-use-it-for-your-business-976ec2e0a99f) is a computer program that simulates human conversation (in the form of texts and audio) 
which we would perceive as being intelligent and useful. 
Their most impotant application are personal or enterprise virtual assistants.
Chatbots have the ability to _dig through huge amounts of data_ to pick out
the best nugget for a customer, weather it is a troubleshooting solution or a recommendation for a
new product to try. Also, they offer a extremely _intuitive interface_ between your business and you customers.
Depending on the situation, a chatbot can learn from what a user
says to personalize the interaction and build off previous interaction, giving 
a [satisfying and futuristic customer experience](https://mobilemonkey.com/chatbots/chatbot-examples).

## Why Dialogflow
[DialogFlow](https://dialogflow.com/) is the beginner friendly chatbot platform from Google, and albeit there are several platforms out 
there ([here](https://chatbotsmagazine.com/choosing-the-best-chatbot-platform-101-a-beginners-guide-e841b41192c7) a cool guide on choosing the right 
platforms), DialogFlow has the best tradeoffs in particular for a beginner. [Here](https://chatbotsjournal.com/25-chatbot-platforms-a-comparative-table-aeefc932eaff) you find 
another comparative table.
I've chosen DialogFlow because:
- Incorporates Google's machine learning expertise and products such as Google Cloud Speech-to-Text.
- Is a Google service that runs on Google Cloud Platform, letting you scale to hundreds of millions of users.
- Is really beginner-friendly, intuitive, and has a complete and clear documentation.
  
## Prerequisites 
This guide will use [Python](https://www.python.org/) and his [Flask](http://flask.pocoo.org/) lightweight library to let you build a complete and deployable 
chatbot application. So, if you don't know Python, make yourself a gift and [learn it!](https://automatetheboringstuff.com/)


# Index
- [Learning DialogFlow](#Learning-DialogFlow)
  - [The GUI approach](#The-GUI-approach) 
  - [A deeper approach](#A-deeper-approach)
  - [Our first agent](#Our-first-agent)
  - [Experimenting the API](#Experimenting-the-API)
- [Hands-on Project](#Hands-on-Project)
  - [Up and running with Flask and webhooks](#Up-and-running-with-Flask-and-webhooks)
  - [Our agent, but with API calls](#Our-agent,-but-with-API-calls)
  - [Handling webhooks with Flask](#Handling-webhooks-with-Flask)
  - [Deploying our chatbot](#Deploying-our-chatbot)
  - [Chatbot tips and best practices](#Chatbot-tips-and-best-practices)
  - [Project Ideas](#Project-Ideas)

## Learning DialogFlow
The thing I love about DialogFlow is that's beginner friendly. In fact, the approach  we'll follow te learn how to deploy real chat-bots is the following:
- A first gentle approach through the Graphical User Interface to understand he concepts (intents, entitites, context...)
- A more "coding" approach, using the Python Client for [RESTful](https://it.wikipedia.org/wiki/Representational_State_Transfer) API call to reproduce the same Agent but with code (and not clicks in the GUI).
- When we're able to build agents with Python API calls, we'll use them to create and End-to-End chatbot project that you'll deploy on Facebook Messenger
Let's start!

### The GUI approach 
The first thing I suggest you to do is going through the [official introduction](https://dialogflow.com/docs) and step-by-step tutorial. It will bring you from zero to be able to create an Agent (the single chatbot application) with the GUI.
[Here](https://console.dialogflow.com/api-client/#/login) you can start build your agent and follow the steps of the tutorial. 
You won't have problem during this phase, you don't have to code anything, just follow the tutorial up to "Fulfillment".

### Our first agent
If you've followed the guide with attention, you're now able to create a simple chatbot from the GUI.
So let's get our hands dirty and create or first agent! 

- Create a new Agent and develop it from the GUI, until he's able to reproduce this Intent with FollowUpIntents:

Bot: Hi! I'm Virgilio! How can I help you?
Human: Tell me which is the best _Data Science_ project in _Italy_.
B: Without a doubt, the best project about _Data Science_ in _Italy_ is _Virgilio_! Do you want to reach it?
H: Yes.
B: Here's the link, you're welcome :) 
B: [ ...drops the link ]

That's it, for now. Try to reproduce the conversation, you can try your agent from the top-right bar in the GUI.
Notice that you have two entities here. Which ones?
Remember that you can use both system entities (like hour, date, languages, places...), and custom entities!
When you're done, let's go for the next step!

### Experimenting the API
### A deeper approach
### Hands-on Project
### Up and running with Flask and webhooks
### Our agent, but with API calls
### Handling webhooks with Flask
### Deploying our chatbot
### Chatbot tips and best practices
### Project Ideas



----
Written by _clone95_
