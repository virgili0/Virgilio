# The Data Science Process Lifecycle

# What you will learn 
In this guide you will understand the big picture of the Data Science project lifecycle, why and how to perform each step, 
from collecting the data to putting predictive models in production. You can then use this guide as a "checklist" of to-do 
steps to perform during your projects. 

## Prerequisites
There are no prerequisites for this guide.

## Time to complete
20 minutes.

# Index
- [Motivation](#Motivation)
- [Frame the problem](#Frame-the-problem)
- [Collect and prepare the data](#Collect-and-prepare-the-data)
- [Select and train an  ML model](#Select-and-train-an-ML-model)
- [Evaluate and fine tuning](#Evaluate-and-fine-tuning)
- [Launch and mantain the system](#Launch-and-mantain-the-system)

Let's dive right in!
 
### Motivation
You can find hundreds of online articles describing the process of developing a Data Science project. 
In this article Virgilio does not aim to give you the details of each phase, which will be dealt with in more technical guides,
but rather aims to give you an overview of the various steps, as well as a sort of checklist to keep in mind when starting a project.

As you may have noticed, **the structure of Purgatory reflects the entire Data Science process lifecycle**, with each _section_ corresponding to a macro phase, and each _guide_ within it corresponding to a sub-stage of the process. This content organization is designed to provide clarity and clarity to the structure of Purgatorio, to the Data Science process, and to provide an useful checklist to consult whenever you start a new project.

This design is inspired by the checklist in the magnificent book 
[Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow](https://www.amazon.it/Hands-Machine-Learning-Scikit-learn-Tensorflow/dp/1492032646), which I would urge you to buy. 

It's worth its weight in bits! 

Let's recap what we mean by life cycle of the data science process (from here on, for brevity, we will only call it "process").

A Data Science project is any project that aims to extract knowledge from data 
(for example, predict the optimal interest rate for a loan, or how many customers will enter the store tomorrow), 
and in doing so, use Machine Learning techniques.

These techniques can be of two types: 
- Traditional Machine Learning techniques (statistical models like SVM, decision trees, or clustering)
- Deep Learning Techniques (neural networks)

For now don't worry about the difference between the two types, just know for now that the former have been around for decades, 
while the latter are the subject of active experimental research and have only started to be used in the last 6-7 years.

You are now ready for a short tour of the Data Science process, where I'll give you an overview of what your trip to Purgatorio will be like.

### Frame the problem

Each Data Science project starts from a phase called Problem Statement or Problem Shaping, i.e. the process of identifying the problem to be solved and the commercial advantages to be obtained. 

How do you do it? We must be ready to ask the right questions. 

