# Machine Learning Study-Path
## A complete ML study path, focused on TensorFlow and Scikit-Learn

This repository is intended to provide a **complete and organic learning path** to getting started with Machine Learning.
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

First, let's [install Python 3](https://realpython.com/installing-python/) on your machine!

We are ready to start our journey! 

If you don't know the basics of Python, just start from [here](https://pythonprogramming.net/introduction-learn-python-3-tutorials/).\
Else if you know the syntax and you want to have a more solid Python background (recommended) take this Intermediate Python Course from [here](https://pythonprogramming.net/introduction-intermediate-python-tutorial/).\
If you are looking for tons of exercises to get your hands dirty and get experience with Python, check [here](https://www.w3resource.com/python-exercises/) and [here](https://www.practicepython.org/).

Once you're familiar with Python, take a look at [Numpy](https://docs.scipy.org/doc/numpy-1.13.0/user/whatisnumpy.html), an important module for math operations, that allows you to import in Python the [Tensor](https://www.kdnuggets.com/2018/05/wtf-tensor.html) data type, which is the most used in ML (especially when dealing with Neural Nets).
[It's not a matrix!](https://medium.com/@quantumsteinke/whats-the-difference-between-a-matrix-and-a-tensor-4505fbdc576c)
This is an awesome [Numpy Tutorial](http://cs231n.github.io/python-numpy-tutorial/).

I also recommend you to install [Pycharm Community Edition](https://www.jetbrains.com/pycharm/download/#section=windows), a complete IDE for Python development, and [set a new Python virtual environment](https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html) for our experiments.

### The math you need
Who tells that the math behind Machine Learning is hard... it's not so wrong! But you have to consider that every time you're going to use it, it will be handled by the machine for you! So, the important is to grasp the main math concepts and recognize limits and applications of those. No one is going to ask you to calculate a gradient by hand! So, even if you are not familiar with these concepts, check them, because they are the reason behind everything.

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
python pip install -U scikit-learn
```

If you encounter some problems, it may be because you don't have the last version of pip. So n the same folder run:

```
 python -m pip install --upgrade pip
```

### Why Scikit-Learn
[Scikit-Learn](https://scikit-learn.org/stable/) one of the most complete, mature and well-documented library for Machine Learning tasks. It comes out-of-the-box with powerful and advanced models and offers facility functions for the data science process. 
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
Classification is one of the most important ML tasks, and it consists of predicting **an outcome given an input**, classifying it among differente possibilities. For example, given handwritten numbers, guess what the number is, with the lowest error rate possible.
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
[Here](https://www.youtube.com/watch?v=_PwhiWxHK8o) you have the explanation of the theory, and [here](https://www.youtube.com/watch?v=g8D5YL6cOSE) a more pratical approach. Check both.
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
[Here](https://www.youtube.com/watch?v=9VmKYwX_U7s) you find the basics of the ensemble learning approach, and [here](https://www.youtube.com/watch?v=3kYujfDgmNk) you find the most classic of them, the Random Forest. Altough the idea is simple, this ensemble model came up really effective tackling even some "hard" classification problems, or with a lot of data.  

[Here](https://scikit-learn.org/stable/modules/ensemble.html) you get a complete overview of the best practices for ensemble learning, and [here](https://towardsdatascience.com/random-forest-in-python-24d0893d51c0) you find an example of Random Forest with Scikit-Learn. Both link come with a bunch of useful techniques touse in practice. 

### Wrapping up and looking forward
Now, if you followed all the steps and explored all the resources i posted, you're likely to be mode confident with Machine Learning and have a general idea of the things. Of course you need to explore and learn more, because this field is changing and enhancing techniques and approaches day-by-day! All the algorithm we've seen are widely used in the Data Science and Analytics field, but there are some complex tasks where they fail or give really poor performances. Now we are ready to fall down in the **deep** rabbit hole, trying to understand how Neural Network and in general Deep Learning can help tackling big problem with millions of parameters and variables. 
[Why use Deep Learning over classical ML algorithms?](https://towardsdatascience.com/why-deep-learning-is-needed-over-traditional-machine-learning-1b6a99177063)

-----------------------------------------------------------------

## Neural Networks with TensorFlow
In this section we'll follow a track that will bring us to zero knowledge of neural network to fully understand them, thanks to the Stanford University Deep Learning course and some tutorials i've searched over the internet. Some of them come from Google, other from Stanford or Cambridge university, and you will learn to leverage neural networks (ANN, CNN, RNN) for several kind of ML tasks.
These are [some use cases](https://www.digitaldoughnut.com/articles/2017/march/top-5-use-cases-of-tensorflow) of using TensorFlow for ML tasks. 

The theory and the applications of the Neural Networks are not too easy to get at a first look. Because of that, you'll need to pass again through tutorials and videos, to ensure a fully comprehension of the coming topics. Because of that, I spent a decent amount of time trying to understand (reading paths like this, articles, offical forums, related subreddits) which was **the most effective way** to deeply learn the concepts, formulas, tradeoffs...
I came up with this approach, but you can tweak it as you prefer, because every brain is different.

> After taking the TensorFlow section
> 3 phases iterative cycle:

>- 1 Get an idea of the main concepts through **an entire pass** of this [Stanford course](https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv), don't care too much on math explanations, focus on the **what and why**

>- 2 Deeply explore **one topic at time**, with theory + tutorials + examples (e.g. RNN theory + RNN tutorials + RNN examples)
>with the links and resources of the topic section of the guide.

>- 3 After iterating the 2 phase for each topic, walk again through the entire Stanford course. This time you can fully understand all  the formulas, connecting them and catching also the "math flow" of the course.

This iterative process (1-2-2-2-2.....-3) can be repeated may times as you want, and will probably construct in your mind a nice **general schema** of the things. In each complete iteration you can drop one or more topics, and focus on the ones that are more interesting to you or not so clear.

In each section i've put content for the first time you arrive there (during the first complete iteration), and some content for next time you arrive there (after the 3 phase).

The structure follows the track proposed by the Stanford awesome course. You find the slides [here](http://cs231n.stanford.edu/slides/2018/).

[This] is an alternative course from MIT, more or less the same contents. It's worth watching it to compare and have a differente point of view on the things, besides listening 2X the best professors of the world exploring each topic.  

This is the **[Book]**(https://www.deeplearningbook.org/) I refer to in each section.

### Why TensorFlow?
Created by the [Google Brain](https://ai.google/research/teams/brain) team, [TensorFlow](https://www.tensorflow.org/) is an open source library for numerical computation and large-scale machine learning. TensorFlow bundles together a slew of machine learning and deep learning (aka neural networking) models and algorithms and makes them useful by way of a common metaphor. It uses Python to provide a convenient front-end API for building applications with the framework, while executing those applications in high-performance C++.
TensorFlow is the de-facto standard for the major industry-sized company that need to implement Machine Learning algorithms. Is built for scaling, with really cool features to parallelize training over multiple GPU's or devices.

### Up and Running with TensorFlow
Assuming you have [Python stored in the variable PATH](https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/), to install the Tensorflow library you just need to open a terminal inside you Python installation folder and run this command. 

``` 
python pip install tensorflow
```

The first read i recommend you is [this](https://jacobbuckman.com/post/tensorflow-the-confusing-parts-1/).
The second thing to do is to follow this [Introduction to TensorFlow](https://www.youtube.com/watch?v=tYYVSEHq-io) directly from the **awesome** [Google Education](https://ai.google/education/) page.
Again, some theoretical concepts might be unclear, but focus on how the TensorFlow library and process are conceived. 
[This](https://medium.com/@camrongodbout/tensorflow-in-a-nutshell-part-one-basics-3f4403709c9d) is a good resume of the latter.
[Another beginner tutorial from google](https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/#0).
[This](https://www.youtube.com/watch?v=k5c-vg4rjBw&t=246s) is about the TensorFlow 2.0 update. 

Now you're most likely familiar with **TensorFlow as a tool**, and it's time to understand **how to use** it to build large scale Neural Networks. 
 
### ANN - Artificial Neural Networks 
_First look (in order):_
- [This video](https://www.youtube.com/watch?v=v2tKoymKIuE).
- [This is your bible](http://neuralnetworksanddeeplearning.com/chap1.html), understand it totally.
- [This is a gem](https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.85356&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false) and read [this](https://www.guru99.com/artificial-neural-network-tutorial.html) from the authors.
- [This](https://www.youtube.com/watch?v=o64FV-ez6Gw&t=540s) is a really fast-talking guy implementing a Neural Network library from scratch, super useful to understand how is implemented the core of NN in Python. You can imagine that each existing framework is just an enormous expansione of this concept-library.
- [This](https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/) is a step-by-step backpropagation example with calculus.

_Second pass:_
- [ANN Chapter](https://www.deeplearningbook.org/contents/mlp.html).

_Tips & Best practices:_
[1](https://developers.google.com/machine-learning/crash-course/training-neural-networks/best-practices), [2](https://hackernoon.com/8-deep-learning-best-practices-i-learned-about-in-2017-700f32409512), [3](https://towardsdatascience.com/10-things-to-think-about-before-starting-to-code-your-deep-neural-network-65094a1e7c08), [4](https://towardsdatascience.com/how-to-increase-the-accuracy-of-a-neural-network-9f5d1c6f407d), [5](https://www.reddit.com/r/MachineLearning/comments/abj1mc/d_notes_on_why_deep_neural_networks_are_able_to/), [6](https://www.reddit.com/r/MachineLearning/comments/abj1mc/d_notes_on_why_deep_neural_networks_are_able_to/), [7](http://karpathy.github.io/neuralnets/), [8](https://medium.com/cracking-the-data-science-interview/a-gentle-introduction-to-neural-networks-for-machine-learning-d5f3f8987786).

### CNN - Convolutional Neural Networks
_First look (in order):_
- [Here](https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/) is an awesome deep explanation. 
- [Here](https://medium.com/technologymadeeasy/the-best-explanation-of-convolutional-neural-networks-on-the-internet-fbb8b1ad5df8) another super good one.
- [Here](https://www.datacamp.com/community/tutorials/cnn-tensorflow-python) is serious CNN tutorial with TensorFlow.

_Second pass:_
- [CNN Chapter](https://www.deeplearningbook.org/contents/convnets.html).

_Tips & Best practices:_
[1](https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/), [2](https://www.topbots.com/14-design-patterns-improve-convolutional-neural-network-cnn-architecture/), [3](https://arxiv.org/abs/1709.02601), [4](https://de.mathworks.com/matlabcentral/answers/362024-convolutional-neural-networks-what-is-the-best-practice-training-approach-using-graphics-cards), [5](http://www.academia.edu/4057996/Best_Practices_for_Convolutional_Neural_Networks_Applied_to_Visual_Document_Analysis), [6](https://www.microsoft.com/en-us/research/publication/best-practices-for-convolutional-neural-networks-applied-to-visual-document-analysis/), [7](https://missinglink.ai/guides/neural-network-concepts/neural-networks-image-recognition-methods-best-practices-applications/), [8](https://machinelearningmastery.com/best-practices-document-classification-deep-learning/).

### RNN - Recurrent Neural Networks
_First look (in order):_
- [Here](http://colah.github.io/posts/2015-08-Understanding-LSTMs/) a gentle but detailed explanation.
- [Here](https://www.superdatascience.com/blogs/the-ultimate-guide-to-recurrent-neural-networks-rnn) another interesting explanation.
- [Here](https://www.youtube.com/watch?v=9zhrxE5PQgY) a video with a more pratical approach.
- [Here](https://becominghuman.ai/a-noobs-guide-to-implementing-rnn-lstm-using-tensorflow-1907a5bbb1fa) a guide to implement RNN in TensorFlow.
- [Here](https://medium.com/@erikhallstrm/hello-world-rnn-83cd7105b767) a 7 pages blog post regarding the TensorFlow implementation.

_Second pass:_
- [RNN Chapter](https://www.deeplearningbook.org/contents/rnn.html)

_Tips & Best practices:_
[1](https://danijar.com/tips-for-training-recurrent-neural-networks/), [2](https://svail.github.io/rnn_perf/), [3](https://towardsdatascience.com/rnn-training-tips-and-tricks-2bf687e67527), [4](http://slazebni.cs.illinois.edu/spring17/lec20_rnn.pdf), [5](https://www.quora.com/What-are-the-best-practices-for-choosing-hidden-state-size-in-RNNs), [6](https://www.quora.com/Can-recurrent-neural-networks-with-LSTM-be-used-for-time-series-prediction), [7](https://www.reddit.com/r/MachineLearning/comments/5ogbd5/d_training_lstms_in_practice_tips_and_tricks/).
 
### Training Networks: Best practices 
_First look (in order):_
I **strongly recommend** you to refer to [this page](http://cs231n.github.io/) from Stanford and go through all the Module 1 and 2.
I put also here a list of the various topic to explore when talking about _how to train NN in real life applications_.

- Overfitting vs Underfitting: [1](https://keeeto.github.io/blog/bias_variance/), [2](https://cran.r-project.org/web/packages/keras/vignettes/tutorial_overfit_underfit.html), [3](https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/), [4](https://medium.com/greyatom/what-is-underfitting-and-overfitting-in-machine-learning-and-how-to-deal-with-it-6803a989c76), [5](https://elitedatascience.com/overfitting-in-machine-learning). 
- Vanishing/Exploding Gradient: [1](https://medium.com/learn-love-ai/the-curious-case-of-the-vanishing-exploding-gradient-bf58ec6822eb), [2](https://machinelearningmastery.com/exploding-gradients-in-neural-networks/), [3](https://hackernoon.com/exploding-and-vanishing-gradient-problem-math-behind-the-truth-6bd008df6e25), [4](https://www.jefkine.com/general/2018/05/21/2018-05-21-vanishing-and-exploding-gradient-problems/), [5](https://medium.com/@prateekvishnu/xavier-and-he-normal-he-et-al-initialization-8e3d7a087528).
- Transfer Learning: [1](https://medium.com/analytics-vidhya/reusing-a-pre-trained-deep-learning-model-on-a-new-task-transfer-learning-1c0a25a92dfb), [2](https://www.analyticsvidhya.com/blog/2017/06/transfer-learning-the-art-of-fine-tuning-a-pre-trained-model/), [3](https://jjallaire.github.io/deep-learning-with-r-notebooks/notebooks/5.3-using-a-pretrained-convnet.nb.html), [4](https://towardsdatascience.com/a-comprehensive-hands-on-guide-to-transfer-learning-with-real-world-applications-in-deep-learning-212bf3b2f27a), [5](https://machinelearningmastery.com/transfer-learning-for-deep-learning/).
- Faster Optimizers: [1](http://ruder.io/optimizing-gradient-descent/), [2](https://www.jeremyjordan.me/nn-learning-rate/), [3](https://towardsdatascience.com/learning-rate-schedules-and-adaptive-learning-rate-methods-for-deep-learning-2c8f433990d1), [4](https://towardsdatascience.com/learning-rate-scheduler-d8a55747dd90). 
- Avoiding Overfitting through Regularization: [1](https://towardsdatascience.com/regularization-in-machine-learning-76441ddcf99a), [2](https://codeburst.io/what-is-regularization-in-machine-learning-aed5a1c36590), [3](https://www.analyticsvidhya.com/blog/2018/04/fundamentals-deep-learning-regularization-techniques/), [4](https://machinelearningmastery.com/weight-regularization-to-reduce-overfitting-of-deep-learning-models/).

_Second pass:_
- [Google best practices](https://developers.google.com/machine-learning/guides/rules-of-ml/).
- [Regularizaton Chapter](https://www.deeplearningbook.org/contents/regularization.html).
- [Optimization Chapter](https://www.deeplearningbook.org/contents/optimization.html).
- [Pratical Methodology Chapter](https://www.deeplearningbook.org/contents/guidelines.html).
 

### AutoEncoders
_First look (in order):_
- [Here](https://www.quora.com/What-is-an-auto-encoder-in-machine-learning) you find a first read.
- [This](https://towardsdatascience.com/deep-inside-autoencoders-7e41f319999f) is your second recommended read.
- [This](https://www.youtube.com/watch?v=vfnxKO2rMq4) is a lecture from Andrew NG.
- I give also you some examples: [1](https://www.guru99.com/autoencoder-deep-learning.html), [2](https://github.com/aymericdamien/TensorFlow-Examples/blob/master/examples/3_NeuralNetworks/autoencoder.py), [3](https://towardsdatascience.com/deep-autoencoders-using-tensorflow-c68f075fd1a3), [4](http://machinelearninguru.com/deep_learning/tensorflow/neural_networks/autoencoder/autoencoder.html).

_Second pass:_
[AutoEncoders Chapter](https://www.deeplearningbook.org/contents/autoencoders.html).
 
 _Tips & Best practices:_
 [1](https://stats.stackexchange.com/questions/257163/architecture-of-autoencoders), [2](https://stats.stackexchange.com/questions/193780/how-much-noise-for-denoising-autoencoder), [3](https://www.reddit.com/r/MachineLearning/comments/6aw8ik/d_reddit_do_you_use_autoencoders_in_practice/), [4](https://www.reddit.com/r/MachineLearning/comments/89f17m/d_current_best_practices_for_vaes/), [5](https://www.reddit.com/r/MachineLearning/comments/5k8h07/p_insights_into_variational_autoencoders_for/).
 
### Reinforcement Learning
_First look (in order):_
- [Here](https://www.youtube.com/watch?v=2pWv7GOvuf0) you have an explanation video.
- [This](https://skymind.ai/wiki/deep-reinforcement-learning) article is well explaining RL.
- [Here](https://towardsdatascience.com/what-to-expect-from-reinforcement-learning-a22e8c16f40c) is an interesting read.
- Some examples: [1](https://adventuresinmachinelearning.com/reinforcement-learning-tensorflow/), [2](https://medium.com/tensorflow/deep-reinforcement-learning-playing-cartpole-through-asynchronous-advantage-actor-critic-a3c-7eab2eea5296), [3](https://www.youtube.com/watch?v=t1A3NTttvBA), [4](https://github.com/MorvanZhou/Reinforcement-learning-with-tensorflow).

_Second pass:_
[The go-to guide](https://lilianweng.github.io/lil-log/2018/02/19/a-long-peek-into-reinforcement-learning.html?utm_campaign=Data%20Machina&utm_medium=email&utm_source=Revue%20newsletter).
[Paper](https://arxiv.org/pdf/1710.02298.pdf) with state of art RL architecture.
[Complete free book on RL](http://www0.cs.ucl.ac.uk/staff/d.silver/web/Teaching.html).
 
 _Tips & Best practices:_
 [1](https://medium.com/@BonsaiAI/deep-reinforcement-learning-models-tips-tricks-for-writing-reward-functions-a84fe525e8e0), [2](https://towardsdatascience.com/applications-of-reinforcement-learning-in-real-world-1a94955bcd12).


## Utilities

**Hey You**.
During the last few years i collected tons of articles, web apps, reddit thread, best practices, projects and repositories, and I want to share with you each single bit of information, trying to organize them by type of resource (blogs or projects ideas, and so on). 

### Machine Learning Projects 

- [Enormous and awesome collection](https://github.com/FavioVazquez/ds-cheatsheets) of Data Science Cheat Sheets
- [Infinite collection](https://docs.google.com/document/d/e/2PACX-1vRRC3ZIcvjFqEYEgnN9pptoWONr2mSGZJ4hSdL8Jpf2IpXdxjTc-d3jrpb98h59xJnZ3h1frUDydoxc/pub) of actual Data Science / ML projects
- [Infinite collection](https://github.com/jtoy/awesome-tensorflow) of tutorials and Ml projects in TensorFlow
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

### Websites worth taking a look!

- [A monster collection of Data related free course](https://github.com/kmario23/deep-learning-drizzle)
- [Machine Learning Map](http://www.saedsayad.com/data_mining_map.htm) 
- [Data modeling for Business Intelligence](https://www.1keydata.com/datawarehousing/data-modeling-levels.html)
- [Statistics explained](http://www.statsoft.com/Textbook/Elementary-Statistics-Concepts#Two%20basic%20features%20of%20every%20relation%20between%20variables)
- [Visualizing data - Turorials](https://datascienceplus.com/category/visualizing-data/?tdo_tag=Python)
- [Fast.ai](https://www.fast.ai/)
- [Open.ai](https://openai.com/blog/better-language-models/)
- [Explained.ai](https://explained.ai/)
- [Machine Learning Glossary](https://developers.google.com/machine-learning/glossary/)
- [Python ML Tutorials](https://www.python-course.eu/machine_learning.php)
- [For Italian Learners!](https://www.deeplearningitalia.com/)
- [Immersive math](http://immersivemath.com/ila/)


### Subreddits you want to follow!

- [10 awesomee subreddits related to data sciece](https://www.analyticsindiamag.com/10-data-science-subreddits-every-tech-enthusiast-should-follow/)
- [An incredible tool to discover trends and subs](https://anvaka.github.io/sayit/?query=MachineLearning)
