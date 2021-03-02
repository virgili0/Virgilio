---
title: Best Practices
author: clone95
description: A detailed collection of the best practices of the Data Science process, and how you can get the most value out of software engineering principles. 
---


# Index 

- [The Mutant Runner](#The-Mutant-Runner)
- [Producing Good Data Science Software](#Producing-Good-Data-Science-Software)
- [How to Discover and Adopt Data Science Best Practices](#How-to-Discover-and-Adopt-Data-Science-Best-Practices)
- [Data Science Best Pratices](#Data-Science-Best-Pratices)
    - [General Rules](#General-Rules)
    - [Deliver Successful Projects](#Deliver-Successful-Projects)
    - [Interesting Reads](#Interesting-Reads)
- [Conclusions](#Conclusions)

The purpose of this guide is not so much to collect every existing best practice in Data Science (a very difficult task) but rather to give you the method by which to look for new best practices and put them into practice.  

However, several resources are listed that should be more than sufficient to develop advanced and robust practices for your Data Science projects. 

Interesting read:

- [Lessons from Optics, The Other Deep Learning](http://www.argmin.net/2018/01/25/optics/)

## The Mutant Runner

Exploring the Purgatorio, you've encountered a lot of links and websites that list good practices for Data Science, but it happens that those lists can be either contradictory or incomplete.

Why is it so difficult to build _good and consistent_ practices for Data Science?

- Knowledge is fragmented among the many researchers, professors, and practitioners
- Data Science development best practices are often hidden in skillful teams at top companies and are hardly shared 
- Data Science problems are rarely similar, and never the same
- Algorithms that improve the state of the art are published in conferences continuously
- New methods to evaluate algorithms are proposed
- Tools and libraries are developed and improved, new ones are created for every need

So, if developing and adopting good Data Science practices is not trivial, some ways allow us to get around the obstacle. 

Read:

- [Is it time for Data Science / Engineering patterns?](https://dev.to/renatocf/is-it-time-for-data-science--engineering-patterns-1782)

## Producing Good Data Science Software

First, doing Data Science means applying programming to statistics and mathematics. 

This can be done in various forms, such as data visualization, statistical analysis, or by building predictive models (and more...).  

The only certainty is that you are **almost always writing software!**

Now, software design, coding, and maintenance offer challenges widely faced by software engineering over the last 40-50 years of history, and there are advanced best practices to address the biggest challenges offered by the complexity of modern software.

To learn software development best practices, check these links:

- [**Software Engineering at Google - Best Practices from Google**](https://arxiv.org/ftp/arxiv/papers/1702/1702.01715.pdf)
- [Best Coding Practices](https://en.wikipedia.org/wiki/Best_coding_practices)
- [30 best practices for software development and testing](https://opensource.com/article/17/5/30-best-practices-software-development-and-testing)
- [Coding Best Practices - UTexas](https://www.cs.utexas.edu/~mitra/csSummer2014/cs312/lectures/bestPractices.html)

These Reddit threads:

- [**Best practices in software development workflow**](https://www.reddit.com/r/software/comments/24406h/best_practices_in_software_development_workflow/)
- [What are "good coding practices?"](https://www.reddit.com/r/webdev/comments/8gkzat/what_are_good_coding_practices/)
- [How do I get better at software engineering and software design?](https://www.reddit.com/r/compsci/comments/2mhwcx/how_do_i_get_better_at_software_engineering_and/)
- [Senior programmers and developers, what are some best practices / advice every junior programmer should know?](https://www.reddit.com/r/learnprogramming/comments/8bt1j4/senior_programmers_and_developers_what_are_some/)

And buy one of these books, they are definitely worth the price:

- [The Pragmatic Programmer](https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X/ref=sr_1_2?crid=28MD79HWTUZT1&dchild=1&keywords=the+pragmatic+programmer&qid=1597418514&s=books&sprefix=the+pr%2Cstripbooks-intl-ship%2C266&sr=1-2)
- [The Clean Coder](https://www.amazon.com/dp/0137081073/ref=cm_sw_r_cp_api_i_6rJ6AbTS2DYWA)

With these resources, you should be well equipped to understand and tackle the challenges of modern software programs, but most importantly you can transfer these concepts to the Data Science problems (that are software problems too).

## How to Discover and Adopt Data Science Best Practices

In addition to all the challenges of traditional software, Data Science offers **additional ones** to deal with, caused by the reasons listed in [The Mutant Runner](#The-Mutant-Runner) section. 

What Virgilio suggests to you to discover and apply the specific good practices of Data Science... is simply to seek them out! 

Virgilio was born as a place to collect all these kinds of resources and concepts, but it's obviously impossible to expect it to contain everything!

So, when dealing with a specific problem, Google for best practices about it, maybe adding the website source you want to look into:

::: tip
For example, if you are dealing with an image classification project, you should search:

- "Image classification best practices"
- "Image classification best practices Reddit"
- "Image classification best practices StackExchange"
:::

This kind of approach, especially skimming Reddit threads for hidden gem-comments, can give you invaluable insights from experts!

And if you can't find anything, about it, just post a question!


## Data Science Best Practices

This is a **pretty good** but sure **not definitive** list of the best links Virgil has found, listing the best practices currently widespread in the field of Data Science.
 
Be sure to check the points of the [Automation and Reproducibility](../launch-and-mantain-the-system/automation-and-reproducibility) Virgilio Guide!

### General Rules

- [Data scientists, the only useful code is production code](https://thuijskens.github.io/2018/11/13/useful-code-is-production-code/)
- [Development Workflows for Data Scientists](https://resources.github.com/downloads/development-workflows-data-scientists.pdf)
- [Deep Learning: Common Practices](https://www.youtube.com/watch?v=Hb6ISunEJcI&list=PLpOGQvPCDQzvgpD3S0vTy7bJe2pf_yJFj&index=22&ab_channel=AndreasMaier)
- [Good Enough Practices for Scientific Computing](https://swcarpentry.github.io/good-enough-practices-in-scientific-computing/)
- [Andrew NG - Deep Learning best practices book](https://www.deeplearning.ai/machine-learning-yearning/)
- [Machine Learning Engineering by Andriy Burkov](http://www.mlebook.com/wiki/doku.php)
- [Google: Rules of Machine Learning](ttps://developers.google.com/machine-learning/guides/rules-of-ml)

### Deep Learning Best Practices
This is the most useful set of resources about Deep Learning in production you can find over the Internet, be **sure** to take it!

- [Full Stack Deep Learning](https://course.fullstackdeeplearning.com/)

### Deliver Successful Projects
- [Structuring Machine Learning Projects](https://www.coursera.org/learn/machine-learning-projects)
- [Cookiecutter Data Science Project Template](https://drivendata.github.io/cookiecutter-data-science/)
- [Organizing machine learning projects: project management guidelines](https://www.jeremyjordan.me/ml-projects-guide/)
- [A Guide to Production Level Deep Learning](https://github.com/alirezadir/Production-Level-Deep-Learning)
- [A smooth approach to putting machine learning into production](https://maxhalford.github.io/blog/machine-learning-production/)

### Interesting Reads
- [Machine Learning: The High-Interest Credit Card of Technical Debt](https://storage.googleapis.com/pub-tools-public-publication-data/pdf/43146.pdf)
- [The ML Test Score: A Rubric for ML Production Readiness and Technical Debt Reduction](https://static.googleusercontent.com/media/research.google.com/cs//pubs/archive/aad9f93b86b7addfea4c419b9100c6cdd26cacea.pdf)

## Conclusions

In this guide, you've seen that _Data Science problems_ are at their core _Software problems_, and you've learned that **there's no such thing as a well-defined and stable set of best practices**, and that they always evolve over time. 
