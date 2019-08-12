# The Data Science Project lifecycle

# What you will learn 
In this guide you will understand the big picture of the Data Science project lifecycle, why and how to perform each step, from getting the data to putting predictive models in production. You can then use this guide as a "checklist" of to-do steps to perform during your projects. 

## Prerequisites
There are no prerequisites for this guide.

## Time to complete
30 minutes.

# Index
- [How to use this guide](#How-to-use-this-guide)
- [Looking at the big picture](#Looking-at-the-big-picture)
  - [Frame the problem](#Frame-the-problem)
  - [Select a performance measure](#Select-a-performance-measure)
  - [Check the assumptions](#Check-the-assumptions)
- [Get the data](#Get-the-data)
  - [Create the workspace](#Create-the-workspace)
  - [Download the data](#Download-the-data)
  - [Discover data and get domain experts insights](#Discover-data-and-get-domain-experts-insights)
  - [Create a test set](#Create-a-test-set)
- [Prepare the data for machine mearning algorithms](#Prepare-the-data-for-machine-mearning-algorithms)
  - [Data cleaning](#Data-cleaning)
  - [Numerical vs Categorical attributes](#Numerical-vs-Categorical-attributes)
  - [Transformation pipelines](#Transformation-pipelines)
- [Select and train a model](#Select-and-train-a-model)
  - [Training and evaluating on test set](#Training-and-evaluating-on-test-set)
  - [Cross validation](#Cross-validation)
- [Fine tune the predictive model](#Fine-tune-the-predictive-model)
  - [Hyperparameter tuning](#Hyperparameter-tuning)
  - [Ensemble methods](#Ensemble-methods)
  - [Evaluate on test set](#Evaluate-on-test-set)
- [Launch and mantain the system](#Launch-and-mantain-the-system)
- [Iterate]


Let's dive right in!
 
# How to use this guide

You can find hundreds of online articles describing the process of developing a Data Science project. In this article Virgilio does not aim to give you the details of each phase, which will be dealt with in more technical guides, but rather aims to give you an overview of the various steps, as well as a sort of checklist to keep in mind when starting a project.

I will also provide you, for each phase, with resources to deepen your knowledge, organized in a coherent way and specifically contextualized.

The following guide is inspired by the checklist in the magnificent book [Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow](https://www.amazon.it/Hands-Machine-Learning-Scikit-learn-Tensorflow/dp/1492032646), which I would urge you to buy. It's worth its weight in bits! 

