---
title: Do you really need Machine Learning?
author: clone95
description: Understand for which kind of problems it makes sense to use Machine Learning, and which ones can be solved more easily. The purpose of this guide is to warn you that there is not always a need for machine learning solutions. Don't mistake everything for a nail, just because you know how to use a hammer!
---

# Index

- [Kill the Hype](#Kill-the-Hype)
- [Evaluate Opportunities](#Opportunities)
- [The Charming Salesman](#The-Charming-Salesman)
- [No ML without data](#No-ML-without-data)
- [No value without a cultural change](#No-value-without-a-cultural-change)
- [Conclusions](#conclusions)

Let's dive right in!
 
## Kill the Hype

Although AI and Machine Learning offers immense business and product opportunities, they are not always the recipe for all evils. Indeed, be wary of those who tell you that with these tools you can solve any kind of problem. In this guide, we try to break down the various factors that may suggest the non-feasibility of a Machine Learning project.

[Hype](https://www.ryanhealy.com/what-is-hype/) is a clamor around a person or a fact, an insistent and powerful voice that projects it to the top of the headlines and in positive opinions. Often (not always) however, it's a straw fire, a passing fashion that falls as the facts belie expectations.

There's too much hype around ML and in particular [Deep Learning](https://medium.com/@hypergiant/is-neural-network-hype-killing-machine-learning-120041406f1).  

Deep learning creates learning models by acquiring notions that are passed on to it by algorithms and that it organizes in a pyramidal way, managing to learn more complex concepts starting from the simplest ones.

But deep learning requires three elements to function, as we have seen in previous guides:

- Data
- Know-how
- Computational power

Be wary of anyone who proposes a Deep Learning project that lacks one of these three elements, and ask specific questions about each of them. 

You can refer to the previous guide [What Do You Need for Machine Learning](./what-do-i-need-for-ml.md), for guidelines on how to compare responses and understand the feasibility of projects.

Of course, to fully evaluate the feasibility of a project you need experience and knowledge of the domain, but you can rest assured that if one of the three elements is missing, it is likely that what is being proposed is a pure distillate of hype.

So we understand how justified hype is, in the sense that Deep Learning opens up incredible possibilities and without previous examples, but it is also a double-edged weapon, which can damage the very economy of technology because it does not meet the (too high) expectations.

## Evaluate Opportunities

The previous premise does not take away the fact that if you have data, know-how, and computational power, it is _**likely**_ that Machine Learning and Deep Learning can offer you incredible possibilities. 

How can you find out if the data you have hides hidden pearls? in general, you can think that having the right amount of data (for example, rows of a database), you can use Machine Learning methods to predict the value (continuous) or the class (discrete) associated with a row. 

**In other words, you can try to predict the value of a database column!**
::: tip Example
Let's imagine the following (simplified) situation.

We have an e-commerce database, which contains for each line the record of the purchase of a product. 
Some columns are: "name", "color", "price", "price range".
The column "price range" contains a label that identifies if an item has a low price or high, and is provided by the company that produces the product (we have not assigned it).
 
Sometimes, however, the company that supplies the products is careless and forgets to assign a price range to the object. 
:::

**How can we solve this problem?**

The problem consists of a binary classification task that takes as input the price of the object (some features, such as color, do not affect the price in this case) and returns output the label of the price range ("high" or "low").


- We can try to apply a Deep Learning technique
- We can try to apply a more general Machine Learning technique
- We can use a deterministic program (traditional programming approach) that's been created specifically for that.

Let's analyze the various possibilities:

First of all, it must be said that the simplest solution would perhaps be to change supplier :-)

Jokes aside, let's start from the case of application of Deep Learning, then a "traditional" Machine Learning linear model, and then the heuristic.

You _could think_ of developing a neural network that takes in input all the features and returns the value of the price range as output.

**But it would probably be an overkill!**

In fact, as we know, the data must be **cleaned**, **prepared** to be inserted into the network, the network must be **trained** and **adjusted** until it reaches satisfactory evaluation metrics! 

In addition, if tomorrow the requirements of the forecast change (for example because you add a new label) all this process would be to be done again, and a new network would be to be trained.

::: tip Tip
Deep learning is an extremely powerful tool, and for this reason, you should avoid using it for tasks that are too simple (overengineering is never good).
:::

This problem can be solved much more simply with a simple Machine Learning generic linear model that maps the input to the output without the need to introduce "non-linearity" (the main advantage of neural networks).

A _linear classifier_ (classical Machine Learning model) can easily solve the problem, and would probably get even better performance (for reasons that are beyond the scope of this guide, such as lower variance).

Indeed, this problem is so simple that the use of heuristic rules such as "if... then..." could solve it. In fact, we could notice that simply all the objects are a certain N value are classified as "cheap" and those above that N as "very expensive". 

This simple rule (or _heuristic_), expressed with two lines of code in any programming language, solves the problem in the same way. 

::: warning So, What?
This reasoning exercise does not want to "put Deep Learning and Machine Learning in a bad light" at all, on the contrary! 

But it must be used to understand that they are not always the simplest solution, and sometimes they can be a useless effort (especially in the absence of data, they are worth little).
:::

[This](https://medium.com/datadriveninvestor/when-not-to-use-neural-networks-89fb50622429) article has good considerations about this.

So always ask yourself the following question: is my problem quite complex AND do I have enough data to make useful machine learning techniques or even deep learning?

## The Charming Salesman
Information technology like any other industry is first and foremost a business.

The techniques and tools of ML and DL are no exception, and their primary task is to solve business problems. That's why they suffer from the same problems as traditional software in the agreement phase between the software developer and the user, and maybe even worse (the hype plays bad tricks)!

Have you ever had someone tell you how they developed a **powerful** and **complicated** application, and all at a **low price**?

**Well, would you believe them? If someone told you they could take you to the moon for 1000 euros, would you believe them?**

Likewise, be on your guard against those who promise you advanced recommendation engines like Netflix, or conversational agents that replace psychologists!

In particular, we can't stress more on this, make sure that _the data exist_, are _easily available_, are _transformable to represent the problem you want to solve!_ 

Most problems in the ML world occur due to [**unfulfilled expectations**](https://www.nature.com/articles/d41586-018-07504-9).

Other reasons for the failure of ML projects can be found [here](https://www.kdnuggets.com/2018/07/why-machine-learning-project-fail.html), reading is strongly recommended.

Again, these tips don't want to keep you away from the ML, on the contrary! 

But what **Virgilio proposes is also to honestly communicate what you can do and what you can't**, and give you all the tools to be able to move around this world in a conscious way! 

## No ML without data
Suppose you're within an organization, or you have a problem of your own that you want to solve, and you understand what opportunities the ML offers. We've seen that the key elements you need are data, computing power, and know-how.

If you cannot get the data you need for technical, confidentiality, or relational reasons, forget about the ML. In fact, without the data, you can do nothing, just as you can't grow a plant without a seed.

So generally the success of an ML project must be sponsored "from the top", by those who have access to the data, by those who can retrieve it and make it available.  

To be clear, you don't need unthinkable amounts of data (even if numbers help), [but the less data you have, the more difficult it is to generate value](https://medium.com/swlh/can-your-business-use-machine-learning-without-data-340c59bf9fb0) through ML projects.

If your boss asks you for a predictive model but doesn't give you the data or access permissions to it, he probably hasn't understood anything about how Machine Learning works, and it's better to try explaining it to him, maybe taking him for a walk here in Paradise :-)

## No value without a cultural change

At the end of the day, what interests those who put the money in, is the value generated by a project.

It is therefore clear that without a change of **cultural approach to the issue of data**, it is impossible to create value through Machine Learning projects, and thus meet the needs of those who want the problem to be solved.

- If a chatbot is developed within a company, and it is not used, **it's useless**. 

- If recommendation systems are put in place, but then there is no care for the production and care of high-quality data, **it's useless**.


The cultural change is the main "soft" requirement of the success of a Machine Learning project, and often also the most underestimated. 

Read also:
- [Building a Data-Driven business](https://www.intel.it/content/www/it/it/big-data/building-a-data-driven-business.html)

## Conclusions

The purpose of this guide is to provide awareness about the real business possibilities of Machine Learning.

We have seen the risks and possible pitfalls of machine learning projects based on hype and not on solid foundations such as large amounts of data and realistic assessment of the difficulty of solving a problem.

We have also seen how without a radical change of mentality and approach, even the most successful ML project is useless: **imagine owning a Ferrari but not knowing how to drive!**

In the next guide we will see what are **the most common Machine Learning / Deep Learning use cases!**





