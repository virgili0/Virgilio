---
title: Data Collection
author: neomatrix369
description: The purpose of this guide is to talk about data collection and the different steps you need to do to prepare your dataset even before we can think of Machine Learning models and the works.
---

# What you will learn 
The real world data is full of data, there are many types of data and collecting them is an art.

Also this is one of the preliminary steps when you are about to do Machine Learning or Deep Learning or any of the AI things. The cascading steps or processes depend quite a bit on this task but at the same time, this is a task that can be iterated a number of times.

And revisited depending on what we conclude or find in the subsequent steps and processes (you can look at the index to see what these steps are). 

We will also introduce a flow diagram eventually to show you where in the flow this task/step sits.

The purpose of this guide is to show you the importance of these steps, but also how important data collection can be in the whole cycle.

# Index
- [Don't Joke With Data](#Dont-joke-with-data)
- [Business Questions](#Business-Questions)
- [Start Small](#Start-small)
- [Small steps, check the data out](#Small-steps-check-the-data-out)
- [The Toolkit and sources](#The-Toolkit-and-sources)
- [Datasets](#Datasets)
- [Data Generation](#Data-Generation)
- [Sanity Check, check the data out](#Sanity-Check-check-the-data-out)
- [Automate These Boring Stuffs!](#Automate-these-boring-stuffs)
- [Resources](#Resources)
- [Conclusions](#Conclusions)

**Let's Start!**

### Don't Joke With Data
First, [**data is King**](https://www.edq.com/glossary/data-quality-importance/). In the [data-driven epoch](https://www.venturi-group.com/qa-with-helen-mannion/), having [data quality issues](https://www.ringlead.com/blog/7-common-data-quality-issues/) means to lose tremendous amounts of value for a company, in the present and in the future. So, respect your King and care a lot about him. The most immediate way to do this is to plan and [work hard](https://nektardata.com/high-quality-data/) to _produce_ good quality data.
Your goal is to plan a collecting data infrastructure that fixes problems beforehand. This means to care to a lot about planning well your database schemas (do I need [third-normal form](https://social.technet.microsoft.com/Forums/Lync/en-US/7bf4ca30-a1bc-415d-97e6-ce0ac3137b53/normalized-3nf-vs-denormalizedstar-schema-data-warehouse-?forum=sqldatawarehousing) or not?), how do you collect data from sensors (physical or conceptual) and so on. These are problems if you're building a system up from the ground, but most of the times in you're gonna facing real-world problems that someone wants to solve with [_already available_](https://www.wired.com/insights/2013/05/more-data-more-problems-is-big-data-always-right/) data.  

### Business Questions
Asking the [right business questions](https://www.datapine.com/blog/data-analysis-questions/) is hard, but it has the [biggest impact](https://towardsdatascience.com/start-your-data-exploration-with-questions-2f1d42cff29e) on your performance of solving a particular problem. Remember, you want to [solve a problem](http://www.informit.com/articles/article.aspx?p=2271188&seqNum=2), not to create new ones! 

You data collection process or step is entirely dependent on the business problem you are trying to solve.

At this point it's also important to understand that the end-model you are on a quest to create, is a direct reflection of two factors:

- Data (or datasets used)
- Method (algorith(s) used)

Although the second part i.e. Method will come later on, the first part is the primary or core component of the end-model. Methods can be swapped and many a times the end-results do not differ by much but the data is the key, otherwise you immediately can see the effects of GIGO (Garbage in, garbage out).

### Start Small
It's stupid to handle GBs of data each time you want to try a data preparation step. Just use [small subsets](https://sdtimes.com/bi/data-gets-big-best-practices-data-preparation-scale/) of the data (but take care that they are representative and you catch all the problems). Remember, if you want to experiment with string cleaning, you don't need to launch your script on 10M rows. 

### Small steps, check the data out

<How to incrementally build, also to find out what data we do really need>

### The Toolkit and sources

<what to use to gather data>

### Datasets 

<in what form do we create these datasets>



### Data Generation
This topic may need a section on it's own but there are many resources and facilities propping up these days that do exactly this.
https://github.com/neomatrix369/awesome-ai-ml-dl/blob/master/data/data-generation.md#data-generation

Data generation is also a good MVP step/process, and also could be incorporated as one of your steps during the first few iterations - if you discover or know from observation that the data to hand is not sufficient or correct or even not usable for the end-purpose (see [Business Questions](#Business-questions)).

### Sanity Check, check the data out
You always want to be sure that your data are _exactly_ how you want them to be, and because of this is a good rule of thumb to apply a sanity check after the completion of this step.

Although we won't know what sanity checks to apply till we have run through the rest of the steps in the process and then come back the next iteration(s) and fine-tune this step so that it catches the important low-hanging fruits that do not hinder the rest of the processes.

### Automate These Boring Stuffs!
Data collection can be a tedius process but you could also [automate](https://www.youtube.com/watch?v=UZUoH7_mYx4) the most you can. Also, **automation is married with iteration**, so this is the way you need to plan your data collection pipelines. It's not easy to recommend automation tips but here are some of the things you could consider doing (depending on your needs and the "Business question" you are trying to answer):

- Web Scrapping
- Look for pre-existing datasets
  - Kaggle Datasets
  - Kaggle Kernels using custom datasets
  - Other competition sites
- Maintaining data in excel sheets
- Collecting log files of program or application executions
- Running surveys via automatic services: Google Forms, SurveyMonkey, etc..,
- Data generation sites and tools

### Resources

These two resources are quite extensive and have been rated by experienced professionals in the industry:

- [👉 Effective Data Collection 👈](https://www.linkedin.com/posts/asif-bhat_data-collection-activity-6625312371869089793-4LrM)
- [The Ultimate Guide to Effective Data Collection](https://www.linkedin.com/posts/iamsivab_the-ultimate-guide-to-effective-data-collection-activity-6656175779732381697-lv6X)

It would be good to have a glance of them to see if you have not considered something. Such resources can also help validate the things we already know and how we are using them in the context of the problem in hand (and how others have been using them).

But don't just stick to these build your own accumen and also look for other resources.

### Conclusions

So now that you have an idea of what to do when you want to start solving a business problem using techniques like Machine Learning and Deep Learning. You can also start thinking about how to do this simple and keep building on top of it, otherwise you maybe forever busy collecting data but not proceed with it.