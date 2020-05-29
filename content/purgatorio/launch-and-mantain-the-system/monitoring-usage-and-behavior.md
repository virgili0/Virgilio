---
title: Monitoring Usage and Behavior
author: clone95
description: This guide introduces you to the best practices of monitoring Machine Learning models in production, and ensure that they behave as expected.
---

# Index 

- [Trusting is Good Not Trusting is Better](#Trusting-is-Good-Not-Trusting-is-Better)
- [Monitoring the Behavior](#Monitoring-the-Behavior)
- [Monitoring the Usage](#Monitoring-the-Usage)
- [Conclusions](#Conclusions)


## Trusting is Good Not Trusting is Better

Application monitoring is a _key_ part of running software in production. 

Without it, the only way of finding an issue is through sheer luck or because a client has reported it. 

Both of which are less than ideal, to say the least!

**You wouldn't deploy an application without monitoring, so why do it for Machine Learning models?**

So let's Start!

The first resource you should go through is the following: 

- [How to Monitor Machine Learning Models](https://christophergs.com/machine%20learning/2020/03/14/how-to-monitor-machine-learning-models/)

It's a very detailed and comprehensive blog post and it addresses these topics:

- What makes ML systems monitoring hard?
- How can we monitor the usage and behavior of the model? 
- What are the key metrics to track and alert on?
- What are the key principles for monitoring the ML system?

Once you are done with the previous blog post, you can refer to the related chapter of the book [Machine Learning Engineering](http://www.mlebook.com/wiki/doku.php) for a more detailed guide (strongly recommended buy, but you can read it for free online).

- [Chapter 8 - Model Serving and Monitoring](https://www.dropbox.com/s/nj23m5myng9gram/Chapter8.pdf?dl=0)

See also:
 - [There are two very different ways to deploy ML models, here’s both](https://towardsdatascience.com/there-are-two-very-different-ways-to-deploy-ml-models-heres-both-ce2e97c7b9b1)

With these two resources, you should understand broadly the reasons and challenges of monitoring the Machine Learning models in production, and you should have reasonable strategies to tackle them. 

As you know, the two main challenges regarding the model monitoring are:

- How does the system behave?
- How is the system used?

Let's see some specific resources for these two challenges.

## Monitoring the Behavior

When monitoring the behavior of the ML model in production, you should consider many aspects:


- **Data in:**

    - Monitor whether the data you're processing looks like the data you trained on. ([data drift challenge](https://www.cmswire.com/digital-experience/data-drift-what-it-is-and-how-to-avoid-it/)) E.g., use simple (comparatively interpretable) distributional models to try to track whether data looks "sufficiently" similar.
    
    See:
    - [Calculate Similarity — the most relevant Metrics in a Nutshell](https://towardsdatascience.com/calculate-similarity-the-most-relevant-metrics-in-a-nutshell-9a43564f533e)
    - [How to measure similarity or dissimilarity between two data set?](https://www.researchgate.net/post/How_to_measure_similarity_or_dissimilarity_between_two_data_set)


- **Addressing data drift over time:**
    
    - Is your data distribution non-stationary? I.e. are you expecting your model to degrade due to the data changing over time?

    - If so you can do anomaly detection on the stream and track the fractions of anomalous data points over time.
    
    See:
    - [A Gentle Introduction to Concept Drift in Machine Learning](https://machinelearningmastery.com/gentle-introduction-concept-drift-machine-learning/)
    - [Addressing feature drift in data streams using iterative subset selection](https://dl.acm.org/doi/10.1145/3325061.3325063)


- **Data out:**

    - Distribution of predictions by the label. If you see this shifting a lot, another flag that inference data is shifting, which could be a point of concern.

    - Distribution of predictions by confidence/probability. There is a pretty rich (& ongoing) field of research here, but, as a starter, I'd also expect the distribution of raw probabilities (logits) to look similar.

    - As a corollary, looking at overall change in the confidence of outputs. E.g., a drop in confidence values is possibly a concerning sign. (Of course, vanilla NNs are also prone to be highly overconfident on new/OOD data, so you need to be cautious; if this is really critical, could look at different NN variants that generate better confidence assessments.)

    - Consider whether training a model w/ out-of-domain detector (OOD) makes sense or not.

    See: 
    - [How to determine the confidence of a neural network prediction?](https://stats.stackexchange.com/questions/247551/how-to-determine-the-confidence-of-a-neural-network-prediction)

- **Human evaluation:**

    - Not really going to be avoidable, but you can use a lot of the above to narrow down what people look at. Have people look at the examples which are most alarming, based on the checks you have in place. Over time, we can better calibrate what alerts are of concern.

    - A related option is to use a calibrated model of confidence/estimated error rate to inform what people look at. If you pick up the lowest 1% confidence and the internal estimated error rate is 5%, then if you audit that 1% and see > 5% error rate, that could be a concern. 

    See: 
    - [Comparing Automatic and Human Evaluation of Local Explanations for Text Classification](https://www.aclweb.org/anthology/N18-1097.pdf)


## Monitoring the Usage

If monitoring the behavior of the model can be technically hard, you should also be sure that your users are leveraging the model in the correct way. 

With "users" we can refer to _everything that consumes the output of the ML model_, it can be a system, a human, or an ensemble of systems and humans.

::: tip 
If you're serving your model through an API (recommended way), you can refer to the API monitoring best practices in general (not specific for Machine Learning).
:::

See: 

- [What's the best way to monitor your REST API?](https://stackoverflow.com/questions/28760946/whats-the-best-way-to-monitor-your-rest-api)
- [Measure Anything, Measure Everything](https://codeascraft.com/2011/02/15/measure-anything-measure-everything/)

The major issue you can encounter when dealing with people is that they choose to not use the ML model. 

This can happen for a variety of reasons, maybe they don't have _confidence enough_ in the system, or they don't understand _how to_ use it.

Take a look at this awesome guide from Google's engineers:

> The People + AI Guidebook was written to help user experience (UX) professionals and product managers follow a human-centered approach to AI.

- [People + AI Guidebook](https://pair.withgoogle.com/guidebook)

This detailed resources can get you started about the following topics: 

- User Needs + Defining Success
- Data Collection + Evaluation
- Mental Models
- Explainability + Trust
- Feedback + Control
- Errors + Graceful Failure

## Conclusions

After walking through the resources listed here, you should be comfortable with the challenges and caveats of monitoring your Machine Learning model in production. 

As you've seen, there are both technical challenges (data drift, input data check, output data check) and _"human-related"_ challenges. In particular, Google's People + AI Guidebook will show you most of the human-related ones.

In the next section, **Now Go Build**, we'll give you a list of tips, best practices, and suggestions about _how to put in practice_ everything you've learned in the Purgatorio!
