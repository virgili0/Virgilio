---
title: Transfer Learning
author: clone95
description: A detailed guide about what is transfer learning, how to use it, and a lot of resources found on the web that shares pre-trained models.
---


# Index 

- [What is Transfer Learning](#Why-Do-You-Need-Transfe-Learning)
- [Transfer Learning Magical Properties](#[Transfer-Learning-Magical-Properties)
- [Transfer Learning Inner Workings](#[TransferLearning-Inner-Workings)
- [Transfer Learning Resources](#Transfer-Learning-Resources)
- [Where to Find Pretrained Models](#Where-to-Find-Pretrained-Models)
- [How to Share Your Trained Model](#How-to-Share-Your-Trained-Model)

##  What is Transfer Learning

The practice of [Transfer Learning](https://en.wikipedia.org/wiki/Transfer_learning) allows to reuse most of the parameters (weights) of a neural network previously trained on a problem similar to the one we have to solve, dwelling on the training only of the last layers that are usually those dedicated to the classification and/or regression of the features obtained with the previous layers.

This allows us to obtain two key results:

- reuse of the behavior of a network already trained to effectively extract features from input data
- limit processing to a significantly smaller number of parameters (corresponding to the last layers)

For example, if we were to classify apple varieties from an image, we could start by using a neural network already trained to classify images of planes, cars, dogs, cats, eggs, etc... This is because the greater variety of the training dataset ensures a better ability to extract features of various kinds from images.

Of the pre-trained neural network we would keep only the initial layers, going to redefine only the last layers of classification.

The reused layers would be labeled as "read-only", in order to calculate only the parameters corresponding to the last layers, speeding up the training time, reducing the processing power required and generally improving the accuracy.

In Internet it is possible to find several models already pre-trained on standardized datasets. The most famous datasets are ImageNet or COCO, but there are many others, depending on the purpose for which that neural network has been designed.

In general, the set of layers that are reused by a pre-trained network is called a backbone or feature-extractor.


## Transfer Learning Magical Properties

- you need much smaller datasets to obtain the same model performances
- you make the model more "robust" to real-world test data 

## Transfer Learning Inner Workings

## Where to Find Pretrained Models

### Computer Vision
### Natural Language Processing and Understanding
### Time Series
### Miscellaneous

## How to Share Your Trained Model