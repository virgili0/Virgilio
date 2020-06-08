---
title: Monitoring Usage and Behavior
author: clone95
description: This guide introduces you to the best practices of monitoring Machine Learning models in production, and ensuring that they behave as expected.
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

- **Setting a baseline:**
    A good idea is to have a baseline model before we start monitoring or measuring. Of course, if we are starting monitoring for the first time then that is our baseline.
    After establishing the baseline model, you can keep that static and make all comparisons and references with regards to this baseline, allowing you to ask the question: "How has the system been behaving since [important milestone/change]?"

    See: 
    - [What does “baseline” mean in the context of machine learning?](https://datascience.stackexchange.com/questions/30912/what-does-baseline-mean-in-the-context-of-machine-learning)
    - [How To Get Baseline Results And Why They Matter](https://machinelearningmastery.com/how-to-get-baseline-results-and-why-they-matter/)


- **Data in:**
    - Monitor whether the data you're processing looks like the data you trained on. ([data drift challenge](https://www.cmswire.com/digital-experience/data-drift-what-it-is-and-how-to-avoid-it/)) E.g., use simple (comparatively interpretable) distributional models to try to track whether data looks "sufficiently" similar.
    
    See:
    - [Calculate Similarity — the most relevant Metrics in a Nutshell](https://towardsdatascience.com/calculate-similarity-the-most-relevant-metrics-in-a-nutshell-9a43564f533e)
    - [How to measure similarity or dissimilarity between two data set?](https://www.researchgate.net/post/How_to_measure_similarity_or_dissimilarity_between_two_data_set)


- **Addressing data drift over time:**
    
    - Is your data distribution non-stationary? I.e. are you expecting your model to degrade due to the data changing over time?

    - If so you can do anomaly detection on the stream and track the fractions of anomalous data points over time.
    - You can also find out if the distribution of the live-data or evaluation data matches that of the training set (or even the held-out test/evaluation set), for example with the [Kolmogorov-Smirnov](https://en.wikipedia.org/wiki/Kolmogorov%E2%80%93Smirnov_test) test.

    See:
    - [A Gentle Introduction to Concept Drift in Machine Learning](https://machinelearningmastery.com/gentle-introduction-concept-drift-machine-learning/)
    - [Addressing feature drift in data streams using iterative subset selection](https://dl.acm.org/doi/10.1145/3325061.3325063)
    - [Drifter_ML - A machine learning testing framework for sklearn and pandas](https://github.com/EricSchles/drifter_ml)

- **Runtime Performance:**
    When running the inference part of your models, you should consider the specific requirements of the application at hand. Some of them could require faster inference, others could serve better if the accuracy is high, so maybe you can average the predictions of several models (ensemble methods), sacrificing the speed of the computation. 

    Consider both runtime and model-specific performances:
    - Platform performance
        - Hardware specific
        - Environment-specific (OS or software installation, or configuration, Cloud provider)
    - Model-specific performance
        - Input data specific
        - Model algorithm-type specific (model built with Scikitlearn versus Pytorch v/s TF)
    
    See:

    - [TensorFlow Performance Guide](https://www.tensorflow.org/tfx/serving/performance)
    - [Is there are a way to speed up the inference time on CPU?](https://www.reddit.com/r/MachineLearning/comments/ezpl89/d_is_there_are_a_way_to_speed_up_the_inference/)
    - [Ways to significantly increase inference speed for deployment?](https://www.reddit.com/r/MachineLearning/comments/fd9cz0/d_ways_to_significantly_increase_inference_speed/)

- **Data out:**

    - Distribution of predictions by the label. If you see this shifting a lot, another flag that inference data is shifting, which could be a point of concern.

    - Distribution of predictions by confidence/probability. There is a pretty rich (& ongoing) field of research here, but, as a starter, I'd also expect the distribution of raw probabilities (logits) to look similar.

    - As a corollary, looking at overall change in the confidence of outputs. E.g., a drop in confidence values is possibly a concerning sign. (Of course, vanilla NNs are also prone to be highly overconfident on new/OOD data, so you need to be cautious; if this is really critical, could look at different NN variants that generate better confidence assessments.)

    - Consider whether training a model w/ out-of-domain detector (OOD) makes sense or not.

    - It's also a sign that when we see such changes that our last test/evaluation dataset integrity is failing. You should update the test/evaluation datasets from production data and retrain the model, either fully or incrementally.

    See: 
    - [How to determine the confidence of a neural network prediction?](https://stats.stackexchange.com/questions/247551/how-to-determine-the-confidence-of-a-neural-network-prediction)

- **Human evaluation:**

    - Not really going to be avoidable, but you can use a lot of the above to narrow down what people look at. Have people look at the examples which are most alarming, based on the checks you have in place. Over time, we can better calibrate what alerts are of concern.

    - A related option is to use a calibrated model of confidence/estimated error rate to inform what people should look at. If you pick up the lowest 1% confidence and the internal estimated error rate is 5%, then if you explore that 1% and see > 5% error rate, that could be a concern. 

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


::: tip General Tips
- None of the above techniques is a silver bullet
- Use only those things that work for you and are applicable in your use-cases
- Don't literary follow any of the ideas, try them out and see how they work for you
:::

## Conclusions

After walking through the resources listed here, you should be comfortable with the challenges and caveats of monitoring your Machine Learning model in production. 

As you've seen, there are both technical challenges (data drift, input data check, output data check) and _"human-related"_ challenges. In particular, Google's People + AI Guidebook will show you most of the human-related ones.

In the next section, **Now Go Build**, we'll give you a list of tips, best practices, and suggestions about _how to put in practice_ everything you've learned in the Purgatorio!
