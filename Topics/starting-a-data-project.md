# Starting a Data Project

# What you will learn 
In this guide, you'll learn to prepare yourself to start the project. 

This will consist of building the project structure, looking for sources that can help you solve the problem, build good documentation and more!


## Prerequisites
All the previous Purgatorio guides.

## Time to complete
10 minutes.

# Index
- [Collect Information](#Hunting-for-Information)
- [Building a Knowledge Tree](#Building-a-Knowledge-Tree)
- [Choosing a Project Structure](#Choosing-a-Project-Structure)
- [Reproducibility](#Reproducibility)
- [Versioning](#Versioning)
- [Documentation](#Documentation)
- [Prepare to Fail](#Prepare-to-Fail)

Let's dive right in!
 
 
### Hunting for Information
A vital phase when starting a project is to search for information that can help you. These can be of any kind:
- Tutorials
- Documentation
- Existing projects
- Research Papers
- ...

This guide will not teach you how to use [Google](https://www.google.com/), because you will already know if you are reading these lines :-). 

By the way, probably not every knows about [**these Google tricks**](https://smallbiztrends.com/2019/03/google-tricks.html)...

But there are a few tips that can come in handy when you start "amassing" knowledge that will then come in handy.

#### Understand what you're looking for
The first thing to do when dealing with a new problem is to make sure you're looking for the right things. Are you sure the problem is called that for example? Image segmentation is different from image classification! [This Google guide](https://developers.google.com/machine-learning/problem-framing/cases) can help you be sure of the name of your problem.

This may seem trivial, but many useful resources are not found because the correct keywords are not typed into the search engine.

#### Don't re-invent the wheel
Are you sure that someone hasn't already solved your problem? In that case, if you needed it to solve a real problem you'd already have the dish ready, while if you're doing it to learn you have a base from which to start! Also, observing the code of others is very effective for learning.
In the latter case, it is still advisable to try to re-implement the solution.

To look if someone has solved the same problem the first place to look is [Github](https://github.com/), the platform where every developer puts Open Source code. 
Another interesting place can be [Kaggle](https://www.kaggle.com/), the site of the Data Science challenges, where thousands of practitioners and experts challenge each other on real problems, and whose works are available in the form of Notebooks.

Let's suppose for example that I want to solve a problem related to time series: I can type on Kaggle "analysis of time series" and I will probably find dozens of Notebooks that show how to solve a similar problem, and from which you can observe the approach. What a great source of inspiration!

Also check out [TensorFlow Hub](https://www.tensorflow.org/hub), [ModelZoo](https://modelzoo.co/) and [Papers with Code](https://paperswithcode.com/). These three platforms are full of pre-trained models that can come in handy, or even solve your problem already! :) 

#### Find communities
Join communities of people interested in the topic (e.g. [Reddit](www.reddit.com)): here you can find discussions, search by keywords (e.g. "time series analysis"), and ask questions, with experts who will answer and help you. 

Try to form specific, well-written questions, to minimize the time used by the respondent. For example, the question "how do I analyze a time series?" is too general, and a short Google search is all it takes to get the answer. 

Instead, a question like "to analyze a time series and train a model that preaches 2 steps forward in the future, is it better to approach X or approach Y?".

If the questions are too general or show laziness they'll likely remain unanswered...

Some subreddits you can subscribe to are:

- [r/MachineLearning](https://www.reddit.com/r/MachineLearning/)
- [r/LearnMachineLearning](https://www.reddit.com/r/learnmachinelearning/)
- [r/DeepLearning](https://www.reddit.com/r/deeplearning/)
- [r/DataScience](https://www.reddit.com/r/datascience/)
- [r/LearnDataScience](https://www.reddit.com/r/learndatascience/)

#### Building a Knowledge Tree

Given the speed of scientific research in the world of data, every day a new approach to your problem could be discovered that proposes a much better solution than the previous one. The only way to get up to date is to read research papers! 
Reading papers is difficult though, they are often full of mathematical, and statistical concepts, with complex theories. The important thing, however, is to be able to understand the concepts, and maybe try to apply them to your problem. 

Also often remember that Paper With Code collects the code to implement any paper! Often already after a couple of days from the release, there is code available in various frameworks, ready to be tried on your problem. 

However, when you are confronted for the first time with a new problem _you do not know which paper to start with_, also because usually, the papers refer to all previous papers that have tried to solve the same problem, and assume that the reader has some kind of knowledge about the problem.

So what to do?

Use the **Papers Tree** strategy:

- Find the last survey paper about the sub-field of Data Science you're trying to solve 
- Read carefully this paper, and understand which are the foundations and try to figure out which are the most important papers the sub-field is based on. Usually, the history of the field is covered, citing the most important papers, and this gives you an overview of which were the important steps of the research, up to the state of the art in the approach to the problem.

Following the example above, this paper -> [A Survey of the Recent Architectures of Deep Convolutional Neural Networks](https://arxiv.org/abs/1901.06032) contains a detailed map of the most important papers on convolutional networks (neural networks that work well with images and videos) and their evolutions, up to the most advanced architectures. 

Now you just have to look for the most important (or interesting) papers mentioned, organized is a time-aware tree!

A good practice is to use [Zotero](https://www.zotero.org/), a document manager that allows you to keep track of all your research.

You can then repeat this process in a more specific way, for example by looking for a survey paper on convolutional networks applied to the diagnosis of medical images. 

#### Warning
Before reading any paper [**read this!**](https://web.stanford.edu/class/ee384m/Handouts/HowtoReadPaper.pdf).

It's a paper that explains how to read a paper. Yes, we at Virgilio like recursion.

### Choosing a Project Structure
Choosing a project structure is vital to managing the complexities that result from the evolution of the project. Without a clear structure, you'll find yourself with randomly scattered files, dataset versions with similar names, so much so that it hurts your head! 

Well organized code tends to be self-documenting in that the organization itself provides context for your code without much overhead. People will thank you for this because they can:

- Collaborate more easily with you on this analysis
- Learn from your analysis about the process and the domain
- Feel confident in the conclusions at which the project arrives


But the first person to thank the ordered project structure is you! When we look at the code we wrote months ago, we often don't remember anything! 

> "Mmmm... I don't remember if the good file was analysis.py, analysis_final.py, analysis_1.py" :-)

For these reasons, good people have developed a fantastic project, [**Cookiecutter**](https://drivendata.github.io/cookiecutter-data-science/), which wants to standardize the structure of projects by providing a sensible and flexible template. 

To create the project skeleton just install the package:
```
pip install cookiecutter
```


and then use

```
cookiecutter https://github.com/drivendata/cookiecutter-data-science
```

You can modify the template according to your needs, just clone the repo, modify it and then use

```
cookiecutter https://github.com/...... your repo .....
```

Cookiecutter projects have the following structure:


![Figure 1-1](cookiecutter.png "1") 

[Here](https://drivendata.github.io/cookiecutter-data-science/) you can find how to use it and the motivations behind the structure choices, and [here](https://cookiecutter.readthedocs.io/en/latest/readme.html) you can find the docs.

### Reproducibility

Why are we talking about [**reproducibility**](https://en.wikipedia.org/wiki/Reproducibility)? 

The field name in the Data **Science** indicates that the work process is scientific (Data Science, even with software as a component, is not pure software, which is reproducible by definition).

From [this article](https://towardsdatascience.com/data-sciences-reproducibility-crisis-b87792d88513):
> Reproducible experiments are the foundation of every scientific field and, indeed, even the scientific method itself.

 Karl Popper said it best in [The Logic of Scientific Discovery](http://strangebeautiful.com/other-texts/popper-logic-scientific-discovery.pdf): “non-reproducible single occurrences are of no significance to science.” 

If you’re the only person in the world who can achieve a particular result, others may find it difficult to trust you, especially if they have spent time and effort attempting to reproduce your work. 

It is reckless and irresponsible to build a product or theory on a singular unconfirmed anecdote, and if you present anecdote as a reliable phenomenon, it can consume time and resources that would otherwise be spent on actual productive work.

Reproducibility has a number of indirect advantages, in addition to being sure to present good results (analysis or model predictions):

- It saves time in various ways, for example by saving the intermediate steps of data processing and cleaning, so that you don't have to redo all the steps
- Allows you to automate various parts of the project workflow
- Allows others to reproduce results
- Allows others to understand each phase without confusion
- Reproducible design is easier to document
- Allows you to take over the project after months or years, and be sure to get the most out of it

Here you can find articles and papers that explain you how to ensure an high reproducility across all the phases of the project:

- [Reproducibility in Science](https://ropensci.github.io/reproducibility-guide/)
- [Replicability is not Reproducibility: Nor is it Good Science](http://cogprints.org/7691/7/ICMLws09.pdf)
- [Ten Simple Rules for Reproducible Research in Jupyter
Notebooks](https://arxiv.org/ftp/arxiv/papers/1810/1810.08055.pdf)
- [Best Practices for Reproducible, Collaborative Data Science (Video)](https://www.youtube.com/watch?v=vP9Iup8xhKA)

Once you've walked through the above resources, you'll be equipped with best practices to ensure that your code will be highly reproducible, and again, people will be grateful to you! 

**Especially, you'll be grateful to yourself!!**

### Versioning
### Documentation

### Conclusions

### Further reading

----
Written by [_clone95_](https://github.com/clone95)
