---
title: Machine Learning Theory
author: clone95
description: Learn how to train and build powerful Machine Learning models and use them to make predictions, that is the natural goal of a Data Science project.
---

# Index

- [Buy This Book](#Buy-This-Book)
- [The Machine Learning Landscape](#The-Machine-Learning-Landscape)
- [End-to-End Machine Learning project](#End-to-end-machine-learning-project)
- [Machine Learning Full Course](#Machine-Learning-Full-Course)
- [Code an Algorithm from Scratch](#Code-an-Algorithm-from-Scratch)
- [Must-Know Supervised Learning Algorithms](#Must-Know-Supervised-Learning-Algorithms)
- [Unsupervised Learning Algorithms](#Unsupervised-Learning-Algorithms)
- [Conclusions](#Conclusions)

## Buy This Book
Virgilio **strongly recommend** you to buy this phenomenal book: [**Hands-On Machine Learning with Scikit-Learn and TensorFlow**](https://www.amazon.it/Hands-Machine-Learning-Scikit-learn-Tensorflow/dp/1492032646/ref=sr_1_1?adgrpid=58345655971&gclid=Cj0KCQiA6IHwBRCJARIsALNjViW4Jw8kyO8xEPOiBSRLof5hccJ-xVOtW0PHCUOSBszyNIJZZlMfNYoaAorMEALw_wcB&hvadid=255175924799&hvdev=c&hvlocphy=1008144&hvnetw=g&hvpos=1t1&hvqmt=e&hvrand=214277416768465994&hvtargid=aud-834369398293%3Akwd-295090772533&hydadcr=18606_1822710&keywords=hands+on+machine+learning&qid=1577095736&sr=8-1). 

The book has inspired the birth of Virgilio and has driven most of the organization and hierarchy of the content listed below.

::: warning
**Be sure to buy the 2nd edition of the book, which comes with TensorFlow 2.0 and many of the chapters updated.**
:::

Apart from this, **everything** listed here is open source and free, from world-renowned universities and open source associations, in pure Virgilio's spirit. 

Note: _if you think about the price of the book is high, be okay with that, but remember that you won't find a higher quality hands-on book on Machine and Deep Learning. Don't hesitate, the book is definitely worth its price._  

It is necessary to avoid confusion when we learn something new, especially when the topic is as wide and complex as Machine Learning. When possible, we've tried to create this guide and the following ones _preferring content from the same author or context_.

## The Machine Learning Landscape
First things first! 

Directly from the book cited earlier, this is the most concise and illuminating overview of **what is** and **when you need** machine learning. Let's stop using buzzwords!

Check it here: [**The Machine Learning Landscape**](https://www.oreilly.com/library/view/hands-on-machine-learning/9781491962282/ch01.html).

Also check this: [A Visual Introduction to Machine Learning](http://www.r2d3.us/visual-intro-to-machine-learning-part-1/).

## End-to-End Machine Learning project
Virgilio wants you to _feel_ what a complete Data Science project would be, along with model creation and selection. You

For a first taste, go through [this](https://www.kaggle.com/startupsci/titanic-data-science-solutions) Kaggle notebook, which has a classical example of an ML task. 

**The goal is to try to predict if a Titanic passenger would have been most likely to survive or not.**

This is commonly considered the "Hello World" problem for new Machine Learning practitioners.

Many things will be unclear for now, but don't worry, they will all be explained comprehensively later. It is nice to get the picture of the "applied" project, going through the classical steps of applied Machine Learning (problem framing, data exploration, question formulation...). 

The notebook is on [Kaggle](https://www.kaggle.com/), the go-to platform for ML and general Data Science projects, which provides a lot of free datasets and offers interesting challenges and ML model experiments.

Remember: Read the notebook and try to understand the big picture of the process. Some details, functions, and code will be clearer later.

## Machine Learning Full Course
Now that you've been exposed to your first machine learning end-to-end project, you maybe start wondering _how do you choose an algorithm to try on your data_, and what is the learning theory behind them. 

The best thing you can do now is to take a full course on Machine Learning theory. 

There are plenty of those out there, but the most classical and complete course is probably the most famous one too.

Plan some weeks of study and prepare to follow: 

[**Machine Learning Course from Andrew NG**](https://www.coursera.org/learn/machine-learning)

This course would take you through the basics of Machine Learning algorithms, plus the math theory behind the training process. Concepts like Overfitting, Regularization, and Loss Functions are explained in-depth.

The course has a part in Deep Learning, so you're not obliged to take them (even if it's recommended). 

In the next guide, "Deep Learning", we'll give you specific courses about it.

The course has homework to do (highly recommended), but unluckily these assignments are thought with the Octave programming language in mind, which is kind of out-dated and limited if compared to Python. 

But don't be scared! 

Awesome people out there re-created the course assignments in Python, through Jupyter notebooks!

Check them here: 

[**Coursera Machine Learning by Andrew Ng - Python Programming Assignments**](https://github.com/dibgerge/ml-coursera-python-assignments)

Thanks to this course and the exercises you should grasp most of the basics concepts behind Machine Learning theory and the process of training models. 

Alternatively, you can replace the former course with this one:

- [Machine Learning from Bloomberg](https://www.youtube.com/watch?v=MsD28INtSv8&list=PLnZuxOufsXnvftwTB1HL6mel1V32w0ThI)


Once you're done with the course, check also the following course from Google:

[**Machine Learning Crash Course**](https://developers.google.com/machine-learning/crash-course)

This second one should take you no more than some days to get through, and it can give you a more practical perspective on the Machine Learning modeling process (selection, training, evaluation). 

In the next sections of this guide, we'll see some criteria on how to choose the algorithms to deepen your knowledge about. 

It's nearly impossible to know all the Machine Learning algorithms along with their versions, and many more algorithms are being developed every month!

Nevertheless, there are _some algorithms_ which are the foundation of statistical learning theory, so you want to have them clear in mind. 

For example, these algorithms are the ones a recruiter can ask you about!

## Must-Know Supervised Learning Algorithms
The algorithms listed here are of the "Supervised" type, in the sense that you need labeled data to make your models work.

Read here about:
[Difference between supervised and unsupervised algorithms](https://www.guru99.com/supervised-vs-unsupervised-learning.html) 

The algorithms that we retain the most foundational are:

#### Linear Regression
Classification is one of the most important ML tasks when wanting to predict an outcome out of different possibilities. For example, given handwritten digits, classify them with the lowest error possible.
The simplest case is the binary classification (Yes or No, Survived or Not Survived), have a look [here](https://machinelearningmastery.com/make-predictions-scikit-learn/).
Check [here](https://towardsdatascience.com/building-a-logistic-regression-in-python-301d27367c24) for a brief explanation of the theory of logistic regression for classification, and check [here](https://www.youtube.com/watch?v=VCJdg7YBbAQ) for a deeper comprehension (using the Titanic dataset).
You can use a lot of different ML models to classify things, even neural networks! For now, just take a look [here](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html), where you see an example of accuracy and recall comparison among different models.
[Here](https://medium.com/thalus-ai/performance-metrics-for-classification-problems-in-machine-learning-part-i-b085d432082b) you have an article about the metrics used to **evaluate** your classifiers.

#### Support Vector Machines
This is another classical algorithm to create ML models.
[Here](https://www.youtube.com/watch?v=_PwhiWxHK8o) you have the explanation of the theory, and [here](https://www.youtube.com/watch?v=g8D5YL6cOSE) a more practical approach. Check both.
[Here](https://scikit-learn.org/stable/modules/svm.html) is a very good explanation + practice application in Scikit-Learn.

#### Decision Trees
Decision Trees are one of the most simple but effective ideas behind predicting outcomes, and they're used in many ways (e.g. Random Forest). Check [here](https://www.youtube.com/watch?v=eKD5gxPPeY0&list=PLBv09BD7ez_4temBw7vLA19p3tdQH6FYO) and go through the playlist to get a theoretical overview of Decision Trees (ID3).
[Here](https://scikit-learn.org/stable/modules/tree.html) you have the practical application of ID3.
Here you have some end-to-end examples with Scikit-Learn:
- [Example 1](https://www.youtube.com/watch?v=9YcMzsFvfxU) 
- [Example 2](https://www.youtube.com/watch?v=RmajweUFKvM)
- [Example 3](http://dataaspirant.com/2017/02/01/decision-tree-algorithm-python-with-scikit-learn/)
- [Example 4](https://mathspp.blogspot.com/2018/08/teaching-robot-how-to-vacuum-clean-with.html) couples decision trees with genetic algorithms.

#### Ensemble Learning and Random Forest 
The idea of Ensemble Learning is to leverage all the different features, pros, and cons of several ML models to obtain a group of "voters" that, for each prediction, gives you the most likely outcome, voted by different classifiers (SVM, ID3, maybe Logistic Regression). 
[Here](https://www.youtube.com/watch?v=9VmKYwX_U7s) you get the basics of ensemble learning model, and [here](https://www.youtube.com/watch?v=3kYujfDgmNk) you find the most classic of them, the Random Forest. Although the idea is simple, this ensemble model turned out to be effective in tackling even some "hard" classification problems, or with a lot of data.

[Here](https://scikit-learn.org/stable/modules/ensemble.html) you get a complete overview of the best practices for ensemble learning, and [here](https://towardsdatascience.com/random-forest-in-python-24d0893d51c0) you find an example of Random Forest with Scikit-Learn. Both links come with a bunch of useful techniques to use in practice. 

### Unsupervised Learning
Up to now, we've considered more the Supervised type of learning, where you have labeled data and you learn from them.

But **the world is often full of un-labeled data**, and the labeling process is tedious and costly. 

So it's important to be aware of unsupervised learning classes of algorithms.

- [This](https://www.youtube.com/watch?v=8dqdDEyzkFA&t=14s) is a brief introductory video.
- [This](https://www.coursera.org/lecture/machine-learning/unsupervised-learning-olRZo) are the Unsupervised Learning lectures from Stanford, take these if you want to go deeper.
- [This](https://www.reddit.com/r/MachineLearning/comments/3pkt1i/why_is_unsupervised_learning_so_important/) is a very good Reddit post on **Why Unsupervised is so important**. 
- [Here](https://blogs.nvidia.com/blog/2018/08/02/supervised-unsupervised-learning/) is an interesting read about the difference between Supervised Learning, Unsupervised Learning, and Reinforcement Learning.

The two most important techniques here are [Association Rules Exploration](https://searchbusinessanalytics.techtarget.com/definition/association-rules-in-data-mining) and [Clustering](https://www.geeksforgeeks.org/clustering-in-machine-learning/). 

Association Rules tutorials and examples: [1](https://www.learndatasci.com/tutorials/k-means-clustering-algorithms-python-intro/), [2](https://towardsdatascience.com/an-introduction-to-clustering-algorithms-in-python-123438574097), [3](https://pythonprogramming.net/flat-clustering-machine-learning-python-scikit-learn/), [4](https://www.datacamp.com/community/tutorials/k-means-clustering-python), [5](https://stackabuse.com/hierarchical-clustering-with-python-and-scikit-learn/).

Clustering tutorials and examples: [1](https://pbpython.com/market-basket-analysis.html), [2](http://rasbt.github.io/mlxtend/user_guide/frequent_patterns/association_rules/), [3](https://stackabuse.com/association-rule-mining-via-apriori-algorithm-in-python/), [4](http://intelligentonlinetools.com/blog/2018/02/10/how-to-create-data-visualization-for-association-rules-in-data-mining/), [5](https://www.kaggle.com/datatheque/association-rules-mining-market-basket-analysis), [6](https://www.kdnuggets.com/2016/04/association-rules-apriori-algorithm-tutorial.html).

_Dive deep with_:
[Stanford slides](https://lagunita.stanford.edu/c4x/HumanitiesScience/StatLearning/asset/unsupervised.pdf).
[MIT slides](http://www.mit.edu/~9.54/fall14/slides/Class13.pdf).

 _Tips & Best practices when dealing with unsupervised datasets:_
 [1](https://towardsdatascience.com/the-5-clustering-algorithms-data-scientists-need-to-know-a36d136ef68), [2](https://dzone.com/articles/10-interesting-use-cases-for-the-k-means-algorithm), [3](https://medium.com/@blazetamareborn/practicing-clustering-techniques-on-survey-dataset-f7d7a322e6ff), [4](https://www.analyticsindiamag.com/most-popular-clustering-algorithms-used-in-machine-learning/), [5](https://www.analyticsvidhya.com/blog/2017/02/test-data-scientist-clustering/).

## Conclusions
This guide is very dense and assuming average skills (in programming, math, and statistics) you should consider _at least_ a month to digest all the content listed here. We know that you're excited to put things in practice, but don't underestimate the importance of building a solid theoretical "ground floor" on which to build the rest of your knowledge.

This guide is probably the most important of the Purgatorio, in terms of single concepts learned, so if you feel that two or 3 months are needed to grasp all the concepts, don't be afraid of! 