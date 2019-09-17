# Frame the problem

# What you will learn 
In this guide we try to figure out how to frame the kind of problem we want to solve and design it. 
We will do this by learning to ask the right questions. 

This guide will provide you with many examples of "key questions", which makes sense to ask yourself every time you frame a new data problem. 

These lists of questions are **not exhaustive**, and we welcome Pull Requests that add significantly valid ones.

Every time you start a new project Virgilio recommends that you write a document with the questions and answers explored in this guide, so you always have *clear objectives and characteristics* of the project, as well as being able to *share it easily* with others.

**Do not underestimate this phase at all**, it is perhaps the most important of any project that wants to achieve success!

## Prerequisites
The previous Purgatorio's guides.

## Time to complete
20 minutes.

# Index
- [Recap of ML systems](#Recap-of-ML-systems)
- [Understand the data](#Understand-the-data)
- [Set objectives and scope](#Set-objective-and-scope)
- [Usage and Integration](#Integration)

Let's dive right in!

### Recap of ML systems

The process of Data Science, i.e. the extraction of knowledge and decisions from a set of data, is composed of several steps. Simplifying as much as possible, we try to frame the problem we want to solve, then we study the data available, then we create models (Machine Learning models) that are used to make predictions or estimates.
 
The definition of the problem is the first phase and also guides all the choices of design, implementation and integration that will come later during the project.

In particular, it is fundamental to classify the type of forecast you want to obtain once you have built the Machine Learning models: what _kind of prediction_ should the system make? 
Should it predict a number or a label?
Or will it have to group a new data together with those most similar to it?
Or should he predict the next content to be recommended to a user?

As we saw in the guide [Introduction to ML systems](MLSystems.md), there are various ways to classify a problem related to data and learning from them, and in particular the most important classification to frame the problem is as follows: **is the problem a supervised or unsupervised learning task?**

A supervised problem is a problem in which the data we want to learn from are "labelled": for example, images labelled according to their content, or the data of a loan applicant who knows how many times he managed to repay the debt or not. 

By "showing" a Machine Learning algorithm so many examples, we hope that it will be able to generalize to new cases never seen before and predict the right label (not necessarily a specific class, it could even be a number).

An unsupervised problem is without these labels, and our "learning from data" is usually about finding similarities between the various elements of the dataset and grouping them together (clustering technique).

The type of problem we will focus on in the Purgatory guides is the "supervised" type, which are the most common problems and those faced by neural networks (very powerful and flexible Machine Learning algorithms).

We will see in the section "Train and select an ML model" also some methods to deal with unsupervised problems.

After this brief summary, let's see what questions we ask ourselves (and which we ask to the experts of the dominoes) to frame a data problem.

The first thing to do when dealing with a new problem is to understand what kind of data I have available. Remember, without data you're not going anywhere!

### Understand the data

The first thing to do, whether you are carrying out a project of corporate scope or for yourself, is to understand what kind of data you have available: the process then requires you to start from the data to formulate a problem, not the other way around! 

In fact, as widely explained in Paradise, data is the only thing really necessary for the success of the project.

When we look at the data we should ask ourselves the following questions:

- **What are we supposed to do this with this data?**

  This may sound like a stupid question, but we shouldn't assume that our aim is to cover the whole process of Data Science, from data collection to the creation of predictive models of Machine Learning. 
  Maybe what we have to do is just a sub-stage of the ones that make up the complete process. For example, we may just have to clean up the data and format it well, or analyze it and report back to other considerations about it. 
  Or we might just have to do some statistics on them to observe six phenomena, so avoid the part of creating the model. Nobody wants to waste time doing things that are not necessary!

- **What form do the data take?**

  The data we have at our disposal can be of a completely different type:

  - tabular data 
  As the name indicates, data extracted from database tables (not necessarily relational). They are data organized in rows, have attributes and generally a way to identify them uniquely. The rows are divided into fields, which in turn can contain various types of data (numeric, textual, links to images). This type of data is also called "structured".
  For example, I could have a database that collects user names, their ages and associated tweets, in which case I would have tabular data that includes both text data (names and tweets) and numerical data (age). 
  
  - text
  For example, application logs, tweets, textbooks. We can consider textual data all that is made up of characters. Text data can then be inserted in the context of tabular data, as a separate field.
  
  - categorical
  - numerical
  - audio
  - images

  - time series



- **Do we know the data is raw (unclean)?**
- **Are the data labelled or not? **
- **If not, Is it possible to label them?**
- **How reliable are the labels?**
- **Is it possible to put them all together (usually companies keep different data sets in different independent "silos")?**
- **How has the data been collected and put together? Automatic? Manual? Combination?**
- **Is this sensitive data? **
- **If so, can they be anonymised?**
- **Can we achieve our goal with this data after cleaning and processing it?**
- **Is it reasonable and realistic?**
- **_How much_ data is there (number of examples, storage weight)?**
- **Can we augment the dataset?**

If we answer these questions, we should have a clear picture of what data we have available.

We can now proceed to the definition of the problem.

### Set objectives and scope

Like any other software project, a data science project need having a clear goal to reach.

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

Projects often fail because you don't have a clear scope and you continue to add more components until you have lost sight of the initial goal.

For example: 
- "I want to build a user interface that understands the natural language and interacts with the user" is too generic. 
- "I want to build a user interface that can take orders from the pizzeria and organize them according to the arrival time" is a much more defined scope.

Another example:
- "This system must help us classify all the new data that arrives".
is too generic.
- "This system must classify the images that users send us according to the color of the object photographed" is specific.

Trying to formulate the problem in a "SMART" way helps you not to lose sight of the objective, not to set yourself unattainable objectives, to reach them in time and above all to realize if you are working well or badly (measurability). We will see in the next guide "Choose the metrics" how this aspect is fundamental.

Highly recommended reading the [original paper](https://community.mis.temple.edu/mis0855002fall2015/files/2015/10/S.M.A.R.T-Way-Management-Review.pdf) of the SMART projects.

[This mini-course from **Google**](https://developers.google.com/machine-learning/problem-framing/) will help you framing your problem. Do it.

[This](https://www.youtube.com/watch?v=Jn8c3oe_GWU) is a very good example about framing an NLP (Natural Language Processing) project. Take a look at the entire Kaggle youtube channel, there's a lot of learning material!

### Usage and Integration

Once you have decided **what** the project will consist of, what the limits of the system will be and what data it will be based on, it is time to think about *how it will be implemented and integrated* into existing systems. 

In fact, it is extremely rare for a Machine Learning system to stand alone, much more likely it is designed to act together with other systems (not necessarily "intelligent", but also more classic as a management system or a mobile application). 

It is vital to understand two things:
- How the system will be used
- How the system will be integrated

Let's start with "how the system will be used".

The questions we have to ask ourselves are:
- What kind of user will the system use (technical, not technical, belonging to a certain demographic or social group, etc.)?
- Which characteristics should be preferred (computational speed, flexibility, reusability, precision)?
- How important is the use of the system by the user (vital, accessory, temporary, perpetual)?
- How much will the system be used (one-off, a few times a day, thousands of times a second)?
- How do I evaluate user feedback (written reports, numerical evaluations, usage statistics)?
- If the user of the system is another system (machine, service, application), how do I ensure feedback?
- How long does the system have to be operational?

These kind of questions help us to define the how the system is used in a real world scenario, which is fundamental in the design choices that will be made during all phases of research and development.

Now let's ask ourselves "how the system will be integrated".

The questions to be asked here are the classic ones of systems integration, plus some others:

- Which systems will integrate with the existing system?
- How is the system served (desktop application, mobile application, API Rest, remote calls)?
- If offered as a service (as is common practice in microservices architectures), where is it hosted (local machine, Cloud provider)?
- If offered as a service, how do I control the usage of the system  (access tokens, usage limits, permissions at various levels)?
- How should the system scale (load balancing, data partitioning, distribution of ML models, parameters)?
- Are there any particular constraints (platform migration, budget constraints, privacy considerations and regulation)?
- How much automation can be introduced and at what stages (research, development, deployment)?

These are the kind of questions to be answered in order to have a complete picture of the future use and integration of the system. 

In the next guide we will see other key questions to be asked during the framing phase of the problem, which will help us to develop the project successfully. 

--------------------------------------------------

_Written by [clone95](https://github.com/clone95)_ 

