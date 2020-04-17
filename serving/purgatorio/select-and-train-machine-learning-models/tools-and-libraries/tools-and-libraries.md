---
title: Tools and Libraries
author: clone95
description: Learn to use existing libraries, frameworks and out-of-the-box tools, developing Machine Learning and Deep Learning systems to solve real-world problems.
---

# Index
- [How this guide is designed](#How-this-guide-is-designed)
- [Solving the Learning Problem](#Solving-the-Learning-problem)
- [Navigating the Ocean](#Navigating-the-Ocean)
- [The Data Science Process Toolkit](#The-Data-Science-Process-Toolkit) 
    + [Data Collection](#Data-Collection)
    + [Data Preparation](#Data-Preparation)
    + [Data Visualization](#Data-Visualization)
    + [Feature Engineering](#Feature-Engineering)
    + [Machine Learning](#Machine-Learning)
    + [Deep Learning](#Deep-Learning)
    + [Hyperparameter Tuning](#Hyperparameter-Tuning)
    + [Serving Models](#Serving-Models)
    + [Automation Tools](#Automation-Tools)
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

In this guide, you'll find a ton of different small tools, big libraries, and even entire frameworks, but be aware!

As stated in the [Virgilio's Teaching Strategy](https://github.com/virgili0/Virgilio/blob/master/serving/paradiso/virgilio-teaching-strategy/virgilio-teaching-strategy.md) Guide, the best way to deal with the learning process is to leverage the "[Divide et Impera](https://en.wikipedia.org/wiki/Divide_and_rule)" principle, which states that every time you're tackling a problem (in this case, the _learning problem_) you should split it into smaller parts, easier to handle and understand. 

# Solving the Learning Problem 

The process of learning a tool and use it effectively **is equal to solving a problem**.

We consider "solved" the learning problem when you can use the tool comfortably for the task at hand.

So, you shouldn't try to learn all the features of a library in the same run, or you're going to be overwhelmed! 

Every rich Python library contains thousands of different functions and utilities, but _you'll need a small subset to get the things done!_

**So, Virgilio suggests the following approach**:

- Choose a library from the ones that are widely used and feature-rich.
- Get a general introduction through to Virgilio's resources listed in this guide.
- Find a problem (similar but not equal to the introductory ones).
- Dig into the problem, and get your hands dirty with the chosen library.
- Learn _on the way to the problem solution_.
- Solve the problem, trying to do it yourself.

If you follow this approach, you take home the following 3 things:
- **real problem experience**
- **you feel comfortable coding with a subset of the functions of the tool**

Believe it or not, it works like magic!

Know you know how to solve a new _learning problem_.

Bonus tip: 

When trying to know about a library or framework or tool, use these two methods:

- search for them on Medium.com
- search for them on YouTube or another video/learning channel

Both these will show how others are using it or how else it can be used, often better than learning from the documentations initially.

Now, how to choose from the myriad of tools and libraries available?

# Navigating the Ocean

It's very easy to find out articles, blog posts, and YouTube videos telling you "the 20 libraries you need to learn in 2020!". 

What? 20 libraries? 

Come on, this is ridiculous _and_ impossible, for a beginner!

Don't even try to do that, or you will miserably get stuck, because it is impossible to learn 20 programming libraries together, even for an expert.

Learning tools and libraries will be a thing most of your life if you want to study or work in the Data Science field. 

**But, as a beginner**:

- is better to start learning very well _some_ tools/libraries, and meanwhile becoming "aware" of the similar ones (and their pro/cons).

- For doing that, it's useful to read the homepage of the official documentation (God bless good documentation!). 

- It's way better to learn **one** (max 2) libraries for each step of the Data Science process, _as a starting point!_

- You'll always be capable of learning more libraries when you reach the capabilities limits of the one that you already know or you have different needs.  

Now you know what is the best approach to learn tools and libraries and frameworks, and how to do it [using wisely your time](https://waitbutwhy.com/2014/05/life-weeks.html)!

The following links expand these points and you should read them if you are a beginner, some answers are illuminating:

- [What are some tips for a beginning ML/data scientist who feels overwhelmed?](https://www.quora.com/What-are-some-tips-for-a-beginning-ML-data-scientist-who-feels-overwhelmed)
- [SO MUCH to Learn... Overwhelmed. How to Learn so Much?](https://www.reddit.com/r/learnprogramming/comments/dnujl0/so_much_to_learn_overwhelmed_how_to_learn_so_much/)
- [Beginner to "data science" but unsure of what I should be doing](https://www.reddit.com/r/datascience/comments/7yg61i/beginner_to_data_science_but_unsure_of_what_i/)

Having that said, let's jump in!

# The Data Science Process Toolkit
## Data Collection

Data collection is one of the most crucial parts of a Data Science project (you don't say?), and often a tedious one if you have to label your data on your own!

Luckily, good researchers and institutions often release their datasets, so you don't have to collect the data (or label it), just download!

But if you can't find the dataset that you need? 

Let's see at some tools that can help you in this task:

- [Digitalmethods Tools](https://wiki.digitalmethods.net/Dmi/ToolDatabase) is a set of free web scraping tools developed by Europe's leading Internet Studies groups

- [BeautifulSoup](https://www.dataquest.io/blog/web-scraping-tutorial-python/) is a Python library to scrape webpages

- [Selenium](https://www.pluralsight.com/guides/web-scraping-with-selenium) is a Python library meant to automate browser testing, but it can be perfectly used in combination with BeautifulSoup to set up a powerful web scraper

See also:
- [10 Best Web Scraping Tools to Extract Online Data](https://www.hongkiat.com/blog/web-scraping-tools/)

Remember that a lot of free access datasets are available for free, for example in the [UCI Dataset](https://archive.ics.uci.edu/ml/datasets.php) website or at the Data science Challenge platform [Kaggle](https://www.kaggle.com/).

Check also this repo:

- [Datasets and sources of raw data](https://github.com/neomatrix369/awesome-ai-ml-dl/blob/master/data/datasets.md)

## Data Preparation

Data preparation is often the [most time-consuming part of the Data Science project](https://www.infoworld.com/article/3228245/the-80-20-data-science-dilemma.html), so it's crucial to make sure that the right tools are used from you or your team. 

Often the right tools in this phase are the programming languages and their libraries.

The most popular and widely-used libraries are:

- [Scikit-Learn](https://scikit-learn.org/) offers a lot of pre-made data transformations. Get started [here](https://scikit-learn.org/stable/tutorial/basic/tutorial.html).
- [Pandas](https://pandas.pydata.org/) is the go-to library to handle data in the popular DataFrame format. Get started [here](https://www.learndatasci.com/tutorials/python-pandas-tutorial-complete-introduction-for-beginners/).
- [Datacleaner](https://github.com/rhiever/datacleaner) saves you a ton of time encoding and cleaning your data once it's already in a format that pandas DataFrames can handle.
- [Scrubadub](https://scrubadub.readthedocs.io/en/stable/index.html) to remove identifiable information from text.
- [Ftfy](https://github.com/LuminosoInsight/python-ftfy)  to take in bad Unicode and output good Unicode, for use in your Unicode-aware code.
- [Arrow](https://arrow.readthedocs.io/en/latest/) to creating, manipulating, formatting and converting dates, times and timestamps.

## Data Visualization
As you learned in the [Data Visualization Guide](https://github.com/virgili0/Virgilio/blob/master/serving/purgatorio/collect-and-prepare-data/data-visualization/data-visualization.md), the human race evolved in the African savannah through thousands of years, and the sight is most advanced surviving technology that he has developed.

More than 60 % of the actual computation power of our brains is all-time processing visual information, and using it to create an internal representation of the world!

So, it's easy to understand _why_ to visualize data and their relationships it's compelling to get rich insights from them. 

Also, remember that data visualizations are **the way** to communicate your results to other people, including the non-technical audience.

You can get an overview of the most popular and wide-used data visualization libraries in the [Data Visualization Guide](https://github.com/virgili0/Virgilio/blob/master/serving/purgatorio/collect-and-prepare-data/data-visualization/data-visualization.md).

One thing to note Data Visualization isn't properly a separate step or stage, it is done at every step and stage before and after doing a step.

Check also this repo for a very exhaustive list of Data Visualization tools: 

- [Data visualization libraries and tools](https://github.com/neomatrix369/awesome-ai-ml-dl/blob/master/things-to-know.md#data-visualization-libraries-or-tools)

## Feature Engineering

The feature engineering is the process of transforming your data into useful features, that can be consumed by ML and DL algorithms during training.

It's [hard to suggest](https://datascience.stackexchange.com/questions/8286/are-there-any-tools-for-feature-engineering) a single tool for feature engineering: currently, feature engineering is still largely a laborious and manual process, and it heavily depends on your data.

By the way, you can consider the way Scikit-Learn applies transformations to data, as a good starting point. 

Scikit-learn provides a library of transformers, which may clean (see Preprocessing data), reduce (see Unsupervised dimensionality reduction), expand (see Kernel Approximation) or generate (see Feature extraction) feature representations.

See: 

- [Data Transformers](https://scikit-learn.org/stable/data_transforms.html)
- [Pandas, Pipelines and Custom Transformers](https://www.youtube.com/watch?v=BFaadIqWlAg)

## Machine Learning

Fortunately for all aspiring Data Science practitioners, there are now mature frameworks and libraries that implement most of the best algorithms to train models from data. 

Like any branch of computer science, you can find dozens of similar libraries that do more or less the same things, and in the case of Machine Learning model building, it's no different. 

Virgilio suggests you focus on one particular library in order not to risk wasting your time and especially because it is the most widespread and supported.

[Scikit-Learn](https://scikit-learn.org/stable/) is one of the most complete, mature and well-documented libraries for Machine Learning tasks. It comes out-of-the-box with powerful and advanced models that offer facility functions for the data science process.

Also, they have a [wonderful map](https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html) to guide you in finding the right ML model for the problem you want to solve.

Scikit-Learn resources:

- [Getting Started](https://scikit-learn.org/stable/getting_started.html)
- [Tutorials](https://scikit-learn.org/stable/tutorial/index.html)
- [Examples](https://scikit-learn.org/stable/auto_examples/index.html)

Also, Scikit-Learn is the library chosen by the awesome book [Hands-On Machine Learning with Scikit-Learn, Keras, and Tensorflow](https://www.amazon.it/Hands-Machine-Learning-Scikit-learn-Tensorflow/dp/1492032646/ref=pd_sbs_14_img_0/258-4192675-5285822?_encoding=UTF8&pd_rd_i=1492032646&pd_rd_r=b7c5b3eb-2cd0-4a82-a022-b68cefb4854f&pd_rd_w=I7oG4&pd_rd_wg=OyB1L&pf_rd_p=5b7cecc6-3c99-46e5-b3e1-0370a7bd6b14&pf_rd_r=AYXZXWBE4DBSAA0M723G&psc=1&refRID=AYXZXWBE4DBSAA0M723G), which is highly recommended to have in your pocket as a learning companion.

Additional Machine Learning libraries and tools:

- [A curated list of awesome Machine Learning frameworks, libraries, and software](https://github.com/josephmisiti/awesome-machine-learning#python)
- [A curated list of awesome open source libraries to deploy, monitor, version and scale your machine learning models](https://github.com/EthicalML/awesome-production-machine-learning)


## Deep Learning

When it comes to Deep Learning it is not easy to decide which framework to recommend to a beginner. 

Out there, on the Internet, at the query "which Deep Learning framework to learn first?", you quickly understand that the two most complete frameworks are [Tensorflow](https://www.tensorflow.org/) (from Google) and [Pytorch](https://pytorch.org/) (from Facebook), both open-source and full of useful features to work with Deep Learning.

After evaluating several factors as:

- completeness and maturity of the framework
- usability and learning curve 
- how easy to understant is the official documentation 
- number of official and unofficial examples, guides and tutorials
- industry-side diffusion 

Virgilio suggests you start with learning TensorFlow and try Pytorch later.

Brief argument: Tensorflow, especially from 2.0 version and with the [Keras](https://www.tensorflow.org/guide/keras) Interface (native in TF from 2.0), is a better choice for a beginner. Pytorch has different pros but it's more suitable for research and high flexibility needs.
TF 2.0 is the tools chosen in the up-to-date version of the mythical (and _"mandatory"_) book [Hands-On Machine Learning with Scikit-Learn, Keras, and Tensorflow](https://www.amazon.it/Hands-Machine-Learning-Scikit-learn-Tensorflow/dp/1492032646).

To learn TensorFlow, start with the Keras wrapper!

- [Why you should start with Keras](https://www.reddit.com/r/learnmachinelearning/comments/biynuy/difference_between_keras_and_tensorflow/)

#### Keras

Keras is an Open Source Neural Network library written in Python that runs on top of TensorFlow. 

Easy to use and widely supported, [Keras](https://keras.io/) makes deep learning about as simple as deep learning can be!

There is a reason why Google engineers decided to go integrate Keras natively in TF 2.0: because it's awesome!
Most of the time you don't need to dive **so deep** inside a neural network architecture to make it work!

Start from the official Keras guide integrated in the TF Docs:

- [Google official Keras guide](https://www.tensorflow.org/guide/keras/overview)

#### Tensorflow 2.0

To learn TensorFlow you'll need mostly a lot of practice, starting from toy examples to most complex projects, but Virgilio collected for you the most important resources out there:

- [Here](https://www.youtube.com/watch?v=tYYVSEHq-io&t=2s) you have a gentle and brilliant introduction to what is TensorFlow.
- [Here](https://www.tensorflow.org/tutorials) you find the official Tutorials.
- [Here](https://www.tensorflow.org/guide) you find the official Guide, a more detailed guide to each aspect of the framework.
- [Here](https://github.com/jtoy/awesome-tensorflow) you have an awesome list of additional resources about Tensorflow.

You should be able to find different frameworks and dozens of other exotic neural network libraries on the Internet, but as usual, _Virgilio highly recommends to use your time wisely_ (one enemy at time). 
It's not always true that the most used thing is the best, but for sure you can be certain that Tensorflow is here to stay and to remain one (or the most) widely used deep learning framework.  

Don't try to learn the old TF1 version, hadn't aged well, and Google learned a lot from that experience: go for 2.0.

- [TensorFlow 2.0: Easier for beginners, and more powerful for experts](https://www.youtube.com/watch?v=5ECD8J3dvDQ)

## Hyperparameter Tuning

If you’ve ever tried to tune hyperparameters for a machine learning model, you know that it can be a very painful process!

To fine-tune your models you can check a variety of tools, check this article:

- [A Comprehensive List of Hyperparameter Optimization & Tuning Solutions](https://medium.com/@mikkokotila/a-comprehensive-list-of-hyperparameter-optimization-tuning-solutions-88e067f19d9)

In particular, if you are learning [Keras](https://www.tensorflow.org/guide/keras) as a top-level framework on the top of Tensorflow, Virgilio suggests you check [Hyperas](https://github.com/maxpumperla/hyperas).

A very simple convenience wrapper around [Hyperopt](https://github.com/hyperopt/hyperopt) for fast prototyping with Keras models. Hyperas lets you use the power of hyperopt without having to learn the syntax of it. Instead, just define your Keras model as you are used to, but use a simple template notation to define hyper-parameter ranges to tune.

## Serving Models

After training Machine Learning models, you may want to make them available as a service, to your users, or to other computer systems that may use them.
The most general way to serve a trained ML model is to use a library like [Flask](https://github.com/pallets/flask) API.

Here are some resources to get started with this framework:

- [Learn Flask for Python - Full Tutorial](https://www.youtube.com/watch?v=Z1RJmh_OqeA)
- [The Mega Flask Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)

Then follow these tutorials to learn how to use Flask to serve your trained models:

- [A Flask API for serving scikit-learn models](https://towardsdatascience.com/a-flask-api-for-serving-scikit-learn-models-c8bcdaa41daa)
- [Deploying Keras models using TensorFlow Serving and Flask](https://towardsdatascience.com/deploying-keras-models-using-tensorflow-serving-and-flask-508ba00f1037)

The best way to understand something is _to do it_! So, check your knowledge with this 2-hours guided project from Coursera.

- [Project: Deploy Models with TensorFlow Serving and Flask](https://www.coursera.org/learn/deploy-models-tensorflow-serving-flask)

Also noteworthy is the Streamli project:

- [Awesome Streamlit](https://www.awesome-streamlit.org/)

Streamlit is an open-source Python library that makes it easy to build beautiful custom web-apps for machine learning and data science.

## Automation Tools

There's an old rule that says:

> If you have to do a job more than 3 times, it's time to automate it.

Read this intro to Automation in the Data Science process:

- [Automation in Data Science](https://towardsdatascience.com/automation-in-data-science-f11fe389d49b)

Here you can find a very comprehensive list of automation tools, targeting different parts of the Data Science project. 

- [Awesome-AutoML](https://github.com/windmaple/awesome-AutoML)

## Miscellaneous

Virgilio lists here for you a bunch of incredible good GitHub pages with lists of hundreds of tools and libraries you can find useful when working in the Data Science environment. 
What is the best way to use these pages? 
The answer is that every problem has different characteristics and caveats, and you should be able to understand _if you need_ to learn a new tool, or you can get the things done with those that you already know! 
So, use these pages to compare the pros and cons of the hundreds of tools that exist!

- [Awesome AI-ML-DL](https://github.com/neomatrix369/awesome-ai-ml-dl)
- [Awesome Machine Learning](https://github.com/josephmisiti/awesome-machine-learning)
- [Amazing ML OpenSource 2019](https://github.com/Mybridge/amazing-machine-learning-opensource-2019)
- [Awesome Machine Learning Model Management Frameworks](https://github.com/awoerner92/awesome-ml-tools)
- [A Curated List of Awesome Machine Learning Frameworks, Libraries and Softwares](https://www.mo-data.com/a-curated-list-of-awesome-machine-learning-frameworks-libraries-and-software/)



# Production Ready Tools
In this section, Virgilio listed for you some "Production-Ready" tools that can speed up the process of creating value with data. You can use these tools along with those listed in the previous sections.

For a comprehensive list of production-ready tools, be sure to take a tour at:

- [Awesome Production Machine Learning](https://github.com/EthicalML/awesome-production-machine-learning#data-labelling-tools-and-frameworks)

Virgilio has chosen for you the best tools of this type for 3 problem categories:

## Computer Vision

- [OpenCV](https://opencv.org/about/)

OpenCV (Open Source Computer Vision Library) is an open-source computer vision and machine learning software library. OpenCV was built to provide a common infrastructure for computer vision applications and to accelerate the use of machine perception in commercial products. Being a BSD-licensed product, OpenCV makes it easy for businesses to utilize and modify the code.

Learn how to use OpenCV here:

- [OpenCV Python for Beginners - Full Course in 10 Hours (2020)](https://www.youtube.com/watch?v=N81PCpADwKQ)

Check also Virgilio's tutorials in the Inferno section, They all use OpenCV!

## Natural Language Processing

- [Spacy](https://spacy.io/)

SpaCy is a free, open-source library for advanced Natural Language Processing (NLP) in Python.

If you’re working with a lot of text, you’ll eventually want to know more about it. For example, what’s it about? What do the words mean in context? Who is doing what to whom? What companies and products are mentioned? Which texts are similar to each other?

spaCy is designed specifically for production use and helps you build applications that process and “understand” large volumes of text. It can be used to build information extraction or natural language understanding systems or to pre-process text for deep learning.

They offer a free course on their website:

- [Advanced NLP with Spacy](https://course.spacy.io/)

## Time Series Forecasting

- [Prophet](https://facebook.github.io/prophet/)

Prophet is a procedure for forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects. It works best with time series that have strong seasonal effects and several seasons of historical data. Prophet is robust to missing data and shifts in the trend, and typically handles outliers well.

Prophet is open source software released by Facebook’s Core Data Science team. It is available for download on CRAN and PyPI.

Get the tutorials here:

- [Prophet Quick Start](https://facebook.github.io/prophet/docs/quick_start.html)
- [A Guide to Time Series Forecasting with Prophet in Python 3](https://www.digitalocean.com/community/tutorials/a-guide-to-time-series-forecasting-with-prophet-in-python-3)
- [Forecasting in Python with Facebook Prophet](https://towardsdatascience.com/forecasting-in-python-with-facebook-prophet-29810eb57e66)

## Conclusions

In this guide, we listed A LOT of tools, libraries, and a project that can help you be faster and more effective during the Data Science process. 

The amount of tools listed here is enormous, so choose wisely what you _really need_ for your problem! 

And remember, no one is going to ask you to know 10 different Computer Vision tools, but they are going to ask you to know one of them very well!

