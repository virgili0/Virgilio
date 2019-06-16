# **What** do you need to do Machine Learning?

# Introduction 
The application of Machine Learning techniques is critical in analysing the data available to (public) organisations and extracting value from them. In order to do that, you need some critical elements.

# What you will learn 
In this guide you will learn which elements do you need to get started with Machine Learning.

The elements listed in this guide are of 3 types: 

 - **know-how**
 - **data**
 - **computational resources**

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
Virtually every area of science and economics has access to a **quantity of data** unimaginable even a decade ago.

In addition to this, today there is **abundant and inexpensive computing capacity** available through cloud service providers. 

It is also important that international **research is excited about machine learning** topics, and therefore proceeds expeditiously in the development of increasingly effective techniques.

Parallel to this, the engineering world creates the ML toolbox by adjusting itself accordingly: **wonderful frameworks and high-level interfaces to apply ML techniques quickly**, going towards more user-friendly "enablers".

Keras, a high-level framework that allows you to train a deep neural network in 15 lines of code, is a a perfect example of this phenomenon.
In the same way cloud providers offer you the possibility to host on their machines your ML models, with powerful logic that allows you to build a complete AI/ML start-up from your laptop. 

The topics listed above have the following natural consequence:

Today, more than ever (and an enormity compared to 5 years ago) it is _easy and affordable_ for everyone to start practicing ML in everyday problems, and it is an _obligation_ in the shoes of a company that wants to remain competitive in a market that runs at crazy speed. 

Let's see which elements do you need to get started.

### Data
Data comes from the Latin Datus, which means fact, _happened_. 
Building ML programs means exploiting something that has already **happened in the past** (the data) to discover recurring patterns that suggest **how to act in the future**.

Building traditional programs is a tiring task. It requires that every single piece is built and then these are composed. It's not too different from building a house. Bricks are the modules that make it up and the house is the program in its entirety.

When it comes to Machine Learning applications, however, the matter is different. 
An ML program is something that we don't write ourselves, but rather something that we understand by observing and processing data. 

A good analogy can be the following:

While building traditional software looks more similar to building a brick house, Machine Learning is _similar to food cultivation_. Cultivation leverages the earth to do most of the work. The farmer "guides" the land, supervises it and then picks up the fruits. Likewise, thanks to Machine Learning, the programmer tries to make the data do the bulk of the work. Growers combine seeds with land to grow plants while engineers combine data with algorithms to grow programs.

It is therefore trivial to understand that if the data is to do the bulk of the work, the quality (and quantity) of the latter is strictly necessary for a model to make accurate predictions, or in general to extract knowledge effectively from them.

Today there is a large amount of data available to start practicing machine learning and discover its potential.
Let's see how we can get the existing ones and how they can be useful in solving our problems.

#### Free available data
Be happy! A lot of data is free and easy to download!
Let's see the main options:

- [Kaggle](https://www.kaggle.com/) is the go-to platform for data in general: it's a Machine Learning challenges website, and hosts an enormous quantity of datasets and analysis done by people on them. Subscribe now.
- [UCI Datasets](https://archive.ics.uci.edu/ml/index.php) is a free and immediate platform for finding thousands of datasets and their metadata. 
- [U.S. Government open data](https://www.data.gov/)
- [UK Governement open data](https://data.gov.uk/)
- [EU open data](http://data.europa.eu/euodp/en/data/)
- [A very long list from Forbes](https://www.forbes.com/sites/bernardmarr/2016/02/12/big-data-35-brilliant-and-free-data-sources-for-2016/)

#### Collect your own data
Data collection is a huge and critical topic, which technical details go outside the scope of this guide. 
We'll see in a dedicated Purgatorio's guide how to collect huge quantities of data through scraping and other sources.
To first taste the awesome free tools that we can use, take a look the ones from [Digital Methods](https://tools.digitalmethods.net)!
Take also a look to the [Snorkel](https://hazyresearch.github.io/snorkel/blog/snorkel_programming_training_data.html) project from Stanford, seems very promising.

#### Look under the bed
More and more organizations are realizing that they are sitting in a gold mine. Years and years of historical data, from machines, conversation logs, transactions or sensor measurements are only waiting for you! They _probably_ hide a tremendous value to be unlocked, so why not to take a look at that relational database!

The bottom line is: If you have a lot of data coming from a business process, probably they are worth their bytes in gold (uh, this analogy doesn't seem to fit well).

### Know-how
Doing data science is not simple. It will **never be**, if you want to fully understand the mathematical processes behind the elegant models offered by high-level interfaces such as Keras. Learn to hate those who say "learn data science in 6 weeks". 
In one sense it's _totally false_, in the other it's _disrespectful_ to those who study these issues for years, learning new things every day. This does not mean that we should be discouraged, on the contrary! **Virgilio is here to help you in this fascinating process**. 

- If you are a student or a technician in general who wants to experience these innovative themes at first hand, follow the path that has been prepared for you starting from Purgatorio, and with the right time and determination you will get incredible results. 

- If you are just interested in knowing what know-how is needed (for example in order to form a team that can develop large data science projects in your company) here are some tips for you.

Let's see what stages the process of developing a DS project consists of:

![Figure 1-1](https://raw.github.com/clone95/Data-Science-Study-Paths-March-2019/master/Topics/lifecycle.png "1") 

Let's have a look.

Once the requirements of the application that you want to develop to solve the problem have been collected, the data science cycle usually consists of experimenting with solutions in an iterative way by collecting data and shaping the problem. 

Data collection consists of putting together data sources, building pipelines to pre-process them, and having a place to put them on hold for analysis. Modeling the problem consists of feature engineering (i.e. combining existing data in a meaningful way), training models and evaluating their performance.

Once a satisfactory model has been obtained, it must be put into production so that it can solve the user's requirement.

Once in production, the model needs to be monitored, and soon it may have to be modified as requirements change.
As you can easily guess, the data science process involves different figures for its success, even if the web services provided by large technology companies allow anyone to start developing ML solutions without worrying about the integration or management of the underlying systems. 

These figures have blurred boundaries in terms of skills and knowledge, and in general the ideal would be for each individual to _be able to move with agility between the different tasks of the data science process_. If this is possible for small scale projects, it is true that the needs of a company often require the coordinated effort of several people to be successful. 

Names like "data scientist" or "data engineer" are described differently depending on the source. Here at Virgilio we believe that the classification made by [KDNuggets](https://www.kdnuggets.com/) is the most comprehensive and clear.

In this awesome [blog post](https://www.kdnuggets.com/2019/03/building-effective-data-science-teams.html) you can find in detail the differences between these figures. 

If you're just thinking about learning everything you need by your own, you're in the right place! Starting from Purgatorio our purpose is to educate a "liquid" figure who can move around among the different tasks and parts of the data science process. 

Sooner or later you'll have to choose something to specialize in, maybe data visualization or model architecture, but before then the path we propose here at Virgilio is mixed between these "predefined" figures and contains all the interdisciplinary topics that a member of a data science team should at least be aware of.

Now that you know what know-how you need for your ML projects, let's take a look at the requirements in terms of computational resources.  

### Computational Power

Don't believe who tells you that you need to buy a high-performance machine to make ML. Probably lives in 2010! In fact nowadays it is almost unthinkable for individuals (or even organizations) to buy hardware devices that allow them to do ML calculations. The best thing to do is to take advantage of the power and flexibility of the cloud.
## Don't buy that
## Cloudy days
## If you still have to buy a machine
## Turn down the hype
## But keep your eyes open
## Conclusions
## Further reading






----
Written by _clone95_
