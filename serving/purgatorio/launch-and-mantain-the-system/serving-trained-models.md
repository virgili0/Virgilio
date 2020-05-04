---
title: Serving Trained Models
author: clone95
description: In this guide, you will learn what are the most widely used technologies and techniques to deploy Machine Learning models on the web, to be consumed by customers or other systems. 
---

# Index 

- [Some Important Questions](#Some-Important-Questions)
- [Produce Good Documentation](#Produce-Good-Documentation)
- [Model Deployment](#Model-Deployment)
- [Conclusions](#Conclusions)


## Some Important Questions

Once you have a beautiful and well-tested trained Machine Learning model and you want to make it available to the external world, you should reason about these questions and answer them.

The answers will heavily depend on your use case, and it's impossible to capture every situation in this guide, but hopefully, this checklist can help you considering al the possible situations you can encounter and reason about them _before_ realizing them when it is too late.

- **How** is the system expected to work in general?
    - Will the model be hosted on a machine and used locally, or will it serve his predictions over the Internet?  
    - What is the input of the model?
    - What is the output of the model?
    - What constraints do you need to put over input and output (size, format, number of requests... )? 

- **Who (or what)** is going to use my model?
    - Is the model going to be used by human users or another system?
    - Is the model going to be used by you or someone else?
    - If it's going to be used by other people, it's the usage well documented?
    - Do they have the right permissions to use it?
    - How are you gonna track their usage?
    - Do you need a payment system? 
    - Can you be sure that the system won't be used maliciously?

- What are the **requirements** needed to use the model as intended?
    - What is the size of the model?
    - Is it going to be held in memory or loaded up once a request comes? 
    - How many requests is the model going to receive, on average?
    - What is the speed required for the inference of the model?
    - How the size of the input/output affects the overall performance of the system (it's very easy to send documents over the Internet, while a high-quality video is more bandwidth-intensive?

- Is the input example **meaningful** for the model?
    - Is the input of the model coming from the same distribution of examples that the model has been trained over?
    - If not, how can you exclude "out-of-distribution" inputs (classification before inference, outlier detection...)?
    - How the performance of the model will impact the result (for each prediction, you have a confidence score, maybe you want to serve only predictions over a certain confidence threshold)? 

- What are the **costs** of serving my model?

    - If the model is hosted locally or on your machine, the costs are often only the electricity you use to have a machine always turned on... but it's rare in 2020 to not leverage **Cloud providers** for serving models.
    - If the model is hosted on some Cloud provider (which is often the case), what are the hosting costs?
    - Often Cloud providers offer solutions where you pay for the number of requests that your model is receiving, what are these costs?
    - Cloud providers bills different costs for different machine sizes (depending on n. of CPUs, GBs of RAM, the presence of a GPU...), are you choosing the right machine for your model?
    - Cloud providers offer bills calculators that can estimate your costs, use them!
    - If it's too costly to serve your model, can you make it more lightweight?


Once you have answered these questions, you should have a much clearer view of your serving requirements, and you can explore with much more consciousness the several serving possibilities, ranging from hosting the model on your machine (and serving it through REST APIs) to leveraging a CLoud provider like AWS, Azure or Google Cloud Platform.

## Produce Good Documentation

Like any other step of the Data Science Process, documenting the work done is fundamental to the success of the project. 

We don't need to list the benefits that good documentation brings to a project, so we immediately understand what are the best practices to keep in mind when we produce documentation for our projects.

#### Documenting in General

Refer to the "Documentation" section of the [**Starting a Data Project** Guide](https://github.com/virgili0/Virgilio/edit/master/serving/purgatorio/define-the-scope-and-ask-questions/starting-a-data-project/starting-a-data-project.md) to have a nice introduction to good documentation practices and why documenting it's crucial for the success of any software project.   

#### Documenting the Model Usage

One of the key questions you should have answered from [Some Important Questions](#Some-Important-Questions) is:

- Who (or what) is going to use my model?

In case someone else is going to use the model, he could interact with it in two ways: directly with a user action or through another system.
In both cases **he needs** a clear reference about the usage and the expected behavior of the model. 

The solution that Virgilio suggests is to use the [Model Cards](https://modelcards.withgoogle.com/about) technique from Google. 

You can read here the detailed reasons behind Google's engineers in this regard!

- [Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993)

Some examples: 

- [Face Detection Model](https://modelcards.withgoogle.com/face-detection)
- [Object Detection Model](https://modelcards.withgoogle.com/object-detection)

As you can see, if you have never seen this model, the model card can definitely let you understand: 

- What the model does 
- What is the Input/Output
- What are the expected performances
- What are the limitations of the model

These are all important information for everyone who wants to use the model! 

Bonus tip: 

If you think you will be the only user of the model in the future, _don't underestimate the value_ that comes from good documentation, even for the author of the documentation!

> In 6 months you will look at this code and ask "Who the heck wrote this ***?"

Having clear documentation will save you a lot of time and headaches.

## Model Deployment

Once you have answered all the questions in the [Some Important Questions](#Some-Important-Questions) section, it's time to learn what are the best ways to deploy the model in the real world!

Virgilio has set up for you some resources you can refer to, but most of the time [you will encounter real-world caveats](https://towardsdatascience.com/why-is-machine-learning-deployment-hard-443af67493cd) that will require you to choose the best tradeoff for the specific situation.

However, luckily for us do exist best practices and common patterns to solve the majority of the most common problems when dealing with model deployment, and Virgilio collected for you the best free resources.

Start with:

- [Machine Learning Engineering Book - Chapter 7 - Model Deployment](https://www.dropbox.com/s/sslzy9vr4qwarlh/Chapter7.pdf?dl=0)

Then take a look at the following videos, they're really informative:

- [RESTful Machine Learning with Flask and TensorFlow Serving](https://www.youtube.com/watch?v=AVj3G2MbjOM)
- [REST API with Python and Flask](https://www.youtube.com/watch?v=nfQdqp-0E50&list=PLL2hlSFBmWwzrhahyQscxASc3ZQFh95xl)

Here you have a full detailed and practical course about how to create several examples of machine learning web applications:

- [Machine Learning Web App](https://www.youtube.com/watch?v=tFjeUtFay_Q&list=PLJ39kWiJXSiyAFG2W3CUPWaLhvR5CQmTd)

Eventually, you can have a look at TensorFlow's official way to serve models, Tensorflow Serving.

TensorFlow Serving is a flexible, high-performance serving system for machine learning models, designed for production environments. TensorFlow Serving makes it easy to deploy new algorithms and experiments while keeping the same server architecture and APIs.

- [Tensorflow Serving Official Guide](https://www.tensorflow.org/tfx/guide/serving)
- [Tensorflow Serving Official Examples](https://github.com/tensorflow/serving/tree/master/tensorflow_serving/example)
- [More Tensorflow Serving Examples](https://github.com/yu-iskw/tensorflow-serving-example)


The Virgilio tip here is to not start with Tensorflow Serving because for learning purposes it can be an overkill, because of the number of options and configurations.

To build demonstrations or just try your model through the web, a small and simple Flask app can be enough.

#### Cloud providers

Today, most of the real-world Machine Learning problems require scale and flexibility (growing numbers of users, frequent re-training...). 

A good option to deploy ML models is to leverage the most important Cloud providers like [AWS](https://aws.amazon.com/it/), [Azure](https://azure.microsoft.com/it-it/) and [GCP](https://cloud.google.com/).

There's a ton of tutorial and informative videos on Youtube, both from the platform's official channels, and from independent creators, check out them!

All the three Cloud providers have a dedicated Machine Learning / Data Science suite of services, to it's often easy to rely on these for your deployment.

- [Amazon SageMaker](https://aws.amazon.com/it/sagemaker/)
- [Azure Machine Learning](https://azure.microsoft.com/it-it/services/machine-learning/)
- [Google Cloud - AI Platform](https://cloud.google.com/ai-platform)

**Just be very careful with the costs associated with the compute resources you ask the provider!**

## Conclusions 

In this guide you have seen most of the important questions you should ask yourself _before_ deciding to put a Machine Learning model in production, making it available for other users or systems. You also have a detailed list of all the resources that can get you from zero to full skill in practical model deployment.
