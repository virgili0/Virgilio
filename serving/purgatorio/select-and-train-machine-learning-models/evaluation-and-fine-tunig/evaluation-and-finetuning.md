---
title: Evaluation and Fine Tuning
author: clone95
description: Learn how to evaluate your models after the training process, which model to choose depending on your requirements, and how to investigate possible solutions if your model is not learning well.
---

# Index

- [There Is No One Ring to Rule them All](#There-Is-No-One-Ring-to-Rule-them-All)
- [Choose the Right Metric](#Choose-the-Right-Metric)
- [Build a Meaningful Test Set](#Build-a-Meaningful-Test-Set)
- [K Folder Cross Validation](#K-Folder-Cross-Validation)
- [Lost in the Parameter Space](#Lost-in-the-Parameter-Space)


## There Is No One Ring to Rule them All

In many of Virgil's guides you have learned that there is almost never a "best" way to do something, as is common in all engineering disciplines. 

Data Science doesn't make any difference, on the contrary it takes to the extreme the concept of tradeoff, of "choice" in front of various possibilities, with the best choice often guided by the details of the specific problem.

This concept is well illustrated by the ["No Free Lunch Theorem"](http://www.no-free-lunch.org/), which states
> All algorithms that search for an extremum of a cost function perform exactly the same when averaged over all possible cost functions.

That is, in human understandable words, that there's **no one model that can fit every need or solve every problem**.

See also: [What are the implications of the “No Free Lunch” theorem for machine learning?](https://ai.stackexchange.com/questions/15650/what-are-the-implications-of-the-no-free-lunch-theorem-for-machine-learning)

Sure, there are _certain classes_ of algorithms that work better for _certain classes of problems_, or algorithms that have been completely outclassed by more "intelligent" versions, but in general it is not possible to state this with certainty for every problem.

The bottom line is that you must learn how to choose the right algorithm that will give you the best trained model _for your specific problem_.

How to do this?

Well, in this case the experience plays the master role, and even after years of doing Data Science you'll find yourself learning new stuffs about how an algorithm can perform better or worse given certain conditions. 

But luckily you can measure algorithm performance on our problem and discover what works best!

In order to do that, you need to choose an appropriate metric for the problem at hand. 

## Choose the Right Metric
## Build a Meaningful Test Set
## K Folder Cross Validation
## Lost in the Parameter Space 
