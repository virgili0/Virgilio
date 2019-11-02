# Usage and Integration

# What you will learn 

In this guide we see which are the key questions to ask when framing a problem of Data Science, regarding the use of the final system and its integration with existing systems.

These lists of questions are **not exhaustive**, and we welcome Pull Requests that add significantly valid ones.

**Every time you start a new project Virgilio recommends that you write a document with the questions and answers explored in this guide, so you always have *clear objectives and characteristics* of the project, as well as being able to *share it easily* with others.**

_Do not underestimate this phase at all_, it is perhaps the most important of any project that wants to achieve success!

## Prerequisites
The previous Purgatorio's guides.

## Time to complete
10 minutes.

# Index
- [Usage](#Usage)
- [Integration](#Integration)
- [Conclusions](#Conclusions)

Once you have decided **what** the project will consist of, what the limits of the system will be and what data it will be based on, it is time to think about *how it will be implemented and integrated* into existing systems. 

In fact, it is extremely rare for a Machine Learning system to stand alone, much more likely it is designed to act together with other systems (not necessarily "intelligent", but also more classic as a management system or a mobile application). 

It is vital to understand two things:
- How the system will be used
- How the system will be integrated 

Let's start with "how the system will be used".

### Usage


The questions we have to ask ourselves are:

- **Which characteristics should be preferred?**

As in any software project, or in general engineering projects, in Data Science projects tradeoffs are extremely common. Depending on the type of requirement that our project has, we should ask ourselves what are its essential characteristics: should the system always remain online? or is it used once in a while? should the system be quick to calculate, or should it be very precise? 

In other words, we need to make sure that the most important features of the system drive its design and time management on the project. For example, an intelligent surveillance camera is important that it detects and recognizes each subject in its frame, so we will give more importance to its accuracy than to its speed of calculation. 

On the contrary, for an autonomous trading system that has to make decisions in the order of milliseconds, to buy or sell goods, it is vital that the predictions of the Machine Learning model are very fast, perhaps at the expense of the accuracy of the forecast.

- **How important is the use of the system by the user (vital, accessory, temporary, perpetual)?**

This is a question that is often underestimated by those who develop a system: it is taken for granted that the things we do with our hands are always indispensable. But this is not always the case, especially in a world where requirements change rapidly and prediction models deteriorate quickly.

We should always ask ourselves: is the use of the system vital for the user? For example, if it is the system that decides whether to inject medicines into a patient, of course, it is. In this case, we must spend more energy to make the system robust and constantly monitored, in order to avoid disasters. On the contrary, if my favorite application does not succeed in suggesting the best combination of food and drink, it is certainly a minor problem. 

Another aspect to consider is: will the system be used for a predetermined period of time, or will it be used in a perpetual way? In the first case perhaps it would be better to focus on the development of a well-made application from the beginning, while in the second case you can choose a more incremental approach. 
In practice, precisely because of the marked experimentation of Data Science, the incremental approach is often recommended.

- **How much will the system be used?**

What kind of use does the system have from the point of view of frequency of use? Is it used only once? Or a few times a day? Or thousands of times a second? 

Based on the answers we understand what performance our system must have: if it is used one-off, it can also be quite slow in computing, and maybe you can focus on making an extremely precise ML model.

On the contrary, if you need thousands of predictions per second (or millions), you have to take them into account during the design, and try to create light and fast ML models in data inference.

- **How do I evaluate user feedback (written reports, numerical evaluations, usage statistics)?**

During the serving and monitoring phase of the model, in the final part of the project, it is vital to monitor its performance and to ensure that it does not degrade (and more importantly, to ensure that the model is used).

There are several ways to do this: you can draw up usage statistics, or you can make numerical assessments of the system's performance, or you can ask for written feedback from users, so that you can improve your interaction with the application.

In any case, these feedbacks are very useful to understand the direction to take to improve the ML models that make predictions, and to ensure that they continue to work on a regular basis.

These kind of questions help us to define the how the system is used in a real world scenario, which is fundamental in the design choices that will be made during all phases of research and development.

### Integration

Now let's ask ourselves "how the system will be integrated".

These questions are not explored in depth, because the role of the Data Scientist is not to integrate systems, or to make them secure, or to monitor the proper functioning of the hardware side.

However, it is useful to have at least one awareness of the challenges that these issues pose during the production of a Machine Learning system. 

The questions to be asked here are the classic ones of systems integration, plus some others:

- **Which systems will integrate with the existing system?**
- **How is the system served (desktop application, mobile application, API Rest, remote calls)?**
- **If offered as a service (as is common practice in microservices architectures), where is it hosted (local machine, Cloud provider)?**
- **If offered as a service, how do I control the usage of the system  (access tokens, usage limits, permissions at various levels)?**
- **How should the system scale (load balancing, data partitioning, distribution of ML models, parameters)?**
- **Are there any particular constraints (platform migration, budget constraints, security, privacy considerations and regulation)?**
- **How much automation can be introduced and at what stages (research, development, deployment)?**

These are the kind of questions to be answered in order to have a complete picture of the future use and integration of the system. 
In this guide we have listed the key questions to ask each time you start a new Data Science project. 

### Conclusions

In general it is extremely useful to produce a document summarising all the answers to the questions, so as to provide a clear view of the project as a whole, what are the final objectives and the most important characteristics for the system. 

This list is not exhaustive, and as you get a question in your head you feel free to pull a request to this file. 

A Virgilio member will take over your request and enrich this guide with your contribution.

In the next guide we will see other key questions (more oriented to understand how we want to build the machine learning model that makes predictions) to be asked during the framing phase of the problem, which will help us to develop the project successfully. 

--------------------------------------------------

Written by [_clone95_](https://github.com/clone95)
