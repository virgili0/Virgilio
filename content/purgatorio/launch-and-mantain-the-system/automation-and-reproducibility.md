---
title: Automation and Reproducibility
author: clone95
description: This guide introduces you to best practices of the Data Science process automation and research reproducibility.
---

# Index 

- [Advantages of Automation and The Need for Reproducibility](#Advantages-of-Automation-and-The-Need-for-Reproducibility)
- [Automation and Reproducibility for the Data Science Process](#Automation-and-Reproducibility-for-the-Data-Science-Process)
- [AutoML](#AutoML)
- [No Free Lunch and Black Boxes](#No-Free-Lunch-and-Black-Boxes)

## Advantages of Automation and The Need for Reproducibility

All the previous guides within Purgatorio suggest various things:

- there are _many steps_ to be taken to start from the raw data and get to high-performance models 
- you can make a lot of _mistakes_ and various kinds of mistakes.
- many steps can be _tedious or boring_ to repeat manually (Data Cleaning, I'm watching you).

So, how can we simplify our work and become more productive, decrease the likelihood of making mistakes, and make our work repeatable? 

The keyword is one: [Automation](https://en.wikipedia.org/wiki/Automation). 

Automation is the best solution to all the problems mentioned above, and also saves us time! 

This is true for almost every field (not only Data Science), in fact, if we look at the Wikipedia definition it says: 

 **_Advantages of Automation_**:

- Increased throughput or productivity.
- Improved quality or increased predictability of quality.
- Improved robustness (consistency), of processes or products.
- Increased consistency of output.
- Reduced direct human labor costs and expenses.
- Replaces human operators in tasks that involve hard physical or monotonous work (e.g., using 
- Performs tasks that are beyond human capabilities of size, weight, speed, endurance, etc.
- Reduces operation time and work handling time significantly.
- Frees up workers to take on other roles.
- It provides higher-level jobs in the development, deployment, maintenance, and running of the automated processes.

This article explains very well why Automation is crucial for the Data Science world:

- [4 Ways Automation Is Altering Data Science](https://towardsdatascience.com/4-ways-automation-is-altering-data-science-36a0d2755e4f)

### Disadvantages of Automation

Some might argue that Automation has not only advantages but also disadvantages, such as job losses (it takes less human to do the same things).

This argument goes beyond the technical issue of how to improve the Data Science process, so it will not be covered in this guide. 

However, this topic has valid counter-arguments, if you want to know more read here:

- [Automating jobs is how society makes progress](https://qz.com/work/1212722/automating-jobs-is-how-society-makes-progress/)
- [Will data science become automated?](https://www.reddit.com/r/datascience/comments/9mqghe/will_data_science_become_automated/)
- [Can Data Science be Automated?](https://www.reddit.com/r/datascience/comments/bmk6cm/can_data_science_be_automated/)
- [Do you think data science will get more automated and those without a PhD won't be competitive in the future?](https://www.reddit.com/r/datascience/comments/7f2m7i/do_you_think_data_science_will_get_more_automated/)

So, we can state that Automation is crucial for the Data Science process to become useful, for a variety of reasons. But perhaps the most important reason, when it comes to automation in science, is the [**Reproducibility**](https://en.wikipedia.org/wiki/Reproducibility) issue. 

**Data Science, precisely, is a "Science", in the sense that it must be demonstrable and reproducible!**

::: warning
Without **Reproducibility**, without the support of the _repeatability of experiments_, any result of Data Science is useless (or even harmful, because it can reinforce human bias).
:::

## Automation and Reproducibility for the Data Science Process

The automation of Data Science steps is advisable at all levels, from the creation of the dataset to the deployment of trained ML models. 

Most of the time, a configurable Python script is sufficient to automate most of the steps, which can for example be scheduled to be launched programmatically. 

The following is a list of hints for some automation that can save you a lot of time (and therefore, money).

You can automate:

- **Data collection** 

    Using scheduled scraping, database connections, or scheduled API, you can have always fresh data to train your models on. 

- **Data quality control**

    Using scripts that create statistical reports, for example on data distribution, the number of classes present, frequency, or other statistical values such as the most frequent data, average value, standard deviation. 

    This way, it is possible to compare in a programmatic way that the distribution of new data reflects previous data, or how much it differs from them.

    Check these awesome notebooks: 

    - [An Introduction To EDA and Hypothesis Testing](https://github.com/EricSchles/datascience_book/blob/master/Statistical%20Tests%20-%2001.ipynb)
    - [Statistical tests, from scratch](https://github.com/EricSchles/datascience_book/blob/master/Statistical%20tests%2C%20from%20scratch.ipynb)

- **Data backups**

    You can automate data backups, using Cloud Storage solutions (for example, S3 buckets or Azure Storage).
    
    This way you are always sure that your data is safe and replicated, and you can access them from wherever you want.
    
    A good idea is to backup regularly a folder from your local machine, where the data is stored and used. 

- **Data transformation steps**

    This one is crucial to obtain _Reproducibility_.
    
    In fact, only by automating the preprocessing steps can you be sure that the data always undergo the same transformations. 
    
    The worst nightmare that can happen to you is having to deal with manual preprocessing steps, which tomorrow will have to be done again, and you will surely make a mistake (the order in which they are made and / or possible configurations). 

    This issue often arises when using Jupyter Notebooks to build preprocessing workflows, watch out! Rather consider solid alternatives such as the [SKLearn's Pipelines](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html).

    Be sure to check these out (coming from [Ten Simple Rules collection](https://collections.plos.org/ten-simple-rules)):

    - [**Ten Simple Rules for Reproducible Research**](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003285)
    - [**Ten simple rules for writing and sharing computational analyses in Jupyter Notebooks**](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1007007)

    Interesting reads on Reproducibility:

    - [Creating Reproducible Data Science Projects](https://towardsdatascience.com/creating-reproducible-data-science-projects-1fa446369386)
    - [Reproducibility, Replicability, and Data Science](https://www.kdnuggets.com/2019/11/reproducibility-replicability-data-science.html)
    - [Challenges in irreproducible research](https://www.nature.com/collections/prbfkwmwvz)

- **Model training and serving**

    You can create scripts to _automatically_ train ML models at any given time, perhaps using new data you have collected, cleaned, and pre-processed. 

    You can automatically check that the performance of the models reflects expectations, and train them again in case they degrade.
    
    See:
    - [Why Machine Learning Models Degrade In Production](https://towardsdatascience.com/why-machine-learning-models-degrade-in-production-d0f2108e9214)
    - [The Ultimate Guide to Model Retraining](https://mlinproduction.com/model-retraining/)

    Once you've retrained the model, you can _automatically_ deploy it in production. Many Cloud Providers (AWS, Azure, GCP) offer you the possibility to do this in a very simple way.
    
#### The Automation Golden Rule

As you can see, there's a big room for improvement in your Data Science work if you use automation.

The [Rule of Three](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)) in software development says: 

> It states that two instances of similar code don't require refactoring, but when a similar code is used three times, it should be extracted into a new procedure.

_Likewise_, you can think of automation!

**If you should take a step more than twice, it's probably worth taking a moment to automate it!**

## AutoML

Until now we have seen how automation can fit into the various steps of the Data Science process, speed them up, and how it is vital to obtain reproducible results. 

But there is another aspect of how automation can help us, and it is called [AutoML](https://en.wikipedia.org/wiki/Automated_machine_learning). 

Automated machine learning (AutoML) is the process of automating the process of applying machine learning to real-world problems.

**AutoML covers the complete pipeline from the raw dataset to the deployable machine learning model.**

From Wikipedia:

> In a typical Machine Learning application, practitioners have a set of input data points to train on. The raw data may not be in a form that all algorithms can be applied to it. To make the data amenable for machine learning, an expert may have to apply appropriate data pre-processing, feature engineering, feature extraction, and feature selection methods. After these steps, practitioners must then perform algorithm selection and hyperparameter optimization to maximize the predictive performance of their model. 

> All of these steps induce challenges, accumulating a significant hurdle to get started with machine learning.

> **AutoML** dramatically simplifies these steps for non-experts. Automation is not perfect because AutoML tools still have hyperparameters, and setting them may require expertise.

Google is a pioneer in AutoML, and engineers there wrote a log of blog posts about this approach. Take a read: 

- [Cloud AutoML: Making AI accessible to every business](https://www.blog.google/products/google-cloud/cloud-automl-making-ai-accessible-every-business/)
- [Using Machine Learning to Explore Neural Network Architecture](https://ai.googleblog.com/2017/05/using-machine-learning-to-explore.html)
- [AutoML for large scale image classification and object detection](https://ai.googleblog.com/2017/11/automl-for-large-scale-image.html)
- [An End-to-End AutoML Solution for Tabular Data at KaggleDays](https://ai.googleblog.com/2019/05/an-end-to-end-automl-solution-for.html)
- [Using Evolutionary AutoML to Discover Neural Network Architectures](https://ai.googleblog.com/2018/03/using-evolutionary-automl-to-discover.html)

Then read here to have a detailed overview of the **pro/cons** of this approach:

- [Automated Machine Learning - An Overview](https://medium.com/thinkgradient/automated-machine-learning-an-overview-5a3595d5c4b5)

If you want to dive deeper into the field, here you can find an awesome collection of AutoML papers organized by application type:

- [Awesome AutoML Papers](https://github.com/hibayesian/awesome-automl-papers#expand-reduce)

#### AutoML Tools

After taking a look at the previous resources (take your time) it's time to figure out which AutoML tool is right for you. In fact, there are several platforms that provide them (Google Cloud Platform [is a pioneer with AutoML](https://cloud.google.com/automl?hl=it)), but they have different features and support different types of applications.  

Here you find a very recent paper that surveys the AutoML field:

- [**Towards Automated Machine Learning: Evaluation and Comparison of AutoML Approaches and Tools**](https://arxiv.org/abs/1908.05557)
- [Awesome AutoML Tools](https://github.com/neomatrix369/awesome-ai-ml-dl/blob/master/things-to-know.md#automated-machine-learning-tools-or-partial-automl-tools)

After you read this paper, you should be able to infer what tool or which platform is best suited to your case.

Here's a more detailed State-of-the-Art survey, with practical examples and detailed explanations about how AutoML principles work:

- [AutoML: A Survey of the State-of-the-Art](https://arxiv.org/pdf/1908.00709.pdf)

Here you find another interesting comparison of the different platforms:

- [AutoML Software Comparison](https://aimultiple.com/automl-software)

--- 

If you want to get started with the Google's AutoML platform, here you can find a good series of tutorials about it: 

- [AutoML Vision Beginner's guide](https://cloud.google.com/vision/automl/docs/beginners-guide)
- [AutoML Tables Beginner's guide](https://cloud.google.com/automl-tables/docs/beginners-guide)
- [AutoML Natural Language Beginner's guide](https://cloud.google.com/natural-language/automl/docs/beginners-guide)
- [AutoML Translation beginner's guide](https://cloud.google.com/translate/automl/docs/beginners-guide)

Just try it out!

::: warning
Often AutoML jobs consume a lot of computational resources (since it often requires a search in the model architectures space), so watch your back with the billing of the platform that you choose!
:::

## No Free Lunch and Black Boxes

It may seem too good to be true, right? There are actually some aspects to be careful about when choosing an AutoML approach. 

- Not all data types are suitable / supported by the currently available frameworks (autoML works best with tabular data). More complex data formats (like images, videos, audio...) aren't often considered in modern AutoML frameworks.
- However, it is important to know the data well, to know what information (often called signals) it contains, and to know what information we want to derive from it. 
- There is no such thing (as usual) as a _silver bullet_, so don't expect spectacular results in a magical way, on every problem you approach with AutoML. 
- It's usually computationally intensive, this can rapidly inflate the billing costs of the platform you're working on.  

Another **issue** you must consider when applying AutoML techniques, is the **opacity** that you bring to the process.

The concept of "[**Black Box**](https://towardsdatascience.com/the-black-box-metaphor-in-machine-learning-4e57a3a1d2b0)", linked to more complex ML algorithms (such as neural networks) makes the resulting ML models "opaque" and therefore difficult to explain, **should be equally considered for all steps of the Data Science process to which some automatic decision applies**.

For example:

- If some data preprocessing steps are decided from the machine, _why_ are they like that?
- Is it possible that these choices will affect the models that will then be trained on the data? If yes, _how_?
- If some features have been dropped and others have been chosen for the training, _why_? 
- If a certain model was chosen to be trained on data, _why_ that model? And if the data changed over time, would that model be able to _adapt_ to the new situation (after appropriate re-training)?

As you can see, as there are many pros in using AutoML, there are also various issues that can be problematic.

::: tip
**What does Virgilio think of AutoML?**

Basically, it's a very good set of tools, which when used in a smart way can make Data Scientist's life a lot easier, guiding them in the exploration and transformation of data, in the choice of the most suitable ML models and so on. 

On the other hand, it injects opacity into every step of the Data Science process to which it is applied, so watch your back!
::: 

## Conclusions

In this guide, you have seen how automation can bring enormous benefits to the whole Data Science process, especially in terms of the credibility of results (Reproducibility) and time savings. 

You've also seen what AutoML is and what its (great) potential is, but also the potential risks it brings with it in terms of opacity (Black Box concept). 