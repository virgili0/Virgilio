---
title: Data Collection
author: neomatrix369
description: The purpose of this guide is to talk about data collection and the different steps you need to do to prepare your dataset even before we can think of Machine Learning models and the works.
---

# What you will learn 
The real world is full of data, there are many types of data and collecting them is an art and comes through experience and doing it in an iterative process.

Also, this is one of the preliminary steps when you are about to do _Machine Learning_ or _Deep Learning_ models. The cascading steps or processes depend on quite a bit on this task but at the same time, this is a task that can be iterated many times.

And revisited depending on what we conclude or find in the subsequent steps and processes (you can look at the index to see what these steps are). 

We will also introduce a flow diagram eventually to show you where in the flow this task/step sits.

The purpose of this guide is to show you the importance of these steps, but also how important data collection can be in the whole cycle.

# Index
- [How to use this guide?](#How-to-use-this-guide)
- [The end-to-end process](#The-end-to-end-process)
- [Research or business questions](#Research-or-business-questions)
- [Start Small](#Start-small)
- [Small steps](#Small-steps)
- [The Toolkit and sources](#The-Toolkit-and-sources)
- [Datasets](#Datasets)
- [Data Generation](#Data-Generation)
- [Vizualisation](#Vizualisation)
- [Sanity Check](#Sanity-Check)
  - [Ethics](#Ethics)
  - [Interpretability / Explainability](#interpretability--explainability)
- [Automate The Boring Stuff!](#Automate-the-boring-stuff)
- [Resources](#Resources)
- [Conclusions](#Conclusions)

**Let's Start!**

### How to use this guide?

We'll give you some general tips to learn effectively and develop a decent foundation, that you can rely on to address and solve _Data Science_ problems in the complexity of the real world (which is messy by definition).

In this guide, you'll find many different tips and the sub-topics answer these questions provided below:
- why? (see [Research or business questions](#Research-or-business-questions))
- how?
- what?

The last two "how?" and "what?" overlap a bit and expand into these:
- [Start Small](#Start-small)
- [Small steps](#Small-steps)
- [The Toolkit and sources](#The-Toolkit-and-sources)
- [Datasets](#Datasets)
- [Data Generation](#Data-Generation)
- [Vizualisation](#Vizualisation)
- [Sanity Check](#Sanity-Check)

And to keep track of the "big picture", refer to [The end-to-end process](#The-end-to-end-process) section. Any other section(s) not mentioned are supporting sections to this guide.

As stated in **Virgilio's Teaching Strategy Guide**, read more about it [here](https://virgili0.github.io/Virgilio/paradiso/virgilio-teaching-strategy.html#goals-of-this-guide).

[Back to the index](#index)

### The end-to-end process

Here's a snapshot of the _end-to-end flow_ (high-level perspective):

![Screen Shot 2020-07-19 at 15 53 42](https://user-images.githubusercontent.com/1570917/87877786-2d660100-c9d8-11ea-9aa9-cb5eb076b6f2.png)

Details are omitted and focus is drawn to the current subject (_Data Collection_) we are talking about. But this is the "big picture" to also keep in mind when working through individual steps.

[Back to the index](#index)

### Research or business questions

The first thing before or during the _Data Collection_ process will be asking the right question(s). The [right business questions](https://www.datapine.com/blog/data-analysis-questions/) may be hard to come up with, but it has the [biggest impact](https://towardsdatascience.com/start-your-data-exploration-with-questions-2f1d42cff29e) on your performance of solving a particular problem. Remember, you want to [solve a problem](http://www.informit.com/articles/article.aspx?p=2271188&seqNum=2), not to create new ones!

And the same goes for asking the right _research question_. If you intend to establish something based on a hunch or curiosity or other research then there has to be some good base to start with.

Your data collection process or step is entirely dependent on the research or the business problem you are trying to solve.

At this point it's also important to understand that _the end-model_ you are on the quest to create, is a direct reflection of these two main factors:

- Data (or datasets used)
- Method (algorithm(s) used)

Although the second factor that is, "Method" will come a bit later, the first factor is the primary or core component of the _end-model_. Methods can be swapped and occasionally the end-results may not differ by much but good data or the right data is the key to getting a good model, otherwise you immediately can see the effects of [GIGO (Garbage In, Garbage Out)](https://en.wikipedia.org/wiki/Garbage_in,_garbage_out).

When coming up with a question or a problem statement, it's also necessary to know the definition of "done" and use examples if possible to establish what the end-results should/could be comparable to once we reach the endpoint of the process (each iteration or the last iteration).

[Back to the index](#index)

### Start Small

It's not efficient to try to handle _Gigabytes_ or _Petabytes_ of data each time you want to create a dataset as part of the _Data Collection_ process. Just use [small subsets](https://sdtimes.com/bi/data-gets-big-best-practices-data-preparation-scale/) of the data (but take care that the data is representative and you know the problems or nuances it contains). Once you are certain about your process and the end-to-end flow has matured and stabilised you can consider using bigger chunks of data for the new iterations.

[Back to the index](#index)

### Small steps

Just like the previous section [Start Small](#Start-small), starting small and staying small or growing slowly (or incrementally) is the most optimum way to proceed with _Machine Learning_ or _Deep Learning_ problem solving - given there are so many variables and moving parts. It's best to minimise the moving targets and pin them or fix them to a minimum when working on any part of the _end-to-end_ flow.

And so knowing clearly whether to increase the quantity of data to collect (or not collect at all) at the beginning (or end) of the end-to-end flow is a good way to go about. You will be able to determine this once you have gained enough intuition about the specific subject/domain and your end-to-end process to hand. Sometimes you may even decide to reduce the data to hand, if that makes sense based on the gathered observations and results.

[Back to the index](#index)

### The Toolkit and sources

Here is a list of things you could be doing to gather fresh data or existing data (and repurpose it for your needs):

- _Web Scraping_ tools and services
- Look for pre-existing datasets
  - **Kaggle** Datasets
  - **Kaggle Kernels** using custom datasets
  - Other competition sites
  - Other public domain sites
  - Private domain sources (respecting the licenses)
- Existing data in excel sheets or other forms within teams/organisations
- Collecting log files of program or application executions from live systems
- Running surveys via automatic services: **Google Forms**, **SurveyMonkey**, etc..,
- Convert non-digitalised data using modern technology
- **Data generation** services and tools

Many of the above can be done in a "live" manner or through a `cron` (scheduled) jobs and others through manual intervention. Which means you could have a "live" pipeline constantly collecting data and generating datasets for your _Machine Learning_ / _Deep Learning_ pipeline.

[Back to the index](#index)

### Datasets 

What is a _[dataset](https://en.wikipedia.org/wiki/Data_set)_? And how to create them? Also another important question is what should the dataset look like? This will quite depend upon on your [Research or business questions](#Research-or-business-questions) to hand.

Having a look at how others have created their datasets for the various domains or topics or research subjects, can also help in the process. See this [Datasets resource](https://github.com/neomatrix369/awesome-ai-ml-dl/blob/master/data/datasets.md) which is a mix of both _clean_ and _unclean_ (_raw_) datasets. This can also answer the more specific question, "what file format should the dataset be saved in?" [CSV](https://en.wikipedia.org/wiki/Comma-separated_values)? [JSON](https://en.wikipedia.org/wiki/JSON)? or any other know file formats.

They can throw light on types of data (features) to collect or not to collect, and in what form should they be in [data types](https://en.wikipedia.org/wiki/Data_type) when collected such that it's useful for the next steps in the process.

[Back to the index](#index)

### Data Generation

_Data generation_ is also a good [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) step/process, and also could be incorporated as one of your steps during the first few iterations - if you discover or know from observation that the data to hand is not sufficient or correct or even not usable for the end-purpose (see [Research or business questions](#Research-or-business-questions)).

_Data Generation_ can be useful when a domain or field has limited data from previous experiments, or the exercises have resulted in a small dataset. But the dataset may be somewhat representative of the problem that is being solved - in these cases, _Data Generation_ using existing data can help. This process is also called "synthetic data generation" if the data is generated from scratch, and "data augmentation" if it's generated based using the original data (parts of it or whole of it). See [Data Augmentation for Deep Learning](https://towardsdatascience.com/data-augmentation-for-deep-learning-4fe21d1a4eb9).

This of course has it's pros and cons - you soon get a lot of data but then is the data biased and in what way? Is it balanced or not, if not what to do - all these kinds of questions come to the surface.

This topic may need a section on its own but many resources and facilities are propping up these days that do exactly this, see this resource on [Data Generation](https://github.com/neomatrix369/awesome-ai-ml-dl/blob/master/data/data-generation.md#data-generation).

An important point to note, in the interest of privacy and ethics, the data is anonymised and/or balanced to reduce any injected bias via this process of data generation.

[Back to the index](#index)

### Visualization

"A picture speaks a thousand words" or "A picture is worth a thousand words" or other variants - they all mean the same thing!

There is a misconception that [Data Visualization](https://virgili0.github.io/Virgilio/purgatorio/collect-and-prepare-data/data-visualization.html) takes place towards the end or during some other process in the _end-to-end_ process. But the fact is, whenever you have data, no matter what state it is in, we can visualise it (partially, if not fully) . And gain an insight into what it is representing and what state it is in. It is an art and not just science to be able to do this, the science part of drawing pictures from it is more or less solved, but evaluating these pictures and diagrams is another skill. And depending on how well one knows their domain may or may not be able to make sense from them -- which again goes back to the [Research or business questions](#Research-or-business-questions).

But try to visualise as much as possible at every opportunity available, to be able to understand the changing nature of the data to hand.

[Back to the index](#index)

### Sanity Check

You always want to be sure that your data are _exactly_ how you want them to be, and because of this is a good rule of thumb is to apply a "sanity check" at the end of the _Data collection_ process.

Although sometimes we won't know "what sanity checks to apply?" till we have run through the rest of the steps in the process and then come back the next iteration(s) and fine-tune this step. So that a process can catch the important low-hanging fruits and that do not hinder the rest of the processes. Sometimes you might just have to proceed with the data and the steps that follow i.e. Data Preparation, Data Cleaning, Data Visualization, etc... as later on these steps will help reveal much about the collected data and decisions to take at any point in the process.

As we talk about [Data Visualization](https://virgili0.github.io/Virgilio/purgatorio/collect-and-prepare-data/data-visualization.html), the _Visualization_ step in the previous section itself is a good enough "sanity check" of your data - provided you have drawn those charts and have the skills to evaluate them. If not, hopefully, the rest of the steps will help you capture those insights (or other ones). And sometimes with experience and doing multiple iterations and observing various experiments, visualizations on older datasets (snapshots) start to make more sense.

Then there is also ethics you do not want to miss out on and [the section to follow gives you insight into it](#ethics). And finally, also [interpretability/explainability](#interpretability--explainability) which overlaps with ethics in a good way.

#### Ethics

With rising concerns over _privacy_ and _bias_, you want to be sure that the data collected does respect the ethics and standards in this field as much as possible.

To help with that as the awareness about things are improving, there are a lot of resources available, one such place to start would be [here](https://github.com/neomatrix369/awesome-ai-ml-dl/blob/master/README-details.md#ethics--altruistic-motives). One of the resources mentioned there is that of a python package called [Deon](https://pypi.org/project/deon/). Interestingly it has a _digital checklist_ you can consult and see if they apply to what you are about to do.

#### Interpretability / Explainability

Another widely debated but essential topic is the ability for us to interpret or explain our models and what better place to start but during the _Data Collection_ process. Another [good resource](https://github.com/neomatrix369/awesome-ai-ml-dl/blob/master/data/model-analysis-interpretation-explainability.md#post-model-creation-analysis-ml-interpretationexplainability
) to look into when although it's an ever-growing topic and subject to keep track of.

Other useful links to look at are [TensorFlow: Responsible AI](https://www.tensorflow.org/resources/responsible-ai) and https://pair.withgoogle.com/chapter/explainability-trust/ (you can find some more useful ones under [People + AI GuideBook](https://pair.withgoogle.com/guidebook/)). Another important resource to check here is this [course/tutorial on causality](https://www.callingbullshit.org/).

Ensure the features in the dataset which will end up becoming your _real-world model_ are _explainable_ and not a _[blackbox](https://en.wikipedia.org/wiki/Black_box)_ to the real-world. 

[Back to the index](#index)

### Automate The Boring Stuff!

_Data collection_ can be a tedious process but you could also [automate](https://www.youtube.com/watch?v=UZUoH7_mYx4) the most you can. Also, **automation is married with iteration**, so this is the way you need to plan your _data collection_ pipelines. It's not easy to recommend automation tips but here are some of the things you could consider doing (depending on your needs and the [Research or business questions](#Research-or-business-questions) you are trying to answer), see [The Toolkit and sources](#The-Toolkit-and-sources).

Beware that not in every case you may be able to automate the process, it will all depend on the domain your problem statement is created from and how digitalised it is. But sometimes some data may need to be extracted manually or through human-intervention or through traditional methods. Sometimes it's easier to not digitalise or automate something till the need for it arises, a few manual steps at a rare or occasionally is acceptable if Data Collection isn't performed regularly. At the end of the day try to strike a balance between need, efficiency and accuracy - during the initial steps you may be able to discount these a bit but as you do more iterations discipline and precision are important, so efficiency is our friend then.

[Back to the index](#index)

### Resources

These two resources are quite extensive and have been rated by experienced professionals in the industry:

- [👉 Effective Data Collection 👈](https://www.linkedin.com/posts/asif-bhat_data-collection-activity-6625312371869089793-4LrM)
- [The Ultimate Guide to Effective Data Collection](https://www.linkedin.com/posts/iamsivab_the-ultimate-guide-to-effective-data-collection-activity-6656175779732381697-lv6X)
- [People + AI GuideBook: Data Collection + Evaluation](https://pair.withgoogle.com/chapter/data-collection/)

It would be good to have a glance at them to see if you have not considered something. Such resources can also help validate the things we already know and how we are using them in the context of the problem to hand (and how others have been using them as well).

Also look at this talk on ["Do we know our data, as good as we know our tools?"](https://github.com/neomatrix369/awesome-ai-ml-dl/blob/master/presentations/data/02-devoxx-uk-2019/README.md), it starts off with an introduction to "Data Collection" and then into the next steps in the end-to-end process, also look for additional resources towards the end of the talk/slides and the _Appendix_ section of the slides.

But don't just stick to these build your acumen and also look for other resources everywhere else.

[Back to the index](#index)

### Conclusions

So now that you have an idea of what to do when you want to start solving a business problem using techniques like _Machine Learning_ and _Deep Learning_. You can also start thinking about how to do this in easily and keep building on top of it, otherwise, you may be forever busy collecting data but not proceed further from there. And not know the impact or use of the data collected. And thereby not gain the insight needed to answer your query or solve the problem statement.

Do also keep in mind the _due-diligence_ to follow when data is collected and converted into datasets to be passed on to the next process in the _end-to-end_ pipeline.

May be another read of the guide, taking notes from the various sections and external resources, creating a mind-map of all of the above could help give you a better insight into this initial but important step into _Data Science_.

[Back to the index](#index)