---
title: Deep Learning Theory
author: clone95
description: Get started with Deep Learning, the branch of machine learning that uses deep neural networks to solve problems that are intractable for traditional Machine Learning systems. 
---

# Index
- [What is Deep Learning](#What-is-Deep-Learning)
- [Why Deep Learning](#Why-Deep-Learning)
- [Neural Networks](#Neural-Networks)
  + [Artificial Neural Networks](#Artificial-Neural-Networks)
  + [Convolutional Neural Networks](#Convolutional-Neural-Networks)
  + [Recurrent Neural Networks](#Recurrent-Neural-Networks)
  + [AutoEncoders](#AutoEncoders)
- [Training Neural Networks Effectively](#Training-Neural-Networks-Effectively)
- [Deep Learning Best Practices](#Deep-Learning-Best-Practices)
- [Conclusions](#Conclusions)

## What is Deep Learning
**Deep Learning is a subcategory of Machine Learning** and indicates the branch that refers to algorithms inspired by the structure and function of the brain called artificial neural networks.

From a scientific point of view, we could say that Deep Learning is learning by "machines" through data learned through the use of algorithms (mainly statistical computing).

Deep Learning (also known as Deep Structured Learning or Hhierarchical Learning or Representational Learning), in fact, is part of a wider family of Machine Learning methods based on the assimilation of data representations, as opposed to algorithms for the execution of specific tasks.

The Deep Learning architectures (with which today the concept of artificial neural network is also brought to the attention of the general public) have for example been applied in computer vision, automatic recognition of spoken language, natural language processing, audio recognition and bioinformatics (the use of computer tools to describe from a numerical and statistical point of view certain biological phenomena such as gene sequences, protein composition and structure, biochemical processes in cells, etc.).

The _main characteristic_ of Deep Learning are the following:

- Use various levels of cascading non-linear units to perform characteristics extraction and transformation tasks. Each successive level uses the output of the previous level as input. The algorithms can be either supervised or unsupervised 

- Are based on unsupervised learning of multiple hierarchical levels of data features (and representations). Higher-level features are derived from lower-level features to create a hierarchical representation

- Are part of the broader class of algorithms for learning data representation within Machine Learning

- Learn multiple levels of representation corresponding to different levels of abstraction and these levels form a hierarchy of concepts. This is why Deep Learning is also called Representational Learning.

We'll see tha even if Deep Learning is such a powerful approach, this doesn't mean that every problem should be tackled with it. 

Data scarcity and computational requirements often suggest that more traditional Machine Learning algorithms should be considered way before Deep Learning algorithms.

## Why Deep Learning

In traditional Machine learning techniques, most of the features need to be identified by an domain expert in order to reduce the complexity of the data and make patterns more visible to learning algorithms to work.

For example, in a time-series dataset, traditionally an expert would separate the day from the month and year, giving them different columns in the dataset. Maybe he would build a "season" columns, of flag columns to indicate the Christmas holidays for example. 
So an expert is helping the ML algorithm "disentangling" the several features it has to deal with. 
  
The biggest advantage Deep Learning algorithms is that they try **to learn features from data** in an incremental manner.
 
This eliminates the need of domain expertise and hard core feature extraction.

Although the demand for huge computational capabilities may represent a limit, the scalability of Deep Learning thanks to the increase in available data and algorithms is what differentiates it from Machine Learning: _Deep Learning systems, in fact, improve their performance as the data increases while Machine Learning applications once they reach a certain level of performance are no longer scalable even by adding examples and training data to the neural network._

This is because in Machine Learning systems the characteristics of a given object (in the case of visual recognition systems) are extracted and selected manually and are used to create a model capable of categorizing objects (based on the classification and recognition of those characteristics).

In Deep Learning systems, on the other hand, the extraction of characteristics is done automatically: the neural network learns autonomously how to analyze raw data and how to perform a task (for example, classifying an object by recognizing its characteristics autonomously).

From the point of view of potentiality, if Deep Learning may seem more "fascinating" and useful than Machine Learning, it should be pointed out that the computational calculation required for their operation is really impacting, also from an economic point of view: the most advanced CPUs and top-of-the-range GPUs useful to "hold" the workloads of a Deep Learning system still cost thousands of dollars

The use of computational capabilities via Cloud only partially mitigates the problem because the formation of a deep neural network often requires the processing of large amounts of data using clusters of high-end GPUs for many, many hours (so it is not said that buying "as a service" the necessary computing capacity is cheap).

## Neural Networks 

So, it's time to understand what Neural Networks are and how you can use them in tackling real world problems.

From now on we'll follow a track that will take us from zero knowledge about Neural Networks to fully understanding them, thanks to the Stanford University Deep Learning course and tutorials. Some of them come from Google, others from Stanford or Cambridge universities, and you will learn to leverage neural networks for several kinds of Deep Learning tasks.

We'll focus on the main 4 types of Neural Networks, even if novel architectures are discovered out on a daily basis (most of the time revisiting the existing ones, or mixing them in more complex ways).

**It is not easy to understand the theory and application of Neural Networks at first glance.** You will need to go through tutorials repeatedly to fully comprehend the topic. You should expect a good amount of time to grasp all the concepts related. 

Virgilio tries to propose the following proven learning strategy, but you can tweak it as you prefer, because every brain is different.

> 3-step iterative cycle:

>- 1 Get an idea of the main concepts through an **entire pass of this** [Stanford course](https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv), don't worry too much about the math explanations, focus on the **what and why**.

>- 2 Deeply explore **one topic at a time**, with theory + tutorials + examples (e.g. RNN theory + RNN tutorials + RNN examples)
>with the links and resources of the topic section of the guide.

>- 3 After iterating the 2nd step for each topic, go through the entire Stanford course again. This time you can fully understand all the formulae, connecting them and catching also the "math flow" of the course.

This iterative process (1-2-2-2-2.....-3) can be repeated as many times as you want, and will probably construct in your mind a nice **general schema** of the things. In each complete iteration you can drop one or more topics, and focus on the ones that are more interesting to you or not so clear.

In each section I've put content for the first time you arrive there (during the first complete iteration), and some content for next time you arrive there (after the 3rd step).

The structure follows the track proposed by the awesome Stanford course. You can find the slides [here](http://cs231n.github.io/) and the video [here](https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv).

The course slightly pushes more on the Convolutional Neural Network type, but it gives you a good understanding of all the other types.

[This](http://introtodeeplearning.com/) is an alternative course from MIT, it has slightly different contents. 

It's worth watching it to compare and have a different point of view on the things you are learning, besides listening 2X to some of the best professors of the world exploring each topic.  

This is the [**Book**](https://www.deeplearningbook.org/) we refer to in each section.

Now you should have a complete panoramic view of Deep Learning, even if some concepts or passages are not clear, so it's time to dive deep into each Neural Network type to understand them fully. Without this passage you won't be able to use them in an useful way, because as you've already seen they have a lot of parameters and tricky configurations to consider.

### Artificial Neural Networks

The "Vanilla" (basic) kind of Neural Network. Best suited for classification and regression tasks where the input is a a tabular dataset, or very simple images or text.

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

### Convolutional Neural Networks

The most used kind of Neural Network to deal with images and videos. They are thought to be less computationally expensive than vanilla Neural Networks (sharing wheight among the layers) and have other useful features that help in dealing with 2D images or videos.

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

### Recurrent Neural Networks

This kind of Neural Network outperforms other ones when dealng with text and time-series data, because it implements the concept of "memory" inside the network.  

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
 

## AutoEncoders 

Autoencoders are a particular class of Deep Learning algorithms that tries to, given and input, compress it in the internal layers and then reconstruct it as approaching to the output layer, with the final output of the network that should be similar as much as possible to the input. They can be used to a variety of tasks, for example denoising data, compress the data to visualize them, and use some trained layers of an Autoencoder to boostrap the learning process of another Neural Network. 

_First look (in order):_
- [Here](https://www.quora.com/What-is-an-auto-encoder-in-machine-learning) you find a first read.
- [This](https://towardsdatascience.com/deep-inside-autoencoders-7e41f319999f) is your second recommended read.
- [This](https://www.youtube.com/watch?v=vfnxKO2rMq4) is a lecture from Andrew NG.
- Some examples: [1](https://www.guru99.com/autoencoder-deep-learning.html), [2](https://github.com/aymericdamien/TensorFlow-Examples/blob/master/examples/3_NeuralNetworks/autoencoder.py), [3](https://towardsdatascience.com/deep-autoencoders-using-tensorflow-c68f075fd1a3), [4](http://machinelearninguru.com/deep_learning/tensorflow/neural_networks/autoencoder/autoencoder.html), [5](https://mathspp.blogspot.com/2019/03/generating-natural-looking-digits-with.html)

_Second pass:_
[AutoEncoders Chapter](https://www.deeplearningbook.org/contents/autoencoders.html).
 
 _Tips & Best practices:_
 [1](https://stats.stackexchange.com/questions/257163/architecture-of-autoencoders), [2](https://stats.stackexchange.com/questions/193780/how-much-noise-for-denoising-autoencoder), [3](https://www.reddit.com/r/MachineLearning/comments/6aw8ik/d_reddit_do_you_use_autoencoders_in_practice/), [4](https://www.reddit.com/r/MachineLearning/comments/89f17m/d_current_best_practices_for_vaes/), [5](https://www.reddit.com/r/MachineLearning/comments/5k8h07/p_insights_into_variational_autoencoders_for/).
 
 ## Training Neural Networks Effectively
 
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

## Deep Learning Best Practices
## Conclusions