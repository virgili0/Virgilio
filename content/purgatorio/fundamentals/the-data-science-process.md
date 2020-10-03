---
title: The Data Science Process
author: clone95
description: In this guide, you will understand the big picture of the Data Science project lifecycle, why and how to perform each step, from collecting the data to putting predictive models in production. You can then use this guide as a "checklist" of to-do steps to perform during your projects. 
---

# Index
- [Motivation](#Motivation)
- [Frame the problem](#Frame-the-problem)
- [Collect and prepare the data](#Collect-and-prepare-the-data)
- [Select and train an ML model](#Select-and-train-an-ML-model)
- [Evaluate and fine tune](#Evaluate-and-fine-tune)
- [Launch and mantain the system](#Launch-and-mantain-the-system)
- [Conclusions](#Conclusions)

Let's dive right in!
 
## Motivation

You can find hundreds of online articles describing the process of developing a Data Science project. 

In this article, Virgilio does not aim to give you the details of each phase, which will be dealt with in more technical guides,
but rather aims to give you an overview of the various steps, as well as a sort of checklist to keep in mind when starting a project.

::: tip
As you may have noticed, **the structure of Purgatory reflects the entire Data Science process lifecycle**, with each _section_ corresponding to a macro phase, and each _guide_ within it corresponding to a sub-stage of the process. This content organization is designed to provide clarity to the structure of Purgatorio, clarity to the Data Science process, and to provide a useful checklist to consult whenever you start a new project.
:::

The design of Purgatorio is inspired by the checklist in the magnificent book 
[Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow](https://www.amazon.it/Hands-Machine-Learning-Scikit-learn-Tensorflow/dp/1492032646), which I would urge you to buy. 

**It's worth its weight in bits!**

--- 

Let's recap what we mean by "the life cycle of the data science process" (from here on, for brevity, we will only call it "process").

A Data Science project is any project that aims to extract knowledge from data 
(for example, predict the optimal interest rate for a loan, or how many customers will enter the store tomorrow), 
and in doing so, use Machine Learning techniques.

These techniques can be of two types: 
- Traditional Machine Learning techniques (statistical models like SVM, decision trees, or clustering)
- Deep Learning Techniques (neural networks)

For now don't worry about the difference between the two types, just know for now that the former has been around for decades, 
while the latter is the subject of active experimental research and have only started to be used in the last 6-7 years.

**You are now ready for a short tour of the Data Science process, where I'll give you an overview of what your trip to Purgatorio will be like.**

## Frame the problem

Each Data Science project starts from a phase called Problem Statement or Problem Shaping, i.e. **the process of identifying the problem to be solved and the real-world advantages to be obtained.**

How do you do it? We must be ready to ask the right questions. 

Usually, the first questions you ask yourself are: 
- What is the scope of the project? 
- What is the desired result? 
- What data do we have available? 
- Do we have evidence that they contain relevant information?

During this phase, close contact between you (the technician) and the domain expert is vital. 
If you are developing a project for a company, presumably it will be the source of domain knowledge: learn as much as you can!

If you are developing a project for yourself, look for domain experts to ask questions! 

Studying and practicing you will develop a "data mindset", which will help you a lot in this phase. An entire guide is dedicated to this issue.

When you have framed the type of problem you want to solve, it is time to choose objective metrics to evaluate the result of the project: depending on the type of problem addressed, we will see how different metrics provide indications on the performance of the Machine Learning models that we will develop.

Last but not least, it is necessary to make sure that the assumptions we make are correct, the data we have collected is not corrupted or biased, and how the system will be integrated with existing systems and then used.

## Collect and prepare the data

The indispensable raw material for Data Science projects is data (you never would have said so :D ).

::: warning
Collecting, organizing, and then cleaning them is often [the most _onerous phase_](https://fundersclub.com/blog/2017/06/29/hardest-part-ai-cleaning-your-data/) of the whole process.
:::

You need to understand:
- what data is sensitive and what is not
- what the data sources are
- how data have been collected
- how the data from various sources relate to each other 

Once the data has been obtained, it is necessary to organize it effectively and **to keep raw version** of it so that you always have at your disposal the "ground truth" of our project.

In fact, a large part of the work of cleaning and preparing the data consists of steps (called pre-processing) that transform them: from raw data just collected, to clean data and ready to be analyzed by a model in the next macro-phase. 

Maintaining the various versions of the data, to which the pre-processing steps have been applied, is vital to achieving _reproducible results_ and _maintainable systems_.

The information represented by the data is called "features" (in the simple case of tabular data, each attribute is a feature).

Once the raw data has been cleaned, the feature engineering phase often takes place in which existing data is combined to "suggest" to the models the relationships between them.

For example, if my data contains the date of purchase in a store, I can add the feature "day of the week", indicating with a value from 1 to 7 on which day we are. This could reveal very interesting relationships!

Often _the feature engineering phase is vital for traditional models_, while we will see that for Deep Learning models it is less important, as they have among their advantages to automatically extract relevant features from the data.

Finally, we will see in this section how to automate these "pipelines" of collection, cleaning, and preprocessing.

## Select and train an ML model

Once the data has been cleaned and prepared, it is time to choose an algorithm that must be "trained" on it, and whose output will be a predictive model.

This model can be a statistical model (even if all the models we will see apply statistical concepts) or a Deep Learning model. 

Statistical models have been used for decades to predict the future, such as sales in the next quarter, or the climate in a given region. 

In general, these models:
- They require statistical knowledge 
- Require feature engineering
- They are "simple" in the sense that they are easy to interpret and debug

Deep Learning models (software programs called neural networks) are techniques that have been exploding in recent years, providing excellent performance on problems previously impossible to solve, in general:
- They require empirical and practical knowledge about training neural networks
- Do not necessarily require feature engineering (but may benefit from it) 
- They are "complex" in the sense that they are difficult to interpret and debug.
- They are the only solutions in case of equally "complex" problems, such as the vision or understanding of natural language.

We will see in detail various types of statistical models and Deep Learning, with a particular focus on the latter, which over the years are proving a revolution and promise to overturn entire industries, as well as drastically improve the processes that characterize them.

Once the model that best solves our problem has been selected, the training phase takes place, where the model is shown many examples (our data), and its parameters are adjusted in order to obtain satisfactory performance.

## Evaluate and fine-tune

Once we set up the training process and trained the model, we are ready to evaluate it and understand what actual performance it would have in the face of data that it has never seen. 

Therefore, before training, the data is divided between training data (those that the model will see) and test data that it has never seen (those on which it will be tested).

This phase is of vital importance to understand **how the model will perform in the real world**, and to understand _if it will actually be useful._

In this section, we will also understand how to choose the best parameters to train the models, so as to maximize their performance in the test phase.

Moreover, we will see how to compose together several predictive models to form a more effective one, and you will learn to use one of the most useful techniques in the real application of Deep Learning: _Transfer Learning_.

This concept consists of applying the knowledge already learned from a problem to a new problem, reducing the amount of data needed, and the computational costs for training.

We'll see how in practice you almost never train a model from scratch, but you take advantage of pre-trained models made available by large companies and researchers.

## Launch and mantain the system

Once the model is sufficiently tested and its performing well it can be used to make predictions. 

In this section you will learn how to build models that can scale to hundreds or thousands of users, leveraging the power of the Cloud and the flexibility of the API Rest concept. 

You will learn how to distribute your models across multiple machines, and monitor them carefully through metrics and alarms.

In fact, one of the biggest costs of Data Science projects (but we could say software in general) is maintenance.
Here are some questions you need to ask yourself when you put a model into production in the real world:

- **Do users use it**?
- Is the number of users using it controllable, or is there a slowdown?
- How certain is the model of predictions it makes?
- How do I make sure the new input data is appropriate?
- How do I ensure that they are properly preprocessed (yes, automatic pipelines, I'm looking at you)?
- Do the real-world data reflect the training data?
- How do real-world data change over time?
- How do I integrate the new knowledge I collect over time (i.e., the new data from the real world)?
- How do I ensure that the performance of the model does not degrade over time?

These and other questions will be covered in this section.

## Conclusions

You've just had a taste of everything we'll see in the next sections of Purgatorio, but remember there will be much more to learn! 

Alongside these guides, you'll be given some to learn how to use libraries and frameworks used by organizations and governments, how to take advantage of the power and flexibility of Cloud vendors, how to read research papers, and much more!

Warm-up your fingers and brain and prepare a coffee (or some thousands...), the journey is about to begin!  
