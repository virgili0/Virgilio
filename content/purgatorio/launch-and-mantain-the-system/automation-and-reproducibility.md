---
title: Automation and Reproducibility
author: clone95
description: This guide introduces you to the best practices of the Data Science process automation and research reproducibility.
---

# Index 

- [Advantages of Automation and The Need for Reproducibility]()
- [Automation and Reproducibility for the Data Science Process]()
- [Automation in Machine Learning]()

## Advantages of Automation and The Need for Reproducibility

All the previous guides within Purgatorio suggest various things:

- there are _many steps_ to be taken to start from the raw data and get to high-performance models 
- you can make a lot of _mistakes_ and various kinds of mistakes.
- many steps can be _tedious or boring_ to repeat manually (Data Cleaning, I'm watching you).

So, how can we simplify our work and become more productive, decrease the likelihood of making mistakes, and make our work repeatable? 

The keyword is one: [Automation](https://en.wikipedia.org/wiki/Automation). 

Automation is the best solution to all the problems mentioned above, and also saves us time! 

This is true for almost every field (not only Data Science), in fact if we look at the Wikipedia definition it says: 

> _Advantages of Automation_:
>
>- Increased throughput or productivity.
>- Improved quality or increased predictability of quality.
>- Improved robustness (consistency), of processes or product.
>- Increased consistency of output.
>- Reduced direct human labor costs and expenses.
>- Replaces human operators in tasks that involve hard physical or monotonous work (e.g., using 
>- Performs tasks that are beyond human capabilities of size, weight, speed, endurance, etc.
>- Reduces operation time and work handling time significantly.
>- Frees up workers to take on other roles.
>- Provides higher level jobs in the development, deployment, maintenance and running of the automated processes.

This article explains very well why Automation is crucial for the Data Science world:

- [4 Ways Automation Is Altering Data Science](https://towardsdatascience.com/4-ways-automation-is-altering-data-science-36a0d2755e4f)

### Disadvantages of Automation

Some might argue that Automation has not only advantages, but also disadvantages, such as job losses (it takes less human to do the same things).

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

The following is a list of hints for some automations that can save you a lot of time (and therefore, money).

You can automate:

- **Data collection** 

    Using scheduled scraping, database connections or scheduled API, you can have always fresh data to train your models on. 

- **Data quality control**

    Using scripts that create statistical reports, for example on data distribution, number of classes present, frequency, or other statistical values such as the most frequent data, average value, standard deviation. 

    This way, it is possible to compare in a programmatic way that the distribution of new data reflects previous data, or how much it differs from them.

- **Data backups**

    You can automate data backups, using Cloud Storage solutions (for example, S3 bukcets or Azure Storage).
    
    This way you are always sure that your data is safe and replicated, and you can access them from wherever you want.
    
    A good idea is to backup regularly a folder from your local machine, where the data is stored and used. 

- **Data transformation steps**

    This one is crucial to obtain _Reproducibility_: In fact, only by automating the preprocessing steps can you be sure that the data always undergo the same transformations. 
    
    The worst nightmare that can happen to you is having to deal with manual preprocessing steps, which tomorrow will have to be done again, and you will surely make a mistake (the order in which they are made and possible configurations). 

    This issure often arises when using Jupyter Notebooks to build preprocessing workflows, watch out! Rather consider solid alternatives such as the [SKLearn's Pipelines](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html)

    Be sure to check this out:

    - [**Ten Simple Rules for Reproducibile Research**](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003285)


- **Model training and serving**

    You can create scripts to automatically train ML models at any given time, perhaps using new data you have collected, cleaned and pre-processed. 

    You can automatically check that the performance of the models reflects expectations, and train them again in case they degrade.
    
    See:
    - [Why Machine Learning Models Degrade In Production](https://towardsdatascience.com/why-machine-learning-models-degrade-in-production-d0f2108e9214)
    - [The Ultimate Guide to Model Retraining](https://mlinproduction.com/model-retraining/)

    Once you've retrained the model, you can automatically deploy it in production. Many Cloud Providers (AWS, Azure, GCP) offer you the possibility to do this in a very simple way.
    
### The Automation Golden Rule

As you can see, there's a big room for improvement in your Data Science work if you use automation.

The [Rule of Three](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)) in software development says: 

> It states that two instances of similar code don't require refactoring, but when similar code is used three times, it should be extracted into a new procedure.

_Likewise_, you can think for automation!

**If you should take a step more than twice, it's probably worth taking a moment to automate it!**

## Automation in Machine Learning

