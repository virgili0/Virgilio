# Machine-Learning Study-Path
## A complete ML study path, centered around TensorFlow and Scikit-Learn

This repository is intended to provide a complete and organic learning path to getting started with Machine Learning.
You will understand both theory and be able to apply it in practice, with hands-on project.

It does not require any previous knowledge, but being confident with programming and high school math is necessary to understand and implement Machine Learning concepts.

I **strongly recommend** to buy [**this**](https://www.amazon.it/Hands-Machine-Learning-Scikit-Learn-Tensorflow/dp/1491962291/ref=pd_sbs_14_1/260-9599700-1757805?_encoding=UTF8&pd_rd_i=1491962291&pd_rd_r=23993915-4513-11e9-ad92-43c54a5a8a65&pd_rd_w=QNr5b&pd_rd_wg=Si7Nj&pf_rd_p=37660d27-94f1-4ebe-be01-184b332a9b15&pf_rd_r=SF0KMBGABMY3T790JY7Z&psc=1&refRID=SF0KMBGABMY3T790JY7Z) phenomenal book: "Hands-On Machine Learning with Scikit-Learn and TensorFlow" by  OreillY, which inspired me and has driven most of the organization and hierarchy of the content listed above.

A part from this, **every content** listed here is open source and free, most of that coming from the world-renowned universities and open source associations. 

When we learn something new, especially if wide and complex, is necessary to avoid confusion, so 
I tried to create the next steps of the path preferring contents from the same context and authors, when possible.
When not possible, I collected both theory and examples, further some pointers to resources like "best practices for _______".

#### I organized the Path in 4 sections:

#### Prerequisites
- Python
- The Math you need
- The Machine Learning landscape

#### Machine learning with Scikit-Learn
- Why Scikit-Learn?
- End-to-End Machine Learning project 
- Linear Regression 
- Classification
- Training models
- Support Vector Machines
- Decision Trees
- Ensemble Learning and Random Forest 
- Wrapping up and looking forward

#### Neural Networks with TensorFlow
- Why TensorFlow?
- Up and Running with TensorFlow
- ANN - Artificial Neural Networks 
- CNN - Convolutional Neural Networks
- RNN - Recurrent Neural Networks
- Training Networks: Best practices 
- AutoEncoders
- Reinforcement Learning
- Next steps

#### Utilities
- Machine Learning Projects 
- Data Science Tools
- Blogs / Youtube Channels / Websites worth taking a look!


So let's get started!

---------------------------------------------------------------

## Prerequisites

### Python
According to Sun Tzu:
> If you don't know Python, learn it yesterday!

Python is one of the most used and loved programming languages, and it's necessary to get things done in the Machine Learning field. Like most of the frameworks of the bigger Data Science field, TensorFlow is married with Python and Scikit-Learn is written in Python.  

First, let's [install Python](https://realpython.com/installing-python/) on your machine!

If you don't know the basics, just start from [here](https://pythonprogramming.net/introduction-learn-python-3-tutorials/).\
Else if you know the syntax and you want to have a more solid Python background (recommended) take this Intermediate Python Course from [here](https://pythonprogramming.net/introduction-intermediate-python-tutorial/).\
If you are looking for tons of exercises to get your hands dirty and get experience with Python, check [here](https://www.w3resource.com/python-exercises/) and [here](https://www.practicepython.org/).

Once you're familiar with Python, take a look at [Numpy](https://docs.scipy.org/doc/numpy-1.13.0/user/whatisnumpy.html), an important module for math operations, that allows you to import in Python the [Tensor](https://www.kdnuggets.com/2018/05/wtf-tensor.html) data type, which is the most used in ML (especially when dealing with Neural Nets).
[It's not a matrix!](https://medium.com/@quantumsteinke/whats-the-difference-between-a-matrix-and-a-tensor-4505fbdc576c)
This is an awesome [Numpy Tutorial](http://cs231n.github.io/python-numpy-tutorial/).

I also recommend you to install [Pycharm Community Edition](https://www.jetbrains.com/pycharm/download/#section=windows), a complete IDE for Python development, and [set a new Python virtual environment](https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html) for our experiments.

### The math you need
Who tells that the math behind Machine Learning is hard... it's not so wrong! But you have to consider that every time you're going to use it, it will be handled by the machine for you! So, the important is to grasp the main concepts and recognize limits and applications of those. No one is going to ask you to calculate a gradient by hand! So, if you are not familiar with these concepts, check them, because they are the reason behind everything.

With these three resources, you'll get out the most of what you really need to understand things deeply.

A top course about linear algebra is [here](https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/).\
Integrate with basic probabilities and statistic concepts [here](https://www.edx.org/course/introduction-to-probability-0).\
The most of the remaining math you need [here](https://explained.ai/matrix-calculus/index.html#sec4.5).


### The machine learning Landscape
Directly from the book cited earlier, this is the most concise and illuminating overview of **what is** and **when you need** machine learning. Let's stop use buzzwords!
Check it [here](https://www.oreilly.com/library/view/hands-on-machine-learning/9781491962282/ch01.html).

----------------------------------------------------------------

## Machine Learning with Scikit-Learn

To install Scikit-Learn 

``` 
python pip install tensorflow
```

If you encounter some problems, it may be because you don't have the last version of pip. So n the same folder run:

```
 python -m pip install --upgrade pip
```

### Why Scikit-Learn
[Scikit-Learn](https://scikit-learn.org/stable/) one of the most complete, mature and well-documented library for Machine Learning tasks. It comes out-of-the-box with powerful and advanced models and offers facility functions and for the data science process. 
We'll learn and use other modules along the road, for a quick usage just look at their official documentation. 


### End-to-End Machine Learning project 
For a first taste, i suggest you to go through this Kaggle notebook, which is the most classic example of ML task. The goal is trying to predict if a Titanic passenger would have been most likely to survive or not. Many things will be unclear for now, but don't worry, they will be all explained comprehensively later. Is nice to get the picture of the "applied" project, going through the classical steps of the applied Machine Learning (problem framing, data exploration, question formulation...).

The notebook is on [Kaggle](https://www.kaggle.com/), the go-to platform for ML and general Data Science projects, which provides a lot of free datasets and offers interesting challenges and ML model experiments.

[This](https://www.kaggle.com/startupsci/titanic-data-science-solutions) is the notebook: Read it, trying to get the big picture of the process, because some details, functions and code will be clearer later.

### Linear Regression
This is the simplest form of Machine Learning, and the starting point for everyone interested in predicting outcomes from a dataset.
Check [here](https://www.youtube.com/watch?v=W46UTQ_JDPk&list=PLoR5VjrKytrCv-Vxnhp5UyS1UjZsXP0Kj&index=2) the theoretical lesson from Andrew NG and then go through these examples, from the simplest to the most complete.
[This](https://www.geeksforgeeks.org/ml-normal-equation-in-linear-regression/) is the math behind Linear Regression.
- [Example 1](https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html#sphx-glr-auto-examples-linear-model-plot-ols-py)
- [Example 2](https://bigdata-madesimple.com/how-to-run-linear-regression-in-python-scikit-learn/)
- [Example 3](https://www.geeksforgeeks.org/linear-regression-python-implementation/)

### Classification
Classification is one of the most important ML tasks, and want to predict an outcome classifying it among differente possibilities. For example, given handwritten numbers, classify them with the lowest error possible.
The simplest case is binary classification (Yes or No, Survived or Not Survived), have a look [here](https://machinelearningmastery.com/make-predictions-scikit-learn/).
Check [here](https://towardsdatascience.com/building-a-logistic-regression-in-python-301d27367c24) a brief explanation of the theory of logistic regression algorithm for classification, and check [here](https://www.youtube.com/watch?v=VCJdg7YBbAQ) for a deeper comprehension (using the Titanic dataset).
You can use a lot of different ML models to classify things, even neural networks! For now, just take a look [here](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html), where you see an example of comparison among different models accuracy and recall.
[Here](https://medium.com/thalus-ai/performance-metrics-for-classification-problems-in-machine-learning-part-i-b085d432082b) you have an article about the metrics used to **evaluate** your classifiers.

### Training models
Here i grouped some of the techniques used in ML tasks to train the models.
In this Google Crash Course you find:
- [Gradient Descent](https://developers.google.com/machine-learning/crash-course/reducing-loss/gradient-descent)
- [Learning Rate](https://developers.google.com/machine-learning/crash-course/reducing-loss/learning-rate)
- [SGD](https://developers.google.com/machine-learning/crash-course/reducing-loss/stochastic-gradient-descent)
- [Regularization](https://www.youtube.com/watch?v=Q81RR3yKn30)

### Support Vector Machines
This is another classical algorithm to create ML models.
[Here](https://www.youtube.com/watch?v=_PwhiWxHK8o) you have the explanation of the theory, and [here](https://www.youtube.com/watch?v=g8D5YL6cOSE) a more pratical approach. Chech both.
[Here](https://scikit-learn.org/stable/modules/svm.html) is a very good explanation + practice application in Scikit-Learn.

### Decision Trees
Decision Trees are one of the most simple but effective idea behind predicting outcomes, and they're used in many ways (i.e. Random Forest). Check [here](https://www.youtube.com/watch?v=eKD5gxPPeY0&list=PLBv09BD7ez_4temBw7vLA19p3tdQH6FYO) and go through the playlist to get a theoretical overview of Decision Trees (ID3).
[Here](https://scikit-learn.org/stable/modules/tree.html) you have the pratical application of ID3.
Here you have a some end-to-end examples, with  Scikit-Learn:
- [Example 1](https://www.youtube.com/watch?v=9YcMzsFvfxU) 
- [Example 2](https://www.youtube.com/watch?v=RmajweUFKvM)
- [Example 3](http://dataaspirant.com/2017/02/01/decision-tree-algorithm-python-with-scikit-learn/)

### Ensemble Learning and Random Forest 
The idea of Ensemble Learning is to leverage all the different features, pro and cons of several ML models to obtain a group of "voters" that, for each prediction, gives you the most likely outcome, voted by different classifiers (SVM, ID3, maybe Logistic Regression). 
[Here](https://www.youtube.com/watch?v=9VmKYwX_U7s) you the basics of ensemble learning model, and [here](https://www.youtube.com/watch?v=3kYujfDgmNk) you find the most classic of them, the Random Forest. Altough the idea is simple, this ensemble model came up really effective tackling even some "hard" classification problems, or with a lot of data.  

[Here](https://scikit-learn.org/stable/modules/ensemble.html) you get a complete overview of the best practices for ensemble learning, and [here](https://towardsdatascience.com/random-forest-in-python-24d0893d51c0) you find an example of Random Forest with Scikit-Learn. Both link come with a bunch of useful techniques touse in practice. 

### Wrapping up and looking forward
Now, if you followed all the steps and explored all the resources i posted, you're likely to be mode confident with Machine Learning and have a general idea of the things. Of course you need to explore and learn more, because this field is changing and enhancing techniques and approaches day-by-day! All the algorithm we've seen are widely used in the Data Science and Analytics field, but there are some complex tasks where they fail or give really poor performances. Now we are ready to fall down in the **deep** rabbit hole, trying to understand how Neural Network and in general Deep Learning can help tackling big problem with millions of parameters and variables. 
[Why use Deep Learning over classical ML algorithms?](https://towardsdatascience.com/why-deep-learning-is-needed-over-traditional-machine-learning-1b6a99177063)

-----------------------------------------------------------------

## Neural Networks with TensorFlow
In this section we'll follow a track that will bring us to zero knowledge of neural network to fully understand them, thanks to the Stanford University Depp Learning course and some tutorials i've searched over the internet. Some of them come from Google, other from Stanford or Cambridge university, and you will learn to leverage neural networks (ANN, CNN, RNN) for several kind of ML tasks.
These are [some use cases] (https://www.digitaldoughnut.com/articles/2017/march/top-5-use-cases-of-tensorflow) of using TensorFlow for ML tasks. 

### Why TensorFlow?
Created by the [Google Brain](https://ai.google/research/teams/brain) team, [TensorFlow](https://www.tensorflow.org/) is an open source library for numerical computation and large-scale machine learning. TensorFlow bundles together a slew of machine learning and deep learning (aka neural networking) models and algorithms and makes them useful by way of a common metaphor. It uses Python to provide a convenient front-end API for building applications with the framework, while executing those applications in high-performance C++.
TensorFlow is the de-facto standard for the major industry-sized company that need to implement Machine Learning algorithms. Is built for scaling, with really cool features to parallelize training over multiple GPU's or devices.

### Up and Running with TensorFlow
Assuming you have [Python stored in the variable PATH](https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/), to install the Tensorflow library you just need to open a terminal inside you Python installation folder and run this command. 

``` 
python pip install tensorflow
```

The first read i recommend you is [this](https://jacobbuckman.com/post/tensorflow-the-confusing-parts-1/).
The second thing to do is to follow this [Introduction to TensorFlow](https://www.youtube.com/watch?v=tYYVSEHq-io) directly from the **awesome** [Google Education].
 
### ANN - Artificial Neural Networks 
### CNN - Convolutional Neural Networks
### RNN - Recurrent Neural Networks
### Training Networks: Best practices 
### AutoEncoders
### Reinforcement Learning
### Next steps
