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

I will also provide you, for each phase, with resources to deepen your knowledge, 
organized in a coherent way and specifically contextualized.

The following guide is inspired by the checklist in the magnificent book 
[Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow](https://www.amazon.it/Hands-Machine-Learning-Scikit-learn-Tensorflow/dp/1492032646), which I would urge you to buy. 

It's worth its weight in bits! 

I remind you what I mean by Data Science project: any project that aims to extract knowledge from data 
(for example, predict the optimal interest rate for a loan, or how many customers will enter the store tomorrow), 
and in doing so, use Machine Learning techniques.

These techniques can be of two types: 
- Traditional Machine Learning techniques (addressed in the "Traditional Machine Learning techniques" section of Purgatory)
- Deep Learning Techniques (covered in the section of the same name)

For now don't worry about the difference between the two, just know for now that the former have been around for decades, 
while the latter are the subject of active experimental research and have only started to be used in the last 6-7 years.

You are now ready for a short tour of the life cycle of the Data Science project, 
I will try to provide various examples for each phase, so that you can better orient yourself also when reading other sources 
(linked and not).
