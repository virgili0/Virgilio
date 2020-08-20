---
title: Jupyter Notebook
author: clone95
description: Learn how to use the Jupyter Notebook, the most popular application for Data Science.
---


# Index
 - [Why Jupyter Notebooks](#Why-Jupyter-Notebooks)
 - [Learn to use Jupyter Notebooks](#Learn-to-use-Jupyter-Notebooks)
 - [Considerations](#Considerations)
 - [Tips and Tricks](#Tips-and-Tricks)
 - [Notebooks Examples](#Notebooks-Examples)
 - [Conclusions](#Conclusions)


Let's dive right in!
 
## Why Jupyter Notebooks

[Jupyter notebooks](https://jupyter.org/) are a way of embedding ready-to-execute Python, Julia and R code with markdown documentation, images, and other such things, all in one file, as well as a program for presenting and running them. 

They're nice if you want to demonstrate a short script to another person, particularly in a data science context, because of some built-in plotting niceties and the fact that you can run cells of code individually. 

They are [widely used in Data Science](https://www.nature.com/articles/d41586-018-07196-1), because as we know the Data Science Process is an experimental and incremental process.

There are several reasons to choose Jupyter Notebook for the first phases of the Data Science process (e.g. data exploration, data cleaning):

- it's easy to write more than one line of the code before running. You do not need an editor on the side, crafting functions and then copying to the shell

- results presentation is richer than console. It supports graphs, images, tables. Effectively anything that can be represented by html, css and js

- if you make a mistake, you can trivially rerun that "cell" (chunk of code, nothing else) once you fix the mistake

- you can install it on some more powerful machine and interact with it in your browser, so works for you if you're not super friendly with terminal stuff


::: tip Curiosity
Project Jupyter's name is a reference to the three core programming languages supported by Jupyter, which are Julia, Python and R, and also a homage to Galileo's notebooks recording the discovery of the moons of Jupiter.
:::

## Learn to use Jupyter Notebooks

Now that you understand why it is important to use Jupyter Notebooks, let's see how to actually learn how to use them.

The guide for beginners that Virgilio recommends is as follows:

- [**Jupyter Notebook for Beginners Tutorial**](https://www.dataquest.io/blog/jupyter-notebook-tutorial/)

You will:

- Cover the basics of installing Jupyter and creating your first notebook
- Delve deeper and learn all the important terminology
- Explore how easily notebooks can be shared and published online. Indeed, the tutorial _is a Jupyter Notebook!_ Everything here was written in the Jupyter Notebook environment, though you are viewing it in a read-only form

Once you're done with this tutorial, you _have the option_ to dive deeper and follow this one:

- [**Jupyter Notebook for Advanced Users Tutorial**](https://www.dataquest.io/blog/advanced-jupyter-notebooks-tutorial/)

This advanced (optional) tutorial will involve:

- Warming up with the basics of shell commands and some handy magics, including a look at debugging, timing, and executing multiple languages
- Exploring topics like logging, macros, running external code, and Jupyter extensions
- Seeing how to enhance charts with [Seaborn](https://seaborn.pydata.org/), beautify notebooks with themes and CSS, and customise notebook output
- Finishing off with a deep look at topics like scripted execution, automated reporting pipelines, and working with databases

After these two tutorials you should be ready to use Jupyter Notebook in a pretty advanced way, leveraging all its useful capabilities.

You can conclude your learning of Jupyter with this simple read:

- [**Ten simple rules for writing and sharing computational analyses in Jupyter Notebooks**](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1007007)

You can also find an [Example Repository](https://github.com/jupyter-guide/ten-rules-jupyter) with a coherent and clean Jupyter Notebooks examples. 

See also: [Awesome Jupyter](https://github.com/markusschanta/awesome-jupyter) for a very detailed list of Jupyter projects, libraries and resources.

#### JupyterLab

When you use a Jupyter Notebook you just have the skeleton of an IDE, as it is designed for prototyping and analysis. 

But what if you want a full IDE, fully integrated with Jupyter?

_[JupyterLab](https://jupyterlab.readthedocs.io/en/stable/getting_started/overview.html) is the natural answer!_

JupyterLab enables you to work with documents and activities such as Jupyter notebooks, text editors, terminals, and custom components in a flexible, integrated, and extensible manner.

You can arrange multiple documents and activities side by side in the work area using tabs and splitters. Documents and activities integrate with each other, enabling new workflows for interactive computing.

Here you have a [**deep tutorial about JupyterLab**](https://towardsdatascience.com/jupyter-lab-evolution-of-the-jupyter-notebook-5297cacde6b)!

If you like [VSCode](https://code.visualstudio.com/), you can [use Jupyter Notebooks inside it!](https://www.google.com/search?q=vscode+and+jupyter&oq=vscode+and+jupyter+&aqs=chrome..69i57j0l7.2617j0j7&sourceid=chrome&ie=UTF-8)

#### Colaboratory

Remember that the Jupyter Notebook is nothing more than an application that runs on our machine, and therefore has its own computational capabilities.

An alternative possibility is to use [**Google Colaboratory**](https://colab.research.google.com/notebooks/welcome.ipynb).

Colaboratory is a free Jupyter notebook environment that requires no setup and runs entirely in the cloud. 

With Colaboratory you can write and execute code, save and share your analyses, and access powerful computing resources, all for free from your browser. 

## Considerations

As we said from the beginning, Jupyter Notebooks are great for exploring data, doing analysis and building small prototypes, so you can quickly try many different approaches to the same problem.

But beware! 

::: warning
You can't think that the final working system you built (presumably a Machine Learning model that makes predictions) is based entirely on a Jupyter Notebook!
:::

_In fact, putting models into production in the real world with Notebooks is a totally wrong practice_.

There are even more extreme opinions, i.e. those who do not recommend their use at all, like Joel Grus in [**I don't like notebooks.**](https://www.youtube.com/watch?v=7jiPeIFXb6U)

See also: [Pitfalls of Jupyter Notebooks](https://scicomp.aalto.fi/scicomp/jupyter-pitfalls.html), it can save you a lot of headache!

We at Virgilio think that _they are not the extreme evil_ as Grus suggests, but they certainly do not encourage the principles of software engineering or code cleaning in general.

That's why **it's crucial to know when to stop using the Notebook and start refactorizing the code into modular Python scripts**, which can then be conveniently used for purposes beyond exploration and experimentation.

Check the [nbconvert](https://nbconvert.readthedocs.io/en/latest/) module, and see also: [How do I convert a IPython Notebook into a Python file via command line?](https://stackoverflow.com/questions/17077494/how-do-i-convert-a-ipython-notebook-into-a-python-file-via-commandline)

Check the [nbdime](https://github.com/jupyter/nbdime), it provides tools for diffing and merging of Jupyter Notebooks.

## Tips and Tricks

Like any other new tool you learn, there are often little tricks or conveniences hidden in the documentation that can really make life easier if you use the tool in question every day!

The Jupyter Notebooks are no less, so here's to you a very detailed article on the tips and tricks of Jupyter!

See [**Jupyter Notebook Tips, Tricks, and Shortcuts**](https://www.dataquest.io/blog/jupyter-notebook-tips-tricks-shortcuts/)

## Notebooks Examples

Spread across the Web you can probably find hundreds of thousands of Jupyter Notebooks, but how do you navigate them all in an organized way?

Luckily someone did this job before Virgilio, and created this incredible resource:

[**A gallery of interesting Jupyter Notebooks**](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)

Take your time and explore this rich repository, you will surely find something that interests you! 

## Conclusions

You should now be fully aware of the various options you have to use the Jupyter Notebooks, both in their "basic" version, both within the JupyterLab IDE, and by exploiting the free power of Google thanks to the Colaboratory!
