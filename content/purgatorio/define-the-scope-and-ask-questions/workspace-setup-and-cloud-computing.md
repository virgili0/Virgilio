---
title: Workspace Setup and Cloud Computing 
author: zszazi | clone95
description: Setup your workspace locally and use Cloud GPUs to train your model faster and cheaper!
---

# Index 

- [Workspace Setup](#Workspace-Setup)
- [Local Setup](#Local-Setup)
- [Anaconda](#Anaconda)
- [Cloud Computing](#Cloud-Computing)
- [Conclusions](#Conclusions)

## Workspace Setup

Once you're done with the framing phase of the project, as explored in the previous guides of this section, you can start setting up your workspace in order to proceed to the next steps of the data science process, where you will explore the data, train Machine Learning models on them, and deploy those models in order to make useful predictions.

There are two ways to set up your workspace: either in your local machine or in the cloud.

To set up a local workspace is a must-have skill for a data science practitioner, so we recommend you to try to go through a [Local Setup](#Local-Setup) at least once (unless you have a very old/weak computer). 

Probably in the future, you'll need to train bigger models that require more memory, costly CPU operations on raw data, and GPU acceleration for the training phase. In the [Cloud Computing](#Cloud-Computing) section we give you an overview of the several options you can consider to overcome the limitations of your local machine. 

## Local Setup

After you've installed [Python](https://www.ics.uci.edu/~pattis/common/handouts/pythoneclipsejava/python.html) on your machine, in the guide [Installing Packages with Pip](https://packaging.python.org/tutorials/installing-packages/) you understand how to use the default Package Installation manager (Pip) to download the modules that you will need. However, even if you feel that more control over the environment could be good, you should consider using Anaconda as a preferred package manager for Data Science. 

## Anaconda

The recommended way to set up your local workspace is through the use of [Anaconda](https://anaconda.org/anaconda/conda).

Conda is an open-source package management system and environment management system that runs on Windows, macOS, and Linux. Conda quickly installs, runs, and updates packages and their dependencies. Conda easily creates, saves, loads, and switches between environments on your local computer. It was created for Python programs, but it can package and distribute software for any language.

Use the following tutorial to setup Anaconda on your local machine:

[How to Set Up Your Data Science Environment with Anaconda](https://flatironschool.com/blog/how-to-set-up-your-professional-data-science-environment)

Anaconda brings with it the most used Python modules when working with data, and you can install more by simply using the " conda install " command, or using pip.

## Cloud Computing

One day you will find that in order to train that model on 50 GB of images it takes too long for your computer to compute, so you start wondering if you should use Cloud Computing to host your calculations somewhere else!

Ever had a thought like "I should buy a more powerful pc"? Forget about it and use **Cloud GPUs** to train your model faster and cheaper!

* Also get to know where you can [**deploy**](https://github.com/zszazi/Deep-learning-in-cloud/blob/master/README.md#deploy-your-model-as-a-web-app) your model to serve millions of people.

* Check out the **free credits** and [**Perks/offer**](https://github.com/zszazi/Deep-learning-in-cloud/blob/master/README.md#perks-and-offers) section to get some free GPU hours.

Last updated : 20 April 2019

 |# | Cloud vendor   |      Website      |  Pricing | Free Trial / Free Credits | 
| ---|----------|---------| -------- | ----------|
|1 | Google Colaboratory | https://colab.research.google.com | FREE | FREE FOREVER* | 
|2 | Kaggle Kernels |   https://www.kaggle.com |  FREE | FREE FOREVER* |
|3| Tensorpad | https://www.tensorpad.com |  1080ti at $0.49/hour | 5 free GPU hours |
|4| FloydHub | https://www.floydhub.com | https://www.floydhub.com/pricing | free 2 GPU powerups in 14 days [trial plan](https://docs.floydhub.com/faqs/plans/#what-is-in-the-trial-plan) |
|5| Onepanel | https://www.onepanel.io | https://www.onepanel.io/pricing | - |
|6| Nimblebox | https://nimblebox.ai | https://nimblebox.ai/plans | free $5 worth of cloud credits|
|7| paperspace | https://www.paperspace.com | https://www.paperspace.com/pricing | $10 credits |
|8| Overture |https://www.overture.ai | - | free credits on signup|
|9| Dataiku | https://www.dataiku.com | - | [Free Plans](https://www.dataiku.com/dss/trynow/free-edition) |
|10| Cloudalize | https://www.cloudalize.com | https://www.cloudalize.com/pricing/ | - |
|11|Deepcognition| https://deepcognition.ai | https://deepcognition.ai/products | Desktop version [free](https://deepcognition.ai/products/desktop/) to use |
|12| GPUeater | https://gpueater.com | https://gpueater.com/#pricing | - |
|13| Vast.ai| https://vast.ai | https://vast.ai/console/create/ | -|
|14| Clusterone | https://clusterone.com | https://clusterone.com/pricing | $25 Sign up credit |
|15| Snark | https://snark.ai | https://scale.snark.ai/pricing | - |
|16| Crestle |https://crestle.ai | https://crestle.ai/#pricing| 1 hour of free GPU usage on sign up [fast.ai](https://course.fast.ai/start_crestle.html#pricing) |
|17| Vector Dash(gaming) | https://vectordash.com |-| free 7 day plan|
|18| Spell | https://spell.run/developers| https://spell.run/pricing | $10 GPU credit on signup |
|19|Rapid Switch|https://www.rapidswitch.com|[pricing](https://www.rapidswitch.com/dedicated-servers/low-price-guarantee/)|-|
|20| Salamander|https://salamander.ai|https://salamander.ai|-|
|21| Leadergpu | https://www.leadergpu.com | https://www.leadergpu.com | - |
|22| vscaler | https://www.vscaler.com |[on request](https://www.vscaler.com/private-cloud-appliance/)| -|
|23| AWS Sagemaker |https://aws.amazon.com/sagemaker/ |[pricing](https://aws.amazon.com/sagemaker/pricing/)| [Free plans](https://aws.amazon.com/free/) |
|24| Exoscale |https://www.exoscale.com/gpu/|[pricing](https://www.exoscale.com/pricing/#/gpu/small) |-|
|25|Cirrascale|http://www.cirrascale.com| [Work station](http://www.cirrascale.com/pricing_waas.php)|-|
|26| Alibaba cloud |https://alibabacloud.com|[pay as you go](https://www.alibabacloud.com/product/gpu/pricing)| $300 [credits](https://www.alibabacloud.com/campaign/free-trial)
|27|IBM Cloud|https://www.ibm.com/cloud/gpu|[pay as you go](https://www.alibabacloud.com/product/gpu/pricing)|$200 [credits](https://console.bluemix.net/registration/free)|
|28|Google Cloud Platform|https://cloud.google.com/gpu/|https://cloud.google.com/pricing/|$300 [credits](https://cloud.google.com/free/)|
|29| Valohai|https://valohai.com| https://valohai.com/pricing/ | free trial avaliable|
|30| Nvidia cloud|https://www.nvidia.com/en-us/data-center/gpu-cloud-computing/|-|-|
|31|One stop System|https://www.onestopsystems.com|-|-|
|32| Azure|https://azure.microsoft.com/en-in/services/machine-learning-studio/|[pricing](https://azure.microsoft.com/en-in/pricing/)| $200 [credits](https://azure.microsoft.com/en-us/free/)
|33| Omnisci | https://www.omnisci.com | https://www.omnisci.com/cloud | 14 day free trial|
|34| Rendsolve | https://rendsolve.com | https://rendsolve.com/pricing | - |
|35| Golem | https://golem.network | - |- |


# Deploy your model as a Web app
Have an idea and want to serve to world 🌎 , create a Webapp and deploy it as a flask , Django  etc

 |# | Vendor   |      Website      |  Pricing | Free Trial / Free Credits |
| ---|----------|---------| -------- | ----------|
| 1  | Render  | https://render.com  |  https://render.com/pricing |-|
|  2 |  Heroku |  https://www.heroku.com |  https://www.heroku.com/pricing | [Free plan](https://www.heroku.com/free) (model<500MB)|
|  3 | Digtal Ocean  | https://www.digitalocean.com  |  [pay as you go](https://www.digitalocean.com/pricing/) | free $100 credits with [github student pack](https://education.github.com/pack)|
| 4 | Glitch | https://glitch.com |-|-|
| 5 | Zeit | https://zeit.co | https://zeit.co/pricing | Free plan available|

# Perks and offers
If you are a student or researcher you can get extra credts , contact the provider

* Paperspace provides $10 of free Gradient° credit [fast.ai link](https://course.fast.ai/start_gradient.html#promotional-credit)
* Do you have a GPU lying around rent your machine to Earn money using [Vast.ai](https://vast.ai/console/host/setup/)*
* Test Drive Nvidia GPU [link](https://www.nvidia.com/en-us/data-center/tesla/gpu-test-drive/)
* Google Cloud Research program - gives **$5000+ credits** [link](https://lp.google-mkto.com/gcp-research-credits-FAQ.html)
* AWS Cloud Credits for Research -[link](https://aws.amazon.com/research-credits/)
* Nvidia GPU Grant Program- [link](https://developer.nvidia.com/academic_gpu_seeding)
* **If you are a Startup** then google has you covered wth Startup Program giving you credits from **$1000 to $100000** - [link](https://cloud.google.com/developers/startups/)
* Google giving cluster of **1000 TPUs to researcher** In total, this cluster delivers a total of more than **180 petaflops of raw compute power!** [techcrunch link](https://techcrunch.com/2017/05/17/the-tensorflow-research-cloud-program-gives-the-latest-cloud-tpus-to-scientists/)  - [application link](https://www.tensorflow.org/tfrc/)
* Google cloud Education Grant - [link](https://cloud.google.com/edu/)
* Github Education pack - along with many offers has upto $110 credits for AWS - [link](https://education.github.com/pack)
* Watch out on [fast.ai Forums](https://forums.fast.ai) to get coupon code for free credits
* Valohai gives you an [researcher license](https://valohai.com/research-license/) for students and researchers
* Want to use a **Super Computer** but don't have one, go for Golem - [Golem](https://golem.network) is a *decentralized marketplace for computing power*. It enables CPUs and GPUs to connect in a peer-to-peer network, enabling both application owners and individual users to rent resources from other users machines, so turbo charge your next model training.

## * Notes
* Google colab and Kaggle kernels have limited session time 
* Most of the gpu providers run on top of AWS , GCP etc so may have more or less same pricing as the latter
* Information given above is best to my searching ability , you may recheck with the provider for pricing and other info
* [license](https://github.com/zszazi/Deep-learning-in-cloud/blob/master/LICENSE)

## Conclusions
You have been given a panoramic of options to set up your workspace, either on your local machine or in the cloud. Often, to start practicing and experimenting you don't need a powerful GPU machine, and you can try things locally. 

Then, when you need to experiment with the training of several Machine Learning models and pick the best one, you can choose a cloud provider like the ones listed here to massively scale! 


