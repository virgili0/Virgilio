---
title: Tools and Libraries
author: clone95
description: Learn to use existing libraries for Machine Learning and Deep Learning and out-of-the-box tools for productions systems.
---

# Index
- [How this guide is designed](#How-this-guide-is-designed)
- [Solving the Learning Problem](#Solving-the-Learning-problem)
- [Navigating the Ocean](#Navigating-the-Ocean)
- [The Data Science Process Toolkit](#The-Data-Science-Process-Toolkit) 
    + [Data Collection](#Data-Collection)
    + [Data Preparation](#Data-Preparation)
    + [Data Visualization](#Data-Visualization)
    + [Machine Learning](#Machine-Learning)
    + [Deep Learning](#Deep-Learning)
    + [Evaluation and Fine-Tuning](#Evaluation-and-Fine-Tuning)
    + [Serving Models](#Serving-Models)
    + [Miscellaneous](#Miscellaneous)

- [Production Ready Tools](#Production-Ready-Tools)
    + [Computer Vision](#Computer-vision)
    + [Natural Language](#Natural-Language)
    + [Time Series Forecasting](#Time-Series-Forecasting)

- [Conclusions](#Conclusions)

# How this guide is designed

This guide is designed in the same fashion as the **Purgatorio** structure, so you find a subsection for each phase of the Data Science process.

For _each section_, we list for you different libraries and the best resources to learn them.

We'll give you some general tips to learn effectively and develop rock-solid foundations, that you can rely on to address and solve Data Science problems in the complexity of the real world (which is messy by definition).

In this guide you'll find a ton of different small tools, big libraries and even entire frameworks, but be aware!

As stated in the [Virgilio's Teaching Strategy](https://github.com/virgili0/Virgilio/blob/master/serving/paradiso/virgilio-teaching-strategy/virgilio-teaching-strategy.md) Guide, the best way to deal with the learning process is to leverage the "[Divide et Impera](https://en.wikipedia.org/wiki/Divide_and_rule)" principle, which states that every time you're tackling a problem (in this case, the _learning problem_) you should split it in smaller parts, easier to handle and understand. 

# Solving the Learning Problem 

The process of learning a tool and use it effectively **is actually equal to solving a problem**.

We consider "solved" the problem when you can use the tool comfortably.

So, you shouldn't try to learn all the features of a library in the same run, or you're going to be overwhelmed! 

Every rich Python library contains thousands of different functions and utilities, but _you'll need a small subset to get the things done!_

**So, Virgilio suggests the following approach**:

- Choose a library from the ones that are widely used and feature-rich.
- Get a general introduction thorugh to the Virgilio's resources listed in this guide.
- Find a problem (similar but not equal to the introductory ones).
- Dig into the problem, and get your hands dirty with the chosen library.
- Learn _on the way to the problem solution_.
- Solve the problem, trying to do it yourself .

If you follow this approach, you take home the following 3 things:
- **real problem experience**
- **you feel comfortable coding with a subset of the functions of the tool**

Believe it or not, it works like magic!

Know you know how to solve a new _learning problem_.

Now, how to choose from the myriad of tools and libraries available?

# Navigating the Ocean

It's very easy to find out there articles, blog posts, and YouTube videos telling you "the 20 libraries you need to learn in 2020!". 

What? 20 libraries? 

Come on, this is ridicolous _and_ impossible, for a beginner!

Don't even try to do that, or you will miserably get stuck, because it is impossible to learn 20 programming libraries together, even for an expert.

Learning tools and libraries will be a thing the most of your life, if you want to study or work in the Data Science field. 

**But, as a beginner**:

- is better to start learning very well _some_ tools/libraries, and meanwhile becoming "aware" of the similar ones (and their pro/cons).

- For doing that, it's useful to read the homepage of the official documentation (God bless good documentation!). 

- It's way better to learn **one** (max 2) libraries for each step of the Data Science process, _as a starting point!_

- You'll always be capable of learning more libraries when you reach the capabilities limits of the one that you already know or you have different needs.  

Now you know what is the best approach to learn tools and libraries and frameworks, and how to do it [using wisely your time](https://waitbutwhy.com/2014/05/life-weeks.html)!

The following links expand these points and you should really read them if you are a beginner, some answers are illuminating:

- [What are some tips for a beginning ML/data scientist who feels overwhelmed?](https://www.quora.com/What-are-some-tips-for-a-beginning-ML-data-scientist-who-feels-overwhelmed)
- [SO MUCH to Learn... Overwhelmed. How to Learn so Much?](https://www.reddit.com/r/learnprogramming/comments/dnujl0/so_much_to_learn_overwhelmed_how_to_learn_so_much/)
- [Beginner to "data science" but unsure of what I should be doing](https://www.reddit.com/r/datascience/comments/7yg61i/beginner_to_data_science_but_unsure_of_what_i/)

Having that said, let's jump in!

# The Data Science Process Toolkit
## Data Collection

Data collection is one of the most crucial part of a Data Science project (you don't say?), and often a tedious one if you have to label your data by your own!

Luckily, good researchers and institutions often release their datasets, so you don't have to collect the data (or label it), just download!

But if you can't find the dataset that you need? 

Let's see at some tools that can help you in this task:

- [Digitalmethods Tools](https://wiki.digitalmethods.net/Dmi/ToolDatabase) is a set of free web scraping tools developed by Europe's leading Internet Studies groups

- [BeautifulSoup](https://www.dataquest.io/blog/web-scraping-tutorial-python/) is a Python library to scrape webpages

- [Selenium](https://www.pluralsight.com/guides/web-scraping-with-selenium) is a Python library meant to automate browser testing, but it can be perfectly used in combination with BeautifulSoup to setup a powerful webscraper

See also:
- [10 Best Web Scraping Tools to Extract Online Data](https://www.hongkiat.com/blog/web-scraping-tools/)

Remember that a lot of free access datasets are available for free, for example in the [UCI Dataset](https://archive.ics.uci.edu/ml/datasets.php) website or at the Data science Challenge platform [Kaggle](https://www.kaggle.com/).

## Data Preparation

Data preparation is often the [most time-consuming part of the Data Science project](https://www.infoworld.com/article/3228245/the-80-20-data-science-dilemma.html), so it's crucial to make sure that the right tools are used from you or your team. 

Often the right tools in this phase are the programming languages and their libraries.

The most popular and wide-used librares are:

- [Scikit-Learn](https://scikit-learn.org/) offers a lot of pre-made data transformations. Get started [here](https://scikit-learn.org/stable/tutorial/basic/tutorial.html).
- [Pandas](https://pandas.pydata.org/) is the go-to library to handle data in the popular DataFrame format. Get started [here](https://www.learndatasci.com/tutorials/python-pandas-tutorial-complete-introduction-for-beginners/).
- [Datacleaner](https://github.com/rhiever/datacleaner) saves you a ton of time encoding and cleaning your data once it's already in a format that pandas DataFrames can handle.
- [Scrubadub](https://scrubadub.readthedocs.io/en/stable/index.html) to remove identifiable information from text.
- [Ftfy](https://github.com/LuminosoInsight/python-ftfy)  to take in bad Unicode and output good Unicode, for use in your Unicode-aware code.
- [Arrow](https://arrow.readthedocs.io/en/latest/) to creating, manipulating, formatting and converting dates, times and timestamps.

## Data Visualization
As you learned in the [Data Visualization Guide](https://github.com/virgili0/Virgilio/blob/master/serving/purgatorio/collect-and-prepare-data/data-visualization/data-visualization.md), the The human race evolved in the African savannah through thousands of years, and the sight is most advanced surviving technology that he has developed.

More than 60 % of the actual computation power of our brains is all-time processing visual information, and using it to create an internal representation of the world!

So, it's easy to understand _why_ to visualize data and their relationships it's compelling in order to get rich insights from them. 

Also, remember that data visualizations are **the way** to communicate your results to other people, including non-technical audience.

You can get an overview of the most popular and wide-used data visualization libraries in the [Data Visualization Guide](https://github.com/virgili0/Virgilio/blob/master/serving/purgatorio/collect-and-prepare-data/data-visualization/data-visualization.md).

## Machine Learning

Fortunately for all aspiring Data Science practitioners, there are now mature frameworks and libraries that implement most of the best algorithms to train models from data. 

Like any branch of computer science, you can find dozens of similar libraries that do more or less the same things, and in the case of Machine Learning model building, it's no different. 

Virgilio suggests you to focus on one particular library in order not to risk wasting your time and especially because it is the most widespread and supported.

[Scikit-Learn](https://scikit-learn.org/stable/) is one of the most complete, mature and well-documented libraries for Machine Learning tasks. It comes out-of-the-box with powerful and advanced models that offers facility functions for the data science process.

Also, they have a [wonderful map](https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html) to guide you in finding the right ML model for the problem you want to solve.

Scikit-Learn resources:

- [Getting Started](https://scikit-learn.org/stable/getting_started.html)
- [Tutorials](https://scikit-learn.org/stable/tutorial/index.html)
- [Examples](https://scikit-learn.org/stable/auto_examples/index.html)

Also, Scikit-Learn is the library chosen by the awesome book [Hands-On Machine Learning with Scikit-Learn, Keras, and Tensorflow](https://www.amazon.it/Hands-Machine-Learning-Scikit-learn-Tensorflow/dp/1492032646/ref=pd_sbs_14_img_0/258-4192675-5285822?_encoding=UTF8&pd_rd_i=1492032646&pd_rd_r=b7c5b3eb-2cd0-4a82-a022-b68cefb4854f&pd_rd_w=I7oG4&pd_rd_wg=OyB1L&pf_rd_p=5b7cecc6-3c99-46e5-b3e1-0370a7bd6b14&pf_rd_r=AYXZXWBE4DBSAA0M723G&psc=1&refRID=AYXZXWBE4DBSAA0M723G), which is highly recommended to have in your pocket as a learning companion.

Additional Machine Learning libraries and tools:

- [A curated list of awesome Machine Learning frameworks, libraries and software](https://github.com/josephmisiti/awesome-machine-learning#python)
- [A curated list of awesome open source libraries to deploy, monitor, version and scale your machine learning models](https://github.com/EthicalML/awesome-production-machine-learning)


## Deep Learning

When it comes to Deep Learning it is not easy to decide which framework to recommend to a beginner. 

Out there, on the Internet, at the query "which Deep Learning framework to learn first?", you quickly understand that the two most complete frameworks are [Tensorflow](https://www.tensorflow.org/) (from Google) and [Pytorch](https://pytorch.org/) (from Facebook), both open-source and full of useful features to work with Deep Learning.

After evaluating several factors as:

- completeness and maturity of the framework
- usability and learning curve 
- clearness in the official documentation 
- number of official and unofficial examples, guides and tutorials
- industry-side diffusion 

Virgilio suggests you to start with learning TensorFlow and try Pytorch later.

Brief argument: Tensorflow, especially from 2.0 version and with the [Keras](https://www.tensorflow.org/guide/keras) Interface (native in TF from 2.0), is a better choice for a beginner. Pytorch has different pros but it's more suitable for research and high flexibility needs.
TF 2.0 is  the tools chosen in the up-to-date version of the mythical (and _"mandatory"_) book [Hands-On Machine Learning with Scikit-Learn, Keras, and Tensorflow](https://www.amazon.it/Hands-Machine-Learning-Scikit-learn-Tensorflow/dp/1492032646).

Bonus tip:

Don't try to learn the old TF1 version, hadn't aged well, but Google learnt a lot from that experience: go for 2.0.

- [TensorFlow 2.0: Easier for beginners, and more powerful for experts](https://www.youtube.com/watch?v=5ECD8J3dvDQ)

---

To learn TensorFlow you'll need mostly a lot of practice, starting from toy examples to most complex projects, but Virgilio collected for you the most important resources out there:

- [Here](https://www.youtube.com/watch?v=tYYVSEHq-io&t=2s) you have a gentle and brilliant introduction to what is TensorFlow.
- [Here](https://www.tensorflow.org/tutorials) you find the official Tutorials.
- [Here](https://www.tensorflow.org/guide) you find the official Guide, a more detailed guide to each aspet of the framework.
- [Here](https://github.com/jtoy/awesome-tensorflow) you have an awesome some list of additional resources about Tensorflow.

Bonus tip: 

There is a reason why Google engineers decided to go integrate Keras natively in TF 2.0: because it's awesome!
Most of the time you don't need do dive **so deep** inside a neural network architecture in order to make it work!

- [You should start with Keras](https://www.reddit.com/r/learnmachinelearning/comments/biynuy/difference_between_keras_and_tensorflow/)

You should be able to find different frameworks and dozens of other exotic neural netowrks libraries on the Internet, but as usual _Virgilio highy recommends to use your time wisely_ (one enemy at time). 
It's not always ture that the most used thing is the best, but for sure you can be certain that Tensorflow is here to stay, and to remain one (ore the most) widely used deep learning framework.  

## Fine-Tuning and Evaluation

If you’ve ever tried to tune hyperparameters for a machine learning model, you know that it can be a very painful process!

## Serving Models
## Miscellaneous

# Production Ready Tools
## Computer Vision
## Natural Language
## Time Series Forecasting
## Conclusions