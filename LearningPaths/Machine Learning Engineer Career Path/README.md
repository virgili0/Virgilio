# [CHECK HERE THE HOMEPAGE](https://github.com/clone95/Virgilio/tree/master)
## If you like Virgilio, [**FILL THIS FORM**](https://docs.google.com/forms/d/e/1FAIpQLSeVJ9N7ae8Wr07tfSuHkP5i_5Fa-4Lp5V4fBevsinWyx6t17g/viewform?usp=send_form) and I'll contact you whenever a new free guide comes out.
# Machine Learning Engineer 
## A complete ML study path, focused on TensorFlow and Scikit-Learn

I **strongly recommend** you to buy [**this**](https://www.amazon.it/Hands-Machine-Learning-Scikit-Learn-Tensorflow/dp/1491962291/ref=pd_sbs_14_1/260-9599700-1757805?_encoding=UTF8&pd_rd_i=1491962291&pd_rd_r=23993915-4513-11e9-ad92-43c54a5a8a65&pd_rd_w=QNr5b&pd_rd_wg=Si7Nj&pf_rd_p=37660d27-94f1-4ebe-be01-184b332a9b15&pf_rd_r=SF0KMBGABMY3T790JY7Z&psc=1&refRID=SF0KMBGABMY3T790JY7Z) phenomenal book: "Hands-On Machine Learning with Scikit-Learn and TensorFlow" by O'Reilly, which inspired me and has driven most of the organization and hierarchy of the content listed below.

Apart from this, **everything** listed here is open source and free, from world-renowned universities and open source associations. 

It is necessary to avoid confusion when we learn something new, especially when the topic is as wide and complex as Machine Learning. When possible, I tried to create the next steps of the path preferring content from the same author or context. Otherwise, I collected both theory and examples, as well as pointers to best resources. The examples and resources are listed as “best practices for _____”.

#### I organized the Path in 4 sections:

#### Prerequisites
- Python  
- Jupyter Notebook
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
- Unsupervised Learning 
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
- Blogs / YouTube Channels / Websites worth taking a look!


So let's get started!

---------------------------------------------------------------

## Prerequisites

### Python
According to Sun Tzu:
> If you don't know Python, learn it yesterday!

Python is one of the most used and loved programming languages, and it's necessary to get things done in the Machine Learning field. Like most of the frameworks of the bigger Data Science field, TensorFlow is married with Python and Scikit-Learn is written in Python.  

First, let's [install Python 3](https://realpython.com/installing-python/) on your machine!

We are ready to start our journey! 

If you don't know the basics of Python, just start from [here](https://pythonprogramming.net/introduction-learn-python-3-tutorials/).\
Else if you know the syntax and you want to have a more solid Python background (recommended) take this Intermediate Python Course from [here](https://pythonprogramming.net/introduction-intermediate-python-tutorial/).\
If you are looking for tons of exercises to get your hands dirty and get experience with Python, check [here](https://www.w3resource.com/python-exercises/) and [here](https://www.practicepython.org/).

Once you're familiar with Python, take a look at [Numpy](https://docs.scipy.org/doc/numpy-1.13.0/user/whatisnumpy.html), an important module for math operations, that allows you to import in Python the [Tensor](https://www.kdnuggets.com/2018/05/wtf-tensor.html) data type, which is the most used in ML (especially when dealing with Neural Nets).
A tensor [is not a matrix!](https://medium.com/@quantumsteinke/whats-the-difference-between-a-matrix-and-a-tensor-4505fbdc576c)
This is an awesome [Numpy Tutorial](http://cs231n.github.io/python-numpy-tutorial/).

I also recommend you to install the [PyCharm Community Edition](https://www.jetbrains.com/pycharm/download/#section=windows), a complete IDE for Python development, and [set a new Python virtual environment](https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html) for your experiments.

### Jupyter Notebook
Directly from [here](https://jupyter.org/): "The Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text. Uses include: data cleaning and transformation, numerical simulation, statistical modeling, data visualization, machine learning, and much more."
Working with data means -> a lot of experiments. And to document experiments, and organize them in a valuable way to get insights, you definitely need to use Jupyter Notebook during your journey. [Why](http://blendedlearning.blogs.brynmawr.edu/what-are-jupyter-notebooks-why-would-i-want-to-use-them/)?


### The math you need
Whoever tells you that the math behind Machine Learning is hard... is not so wrong! But you have to consider that every time you're going to use it, it will be handled by the machine for you! So, the important is to grasp the main concepts and recognize limits and applications of those. No one is going to ask you to calculate a gradient by hand! So, if you are not familiar with these concepts, check them, because they are the reason behind everything.


With these three resources, you'll get out the most of what you really need to understand deeply.

A top course about linear algebra is [here](https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/).\
Integration with basic probabilities and statistical concepts [here](https://www.edx.org/course/introduction-to-probability-0).\
The most of the remaining math you need is [here](https://explained.ai/matrix-calculus/index.html#sec4.5).


### The machine learning Landscape
Directly from the book cited earlier, this is the most concise and illuminating overview of **what is** and **when you need** machine learning. Let's stop using buzzwords!
Check it [here](https://www.oreilly.com/library/view/hands-on-machine-learning/9781491962282/ch01.html).
Also this is [a must](http://www.r2d3.us/visual-intro-to-machine-learning-part-1/).

----------------------------------------------------------------

## Machine Learning with Scikit-Learn

To install Scikit-Learn 

``` 
python pip install -U scikit-learn
```

If you encounter some problems, it may be because you don't have the latest version of pip. So in the same folder run:

```
 python -m pip install --upgrade pip
```

### Why Scikit-Learn
[Scikit-Learn](https://scikit-learn.org/stable/) is one of the most complete, mature and well-documented libraries for Machine Learning tasks. It comes out-of-the-box with powerful and advanced models that offers facility functions for the data science process. 

We'll learn and use other modules along the road. For a quick usage just look at their official documentation. 


### End-to-End Machine Learning project 
For a first taste, I suggest you go through [this](https://www.kaggle.com/startupsci/titanic-data-science-solutions) Kaggle notebook, which has a classical example of an ML task. The goal is to try to predict if a Titanic passenger would have been most likely to survive or not. Many things will be unclear for now, but don't worry, they will all be explained comprehensively later. It is nice to get the picture of the "applied" project, going through the classical steps of applied Machine Learning (problem framing, data exploration, question formulation...). 

The notebook is on [Kaggle](https://www.kaggle.com/), the go-to platform for ML and general Data Science projects, which provides a lot of free datasets and offers interesting challenges and ML model experiments.

Remember: Read the notebook and try to understand the big picture of the process. Some details, functions and code will be clearer later.

### Linear Regression
This is the simplest form of Machine Learning, and the starting point for everyone interested in predicting outcomes from a dataset.
Check [here](https://www.youtube.com/watch?v=W46UTQ_JDPk&list=PLoR5VjrKytrCv-Vxnhp5UyS1UjZsXP0Kj&index=2) the theoretical lesson from Andrew NG and then go through these examples, from the simplest to the most complex.
[This](https://www.geeksforgeeks.org/ml-normal-equation-in-linear-regression/) is the math behind Linear Regression.
- [Example 1](https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html#sphx-glr-auto-examples-linear-model-plot-ols-py)
- [Example 2](https://bigdata-madesimple.com/how-to-run-linear-regression-in-python-scikit-learn/)
- [Example 3](https://www.geeksforgeeks.org/linear-regression-python-implementation/)

_Put your hands on_: [This](https://www.kaggle.com/c/afsis-soil-properties) is a really good challenge, tackle it before going to the next section. 

### Classification
Classification is one of the most important ML tasks, when wanting to predict an outcome out of different possibilities. For example, given handwritten digits, classify them with the lowest error possible.
The simplest case is binary classification (Yes or No, Survived or Not Survived), have a look [here](https://machinelearningmastery.com/make-predictions-scikit-learn/).
Check [here](https://towardsdatascience.com/building-a-logistic-regression-in-python-301d27367c24) for a brief explanation of the theory of logistic regression for classification, and check [here](https://www.youtube.com/watch?v=VCJdg7YBbAQ) for a deeper comprehension (using the Titanic dataset).
You can use a lot of different ML models to classify things, even neural networks! For now, just take a look [here](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html), where you see an example of accuracy and recall comparison among different models.
[Here](https://medium.com/thalus-ai/performance-metrics-for-classification-problems-in-machine-learning-part-i-b085d432082b) you have an article about the metrics used to **evaluate** your classifiers.

### Training models
Here I grouped some of the techniques used in ML tasks to train the models.
In this Google Crash Course you find:
- [Gradient Descent](https://developers.google.com/machine-learning/crash-course/reducing-loss/gradient-descent)
- [Learning Rate](https://developers.google.com/machine-learning/crash-course/reducing-loss/learning-rate)
- [SGD](https://developers.google.com/machine-learning/crash-course/reducing-loss/stochastic-gradient-descent)
- [Regularization](https://www.youtube.com/watch?v=Q81RR3yKn30)

### Support Vector Machines
This is another classical algorithm to create ML models.
[Here](https://www.youtube.com/watch?v=_PwhiWxHK8o) you have the explanation of the theory, and [here](https://www.youtube.com/watch?v=g8D5YL6cOSE) a more practical approach. Check both.
[Here](https://scikit-learn.org/stable/modules/svm.html) is a very good explanation + practice application in Scikit-Learn.

### Decision Trees
Decision Trees are one of the most simple but effective ideas behind predicting outcomes, and they're used in many ways (e.g. Random Forest). Check [here](https://www.youtube.com/watch?v=eKD5gxPPeY0&list=PLBv09BD7ez_4temBw7vLA19p3tdQH6FYO) and go through the playlist to get a theoretical overview of Decision Trees (ID3).
[Here](https://scikit-learn.org/stable/modules/tree.html) you have the practical application of ID3.
Here you have some end-to-end examples with Scikit-Learn:
- [Example 1](https://www.youtube.com/watch?v=9YcMzsFvfxU) 
- [Example 2](https://www.youtube.com/watch?v=RmajweUFKvM)
- [Example 3](http://dataaspirant.com/2017/02/01/decision-tree-algorithm-python-with-scikit-learn/)
- [Example 4](https://mathspp.blogspot.com/2018/08/teaching-robot-how-to-vacuum-clean-with.html) couples decision trees with genetic algorithms.

### Ensemble Learning and Random Forest 
The idea of Ensemble Learning is to leverage all the different features, pros and cons of several ML models to obtain a group of "voters" that, for each prediction, gives you the most likely outcome, voted by different classifiers (SVM, ID3, maybe Logistic Regression). 
[Here](https://www.youtube.com/watch?v=9VmKYwX_U7s) you get the basics of ensemble learning model, and [here](https://www.youtube.com/watch?v=3kYujfDgmNk) you find the most classic of them, the Random Forest. Although the idea is simple, this ensemble model turned out to be really effective in tackling even some "hard" classification problems, or with a lot of data.

[Here](https://scikit-learn.org/stable/modules/ensemble.html) you get a complete overview of the best practices for ensemble learning, and [here](https://towardsdatascience.com/random-forest-in-python-24d0893d51c0) you find an example of Random Forest with Scikit-Learn. Both links come with a bunch of useful techniques to use in practice. 

### Unsupervised Learning
_First look (in order):_
- [Here](https://www.youtube.com/watch?v=8dqdDEyzkFA&t=14s) you have a brief introductory video.
- [This](https://towardsdatascience.com/unsupervised-learning-with-python-173c51dc7f03) article explains Unsupervised Learning really well.
- [Here](https://blogs.nvidia.com/blog/2018/08/02/supervised-unsupervised-learning/) is an interesting read about the difference among Supervised Learning, Unsupervised Learning, and Reinforcement Learning.

The two most important techniques here are [Association Rules Exploration](https://searchbusinessanalytics.techtarget.com/definition/association-rules-in-data-mining) and [Clustering](https://www.geeksforgeeks.org/clustering-in-machine-learning/). I provide examples and tutorials for both.

Association Rules tutorials and examples: [1](https://www.learndatasci.com/tutorials/k-means-clustering-algorithms-python-intro/), [2](https://towardsdatascience.com/an-introduction-to-clustering-algorithms-in-python-123438574097), [3](https://pythonprogramming.net/flat-clustering-machine-learning-python-scikit-learn/), [4](https://www.datacamp.com/community/tutorials/k-means-clustering-python), [5](https://stackabuse.com/hierarchical-clustering-with-python-and-scikit-learn/).

Clustering tutorials and examples: [1](https://pbpython.com/market-basket-analysis.html), [2](http://rasbt.github.io/mlxtend/user_guide/frequent_patterns/association_rules/), [3](https://stackabuse.com/association-rule-mining-via-apriori-algorithm-in-python/), [4](http://intelligentonlinetools.com/blog/2018/02/10/how-to-create-data-visualization-for-association-rules-in-data-mining/), [5](https://www.kaggle.com/datatheque/association-rules-mining-market-basket-analysis), [6](https://www.kdnuggets.com/2016/04/association-rules-apriori-algorithm-tutorial.html).

_Second pass:_
[Stanford slides](https://lagunita.stanford.edu/c4x/HumanitiesScience/StatLearning/asset/unsupervised.pdf).
[MIT slides](http://www.mit.edu/~9.54/fall14/slides/Class13.pdf).

 _Tips & Best practices:_
 [1](https://towardsdatascience.com/the-5-clustering-algorithms-data-scientists-need-to-know-a36d136ef68), [2](https://dzone.com/articles/10-interesting-use-cases-for-the-k-means-algorithm), [3](https://medium.com/@blazetamareborn/practicing-clustering-techniques-on-survey-dataset-f7d7a322e6ff), [4](https://www.analyticsindiamag.com/most-popular-clustering-algorithms-used-in-machine-learning/), [5](https://www.analyticsvidhya.com/blog/2017/02/test-data-scientist-clustering/).

### Wrapping up and looking forward
Now, if you followed all the steps and explored all the resources I posted, you're likely to be more confident with Machine Learning and have a general idea of things. Of course you need to explore and learn more, because this field is changing and enhancing techniques and approaches day-by-day! All the algorithms we've seen are widely used in the Data Science and Analytics fields, but there are some complex tasks where they fail or give really poor performances. Now we are ready to dive into the rabbit hole and try to understand how Neural Networks and Deep Learning can help tackle problems with millions of variables. 
[Why use Deep Learning over classical ML algorithms?](https://towardsdatascience.com/why-deep-learning-is-needed-over-traditional-machine-learning-1b6a99177063)

-----------------------------------------------------------------

## Neural Networks with TensorFlow
In this section we'll follow a track that will take us from zero knowledge about neural networks to fully understanding them, thanks to the Stanford University Deep Learning course and some tutorials I've searched over the internet. Some of them come from Google, others from Stanford or Cambridge universities, and you will learn to leverage neural networks (ANN, CNN, RNN) for several kinds of ML tasks.
These are [some use cases](https://www.digitaldoughnut.com/articles/2017/march/top-5-use-cases-of-tensorflow) of using TensorFlow for ML tasks. 

It is not easy to understand the theory and application of Neural Networks at first glance. You will need to go through tutorials repeatedly to fully comprehend the topic. I have spent a decent amount of time trying to understand them. Reading articles, official forums, learning paths (like this) and related subreddits was **the most effective way** to deeply learn the concepts, formulae, tradeoffs...
I came up with this approach, but you can tweak it as you prefer, because every brain is different.

> After taking the TensorFlow section, apply this
> 3-step iterative cycle:

>- 1 Get an idea of the main concepts through an **entire pass of this** [Stanford course](https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv), don't worry too much about the math explanations, focus on the **what and why**.

>- 2 Deeply explore **one topic at a time**, with theory + tutorials + examples (e.g. RNN theory + RNN tutorials + RNN examples)
>with the links and resources of the topic section of the guide.

>- 3 After iterating the 2nd step for each topic, go through the entire Stanford course again. This time you can fully understand all the formulae, connecting them and catching also the "math flow" of the course.

This iterative process (1-2-2-2-2.....-3) can be repeated as many times as you want, and will probably construct in your mind a nice **general schema** of the things. In each complete iteration you can drop one or more topics, and focus on the ones that are more interesting to you or not so clear.

In each section I've put content for the first time you arrive there (during the first complete iteration), and some content for next time you arrive there (after the 3rd step).

The structure follows the track proposed by the awesome Stanford course. You can find the slides [here](http://cs231n.github.io/).

[This](http://introtodeeplearning.com/) is an alternative course from MIT, more or less the same contents. It's worth watching it to compare and have a different point of view on the things you are learning, besides listening 2X to the best professors of the world exploring each topic.  

This is the [**Book**](https://www.deeplearningbook.org/) I refer to in each section.

### Why TensorFlow?
Created by the [Google Brain](https://ai.google/research/teams/brain) team, [TensorFlow](https://www.tensorflow.org/) is an open source library for numerical computation and large-scale machine learning. TensorFlow bundles together a slew of machine learning and deep learning (aka neural networking) models and algorithms and makes them useful by way of a common metaphor. It uses Python to provide a convenient front-end API for building applications with the framework, while executing those applications in high-performance C++.
TensorFlow is the de-facto standard for the major industry-sized companies that need to implement Machine Learning algorithms. It is built for scaling, with really cool features to parallelize training over multiple GPU's or devices.

### Up and Running with TensorFlow
Assuming you have [Python stored in the variable PATH](https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/), to install the TensorFlow library you just need to open a terminal inside you Python installation folder and run this command. 

``` 
python pip install tensorflow
```

The first read I recommend you is [this](https://www.infoworld.com/article/3278008/what-is-tensorflow-the-machine-learning-library-explained.html).
The second thing to do is to follow this [Introduction to TensorFlow](https://www.youtube.com/watch?v=tYYVSEHq-io) directly from the **awesome** [Google Education](https://ai.google/education/) page.
Again, some theoretical concepts might be unclear, but focus on how the TensorFlow library and processes are conceived. 
[This](https://medium.com/@camrongodbout/tensorflow-in-a-nutshell-part-one-basics-3f4403709c9d) is a good resume of the latter.
[Another beginner tutorial from google](https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/#0).
[This](https://www.youtube.com/watch?v=k5c-vg4rjBw&t=246s) is about the TensorFlow 2.0 update. 
These [1](https://jacobbuckman.com/post/tensorflow-the-confusing-parts-1/) and [2](https://jacobbuckman.com/post/tensorflow-the-confusing-parts-2/) explain the "hard" things to grasp of TensorFlow. Highly recommended.

A fundamental tool to know very well is **TensorBoard**. [Here](https://www.datacamp.com/community/tutorials/tensorboard-tutorial)'s a get started tutorial. TensorBoard gives you insights and data about _how things are going_ during training inside your neural network.

Now you're most likely familiar with **TensorFlow as a tool**, and it's time to understand **how to use** it to build large scale neural networks. Check the official [Google's user guide](https://www.tensorflow.org/tensorboard/r1/overview) too.
 
### ANN - Artificial Neural Networks 
_First look (in order):_
- [3Blue1Brown awesome intro](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi).
- [This video](https://www.youtube.com/watch?v=v2tKoymKIuE).
- [This is your bible](http://neuralnetworksanddeeplearning.com/chap1.html), understand it totally.
- [This is a gem](https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.85356&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false) and read [this](https://www.guru99.com/artificial-neural-network-tutorial.html) from the authors.
- [This](https://www.youtube.com/watch?v=o64FV-ez6Gw&t=540s) is a really fast-talking guy implementing a Neural Network library from scratch, super useful to understand how the core of an NN is implemented in Python. You can imagine that each existing framework is just an enormous expansion of this concept-library.
- [This](https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/) is a step-by-step backpropagation example with calculus.

_Second pass:_
- [ANN Chapter](https://www.deeplearningbook.org/contents/mlp.html).

_Tips & Best practices:_
[1](https://developers.google.com/machine-learning/crash-course/training-neural-networks/best-practices), [2](https://hackernoon.com/8-deep-learning-best-practices-i-learned-about-in-2017-700f32409512), [3](https://towardsdatascience.com/10-things-to-think-about-before-starting-to-code-your-deep-neural-network-65094a1e7c08), [4](https://towardsdatascience.com/how-to-increase-the-accuracy-of-a-neural-network-9f5d1c6f407d), [5](https://www.reddit.com/r/MachineLearning/comments/abj1mc/d_notes_on_why_deep_neural_networks_are_able_to/), [6](https://www.reddit.com/r/MachineLearning/comments/abj1mc/d_notes_on_why_deep_neural_networks_are_able_to/), [7](http://karpathy.github.io/neuralnets/), [8](https://medium.com/cracking-the-data-science-interview/a-gentle-introduction-to-neural-networks-for-machine-learning-d5f3f8987786).

### CNN - Convolutional Neural Networks
_First look (in order):_
- [Here](http://cs231n.github.io/convolutional-networks/)'s your reference, love it!
- [Here](https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/) is an awesome deep explanation. 
- [Here](https://medium.com/technologymadeeasy/the-best-explanation-of-convolutional-neural-networks-on-the-internet-fbb8b1ad5df8) another super good one.
- [Here](https://developers.google.com/machine-learning/practica/image-classification/) is a serious CNN tutorial from Google.
- [Here](http://setosa.io/ev/image-kernels/) you have an amazing interactive demo.

_Second pass:_
- [CNN Chapter](https://www.deeplearningbook.org/contents/convnets.html).

_Tips & Best practices:_
[1](https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/), [2](https://www.topbots.com/14-design-patterns-improve-convolutional-neural-network-cnn-architecture/), [3](https://arxiv.org/abs/1709.02601), [4](https://de.mathworks.com/matlabcentral/answers/362024-convolutional-neural-networks-what-is-the-best-practice-training-approach-using-graphics-cards), [5](http://www.academia.edu/4057996/Best_Practices_for_Convolutional_Neural_Networks_Applied_to_Visual_Document_Analysis), [6](https://www.microsoft.com/en-us/research/publication/best-practices-for-convolutional-neural-networks-applied-to-visual-document-analysis/), [7](https://missinglink.ai/guides/neural-network-concepts/neural-networks-image-recognition-methods-best-practices-applications/), [8](https://machinelearningmastery.com/best-practices-document-classification-deep-learning/).

### RNN - Recurrent Neural Networks
_First look (in order):_
- [Here](http://colah.github.io/posts/2015-08-Understanding-LSTMs/), a gentle but detailed explanation.
- [Here](https://www.superdatascience.com/blogs/the-ultimate-guide-to-recurrent-neural-networks-rnn) is another interesting explanation.
- [Here](https://www.youtube.com/watch?v=9zhrxE5PQgY) is a video with a more practical approach.
- [Here](https://becominghuman.ai/a-noobs-guide-to-implementing-rnn-lstm-using-tensorflow-1907a5bbb1fa), a guide to implement RNN in TensorFlow.
- [Here](https://medium.com/@erikhallstrm/hello-world-rnn-83cd7105b767), a 7-page long blog post regarding the TensorFlow implementation.

_Second pass:_
- [RNN Chapter](https://www.deeplearningbook.org/contents/rnn.html)

_Tips & Best practices:_
[1](https://danijar.com/tips-for-training-recurrent-neural-networks/), [2](https://svail.github.io/rnn_perf/), [3](https://towardsdatascience.com/rnn-training-tips-and-tricks-2bf687e67527), [4](http://slazebni.cs.illinois.edu/spring17/lec20_rnn.pdf), [5](https://www.quora.com/What-are-the-best-practices-for-choosing-hidden-state-size-in-RNNs), [6](https://www.quora.com/Can-recurrent-neural-networks-with-LSTM-be-used-for-time-series-prediction), [7](https://www.reddit.com/r/MachineLearning/comments/5ogbd5/d_training_lstms_in_practice_tips_and_tricks/).
 
### Training Networks: Best practices 
_First look (in order):_
I **strongly recommend** you to refer to [this page](http://cs231n.github.io/) from Stanford and go through all the Module 1 and 2.
I also put here a list of the various topics to explore when talking about _how to train NN in real life applications_.

- Overfitting vs Underfitting: [1](https://keeeto.github.io/blog/bias_variance/), [2](https://cran.r-project.org/web/packages/keras/vignettes/tutorial_overfit_underfit.html), [3](https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/), [4](https://medium.com/greyatom/what-is-underfitting-and-overfitting-in-machine-learning-and-how-to-deal-with-it-6803a989c76), [5](https://elitedatascience.com/overfitting-in-machine-learning). 
- Vanishing/Exploding Gradient: [1](https://medium.com/learn-love-ai/the-curious-case-of-the-vanishing-exploding-gradient-bf58ec6822eb), [2](https://machinelearningmastery.com/exploding-gradients-in-neural-networks/), [3](https://hackernoon.com/exploding-and-vanishing-gradient-problem-math-behind-the-truth-6bd008df6e25), [4](https://www.jefkine.com/general/2018/05/21/2018-05-21-vanishing-and-exploding-gradient-problems/), [5](https://medium.com/@prateekvishnu/xavier-and-he-normal-he-et-al-initialization-8e3d7a087528).
- Transfer Learning: [1](https://medium.com/analytics-vidhya/reusing-a-pre-trained-deep-learning-model-on-a-new-task-transfer-learning-1c0a25a92dfb), [2](https://www.analyticsvidhya.com/blog/2017/06/transfer-learning-the-art-of-fine-tuning-a-pre-trained-model/), [3](https://jjallaire.github.io/deep-learning-with-r-notebooks/notebooks/5.3-using-a-pretrained-convnet.nb.html), [4](https://towardsdatascience.com/a-comprehensive-hands-on-guide-to-transfer-learning-with-real-world-applications-in-deep-learning-212bf3b2f27a), [5](https://machinelearningmastery.com/transfer-learning-for-deep-learning/).
- Faster Optimizers: [1](http://ruder.io/optimizing-gradient-descent/), [2](https://www.jeremyjordan.me/nn-learning-rate/), [3](https://towardsdatascience.com/learning-rate-schedules-and-adaptive-learning-rate-methods-for-deep-learning-2c8f433990d1), [4](https://towardsdatascience.com/learning-rate-scheduler-d8a55747dd90). 
- Avoiding Overfitting through Regularization: [1](https://towardsdatascience.com/regularization-in-machine-learning-76441ddcf99a), [2](https://codeburst.io/what-is-regularization-in-machine-learning-aed5a1c36590), [3](https://www.analyticsvidhya.com/blog/2018/04/fundamentals-deep-learning-regularization-techniques/), [4](https://machinelearningmastery.com/weight-regularization-to-reduce-overfitting-of-deep-learning-models/).

_Second pass:_
- [Google best practices](https://developers.google.com/machine-learning/guides/rules-of-ml/).
- [Regularization Chapter](https://www.deeplearningbook.org/contents/regularization.html).
- [Optimization Chapter](https://www.deeplearningbook.org/contents/optimization.html).
- [Practical Methodology Chapter](https://www.deeplearningbook.org/contents/guidelines.html).
 

### AutoEncoders
_First look (in order):_
- [Here](https://www.quora.com/What-is-an-auto-encoder-in-machine-learning) you find a first read.
- [This](https://towardsdatascience.com/deep-inside-autoencoders-7e41f319999f) is your second recommended read.
- [This](https://www.youtube.com/watch?v=vfnxKO2rMq4) is a lecture from Andrew NG.
- I also give you some examples: [1](https://www.guru99.com/autoencoder-deep-learning.html), [2](https://github.com/aymericdamien/TensorFlow-Examples/blob/master/examples/3_NeuralNetworks/autoencoder.py), [3](https://towardsdatascience.com/deep-autoencoders-using-tensorflow-c68f075fd1a3), [4](http://machinelearninguru.com/deep_learning/tensorflow/neural_networks/autoencoder/autoencoder.html), [5](https://mathspp.blogspot.com/2019/03/generating-natural-looking-digits-with.html)

_Second pass:_
[AutoEncoders Chapter](https://www.deeplearningbook.org/contents/autoencoders.html).
 
 _Tips & Best practices:_
 [1](https://stats.stackexchange.com/questions/257163/architecture-of-autoencoders), [2](https://stats.stackexchange.com/questions/193780/how-much-noise-for-denoising-autoencoder), [3](https://www.reddit.com/r/MachineLearning/comments/6aw8ik/d_reddit_do_you_use_autoencoders_in_practice/), [4](https://www.reddit.com/r/MachineLearning/comments/89f17m/d_current_best_practices_for_vaes/), [5](https://www.reddit.com/r/MachineLearning/comments/5k8h07/p_insights_into_variational_autoencoders_for/).
 
### Reinforcement Learning
_First look (in order):_
- [Here](https://www.youtube.com/watch?v=2pWv7GOvuf0) you have an explanation video.
- [This](https://skymind.ai/wiki/deep-reinforcement-learning) article explains RL really well.
- [Here](https://towardsdatascience.com/what-to-expect-from-reinforcement-learning-a22e8c16f40c) is an interesting read.
- [This post](https://mathspp.blogspot.com/2018/09/markov-decision-processes-basics.html) couples an intuitive example with some formal definitions.
- Some examples: [1](https://adventuresinmachinelearning.com/reinforcement-learning-tensorflow/), [2](https://medium.com/tensorflow/deep-reinforcement-learning-playing-cartpole-through-asynchronous-advantage-actor-critic-a3c-7eab2eea5296), [3](https://www.youtube.com/watch?v=t1A3NTttvBA), [4](https://github.com/MorvanZhou/Reinforcement-learning-with-tensorflow).

_Second pass:_
[The go-to guide](https://lilianweng.github.io/lil-log/2018/02/19/a-long-peek-into-reinforcement-learning.html?utm_campaign=Data%20Machina&utm_medium=email&utm_source=Revue%20newsletter).
[Paper](https://arxiv.org/pdf/1710.02298.pdf) with state-of-the-art RL architecture.
[Complete free book on RL](http://www0.cs.ucl.ac.uk/staff/d.silver/web/Teaching.html).
 
 _Tips & Best practices:_
 [1](https://medium.com/@BonsaiAI/deep-reinforcement-learning-models-tips-tricks-for-writing-reward-functions-a84fe525e8e0), [2](https://towardsdatascience.com/applications-of-reinforcement-learning-in-real-world-1a94955bcd12).
 
## Utilities

**Hey You**.
During the last few years I collected tons of articles, web apps, reddit threads, best practices, projects and repositories, and I want to share with you each single bit of information, organizing them by type of resource (blogs or projects ideas, and so on). 

### Machine Learning Projects 

- [Enormous and awesome collection](https://github.com/FavioVazquez/ds-cheatsheets) of Data Science Cheat Sheets
- [Infinite collection](https://docs.google.com/document/d/e/2PACX-1vRRC3ZIcvjFqEYEgnN9pptoWONr2mSGZJ4hSdL8Jpf2IpXdxjTc-d3jrpb98h59xJnZ3h1frUDydoxc/pub) of actual Data Science / ML projects
- [Infinite collection](https://github.com/jtoy/awesome-tensorflow) of tutorials and ML projects in TensorFlow
- [Other TensorFlow examples](https://github.com/aymericdamien/TensorFlow-Examples)

### Tools

- [Google Data Visualization Facets](https://pair-code.github.io/facets/)
- [Interactive Neural Network](https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.95549&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false)

### Youtube Channels

- [Enthought](https://www.youtube.com/user/EnthoughtMedia/videos)
- [Siraj Raval](https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A)
- [3Blue1Brown](https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw)
- [Microsoft](https://www.youtube.com/channel/UCFtEEv80fQVKkD4h1PF-Xqw)
- [TensorFlow Official channel](https://www.youtube.com/channel/UC0rqucBdTuFTjJiefW5t-IQ)
- [Engineering Man](https://www.youtube.com/channel/UCrUL8K81R4VBzm-KOYwrcxQ)
- [The Tech Lead](https://www.youtube.com/channel/UC4xKdmAXFh4ACyhpiQ_3qBw)

### Blogs 

- [How to build a data science portfolio](https://lilianweng.github.io/lil-log/2018/02/19/a-long-peek-into-reinforcement-learning.html?utm_campaign=Data%20Machina&utm_medium=email&utm_source=Revue%20newsletter)
- [Distill blog](https://distill.pub/)  
- [Keras](https://www.youtube.com/user/EnthoughtMedia/videos)
- [Paolo Galeone blog](https://pgaleone.eu/)
- [TensorFlow official blog](https://medium.com/tensorflow)
- [KD Nuggets](https://www.kdnuggets.com/)
- [Incredible Graphic explanations](http://colah.github.io/)
- [Towards Data Science](https://towardsdatascience.com)
- [Machine Learning Mastery](https://machinelearningmastery.com/blog/)
- [Mathspp blog](http://mathspp.blogspot.com/)

### Websites worth taking a look!

- [A super curated list of Data Science resources](https://github.com/neomatrix369/awesome-ai-ml-dl/blob/master/data/README.md)
- [The best machine learning **short** book I've ever read](https://www.ibm.com/downloads/cas/GB8ZMQZ3)
- [A monster collection of Data related free course](https://github.com/kmario23/deep-learning-drizzle)
- [Machine Learning Map](http://www.saedsayad.com/data_mining_map.htm) 
- [Data modeling for Business Intelligence](https://www.1keydata.com/datawarehousing/data-modeling-levels.html)
- [Statistics explained](http://www.statsoft.com/Textbook/Elementary-Statistics-Concepts#Two%20basic%20features%20of%20every%20relation%20between%20variables)
- [Visualizing data - Tutorials](https://datascienceplus.com/category/visualizing-data/?tdo_tag=Python)
- [Fast.ai](https://www.fast.ai/)
- [Open.ai](https://openai.com/blog/better-language-models/)
- [Explained.ai](https://explained.ai/)
- [Machine Learning Glossary](https://developers.google.com/machine-learning/glossary/)
- [Python ML Tutorials](https://www.python-course.eu/machine_learning.php)
- [For Italian Learners!](https://www.deeplearningitalia.com/)
- [Immersive math](http://immersivemath.com/ila/)  
- [DeepLizard](http://deeplizard.com/)
- [Common Statistical Fallacies](https://www.geckoboard.com/learn/data-literacy/statistical-fallacies/)
- [Scikit-Learn practical recipes](http://gael-varoquaux.info/scikit-learn-tutorial/)



### Subreddits you want to follow!

- [10 awesome subreddits related to data science](https://www.analyticsindiamag.com/10-data-science-subreddits-every-tech-enthusiast-should-follow/)
- [An incredible tool to discover trends and subs](https://anvaka.github.io/sayit/?query=MachineLearning)

---

Written by [_clone95_](https://github.com/clone95)


