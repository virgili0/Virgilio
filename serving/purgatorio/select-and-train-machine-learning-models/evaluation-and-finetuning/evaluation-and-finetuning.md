---
title: Evaluation and Fine Tuning
author: clone95
description: Learn how to evaluate your models after the training process, which model to choose depending on your requirements, and how to investigate possible solutions if your model is not learning well.
---

# Index

- [There Is No One Ring to Rule them All](#There-Is-No-One-Ring-to-Rule-them-All)
- [Be Sure About the Type of the Problem](#Be-Sure-About-the-Type-of-the-Problem)
- [Build a Meaningful Test Set](#Build-a-Meaningful-Test-Set)
- [Select a Metric](#Select-a-Metric)
- [Evaluate the Model](#Evaluate-the-Model)
- [Hyperparameters Tuning](#Hyperparameters-Tuning)
- [Conclusions](#Conclusions)


## There Is No One Ring to Rule them All

In many of Virgilio's guides, you have learned that there is rarely a "best" way to do something, as is common in all engineering disciplines. 

Data Science doesn't make any difference, on the contrary, it takes to the extreme the concept of **tradeoff**, of "choice" in front of various possibilities, with the best choice often guided by the details of the specific problem.

This concept is well illustrated by the ["No Free Lunch Theorem"](http://www.no-free-lunch.org/), which states

> All algorithms that search for an extremum of a cost function perform the same when averaged over all possible cost functions.

That is, in human-understandable words, that there's **no one model that can fit every need or solve every problem**.

See also: [What are the implications of the “No Free Lunch” theorem for machine learning?](https://ai.stackexchange.com/questions/15650/what-are-the-implications-of-the-no-free-lunch-theorem-for-machine-learning)

Sure, there are _certain classes_ of algorithms that work better for _certain classes of problems_, or algorithms that have been completely outclassed by more "intelligent" versions, but in general, it is not possible to state this with certainty for every problem.

The bottom line is that you must learn how to choose the right algorithm that will give you the best-trained model _for your specific problem_.

How to do this?

Well, in this case, the experience plays the master role, and even after years of doing Data Science, you'll find yourself learning new stuff about how an algorithm can perform better or worse given certain conditions. 

But luckily you can measure algorithm performance on our problem and discover what works best!

To do that, you need to do 3 things:
- Build a meaningful test set
- Choose the right metric to measure your model performances against it 
- Track the parameters and the associated results with each evaluation 

## Be sure about the type of problem 

It would be impossible to list all the existing types and sub-types of problems, also because some of them can be classified as classification or regression problems depending on the approach!

The advice that Virgilio gives you is, therefore, the following:

Once you are in front of a problem, understand first **what type** problem you are facing, and _from that_ start to learn, search and understand the metrics that may interest you! 

Be sure to know what problem you're dealing with, even though you should have done this _before start solving the problem_:

- [Common ML Problems](https://developers.google.com/machine-learning/problem-framing/cases)

## Build a Meaningful Test Set

To evaluate your model, you should have a clear picture of what kind of "real-world" it will behave in, which means having a test set representative of the actual problem you want to solve.

Often, if you pick a pre-built dataset, it comes with a ready-to-go test set, but in real problem scenarios, you don't have that! 

A technique to generate a test set from a dataset is to [shuffle and randomly draw a set](https://stackoverflow.com/questions/37114273/how-to-randomly-split-a-dataset-into-training-set-test-set-and-dev-set-in-pyth) from it, and this _can work_ for certain situations, but it's not a general rule. This approach assumes that your dataset is balanced, is representative of the real-world problem, and some other details.

In general, when you build a test set you should make it:

- Big enough to draw conclusions about the performance of the model
- Representative of the real-world scenario in which the model will be deployed
- Representative of the training set (if not, for sure you won't get good performances)
- It needs to avoid biases introduced by pre-processing transformations or outlier removal

Luckily for us, [Andrew NG](https://it.wikipedia.org/wiki/Andrew_Ng) collected for us all a very exhaustive list of tips and trick to build a meaningful test set, and you can find them in the practical book:
- [Machine Learning Yearning](https://www.deeplearning.ai/machine-learning-yearning/) 

## Select a Metric

You know, Google is your friend, and with a 99.99% chance someone will already be in the same situation as you, and probably a simple query like 'ML metric for **type_X** problem' can give you a ton of good answers. 

A good starting point though can be the following:

- [Selecting Metrics for Machine Learning](https://fayrix.com/machine-learning-metrics)

Even if you can easily find in a lot of literature and good information about each ML metric on Google, be sure to read this presentation about the ML evaluation phase in general: 

- [Performance Evaluation for Learning Algorithms](https://www.icmla-conference.org/icmla11/PE_Tutorial.pdf)

Then you can dive deeper into these more detailed resources:

- [Model Selection and Evaluation](https://frnsys.com/ai_notes/machine_learning/model_selection.html)
- [Performance Metrics (Error Measures) in Machine Learning Regression](https://arxiv.org/abs/1809.03006)

Bonus resources about model evaluation:

- [Practical Model Evaluation: What matters for your model?](https://www.youtube.com/watch?v=7RdKnACscjA&t=2374s)
- [Applied ML 2020 - Model Evaluation and Metrics](https://www.youtube.com/watch?v=trg3YkCsjqE)

Check this library for testing machine learning models, specifically those in scikit-learn:
- [Drifter_ML](https://github.com/EricSchles/drifter_ml)

## Evaluate the Model

After you've built your test set, is time to evaluate your trained algorithm against it!

But to do that, you should have well clear in mind which is a valuable metric to measure the performance of your algorithms. 

It turns out that this heavily depends on the problem you are facing, and in particular the type of problem: are you facing a supervised problem or not? If yes, are you solving a classification or regression problem? 

And so on... 

To learn how to evaluate your model after the training phase, get through Chapter 6 of the book [Machine Learning Engineering](http://www.mlebook.com/wiki/doku.php) by [Andriy Burkov](https://www.linkedin.com/in/andriyburkov/):

- [Chapter 6 - Model Evaluation](https://www.dropbox.com/s/4ly72ahtz6vsy5n/Chapter6.pdf?dl=0)


## Hyperparameters Tuning

When you evaluate a Machine Learning model, you evaluate a model trained with a certain configuration, and the parameters in this configuration are called **"hyperparameters"**.

See also: [What is the difference between model hyperparameters and model parameters?](https://datascience.stackexchange.com/questions/14187/what-is-the-difference-between-model-hyperparameters-and-model-parameters)

**Choosing the right hyperparameters to let the ML algorithm learn well is probably the most difficult job in the Data Science Process (someone calls it "[Black Magic](https://medium.com/@rayheberer/black-magic-and-hyperparameter-tuning-ef875eb31712)"). 

There are no Golden Rules ([There Is No One Ring to Rule them All](#There-Is-No-One-Ring-to-Rule-them-All)), even though some best practices are recognized to work well in a variety of situations. 

But when you tackle a novel problem, with a custom dataset, it's difficult to choose these hyperparameters right at the first shot. 

For example, imagine you're training a neural network (even a simple one), you can have _a lot_ of these hyperparameters:
About the topology of the network:
- the type of layers
- the number of layers
- the number of neurons in each layer
- the activation functions

Or about the optimization phase (the actual training):

- the number of training epochs
- the batch size 
- the learning rate
- the learning rate decay
- regularization techniques

What a mess! How to get these right?

Often data scientists try to overcome this problem with some techniques, like Grid Search, Random Search, or Evolutionary Algorithms.

Be sure to get through the following resources to understand how to tune the hyperparameters of your model!

- [Introduction to Hyperparameter Tuning](https://community.alteryx.com/t5/Data-Science-Blog/Hyperparameter-Tuning-Black-Magic/ba-p/449289)
- [Grid Search](https://machinelearningmastery.com/grid-search-hyperparameters-deep-learning-models-python-keras/)
- [Random Search](https://towardsdatascience.com/feature-selection-by-random-search-in-python-730ffd2912e9)
- [Cross-validation: evaluating estimator performance - with Scikit-Learn](https://scikit-learn.org/stable/modules/cross_validation.html)

Read also:

- [Practical hyperparameter optimization: Random vs. grid search](https://stats.stackexchange.com/questions/160479/practical-hyperparameter-optimization-random-vs-grid-search)
- [Practical Guide to Hyperparameters Optimization for Deep Learning Models](https://blog.floydhub.com/guide-to-hyperparameters-search-for-deep-learning-models/)
- [Hyperparameter tuning with Keras Tuner](https://blog.tensorflow.org/2020/01/hyperparameter-tuning-with-keras-tuner.html)

And more advanced techniques:
- [Hyp-RL : Hyperparameter Optimization by Reinforcement Learning](https://arxiv.org/abs/1906.11527)

Remember that these techniques are not meant to substitute the Data Scientist knowledge, but to help him in finding the most promising directions! 

With the experience, you'll learn by yourself what are likely good configurations, depending on the problem at hand.

Even though Hyperparameter Tuning can help, remember that can sometimes give a small/marginal gain over the original metric.

The real factors resulting in better metrics/results is always the quality of the dataset.

## Conclusions

In this guide, you've learned how to choose the right test set for your evaluation, how to choose a meaningful metric for the problem at hand, and how to evaluate the model against it. 

You've also seen some techniques that help you move in the deep space of the hyperparameters configurations. 

Now, once you're satisfied by the performance fo your model, you're ready to use it in the real world!
