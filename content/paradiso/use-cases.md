---
title: Machine Learning use cases
author: clone95
description: The purpose of this guide is to give a high-level overview of the different cases of application of ML techniques (and in particular Deep Learning) in the various industries and fields.
---


# Index
 - [The big picture](#The-big-picture)
 - [From research to industry](#From-research-to-industry)
 - [Use cases examples](#Use-cases-examples)
 - [Sinergy with other technological trends](#Sinergy-with-other-technological-trends)
 - [Conclusions](#Conclusions)

Let's dive right in!
 
## The big picture
Machine Learning systems, and in particular the Deep Learning ones, have made huge evolutionary steps and have improved a lot in the last five years, especially for a large amount of data available but especially for the availability of high-performance infrastructure (CPU and GPU in particular).


In the field of Artificial Intelligence research, automatic learning has been very successful in recent years, allowing computers to overcome or approach the corresponding human performance in areas ranging from facial recognition to speech and language recognition. Deep learning, on the other hand, allows computers to take a step forward, in particular, to solve a series of complex problems.

Most of the [Google services](https://blog.aimultiple.com/ai-is-already-at-the-heart-of-google/) running on your device are powered by some Machine Learning system!

Let's have a look at 3 simple cases:

**First case**: speech-to-text processing of a phone call.

In this case, what I want to do is to translate an audio call into text. In the past, this was attempted using preset programs, but only the use of AI has allowed for optimal results.

The service is normally offered by the big players (Google, Microsoft, Amazon, etc.) who have trained the model with millions of sentences; they make it available through API, which is through service. In this case, the company interfaces by providing the audio file and the service responds in real-time with a text.


In this case, the company buys the service it uses.

Once you have obtained the text on it you can perform several operations: a semantic or lexical analysis, a translation possibly followed by a speech-to-text in order to hear the phone call in another language; these are evolutions that for now, we do not go into.

**Second case**: recognition of an object in a photo or video.

It is only an evolution of the previous service; this time we provide the purchased service with an image, or a video, receiving in response an on/off when an object is recognized or classification of the object itself; it depends on the compatibility between the trained model and the request that is made.

**Third case**: optimization of inbound calls of a call center

In the previous cases, the trained model belonged to the external supplier; this does not prohibit, however, that the model is instead built internally. More resources would be needed, both in terms of conversations/images available and in terms of specific knowledge.

In this third case, instead, we hypothesize the internal construction of a Machine Learning model; the case is much more interesting because it allows the company to maintain the data and the entire process of building the ML model internally.

We must assume that the company in question has at its disposal the history of all the calls received, divided into the individual steps made by the operator; with them, we must be able to build a chain of events that have led to a final solution.


Having a large number of these chains at our disposal, we **train a model** according to Machine Learning algorithms; it is necessary to have specific competence at this point to understand which is the most suitable algorithm and the calibration of the parameters necessary to obtain the best result. It is often at this point that the best intentions collapse; it is not enough to feed the data to any model, it is necessary to identify and calibrate the right model.

Once the model has been trained, it is made available to the call center; once the call has been received and the first step has been taken, we will probably already have the next step available; after the second step, the probability of 'guessing' the next step will be even higher, and so on, optimizing the process.

This example can be applied to all cases where **there is a sequence of events**:
- Actions of a user on the site to predict whether he will buy a product or not
- Analysis of random movements to predict the next event
- Fault/defect analysis to recognize the probability of failure from the current operation
- Analysis of behavior to predict criminal phenomena (Minority report?)

From these examples it can be understood that **AI is a way to process data**; there is no limit in the hypothesis of its use, if not in the ability of those who manage the data.


## From research to industry

The range of possible Machine Learning applications in real businesses **is almost infinite**, starting from the themes of optimization of existing processes up to new revolutionize business models and customer interaction.

However, even though papers are published day after day in this field, which discover incredible methods of applying these techniques, they are not always "ready to use", and even if it is easy to find the [code](https://paperswithcode.com/) of the paper, it is often not easy to implement them in real solutions, for lack of know-how, or even just awareness of the business.

It is difficult to keep up with both the state of the art of research and the actual use cases applied by others in the industry.

So, a very important issue is the close collaboration between research and industry, which becomes more and more important as research accelerates.

[Here's](https://www.slideshare.net/StateofAIReport/state-of-ai-report-2019-151804430) a very good report about the state-of-the-art (SOTA) of Machine Learning and Deep Learning applications research (up-to-date 2019).

Let's see explore now the use cases more in-depth. 

## Use cases examples

As we argued, it is essential to have a framework of things you can do nowadays with certain tools, and understand if it is convenient in terms of ROI for a company ("you manager, I talk to you").

We here at Virgilio are pleased to tell you that we are in close collaboration with [Firm.ai](https://github.com/firmai), a spectacular OpenSource project that tries to solve the problem of providing an overview of all possible use cases, divided by industry.

[**In this project**](https://github.com/firmai/industry-machine-learning), you can find a wide variety of applied use cases, with code! What an incredible resource!

Leave a star to the Firm.ai project and follow it, it's a work in progress that will be continuously updated.

Don't you find what you're looking for in the previous link? Try [here](https://appliedai.com/). You can enter the business you are looking for, and also see which companies provide services that might be useful to you!

As you can see, the space of possibilities is really wide. However, thinking about the possible application of Machine Learning, it would be foolish not to take into account the synergies that they have with other technological trends that are rapidly emerging, and that will certainly revolutionize the industry as we know it. 

**Any kind of industry!**

::: tip Bonus Link
Check the [Deep Learning Index](https://deepindex.org/) for more than 800 examples of applied AI!
:::


## Sinergy with other technological trends

- There are strong synergies between AI and the **Internet of Things** (IoT). Combine AI with an IoT network (e.g.,
sensors installed in the soil owned by an agricultural enterprise, or wearable worn
from patients, able to collect and send data to the treating physician) means in many cases
cases multiply the potential of AI exponentially. The size and complexity
of the information generated by this new network of objects is such that only one
advanced AI system will be able to manage it efficiently. This advanced system will be able to
take various configurations, both centralized (as in the case of supercomputers
accessible via the cloud) or distributed (so-called on-device AI, supported by the modern
edge computing technologies).

- AI and **5G connectivity** form a disruptive combination. The 5G, that is the network of fifth-generation will officially arrive from 2020 and will allow connecting the

millions of devices worldwide at high speed and with low latency, opening up
the doors to the creation of new application scenarios, hitherto not feasible, on
a single global nervous system in different industrial sectors. 5G networks will be able to
be managed through different techniques of machine learning, which translate into
self-diagnosis, self-configuration, self-optimization, self-repair, self-protection2
. AI and 5G put the network at the service of the user thanks to the edge
computing and its intrinsic characteristics of the hyper-distributed and hyper-connected computational model.

- With the spread of **distributed ledger technologies** (of which the Blockchain is a case of the
specific) and in particular of smart contracts, the role of Artificial Intelligence
will become even more relevant. The decentralized nature of these technologies and the
possibility of validating the data collected by them allows improving
The accuracy of AI systems, as well as to distribute the computing power over multiple nodes,
potentially reducing the costs and therefore the accessibility of the technology. 

- The enabling factor of the AI par excellence is **Cloud Computing**: it is a
technology that allows you to take advantage, via remote service, of hardware resources and
software services - such as mass storage for data storage or power of
Accessory calculation - the use of which is offered as a service by a provider. Solutions
AI can be maintained on local data centers - even individual servers: this phenomenon is opening the door to hybrid scenarios that allow the use of this
technology even under poor connectivity conditions or other restrictions.

Being able to combine the understanding of different but interconnected trends is essential to have an overview of the next (already started) industrial revolution. 

## Conclusions

In this guide, we have seen what are the possible cases of use of Machine Learning nowadays, and we have proposed various sources of information through which we will remain updated on new applications. 

We would also like to remind you that if you are aware of any use cases not included in these lists, the authors will be more than happy to receive a suggestion and add it.

In the next guide we'll start see how Virgilio sees teaching and learning, and he will help you develop solid skills during you Data Science journey!

