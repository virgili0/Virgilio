---
title: Deep Learning Theory
author: clone95
description: Get started with Deep Learning, the branch of machine learning that uses deep neural networks to solve problems that are intractable for traditional Machine Learning systems. This guide is library-agnostic.
---

# Index
- [Take your Bible with You](#Take-your-Bible-with-You)
- [What is Deep Learning](#What-is-Deep-Learning)
- [Why Deep Learning](#Why-Deep-Learning)
- [Neural Networks](#Neural-Networks)
  + [Feedforward Neural Networks](#Feedforward-Neural-Networks)
  + [Convolutional Neural Networks](#Convolutional-Neural-Networks)
  + [Recurrent Neural Networks](#Recurrent-Neural-Networks)
  + [Generative Adversarial Networks](#Generative-Adversarial-Networks)
  + [AutoEncoders](#AutoEncoders)
- [Training Neural Networks Effectively](#Training-Neural-Networks-Effectively)
  + [Understanding BackPropagation](#Understanding-BackPropagation)
  + [Transfer Learning](#Transfer-Learning)
- [Conclusions](#Conclusions)


## Take your Bible with You

In this guide you will **learn how to learn** the theory about Deep Learning, its most recent applications and challenges, and how you can develop solid DL skills. 

Virgilio has arranged for you a comprehensive list of link and resources, but he strongly recommends you to be use the following awesome book along the way:

- [**Dive into Deep Learning**](http://d2l.ai/)

This book represents our attempt to make Deep Learning approachable, teaching you the concepts, the context, and the code (both in Pytorch, Tensorflow and MXNET).

A more theoretical book is the following, and Virgilio used it to structure the content of this guide. 

- [**Deep Learning Book**](https://www.deeplearningbook.org/)

*Armed with these 2 books, you should have no problem during your learning journey about Deep Learning!*

## What is Deep Learning
**[Deep Learning](https://en.wikipedia.org/wiki/Deep_learning) is a subcategory of Machine Learning** and indicates the branch that refers to algorithms called artificial neural networks. These algorithms are inspired by the structure and function of the [biological brain](https://dzone.com/articles/deep-learning-and-the-human-brain-inspiration-not).

The similarities between neural and artificial networks are much more limited than the name suggests. In fact, artificial neural networks (pieces of software) [are not even comparable](https://thenextweb.com/syndication/2018/09/01/human-intelligence-and-ai-are-vastly-different-so-lets-stop-comparing-them/) to their biological counterparts in terms of complexity, functions, and vastness of processes that take place in a brain!

Despite this, neural networks are surprisingly useful in detecting hidden patterns in large amounts of data, quantities that are much larger than those that a single human could even see in the course of his life, let alone make sense of them!

Deep Learning is part of a wider family of Machine Learning methods based on the assimilation of data representations, as opposed to algorithms for the execution of specific tasks (like more traditional ML algorithms).

Neural networks (with which today the concept of Deep Learning is also brought to the attention of the general public) for examples [have been applied](https://deepindex.org/) in computer vision, automatic recognition of spoken language, natural language processing, audio recognition and bioinformatics (the use of computer tools to describe from a numerical and statistical point of view certain biological phenomena such as gene sequences, protein composition, and structure, biochemical processes in cells, etc.).

The _main characteristics_ of Deep Learning are the following:

- The learning algorithm always involves at least a neural network (more precisely, an acyclic graph) composed by several layers of neurons. These neurons are connected across layers, and these connections are adjustable weights, represented by a floating number. These numbers (the weights, the connections) are randomly initialized and then tweaked through an iterative process (the training phase) showing the network a big amount of data examples. The output of the training phase is the trained model.

- Neural networks are part of the [broader class](https://pathmind.com/wiki/ai-vs-machine-learning-vs-deep-learning) of algorithms for learning data representation within Machine Learning

- Neural networks use various levels of cascading [non-linear units](https://www.quora.com/Why-does-deep-learning-architectures-only-use-the-non-linear-activation-function-in-the-hidden-layers) to perform characteristics extraction and transformation tasks. Each successive level uses the output of the previous level as input.

- Neural networks learn multiple levels of representation corresponding to different levels of abstraction and these levels form a hierarchy of concepts. This is why Deep Learning is also called [Representational Learning](https://www.quora.com/What-is-representation-learning-in-deep-learning).

As the 2010’s draw to a close, it’s worth taking a look back at the monumental progress that has been made in Deep Learning in this decade.

Read: [The Decade of Deep Learning](https://leogao.dev/2019/12/31/The-Decade-of-Deep-Learning/)

## Why Deep Learning

In traditional Machine learning techniques, most of the features need to be identified by a domain expert in order to reduce the complexity of the data and make patterns more visible to learning algorithms to work.

For example, in a time-series dataset, traditionally an expert would separate the day from the month and year, giving them different columns in the dataset. Maybe he would build a "season" columns, of flag columns to indicate the Christmas holidays for example. 

So an expert is helping the ML algorithm "disentangling" the several features it has to deal with. 

One of the biggest advantages of Deep Learning algorithms is that they try **to learn features from data** in an **automatic** and **incremental** manner.

This reduces the need for domain expertise and hardcore feature extraction.

See: [What is the difference between handcrafted and learned features](https://datascience.stackexchange.com/questions/54390/what-is-the-difference-between-handcrafted-and-learned-features) 

Although the demand for huge computational capabilities may represent a limit, the scalability of Deep Learning thanks to the increase in available data and algorithms is what differentiates it from Machine Learning: _Deep Learning systems, in fact, improve their performance as the data increases while Machine Learning applications once they reach a certain level of performance are no longer scalable even by adding examples and training data to the neural network._

This is because in Machine Learning systems the characteristics of a given object (in the case of visual recognition systems) are extracted and selected manually and are used to create a model capable of categorizing objects (based on the classification and recognition of those characteristics).

In Deep Learning systems, on the other hand, the extraction of characteristics is done automatically: the neural network **learns autonomously** how to analyze raw data and how to perform a task (for example, classifying an object by recognizing its characteristics autonomously).

**BUT!**

We'll see that even if Deep Learning is such a powerful approach, this doesn't mean that every problem should be tackled with it. 

Data scarcity and computational requirements often suggest that more traditional Machine Learning algorithms should be considered way before Deep Learning algorithms.

Basically, you _should avoid Deep Learning_ in the following cases:

- If there is a simpler approach that provides an adequate solution.

- If you need to know why the network produced the output it did, and this is critical to the application ([Deep Learning is hardly explainable](https://www.kdnuggets.com/2018/12/machine-learning-explainability-interpretability-ai.html)).

- If you can't define a loss function.

- If you don't have resources to train the network (data or GPU-power).

- If you don't have resources to tweak out the hyperparameters (i.e. training multiple models with different configurations and choose the best one).

See the discussion and the article:

[When not to use Deep Learning](https://www.reddit.com/r/MachineLearning/comments/6lo3va/d_when_not_to_use_deep_learning/)

From the point of view of potentiality, if Deep Learning may seem more "fascinating" and useful than Machine Learning, it should be pointed out that the computational calculation required for their operation is really impacting, also from an economic point of view: the most advanced CPUs and top-of-the-range GPUs useful to "hold" the workloads of a Deep Learning system still cost thousands of dollars.

The use of computational capabilities via Cloud only partially mitigates the problem because the formation of a deep neural network often requires the processing of large amounts of data using clusters of high-end GPUs for many, many hours (so it is not said that buying "as a service" the necessary computing capacity is cheap).

**Of course, this is valid for enterprise-level requirements, with a good local GPU you can still experiment and obtain good results with most of the small/medium-sized datasets. These will be enough to learn and be comfortable in training neural networks.**

See the [**Workspace Setup and Cloud Computing**](serving/purgatorio/define-the-scope-and-ask-questions/workspace-setup-and-cloud-computing/workspace-setup-and-cloud-computing.md) Guide for a complete overview of the opportunities that Cloud Computing offers you to train your deep learning models, or how to set up your local workspace.

_Advanced approach_:
In the last couple of years, two [TPUs](https://cloud.google.com/tpu/docs/tutorials) and [clustered FPGAs](https://www.reddit.com/r/FPGA/comments/2tr15l/what_are_clusters_of_hundreds_of_fpgas_useful_for/) - these approaches use much less power than CPUs and GPUs and can do low- and mixed- precision calculations especially suited for NN kind of computations. And they are faster than CPUs and GPUs in performance (use less energy as well).

## Neural Networks 

So, it's time to understand what Neural Networks are and how you can use them in tackling real-world problems.

From now on we'll follow a track that will take us from zero knowledge about Neural Networks to fully understanding them, thanks to the [Stanford University Deep Learning](https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv) course and tutorials. Some of them come from Google, others from Stanford or Cambridge universities, and you will learn to leverage neural networks for several kinds of Deep Learning tasks.

We'll focus on the main 4 types of Neural Networks, even if novel architectures are discovered out on a daily basis (most of the time revisiting the existing ones, or mixing them in more complex ways).

**It is not easy to understand the theory and application of Neural Networks at first glance.** You will need to go through tutorials repeatedly to fully comprehend the topic. You should expect a good amount of time to grasp all the concepts related. 

Virgilio tries to propose the following proven learning strategy, but you can tweak it as you prefer because every brain is different.

> 3-step iterative cycle:

>- 1 Get an idea of the main concepts through an **entire pass of this** [Stanford course](https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv), don't worry too much about the math explanations, focus on the **what and why**.

>- 2 Deeply explore **one kind of network**, with theory + tutorials + examples (e.g. RNN theory + RNN tutorials + RNN examples)
>with the links and resources of the topic section of the guide.

>- 3 After iterating the 2nd step for each topic, go through the entire Stanford course again. This time you can fully understand all the formulae, connecting them and picking up the "math flow" of the course.

This iterative process (1-2-2-2-2.....-3) can be repeated as many times as you want, and will probably construct in your mind a nice **general schema** of the things. In each complete iteration, you can drop one or more topics, and focus on the ones that are more interesting to you or not so clear.

In each section, there is content for the first time you arrive there (during the first complete iteration), and some content for next time you arrive there (after the 3rd step).

The structure follows the track proposed by the awesome Stanford course. You can find the slides [here](http://cs231n.github.io/) and the video [here](https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv).

The course leans a bit more on the Convolutional Neural Network type, but it gives you a good understanding of all the other types.

[This](http://introtodeeplearning.com/) is an alternative course from MIT, it has slightly different contents. 

Of course, you should consider [Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning) from the same course of the [Machine Learning Theory](https://github.com/virgili0/Virgilio/blob/master/serving/purgatorio/select-and-train-machine-learning-models/machine-learning/machine-learning.md) Guide.

It's worth watching all of them, to compare and have a different point of view on the things you are learning, besides listening to some of the best professors of the world exploring each topic.  

Once you're done, you should have a complete panoramic view of Deep Learning, even if some concepts or passages are not clear, so it's time to dive deep into each Neural Network type to understand them fully. Without diving deep in them you won't be able to use them in a useful way, because as you've already seen they have a lot of parameters and tricky configurations to consider.

This is the [**Deep Learning Book**](https://www.deeplearningbook.org/) we refer to in each of the next sections.

## Feedforward Neural Networks

The basic kind of Neural Network. Best suited for classification and regression tasks where the input is a tabular dataset, or very simple images or text. 

_First look (in order):_
- [3Blue1Brown awesome intro](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi).
- [This video](https://www.youtube.com/watch?v=v2tKoymKIuE).
- [This is your bible](http://neuralnetworksanddeeplearning.com/chap1.html), understand it totally.
- [This is a gem](https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.85356&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false) and read [this](https://www.guru99.com/artificial-neural-network-tutorial.html) from the authors.
- [This](https://www.youtube.com/watch?v=o64FV-ez6Gw&t=540s) is a live-coding implementation of a Neural Network basic library from scratch, super useful to understand how the core of an NN is implemented in Python. You can imagine that each existing framework is just an enormous expansion of this concept-library.
- [This](https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/) is a step-by-step backpropagation example with calculus.

_Second pass:_
- [ANN Chapter](https://www.deeplearningbook.org/contents/mlp.html).

_Play with a Neural Network_: [Deep Learning Playground](https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.85356&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false)

_Tips & Best practices:_
[1](https://developers.google.com/machine-learning/crash-course/training-neural-networks/best-practices), [2](https://hackernoon.com/8-deep-learning-best-practices-i-learned-about-in-2017-700f32409512), [3](https://towardsdatascience.com/10-things-to-think-about-before-starting-to-code-your-deep-neural-network-65094a1e7c08), [4](https://towardsdatascience.com/how-to-increase-the-accuracy-of-a-neural-network-9f5d1c6f407d), [5](https://www.reddit.com/r/MachineLearning/comments/abj1mc/d_notes_on_why_deep_neural_networks_are_able_to/), [6](https://www.reddit.com/r/MachineLearning/comments/abj1mc/d_notes_on_why_deep_neural_networks_are_able_to/), [7](http://karpathy.github.io/neuralnets/), [8](https://medium.com/cracking-the-data-science-interview/a-gentle-introduction-to-neural-networks-for-machine-learning-d5f3f8987786).

## Convolutional Neural Networks

The most used kind of Neural Network to deal with images and videos. They are thought to be less computationally expensive than vanilla Neural Networks (sharing weight among the layers) and have other useful features that help in dealing with 2D images or videos.

_First look (in order):_
- [Here](http://cs231n.github.io/convolutional-networks/)'s your reference, love it!
- [Here](https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/) is an awesome deep explanation. 
- [Here](https://medium.com/technologymadeeasy/the-best-explanation-of-convolutional-neural-networks-on-the-internet-fbb8b1ad5df8) another super good one.
- [Here](https://developers.google.com/machine-learning/practica/image-classification/) is a serious CNN tutorial from Google.
- [Here](http://setosa.io/ev/image-kernels/) you have an amazing interactive demo.

_Second pass:_
- [CNN Chapter](https://www.deeplearningbook.org/contents/convnets.html).

_Dive Deeper_: Use the latest "survey paper" to choose which papers are worth exploring for your case and get the big picture of the state of the art:
[A Survey of the Recent Architectures of Deep Convolutional Neural Networks](https://arxiv.org/abs/1901.06032)

_Tips & Best practices:_
[1](https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/), [2](https://www.topbots.com/14-design-patterns-improve-convolutional-neural-network-cnn-architecture/), [3](https://arxiv.org/abs/1709.02601), [4](https://de.mathworks.com/matlabcentral/answers/362024-convolutional-neural-networks-what-is-the-best-practice-training-approach-using-graphics-cards), [5](http://www.academia.edu/4057996/Best_Practices_for_Convolutional_Neural_Networks_Applied_to_Visual_Document_Analysis), [6](https://www.microsoft.com/en-us/research/publication/best-practices-for-convolutional-neural-networks-applied-to-visual-document-analysis/), [7](https://missinglink.ai/guides/neural-network-concepts/neural-networks-image-recognition-methods-best-practices-applications/), [8](https://machinelearningmastery.com/best-practices-document-classification-deep-learning/).

## Recurrent Neural Networks

Recurrent Neural Network (RNNs) outperform other kinds when dealing with text and time-series data because it implements the concept of "memory" inside the network.  

_First look (in order):_
- [Here](http://colah.github.io/posts/2015-08-Understanding-LSTMs/), a gentle but detailed explanation.
- [Here](https://www.niklasschmidinger.com/posts/2020-09-09-lstm-tricks/) is another super-suggested explanation.
- [Here](https://www.youtube.com/watch?v=9zhrxE5PQgY) is a video with a more practical approach.
- [Here](https://becominghuman.ai/a-noobs-guide-to-implementing-rnn-lstm-using-tensorflow-1907a5bbb1fa), a guide to implementing RNN in TensorFlow.
- [Here](https://medium.com/@erikhallstrm/hello-world-rnn-83cd7105b767), a 7-page long blog post regarding the TensorFlow implementation.

_Second pass:_
- [RNN Chapter](https://www.deeplearningbook.org/contents/rnn.html)

_Dive Deeper_: Use the latest "survey paper" to choose which papers are worth exploring for your case and have a nice panoramic of the state of the art:
[Fundamentals of Recurrent Neural Network and Long Short-Term Memory Network](https://arxiv.org/abs/1901.06032)

_Tips & Best practices:_
[1](https://danijar.com/tips-for-training-recurrent-neural-networks/), [2](https://svail.github.io/rnn_perf/), [3](https://towardsdatascience.com/rnn-training-tips-and-tricks-2bf687e67527), [4](http://slazebni.cs.illinois.edu/spring17/lec20_rnn.pdf), [5](https://www.quora.com/What-are-the-best-practices-for-choosing-hidden-state-size-in-RNNs), [6](https://www.quora.com/Can-recurrent-neural-networks-with-LSTM-be-used-for-time-series-prediction), [7](https://www.reddit.com/r/MachineLearning/comments/5ogbd5/d_training_lstms_in_practice_tips_and_tricks/).
 
## Generative Adversarial Networks

Generative Adversarial Networks, are an approach to generative modeling using deep learning methods, such as convolutional neural networks.

Generative modeling is an [unsupervised learning](https://en.wikipedia.org/wiki/Unsupervised_learning) task in machine learning that involves automatically discovering and learning the regularities or patterns in input data in such a way that the model can be used to generate or output new examples that plausibly could have been drawn from the original dataset.

GANs are a smart way of training a generative model by framing the problem as a supervised learning problem with two sub-networks: the generator network that we train to generate new examples, and the discriminator network that tries to classify examples as either real (from the domain) or fake (generated). The two networks are trained together in a [zero-sum game](https://en.wikipedia.org/wiki/Zero-sum_game), "adversarial", until the discriminator model is fooled about half the time, meaning the generator model is generating plausible examples.

_First look (in order):_
- [Here](https://machinelearningmastery.com/what-are-generative-adversarial-networks-gans/) you find a gentle introduction to Generative Adversarial Networks.
- [Play with a GAN!](https://poloclub.github.io/ganlab/)
- [This](https://developers.google.com/machine-learning/gan) is a tutorial from Google which gets you started in training GANs in real-world scenarios.
- [Here](https://machinelearningmastery.com/impressive-applications-of-generative-adversarial-networks/) you can read which are some example applications of Generative Adversarial Networks.
- [Here](https://www.youtube.com/watch?v=3-qazNQS2JU&t=1629s) you can find a panoramic overview of GANs "applications explosion" from their inventor (Ian Goodfellow). He's also co-author of the [Deep Learning Book](http://www.deeplearningbook.org/)!
- [Here](https://www.youtube.com/watch?v=KudkR-fFu_8) you find a detailed Theory and Applications video on GANs.
- [GANs in Action - Book](https://www.amazon.com/GANs-Action-learning-Generative-Adversarial/dp/1617295566)

_Dive Deeper_: Use the latest "survey paper" to choose which papers are worth exploring for your case and have a nice panoramic of the state of the art:
[Generative Adversarial Networks: recent developments](https://arxiv.org/abs/1903.12266)

_Second pass_: [Generative Models Chapter](http://www.deeplearningbook.org/contents/generative_models.html).

## AutoEncoders 

Autoencoders are a particular class of Deep Learning algorithms that tries to, given and input, compress it in the internal layers and then reconstruct it as approaching the output layer, with the final output of the network that should be similar as much as possible to the input. They can be used to a variety of tasks, for example, denoising data, compress the data to visualize them, and use some trained layers of an Autoencoder to bootstrap the learning process of another Neural Network. 

Autoencoders are based on the same principles of compression/decompression algorithms (zip/unzip archives).

_First look (in order):_
- [Here](https://www.quora.com/What-is-an-auto-encoder-in-machine-learning) you find a first read.
- [This](https://towardsdatascience.com/deep-inside-autoencoders-7e41f319999f) is your second recommended read.
- [This](https://www.youtube.com/watch?v=vfnxKO2rMq4) is a lecture from Andrew NG.
- Some examples: [1](https://www.guru99.com/autoencoder-deep-learning.html), [2](https://github.com/aymericdamien/TensorFlow-Examples/blob/master/examples/3_NeuralNetworks/autoencoder.py), [3](https://towardsdatascience.com/deep-autoencoders-using-tensorflow-c68f075fd1a3), [4](http://machinelearninguru.com/deep_learning/tensorflow/neural_networks/autoencoder/autoencoder.html), [5](https://mathspp.blogspot.com/2019/03/generating-natural-looking-digits-with.html)

_Second pass:_
[AutoEncoders Chapter](https://www.deeplearningbook.org/contents/autoencoders.html).
 
_Dive Deeper_: Use the latest "survey paper" to choose which papers are worth exploring for your case and have a nice panoramic of the state of the art:
[Recent Advances in Autoencoder-Based Representation Learning](https://arxiv.org/abs/1812.05069)

 _Tips & Best practices:_
 [1](https://stats.stackexchange.com/questions/257163/architecture-of-autoencoders), [2](https://stats.stackexchange.com/questions/193780/how-much-noise-for-denoising-autoencoder), [3](https://www.reddit.com/r/MachineLearning/comments/6aw8ik/d_reddit_do_you_use_autoencoders_in_practice/), [4](https://www.reddit.com/r/MachineLearning/comments/89f17m/d_current_best_practices_for_vaes/), [5](https://www.reddit.com/r/MachineLearning/comments/5k8h07/p_insights_into_variational_autoencoders_for/)
 
## Training Neural Networks Effectively
 
The Deep Learning field, even if rapidly developing and giving awesome results, often lacks a theoretical understanding of the phenomenon that happens under the hood (especially during training). 

There are some efforts about understanding the effect of hyperparameters (like the number of neurons per layer, the number of layers, etc..) but unluckily a big number of concepts in Deep Learning are still somewhat a [_magical black-box_](https://towardsdatascience.com/the-black-box-metaphor-in-machine-learning-4e57a3a1d2b0) that we didn't crack yet.

Does this mean that you won't be able to train a neural net well? Not really! In fact, you'll probably get better results than you could ever get with any other method, and the hard thing will be understanding **why you get them!** 

With experience, you'll develop an insight into which approaches work well and which don't, how to fix existing architectures to your specific problems, and so on.

Here you have some of the best interactive explanations on the Internet about **training Neural Networks** (Parameter initialization and Optimization):

- [Interactive Explanation: **Initialization of Neural Networks**](https://deeplearning.ai/ai-notes/initialization/)

- [Interactive Explanation: **Optimization of Neural Networks**](https://deeplearning.ai/ai-notes/optimization/)

Some other super-useful resources:

- [Stanford Deep Learning Lectures - Training Neural Networks](https://www.youtube.com/watch?v=wEoyxE0GP2M)
- [Common Practices in Training Neural Networks](https://www.youtube.com/watch?v=Hb6ISunEJcI&list=PLpOGQvPCDQzvgpD3S0vTy7bJe2pf_yJFj&index=22&ab_channel=AndreasMaier)

#### Common Issues

You already know that training a Neural Network involves using a training dataset to update the model weights to create a good mapping of inputs to outputs.

This training process is solved using an optimization algorithm that searches through a space of possible values for the neural network model weights for a set of weights that results in a good performance on the training dataset.

[Training Neural Networks can be hard](https://machinelearningmastery.com/why-training-a-neural-network-is-hard/), and some of the reasons are listed here:

[37 Reasons why your Neural Network is not working](https://blog.slavv.com/37-reasons-why-your-neural-network-is-not-working-4020854bd607)

Of course, your small CNN is performing well when testing it on a benchmark dataset like MNIST, but how does it work against a real-life dataset, maybe with millions of images? 

Training Neural Networks effectively requires experience and even the most expert researchers try a lot of different neural architectures before the results they want. 

It's hard to find a list on the internet that includes expert knowledge and best practices, and that's what Virgilio tries to do in this section.

First things first:

**Must read:**

- [My Neural Network isn't working! What should I do?](http://theorangeduck.com/page/neural-network-not-working)

It's **strongly recommended** to refer to [this page](http://cs231n.github.io/) from Stanford and go through all the Modules 1 and 2.


### Understanding Backpropagation

Backpropagation is the mathematical "magical trick" that powers the training of neural networks. 

Basically, it allows using the Gradient Descent iterative algorithm to find the optimal weights of the network (the connections among the neurons).

How?

Backpropagation computes the gradient of the loss function with respect to the weights of the network for a single input/output example, and does so efficiently, unlike a naive direct computation of the gradient with respect to each weight individually.

Understanding backpropagation is simple if you have the necessary math basics (you can find them in the [Math Fundamentals](serving\purgatorio\fundamentals\math-fundamentals\math-fundamentals.md) Guide).

The basic reference you need to understand backpropagation is the following chapter of the book [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/):

[**How the backpropagation works**](http://neuralnetworksanddeeplearning.com/chap2.html)

Once you're done with this reading, you can play with some other different explanations in order to deepen your understanding (remember that visualization is awesome for learning, as stated in the [Virgilio's Teaching Strategy](serving\paradiso\virgilio-teaching-strategy\virgilio-teaching-strategy.md) Guide.

Additional resources:

- [Backpropagation Demo](https://google-developers.appspot.com/machine-learning/crash-course/backprop-scroll/)
- [Backpropagation by 3Blue1Brown](https://www.youtube.com/watch?v=Ilg3gGewQ5U)

_Reinvent the wheel_:
A good way to understanding backpropagation is to code it from scratch! Try to do it without help, but these tutorials will give you the solution.

- [How to Code a Neural Network with Backpropagation In Python (from scratch)](https://machinelearningmastery.com/implement-backpropagation-algorithm-scratch-python/)
- [Let's Build a Deep Learning Library](https://www.youtube.com/watch?v=o64FV-ez6Gw)


### Transfer Learning:

This is probably one of the most **useful and beautiful** ideas about the world of machines that _learns_ from data.

Transfer learning is a learning strategy in which a model developed for one task is reused as a starting point for a model on a second task. 

It is a popular approach in deep neural network learning, where preformed models are used as a starting point for computer vision and natural language processing activities, given the vast computing resources and time needed to develop neural models on these problems.

Learn the theory behind Transfer Learning in this lecture:

- [Transfer Learning](https://www.youtube.com/watch?v=MIsSuWsZtKE)

Transfer Learning brings with it very useful and powerful features:

- It allows you to train models in a fraction of the expected time.

- Requires much fewer data than "from scratch" training.

- The _diversity_ of the starting dataset (on which the pre-training was done) compared to the dataset on which the fine-tuning is done (the second task) _help the model's generalizing ability_. 

Even is Transfer learning may sometimes work when use models that were trained across different domains (i.e. image for text analysis), it works best within the same domain most of the time

Once you approach new problems, the first thing you should do is to **look for a similar public dataset**, order to find pre-trained models and fine-tune them on your task. Of course, the dataset and the problem need to be _similar_! 

For example, if you want to train a neural network for image classification, you should try to [fine tune a pre-trained model from the Imagenet dataset](https://flyyufelix.github.io/2016/10/03/fine-tuning-in-keras-part1.html). Or, if you are trying some text classification, you should try to [fine tune the BERT model](https://arxiv.org/abs/1905.05583)!

There are a lot of models you can find at the following links:

- [ModelZoo](https://modelzoo.co/)
- [TensorFlow Hub](https://www.tensorflow.org/hub)
- [Papers with Code](https://paperswithcode.com/)
- [State-of-the-art models](https://github.com/onnx/models)

Never forget to try Transfer Learning on your problem!


### Full Stack Deep Learning Course 

This is the most useful set of resources about Deep Learning in production you can find over the Internet, be **sure** to take it!

- [Full Stack Deep Learning](https://course.fullstackdeeplearning.com/)


## Conclusions

In this guide, you found a path to a theoretical understanding of Deep Learning, the reasons to use it, the main kinds of neural networks you can find in literature. You have also seen how to forge a solid understanding of the math happening behind a neural network, and you've seen that Transfer Learning is often the go-to tool when facing a new problem. 

In the next guides, you will get your hands dirty and start training models on real-world problems.

