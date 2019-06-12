# What do you need to do Machine Learning?

# Introduction 
The application of Machine Learning techniques is critical in analysing the data available to (public) organisations and extracting value from them. In order to do that, you need some critical elements.

# What you will learn 
In this guide you will learn which elements do you need to get started with Machine Learning.

The elements listed in this guide are of 3 types: 

 - know-how
 - data
 - computational resources.

These elements enable you to practice machine learning first-hand (small scale) or start machine learning projects to innovate an organization (big scale).


## Prerequisites
Read [Demystification of AI, ML and DS](Demystification.md) before this guide.

## Time to complete
Approximately 45 minutes. Less than a Netflix episode!

# Index
- [The three elements](#The-three-elements)
  - [Data](#Data)
  - [Know-how](#Know-how)
  - [Computational Power](#Computational-Power)
- [Cloudy days](#Cloudy-days)
- [If you still have to buy a machine](#If-you-still-have-to-buy-a-machine)
- [Turn down the hype](#Turn-down-the-hype)
- [But keep your eyes open](#But-keep-your-eyes-open)
- [Conclusions](#Conclusions)
- [Further reading](#Further-reading)

### The three elements
Virtually every area of science and economics has access to a quantity of data unimaginable even a decade ago. 
In addition to this, today there is abundant and inexpensive computing capacity available through cloud service providers. 
It is also important that international research is excited about machine learning topics, and therefore proceeds expeditiously in the development of increasingly effective techniques.
Parallel to this, the engineering world creates the ML toolbox by adjusting itself accordingly: wonderful frameworks and high-level interfaces to apply ML techniques quickly, going towards more user-friendly "enablers". Keras, a high-level framework that allows you to train a deep neural network in 15 lines of code, is a a perfect example of this phenomenon. In the same way cloud providers offer you the possibility to host on their machines your ML models, with powerful logic that allows you to build a complete AI/ML start-up from your laptop. 

The topics listed above have the following natural consequence:

Today, more than ever (and an enormity compared to 5 years ago) it is _easy and affordable_ for everyone to start practicing ML in everyday problems, and it is an _obligation_ in the shoes of a company that wants to remain competitive in a market that runs at crazy speed. 

#### Data
Data comes from the Latin Datus, which means fact, _happened_. 
Building ML programs means exploiting something that has already happened in the past (the data) to discover recurring patterns that suggest how to act in the future.

Building traditional programs is a tiring task. It requires that every single piece is built and then these are composed. It's not too different from building a house. Bricks are the modules that make it up and the house is the program in its entirety.

When it comes to Machine Learning applications, however, the matter is different. 
An ML program is something that we don't write ourselves, but rather something that we understand by observing and processing data. 

A good analogy is the following:
While building traditional software looks more similar to building a brick house, Machine Learning is similar to food cultivation. Cultivation leverages the earth to do most of the work. The farmer "guides" the land, supervises it and then picks up the fruits. Likewise, thanks to Machine Learning, the programmer tries to make the data do the bulk of the work. Growers combine seeds with land to grow plants while engineers combine data with algorithms to grow programs.

It is therefore trivial to understand that if the data is to do the bulk of the work, the quality (and quantity) of the latter is strictly necessary for a model to make accurate predictions, or in general to extract knowledge effectively from them.

Today there is already a large amount of data available to start practicing machine learning and discover its potential.
Let's see how we can get the existing ones and how they can be useful in solving our problems.

There is already a large amount of data available to start practicing machine learning and discover its potential.
Let's see how we can get the existing ones and how they can be useful in solving our problems.

##### Free available data
Be happy! A lot of data is free and easy to download!
Let's see the main options:

- [Kaggle](https://www.kaggle.com/) is the go-to platform for data in general: it's a Machine Learning challenges website, and hosts an enormous quantity of datasets and analysis done by people on them. Subscribe now.
- [UCI Datasets](https://archive.ics.uci.edu/ml/index.php) is a free and immediate platform for finding thousands of datasets and their metadata. 
- [U.S. Government open data](https://www.data.gov/)
- [UK Governement open data](https://data.gov.uk/)
- [EU open data](http://data.europa.eu/euodp/en/data/)
- [A very long list from Forbes](https://www.forbes.com/sites/bernardmarr/2016/02/12/big-data-35-brilliant-and-free-data-sources-for-2016/)

##### Collect your own data
Data collection is a huge and critical topic, which technical details go outside the scope of this guide. 
We'll see in a dedicated Purgatorio's guide how to collect huge quantities of data through scraping and other sources.
To first taste the awesome free tools that we can use, take a look the ones from [Digital Methods](https://tools.digitalmethods.net)!

##### Look under the bed
More and more organizations are realizing that they are sitting in a gold mine. Let's see some examples:

**First case**: speech-to-text processing of a phone call.

In this case, what I want to do is to translate an audio call into text. In the past, this was attempted using preset programs, but only the use of IA has allowed for optimal results.

The service is normally offered by the big players (Google, Microsoft, Amazon etc.) who have trained the model with millions of sentences; they make it available through API, that is through a service. In this case, the company interfaces by providing the audio file and the service responds in real time with a text.

In this case, the company buys the service it uses.

Once you have obtained the text on it you can perform several operations: a semantic or lexical analysis, a translation possibly followed by a speech-to-text in order to hear the phone call in another language; these are evolutions that for now we do not go into.

**Second case**: recognition of an object in a photo or video.

It is only an evolution of the previous service; this time we provide the purchased service with an image, or a video, receiving in response an on/off when an object is recognized or a classification of the object itself; it depends on the compatibility between the trained model and the request that is made.

**Third case**: optimization of inbound calls of a call center

In the previous cases the trained model belonged to the external supplier; this does not prohibit, however, that the model is instead built internally. More resources would be needed, both in terms of conversations/images available and in terms of specific knowledge.

In this third case, instead, we hypothesize the internal construction of an artificial intelligence model; the case is much more interesting because it allows the company to maintain the data and the entire process of building the AI internally.

We must assume that the company in question has at its disposal the history of all the calls received, divided into the individual steps made by the operator; with them we must be able to build a chain of events that have led to a final solution. Technically, these are Markov chains, from the late 19th century mathematician who first studied and codified them.

Having a large number of these chains at our disposal, we train a model according to IA algorithms; it is necessary to have specific competence at this point to understand which is the most suitable algorithm and the calibration of the parameters necessary to obtain the best result. It is often at this point that the best intentions collapse; it is not enough to feed the data to any model, it is necessary to identify and calibrate the right model.

Once the model has been trained, it is made available to the call centre; once the call has been received and the first step has been taken, we will probably already have the next step available; after the second step, the probability of 'guessing' the next step will be even higher, and so on, optimising the process.

This example can be applied to all cases where there is a sequence of events:
- Actions of a user on the site to predict whether he will buy a product or not
- Analysis of random movements to predict the next event
- Fault/defect analysis to recognize the probability of failure from the current operation
- Analysis of behaviour to predict criminal phenomena (Minority report?)

From these examples it can be understood that the AI is a way to process data; there is no limit in the hypothesis of its use, if not in the ability of those who manage the data.

Other use cases divided by industry:
- [Manufactoring](https://medium.com/activewizards-machine-learning-company/top-8-data-science-use-cases-in-manufacturing-749256b8f1ee)
- [Telecom](https://medium.com/activewizards-machine-learning-company/top-10-data-science-use-cases-in-telecom-e9c334d42616)
- [Finance](https://towardsdatascience.com/machine-learning-in-finance-why-what-how-d524a2357b56)
- [Marketing](https://www.forbes.com/sites/louiscolumbus/2018/02/25/10-ways-machine-learning-is-revolutionizing-marketing/#71aff4fa5bb6)
- [Human Resources](https://emerj.com/ai-sector-overviews/machine-learning-in-human-resources/)

Bonus tip!
Dig into [AppliedAI](https://appliedai.com/) and search by industry or business application!

#### Know-how
#### Computational Power
### Don't buy that
### Cloudy days
### If you still have to buy a machine
### Turn down the hype
### But keep your eyes open
### Conclusions
### Further reading






----
Written by _clone95_
