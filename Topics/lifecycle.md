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
  - [Tools that can help in the definition of the problem](#Tools-that-can-help-in-the-definition-of-the-problem)
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
 
## How to use this guide

You can find hundreds of online articles describing the process of developing a Data Science project. In this article Virgilio does not aim to give you the details of each phase, which will be dealt with in more technical guides, but rather aims to give you an overview of the various steps, as well as a sort of checklist to keep in mind when starting a project.

I will also provide you, for each phase, with resources to deepen your knowledge, organized in a coherent way and specifically contextualized.

The following guide is inspired by the checklist in the magnificent book [Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow](https://www.amazon.it/Hands-Machine-Learning-Scikit-learn-Tensorflow/dp/1492032646), which I would urge you to buy. It's worth its weight in bits! 

I remind you what I mean by Data Science project: any project that aims to extract knowledge from data (for example, predict the optimal interest rate for a loan, or how many customers will enter the store tomorrow), and in doing so, use Machine Learning techniques.

These techniques can be of two types: 
- Traditional Machine Learning techniques (addressed in the "Traditional Machine Learning techniques" section of Purgatory)
- Deep Learning Techniques (covered in the section of the same name)

For now don't worry about the difference between the two, just know for now that the former have been around for decades, while the latter are the subject of active experimental research and have only started to be used in the last 6-7 years.

You are now ready for a short tour of the life cycle of the Data Science project, I will try to provide various examples for each phase, so that you can better orient yourself also when reading other sources (linked and not).

## Looking at the big picture
### Frame the problem

Each Data Science project starts from a phase called Problem Statement or Problem Shaping, i.e. the process of identifying the problem to be solved and the commercial advantages to be obtained. 

How do you do it? We must be ready to ask the right questions. 

The golden rule for defining a project's goal is to ask "acute" questions that are relevant, specific and unambiguous, and refine them over time: "how can I increase my profits?" is not a good question for a machine learning solution, while "what kind of car in my fleet will break first?" or "how much energy will my production plant consume in the next quarter?" are definitely better examples.  

If we want the data to work for us, we need to be able to ask the right questions. Only then will the data be able to offer us broad perspectives, make generally accurate forecasts and increase our knowledge.

In addition, Problem Shaping is a classic "self-generating" process, similar to brainstorming: good and innovative questions help the team to generate more intelligent questions. At this stage of the project, lateral thinking is a very valuable soft skill.  

Another significant aspect is the ability to transmit the results provided by the data. Human beings, by their very nature, have prejudices that influence the way they perceive the results, so it is necessary to find the most effective way to "tell the story".
history" of the data, a very important step for the success of a project.

### Tools that can help in the definition of the problem

The definition of the problem is the phase of the Data Science process that more than any other depends on soft skills (compared to technological skills or hard skills), however, since it is based on questions and data, sometimes in large quantities, can be
A data analysis tool is useful.

At this stage of the project, a key factor is the collaboration between data scientists and business users who, ultimately, are those with the most extensive knowledge in the field and are therefore those who will pave the way for success. From our experience, this collaboration is facilitated by data visualization tools. 

Data visualization tools such as [Tableau](https://www.tableau.com/it-it) generally have direct access to various types of structured and unstructured data sources, so that they can be applied to raw data, and are extremely effective in identifying trends, anomalies or aberrant data in the analyzed data with a much higher level of productivity than the classic tabular approach.  

For simple views, the Python [MatPlotLib](https://matplotlib.org/) library does a great job. We will see in a later guide how to use it.

As mentioned above, we must bear in mind that a Data Science project must always be geared towards achieving results focused on the activity and have a global vision in line with the business strategy.

In this regard, I would like to point out the project concept [S.M.A.R.T.](https://www.getorganizedwizard.com/smart-goals/an-overview-of-smart-project-management/), which helps to frame the problem and encourages wise evaluations during this phase.

Machine learning projects must have short-term objectives and be managed with an agile approach: the recirculation of questions, hypotheses and related data must be continuous, new discoveries must be used to guide and improve subsequent series of projects and results, even partial, must be shared with stakeholders (the business, colleagues, or simply those interested).

### Select a performance measure

Choosing the appropriate metrics to measure the performance of a model is critical to effectively solve a problem through a Machine Learning approach. 

Once the type of problem to be solved has been identified, it will be clear whether what you want to predict is a number (e.g., 4 percent rate) or a class chosen from a set (e.g., give input images, classify them according to the type of subject they portray).

The first type of problem, where the output of the system I want to build is a number, is called **regression**, while the second is called **classification**.

In Machine Learning problems, we are interested in measuring the performance of our system based on "how much is wrong" with respect to the correct output.

In the case of regression problems, this measure of the error corresponds to the distance between the predicted value and the correct value, while in the case of classification problems it corresponds to measuring a concept called entropy between the aforesaid classes. 

Don't worry if it sounds strange to you for now, we will deal with these concepts in subsequent guides. For now, it is enough to know that every time you start a ML project, it is essential to study the evaluation metrics of the final system.

Here you have a detailed guide that will introduce you to the choice of these metrics.
Keep it under your pillow, we'll need it soon!

(Parts [1](https://towardsdatascience.com/how-to-select-the-right-evaluation-metric-for-machine-learning-models-part-1-regrression-metrics-3606e25beae0), [2](https://towardsdatascience.com/how-to-select-the-right-evaluation-metric-for-machine-learning-models-part-2-regression-metrics-d4a1a9ba3d74), [3](https://towardsdatascience.com/how-to-select-the-right-evaluation-metric-for-machine-learning-models-part-3-classification-3eac420ec991))

### Check the assumptions
