---
title: Transfer Learning
author: clone95
description: A detailed guide about what is Transfer Learning, how to use it, and a lot of resources found on the web that shares pre-trained models.
---

# Index 

- [What is Transfer Learning](#Why-Do-You-Need-Transfe-Learning)
- [Transfer Learning Magical Properties](#[TransferLearning-Inner-Workings)
- [How Does Transfer Learning Work](#How-Does-Transfer-Learning-Work)
- [Where to Find Pretrained Models](#Where-to-Find-Pretrained-Models)
- [Conclusions](#Conclusions)

##  What is Transfer Learning

[Transfer Learning](https://en.wikipedia.org/wiki/Transfer_learning) is a research problem in Machine Learning that focuses on storing knowledge gained while solving one problem and applying it to a different but related problem. 

This is done by using an existing model, _pre-trained_ on another dataset (usually bigger and with generic content, like [ImageNet](http://www.image-net.org/)), and then _fine-tuning_ the model on a smaller and similar dataset.

For example, you can fine-tune a pre-trained model from ImageNet on your much smaller dataset of images, in order to benefit the pre-training and obtain a series of almost-magical properties and results.

To get a comprehensive overview of Why, What and How is used Transfer Learning, plus possible applications, read this awesome article:

- [Transfer Learning - Machine Learning's Next Frontier](https://ruder.io/transfer-learning/index.html)


#### Transfer Learning Magical Properties

The theory of Transfer Learning suggests that when using a pre-trained model on a similar dataset:

**You need less**:
- Data: you need much smaller datasets to obtain the same (or better) model performances
- Computational Power / Computational Time: empirical results have shown that pre-trained models reach top performances after much fewer epochs of training, than starting the training from scratch

**You improve:**
- Out-of-sample generalization: when predicting on test data you often obtain better accuracy, thus reducing overfitting (or whatever metric you're using)
- Robustness: you make the model more "robust" to real-world low-quality data  


So, **the first thing to do** every time you frame a new problem, is to ask yourself:

**Can I leverage Transfer Learning in solving this problem?**

If the answer is yes, be sure that the model you're using:

- is robust and produces sounds results
- it's results are reproducible 
- it's input it's compatible with your data
- the source dataset (on which the model has been pre-trained) and the target dataset (your one) are similar enough

See:

- [Finding Similarities in Datasets](https://medium.com/@janetnim401/finding-similarities-in-datasets-350072a78a18)
- [How to measure similarity or dissimilarity between two data set?](https://www.researchgate.net/post/How_to_measure_similarity_or_dissimilarity_between_two_data_set)
- [Three Similarity Measures between One-Dimensional Data Sets](https://www.emis.de/journals/RCE/V37/V37n1a06Gonzalez-AbrilEtAl.pdf)


## How Does Transfer Learning Work

The practice of Transfer Learning allows reusing most of the parameters (weights) of a neural network previously trained on a problem similar to the one we have to solve, dwelling on the training only of the last layers that are usually those dedicated to the classification and/or regression of the features obtained with the previous layers.

This allows us to obtain two key results:

- reuse of the behavior of a model already trained to effectively **extract features** from input data
- limit processing to a significantly **smaller number of parameters**, thus speeding up the training time by a big margin (corresponding to the last layers)

For example, if we were to classify apple varieties from an image, we could start by using a neural network already trained to classify images of planes, cars, dogs, cats, eggs, etc... This is because of the greater variety of training dataset ensures a better ability to extract features of various kinds from images.

Of the _pre-trained neural network_, we would keep only the initial layers, because they extract lower-level features (for examples lines and edges, which are common across every existing 2D image), and so we redefine only the last layers of classification.

The reused layers would be labeled as "read-only" or "frozen", in order to train only the parameters corresponding to the last layers, speeding up the training time, reducing the processing power required, and generally improving the accuracy.

In general, the set of layers that are reused by a pre-trained network is called a backbone or feature-extractor.

The practice of applying Transfer Learning theory to real-world models is called "fine-tuning".

Often where using a pre-trained model it's a good practice to reuse all the layers except the last one, but you can experiment with removing last _N_ layers (usually not more than 3-4).

To learn more about Transfer Learning:

- [A Comprehensive Survey on Transfer Learning](https://arxiv.org/abs/1911.02685?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%253A+arxiv%252FQSXk+%2528ExcitingAds%2521+cs+updates+on+arXiv.org%2529)
- [How transferable are features in deep neural networks?](https://papers.nips.cc/paper/5347-how-transferable-are-features-in-deep-neural-networks.pdf)
- [Using Pre-Training Can Improve Model Robustness and Uncertainty](https://arxiv.org/abs/1901.09960)
- [What makes ImageNet good for transfer learning?](https://arxiv.org/abs/1608.08614)

## Where to Find Pretrained Models

Having clear in mind how useful it is to be able to use pre-trained templates to solve your problem, let's now see where on the Internet you can find these templates, plus some guides and tutorials to do the _fine tune_ them.  

Some general purposes places where you fill find pre-trained models are:

- [Model Zoo](https://modelzoo.co/)
- [TensorFlow Hub](https://www.tensorflow.org/hub)
- [Papers with Code](https://paperswithcode.com/)
- [Keras Pre-Trained Models](https://keras.rstudio.com/articles/applications.html)

It's very likely that you will find a model that fits your needs in these places. If you can't try to google 

### Pre-Trained Models: Computer Vision

- [Computer Vision pre-trained models - GitHub](https://github.com/balavenkatesh3322/CV-pretrained-model?fbclid=IwAR3Q1-xSTP46P5Mg_BRxgxskDBS9q5B7wHeJl_z3TO_0ABee3LkYIDd4bI0)
- [PyTorch Image Models](https://github.com/rwightman/pytorch-image-models)
- [PyTorch Segmentation Models](https://github.com/qubvel/segmentation_models.pytorch)
- [Classification Models (TF and Keras)](https://github.com/qubvel/classification_models)

### Pre-Trained Models: Natural Language Processing and Understanding

- [NLP Pre-Trained Models](https://github.com/balavenkatesh3322/NLP-pretrained-model)
- [Pre-Trained Models for Natural Language Processing: A Survey](https://arxiv.org/abs/2003.08271)
- [Hugging Face Website](https://huggingface.co/)
- [Hugging Face Repository](https://github.com/huggingface)
- [NLP Recipes - Microsoft](https://github.com/microsoft/nlp-recipes)

### Transfer Learning Tutorials

- [A Comprehensive Hands-on Guide to Transfer Learning](https://towardsdatascience.com/a-comprehensive-hands-on-guide-to-transfer-learning-with-real-world-applications-in-deep-learning-212bf3b2f27a)
- [BigTransfer (BiT): State-of-the-art transfer learning for computer vision](https://blog.tensorflow.org/2020/05/bigtransfer-bit-state-of-art-transfer-learning-computer-vision.html)
- [Transfer Learning in Practice with Keras](https://www.hackerearth.com/practice/machine-learning/transfer-learning/transfer-learning-intro/tutorial/)
- [Transfer learning with a pretrained ConvNet](https://www.tensorflow.org/tutorials/images/transfer_learning)
- [Fine-tuning a BERT model](https://www.tensorflow.org/official_models/fine_tuning_bert)
- [Pytorch Model Transfer Learning for Computer Vision](https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html)


## Conclusions

In this guide, you've seen what is Transfer Learning, why it's so useful, and why it's a hot topic in research today. Also, now you know where to find the model that fits your needs!