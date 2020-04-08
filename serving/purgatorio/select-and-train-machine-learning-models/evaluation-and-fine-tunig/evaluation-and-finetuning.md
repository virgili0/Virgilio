---
title: Evaluation and Fine Tuning
author: clone95
description: Learn how to evaluate your models after the training process, which model to choose depending on your requirements, and how to investigate possible solutions if your model is not learning well.
---

# Index

- [There Is No One Ring to Rule them All](#There-Is-No-One-Ring-to-Rule-them-All)
- [Choose the Right Metric](#Choose-the-Right-Metric)
- [Build a Meaningful Test Set](#Build-a-Meaningful-Test-Set)
- [K Folder Cross Validation](#K-Folder-Cross-Validation)
- [Lost in the Parameter Space](#Lost-in-the-Parameter-Space)


## There Is No One Ring to Rule them All

In many of Virgil's guides you have learned that there is almost never a "best" way to do something, as is common in all engineering disciplines. 

Data Science doesn't make any difference, on the contrary it takes to the extreme the concept of tradeoff, of "choice" in front of various possibilities, with the best choice often guided by the details of the specific problem.

This concept is well illustrated by the ["No Free Lunch Theorem"](http://www.no-free-lunch.org/), which states
> All algorithms that search for an extremum of a cost function perform exactly the same when averaged over all possible cost functions.

That is, in human understandable words, that there's **no one model that can fit every need or solve every problem**.

See also: [What are the implications of the “No Free Lunch” theorem for machine learning?](https://ai.stackexchange.com/questions/15650/what-are-the-implications-of-the-no-free-lunch-theorem-for-machine-learning)

Sure, there are _certain classes_ of algorithms that work better for _certain classes of problems_, or algorithms that have been completely outclassed by more "intelligent" versions, but in general it is not possible to state this with certainty for every problem.

The bottom line is that you must learn how to choose the right algorithm that will give you the best trained model _for your specific problem_.

How to do this?

Well, in this case the experience plays the master role, and even after years of doing Data Science you'll find yourself learning new stuffs about how an algorithm can perform better or worse given certain conditions. 

But luckily you can measure algorithm performance on our problem and discover what works best!

In order to do that, you need to choose an appropriate metric for the problem at hand. 


## Build a Meaningful Test Set
## Choose the Right Metric

After you've build your test set, is time to evaluate your trained algorithm against it!

But to do that, tyou should have well clear in mind wich is a valuable metric to measure the performance of your algorithms. 

It turns out that this heavily depends by the problem you are facing, and in particular the type of problem: are you facing a supervised problem or not? If yes, are you solving a classification or regression problem? 

And so on... 

#### Be sure about the type of the problem 

It would be impossible to list all the existing types and sub-types of problems, also because some of them can be classified as classification or regression problems depending on the approach!

The advice that Virgil gives you is therefore the following:

Once you are in front of a problem, understand first **what type** problem you are facing, and _from that_ start to learn, search and understand the metrics that may interest you! 

Be sure to know what problem you're dealing with, even though you should have done this _before start solving the problem_:

- [Common ML Problems](https://developers.google.com/machine-learning/problem-framing/cases)

#### Model Evaluation 

You know, Google is your friend, and with a 99.99% chance someone will already be in the same situation as you...

A good starting point though, can be the following:

- [Selecting Metrics for Machine Learning](https://fayrix.com/machine-learning-metrics)

Even if you can easily find in a lot of literature and good information about each ML metric on Google, be sure to read this presentation about the ML evaluation phase in general: 

- [Performance Evaluation for Learning Algorithms](https://www.icmla-conference.org/icmla11/PE_Tutorial.pdf)

Then you can dive deeper into these more detailed resources:

- [Model Selection and Evaluation](https://frnsys.com/ai_notes/machine_learning/model_selection.html)
- [Performance Metrics (Error Measures) in Machine Learning Regression](https://arxiv.org/abs/1809.03006)
## K Folder Cross Validation
## Lost in the Parameter Space 
