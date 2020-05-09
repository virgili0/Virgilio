---
title: Chatbot with DialogFlo
author: clone95
description: The purpose of this guide is to guide you through the creation of a fully interactive and useful chatbot, with endless possibilities for business automation and improving customer experience.  
---

# Index
- [We have 99.94847 percent probability of death Luke](#We-have-99.94847-percent-probability-of-death-Luke)
- [Why DialogFlow](#Why-DialogFlow)
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

## We have 99.94847 percent probability of death Luke
In simple terms, a [Chatbot](https://medium.com/swlh/what-is-a-chatbot-and-how-to-use-it-for-your-business-976ec2e0a99f) is a computer program that simulates human conversation (in the form of texts and audio) 
which we would perceive as being intelligent and useful. 
Their most important application is personal or enterprise virtual assistants.
Chatbots can _dig through huge amounts of data_ to pick out
the best nugget for a customer, whether it is a troubleshooting solution or a recommendation for a
new product to try. Also, they offer an extremely _intuitive interface_ between your business and your customers.
Depending on the situation, a chatbot can learn from what a user
says to personalize the interaction and build off previous interaction, giving 
a [satisfying and futuristic customer experience](https://mobilemonkey.com/chatbots/chatbot-examples).

## Why Dialogflow
[DialogFlow](https://dialogflow.com/) is the beginner-friendly chatbot platform from Google, and albeit there are several platforms out 
there ([here](https://chatbotsmagazine.com/choosing-the-best-chatbot-platform-101-a-beginners-guide-e841b41192c7) a cool guide on choosing the right 
platforms), DialogFlow has the best tradeoffs in particular for a beginner. [Here](https://chatbotsjournal.com/25-chatbot-platforms-a-comparative-table-aeefc932eaff) you find 
another comparative table.
I've chosen DialogFlow because:
- Incorporates Google's machine learning expertise and products such as Google Cloud Speech-to-Text.
- Is a Google service that runs on the Google Cloud Platform, letting you scale to hundreds of millions of users.
- Is really beginner-friendly, intuitive, and has complete and clear documentation.


## Learning DialogFlow
The thing I love about DialogFlow is that's beginner friendly. In fact, the approach  we'll follow to learn how to deploy real chat-bots is the following:
- A first gentle approach through the Graphical User Interface to understand the concepts (intents, entities, context...)
- A more "coding" approach, using the Python Client for [RESTful](https://it.wikipedia.org/wiki/Representational_State_Transfer) API call to reproduce the same Agent but with code (and not clicks in the GUI).
- When we're able to build agents with Python API calls, we'll use them to create and End-to-End chatbot project that you'll deploy on several channels (Slack, Facebook, Telegram...)

This guide will use [Python](https://www.python.org/) and his [Flask](http://flask.pocoo.org/) lightweight library to let you build a complete and deployable chatbot application. So, if you don't know Python, make yourself a gift and [learn it!](https://automatetheboringstuff.com/)

Let's start!

### The GUI approach 
The first thing I suggest you do is going through the [official introduction](https://dialogflow.com/docs) and step-by-step tutorial. It will bring you from zero to be able to create an Agent (the single chatbot application) with the GUI.
[Here](https://console.dialogflow.com/api-client/#/login) you can start to build your agent and follow the steps of the tutorial. 
You won't have a problem during this phase, you don't have to code anything, just follow the tutorial up to "Fulfillment".

### Our first agent
If you've followed the guide with attention, you're now able to create a simple chatbot from the GUI.
So let's get our hands dirty and create our first agent! 

- Create a new Agent and develop it from the GUI, until he's able to reproduce this "I'm lost" Intent with FollowUpIntents:

Bot: Hi! I'm Virgilio! How can I help you?\
Human: Tell me which is the best _Data Science_ project in _Italy_.\
B: Without a doubt, the best project about _Data Science_ in _Italy_ is _Virgilio_! Do you want to reach it?\
H: Yes.\
B: Here's the link, you're welcome :) \
B: [ ...drops the link ]

That's it, for now. Try to reproduce the conversation, you can try your agent from the top-right bar in the GUI.
Notice that you have three entities here. Which ones?
Remember that you can use both system entities (like an hour, date, languages, places...), and custom entities!
When you're done, let's go for the next step!

### Experimenting the API
Now that you're really comfortable with the DialogFlow concepts, we can dive deep down the rabbit hole and et up the environment for developing a chatbot with Python. This will bring us al the power of the code to build and handle a lot of chatbots (and many more things).
Assuming that you have Python3 installed, install the [Python SDK](https://dialogflow-python-client-v2.readthedocs.io/en/latest/index.html) going in the folder where you want to put your configuration files, launch a shell and digit:

```
pip install dialogflow
```

If it doesn't work, maybe is because you have an old installation of Python 2. In that case, digit:

```
pip3 install dialogflow
```

Now go [here](https://github.com/googleapis/dialogflow-python-client-v2/tree/master/samples) and be happy. A lot of work is already done in these examples, and with them, you can already do a lot of things. I create the folder "examples" where I put those python files.
Now follow the "Before you begin" instructions [here](https://dialogflow-python-client-v2.readthedocs.io/en/latest/).
Create a new agent in the project and add an intent from the GUI.
Connect to that agent initializing the dialogflow client from your python script and read the Intents already existent in the Agent.
It will be like:

```
from examples import intent_management
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = <your path>/<your credentials file>.json"
projectID = <your project id>

client = dialogflow.IntentsClient()
parent = client.project_agent_path(projectID)
management.list_intents(parent)
```

It should return you a JSON with all the information requested (in this case, your existing intents).
JSON is the new de-facto standard for information representation, so [get comfortable](https://www.w3schools.com/whatis/whatis_json.asp) with it!

So, you have these files with a wrapper for the low-level functions (in this case, the low-level function in the intent_management.py is called at line 40 inside the list_intent() function).

These files are really useful to get started, but in the end, you want to have the most possible expressiveness and flexibility. So you want to master the lower level functions.

### A deeper approach

Try now to re-produce the Intent we have created with the lower level functions of the dialogflow module. You have here all the pieces of information you need, the [documentation](https://cloud.google.com/dialogflow-enterprise/docs/reference/rest/v2-overview) is really well done! In general, each time you want to communicate with the API you need to build a JSON (your request) and you'll receive a JSON (the response). 

### Up and running with Flask and webhooks

Dialogflow's APIs allows you to take action on your own systems based on conversational input, embed your conversational interface into your app or website, and dynamically change your agent's behavior. Dialogflow APIs center around three primary use cases:

- Fulfillment: take action on your own systems based on conversational input. You can do things like querying a database or API to provide info to your users with any integration (Actions on Google, Slack, etc.)
- Detect Intent API: Embed your conversational interface built with Dialogflow into your app, website or device. Call this API with a user's query to get back how your DIalogflow agent's response
- Agent API: Dynamically change your agent's behavior by editing your agent's intents, entities, and contexts. Do anything you can through Dialogflow console programmatically with Dialogflow's agent APIs.

Here you can see a clear schema.

![Figure 1-1](https://raw.githubusercontent.com/dialogflow/resources/master/images/overview.png "1") 

Basically, you want to have a .py file that builds the agent (with API calls), then your agent is ready to take in queries form the user and send them (once recognized the user query) to a backend application (your webhook). In our case, the app in the backend (the webhook) is built with Flask.

**Fulfillment** is code that's deployed as a webhook that lets your Dialogflow agent call business logic on an intent-by-intent basis. During a conversation, fulfillment allows you to use the information extracted by Dialogflow's natural language processing to generate dynamic responses or trigger actions on your back-end.

Most Dialogflow agents make use of fulfillment to do things like: generate dynamic responses based on information looked up from a database, place orders based on products a customer has asked for, implement the rules and winning conditions for a game.

### Our agent, but with API calls
It's time to get our hands dirty again!
This time we're adding the backend application acting under the hood, and not the static answers anymore.
[Here](https://www.pragnakalp.com/dialogflow-fulfillment-webhook-tutorial/) you have a consistent and complete tutorial on how to run the Flask application on your machine (using Ngrok to expose he webhook on your machine, to the Web). 
Now that you have the entire stack working, you can start creating any type of application!

### Deploying our chatbot
The smartest way to deploy your agent is through common communication channels like Facebook Messenger or Telegram.
[Here](https://hub.packtpub.com/creating-and-deploying-a-chatbot-using-dialogflow-tutorial/) you find a very comprehensive tutorial on how to deploy your chatbot application to the real worlds. It's easy, isn't it?

### Chatbot tips and best practices
I've collected here for you some best articles and StackOverflow questions containing best practices.

- [1](https://dzone.com/articles/best-practices-for-lively-chatbots), [2](https://miningbusinessdata.com/automatically-generate-dialogflow-faq-chatbot-csv-file/), [3](https://www.comm100.com/blog/chatbot-best-worst-practices.html), [4](https://chatbotsmagazine.com/11-more-best-ux-practices-for-building-chatbots-67362d1104d9), [5](https://thebrainfiles.wearebrain.com/chatbot-best-practice-learnings-and-insights-from-companies-like-abn-amro-booking-com-6e4c329c60a5), [6](https://www.marutitech.com/8-best-practices-bot-development/), [7](https://stackoverflow.com/questions/52426295/dialogflow-intent-lifespan-best-practice-and-performance)

[Here](https://medium.com/the-mission/how-to-effectively-run-a-chatbot-development-project-a445d2d1170f) and [here](https://botpress.io/blog/successful-chatbot-projects-avoid-these-mistakes/) you find two guides on how to plan a chat for your business.

### Project Ideas

I've packed here for you a list of links with a lot of project ideas. Have fun!

- [1](https://chatbotsmagazine.com/80-chatbot-ideas-for-enterprise-bots-4bb73281f593), [2](https://www.messengerpeople.com/best-of-8-chatbot-projects-you-will-love-to-discover/), [3](https://www.quora.com/What-are-some-cool-ideas-where-chat-bots-can-be-put-to-use), [4](https://www.wordstream.com/blog/ws/2017/10/04/chatbots), [5](https://www.ideas2it.com/blogs/50-chatbot-use-cases/)


----
Written by _clone95_
