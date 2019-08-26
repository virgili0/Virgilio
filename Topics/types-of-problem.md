# Frame the problem

# What you will learn 
In this guide we try to figure out how to frame the kind of problem we want to solve and design it. 
We will do this by learning to ask the right questions. 

## Prerequisites
The previous Purgatorio's guides.

## Time to complete
20 minutes.

# Index
- [Recap of ML systems](#Recap-of-ML-systems)
- [Understand the data](#Understand-the-data)
- [Set objective and scope](#Set-objective-and-scope)
- [Integration](#Integration)
- [Real world usage](#Real-world-usage)

Let's dive right in!

### Recap of ML systems

As we saw in the guide [Introduction to ML systems](Topics/MLSystems.md), there are various ways to classify a problem related to data and learning from them, and in particular the most important classification to frame the problem is as follows: is the problem a supervised or unsupervised learning task?

A supervised problem is a problem in which the data we want to learn from are "labelled": for example, images labelled according to their content, or the data of a loan applicant who knows how many times he managed to repay the debt or not. 

By "showing" a Machine Learning algorithm so many examples, we hope that it will be able to generalize to new cases never seen before and predict the right label (not necessarily a specific class, it could even be a number).

An unsupervised problem is without these labels, and our "learning from data" is usually about finding similarities between the various elements of the dataset and grouping them together (clustering technique).

The type of problem we will focus on in the Purgatory guides is the "supervised" type, which are the most common problems and those faced by neural networks (very powerful and flexible Machine Learning algorithms).

We will see in the section "Train and select an ML model" also some methods to deal with unsupervised problems.

After this brief summary, let's get started!

The first thing to do when dealing with a new problem is to understand what kind of data I have available. Remember, without data you're not going anywhere!

### Understand the data

The first thing to do, whether you are facing a challenge on Kaggle, or you are carrying out a project of corporate scope, is to understand what kind of data you have available: The process then requires you to start from the data to formulate a problem, not the other way around! 

In fact, as widely explained in Paradise, data is the only thing really necessary for the success of the project.

When we look at the data we should ask ourselves the following questions:

- What form do the data take (tables, images, text, audio)?
- Are the data labelled or not? 
- If not, are they labelable?
- How much reliable are the labels?
- Is it possible to put them all together (usually companies keep different data sets in different independent "silos")?
- Is this sensitive data? 
- If so, can they be anonymised?
- **How much** data is there (number of examples, storage weight)?

If we answer these questions, we should have a clear picture of what data we have available.

We can now proceed to the definition of the problem.

### Set objective and scope

Like any other software project, a data science project can not ignore having a clear goal to reach.

Formulating this objective is crucial for various reasons:
- the success of the project
- the measurability of the success of the project
- setting a clear target does not create too high an expectation

I suggest that you use the SMART methodology for projects, which consists of formulating them in a way:

- **S**pecific
- **M**easurable
- **A**ttainable
- **R**elevant
- **T**ime-framed

In particular, defining the scope of the project is fundamental. The scope is the size of the project, the number of components of which it is composed.

Projects often fail because you don't have a clear scope and you continue to add components and components until you have lost sight of the initial goal.

For example: 
- "I want to build a user interface that understands the natural language and interacts with the user" is too generic. 
- "I want to build a user interface that can take orders from the pizzeria and organize them according to the arrival time" is a much more defined scope.

Another example:
- "This system must help us to classify all the new data that arrives".
is too generic.
- "This system must classify the images that users send us according to the color of the object photographed" is specific.

Trying to formulate the problem in a "SMART" way helps you not to lose sight of the objective, not to set yourself unattainable objectives, to reach them in time and above all to realize if you are working well or badly (measurability). We will see in the next guide "Choose the metrics" how this aspect is fundamental.

Highly recommended is reading the [original paper](https://community.mis.temple.edu/mis0855002fall2015/files/2015/10/S.M.A.R.T-Way-Management-Review.pdf) of the SMART projects.

[This mini-course from **Google**](https://developers.google.com/machine-learning/problem-framing/) will help you framing your problem. Do it.
