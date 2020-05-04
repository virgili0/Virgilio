## 2019
* **January - [3D Pose Estimation](https://arxiv.org/pdf/1901.03798.pdf)**

A pose estimator takes a video as an input, and outputs a figure that corresponds to the pose of the human individuals present in the video. 

Current difficulties with creating a reliable and real-time 3D pose estimator include the fact that there is little training data, alongside the fact that occlusions must be taken to account. For example, if a particular body part is blocked from view, a pose estimator must still be able to infer its position from the position of the rest of the body.

This model outperforms all present models as it creates both 2D and 3D representations of the poses. It uses an initial 2D pose estimation, and then utilises a neural network that converts this 2D estimation into a 3D form. It then uses a 3D-to-2D neural network network to convert the pose back into 2D form, which helps to refine the intermediate 3D pose prediction via a self-supervised correction mechanism that can detect the accuracy of the first 2D-to-3D neural network. 

The networks allows for the pose estimation to be obtained in about 50 milliseconds, which is nearly 20 frames per second. This is close to real-time, and is suitable for many of the applications of pose estimation.<br/>

* **February - [SC-FEGAN: Face-Editing GAN](https://arxiv.org/pdf/1902.06838.pdf)**

This AI is a able to generate realistic images from a set of controllable patterns. It builds on a couple of previous papers in the field - the first is the paper that generates an image from a sparse description (such as a written sentence), and the second is the paper which allows for facial features on images to be customised (such as merging two different faces).

This technique allows us to edit more specific factors - for example, put a smile on someone’s face or remove the sunglasses of an individual. Colour can also be changed - for example, the colour of one’s eye can be manipulated. It is extremely fast, and takes just 50 milliseconds to create these images with 512 x 512 images. 

It has applications in the editing industry in filmmaking, but can also be used by novel consumers who are looking for simple edits to their photos. Though no web app is currently available, it does have its source code publicly-available.

* **February - [Deep Planning Network (PlaNet)](https://www.nature.com/articles/s41467-019-08931-6.pdf)**

Google’s PlaNet AI is intended to learn how to plan a sequence of steps that it must take in order to execute a physical goal - for execute, pole balance or walk like a human. The AI must learn in the same manner as a human would - by looking at the pixels of these images (which requires a visual understanding of the context).

The AI uses a sparse reward method, which means that it barely gets feedback with regards to its performance on these tasks. The key difference, however, between this and classical Reinforcement Learning methods is that this AI uses models for its learning. This means that it doesn’t learn every new task from scratch, but rather uses its rudimentary understanding that it has gained from previous activities (such as the nature of gravity), and applies this in future ones. Thus, it has a head-start when learning it a game, making it often 50 times more efficient than techniques that begin with learning from scratch.

It significantly outperforms other state-of-the-art AI systems in most tasks, such as a cheetah run or human walk. This agent doesn’t require separate training for each activity, as it intermixes its training. Also, it can use just 5 frames of reference for a particular activity in order to learn it, with equates to approximately a fifth of a second of footage. It can then learn how to continue with this activity over a longer period of time.

* **March - [Humans can decipher adversarial images](https://www.nature.com/articles/s41467-019-08931-6.pdf)**

Though recent Convolutional Neural Network systems have surpassed human performance in image detection problems, a problem does remain - simply modifying a pixel or two in the image can cause the system to classify the image as something vastly different. For example, reconfiguring a pixel or two is all it takes for a computer to classify an apple as a car. This ability to ‘fool’ image recognition systems has been criticised as an indication that such systems are unable to interpret images in the same manner as a human would, though a recent paper suggests that this may not be the case.

In the paper, a pair of cognitive psychologists showed a group of over 1800 subjects images that had already tricked computers into classifying it under the wrong label. They asked people which of two options the computer predicted the object as being - one option being the computer's real conclusion and the other being a random answer. The subjects chose the same answer as computers 75% of the time, and a remarkable 98% of them tended to answer like the computers did.

Next, the researchers gave subjects a choice between the system’s answer and its next-best guess for images it guessed incorrectly. Once again, the subjects again validated the computer's choices - 91 percent of those tested agreed with the system’s decision.

The study thus provides a degree of evidence that the apparent flaw with Convolutional Neural Network architectures may not be as bad as many think. It provides a new perspective, along with a new experimental paradigm that can be explored.<br/><br/>

## 2018
* **April - [ProGanSR](https://arxiv.org/pdf/1804.02900.pdf)**

To acheive super-resolution, which allows the conversion of low-resolution images to higher-resolution ones, this paper recommends improving the image resolutions through a progressive method. It takes several intermediate steps where the image produced is slightly better than the predecessor, a known as 'curriculum learning'. 

The paper  uses a GAN rather than simply a CNN. Compared to state-of-the-art models, the images produced using the method proposed in this paper are comprehended with a slightly lower accuracy, however they are produced at 5 times the speed.<br/>

* **June - [Do CIFAR-10 Classifiers Generalize to CIFAR-10?](https://arxiv.org/pdf/1806.00451.pdf)**

The ultimate goal of a Machine Learning model is to predict the output accurately on new, unseen instances. When training a Machine Learning model, it is thus crucial that the test data is not involved in the process of creating the model, as this would introduce bias towards the test set. Unfortunately, we typically have limited access to new data from the same distribution, which results in many researchers today using the test set in place of a validation set. This allows for hyperparameters, such as the learning rate, to be optimised in accordance to the distribution of the selected test set.

The research paper proposes a new test set with about 2000 instances which matches the distribution of the test set for the CIFAR-10 dataset, a well-known dataset that many modern image classifier models are tested on. It then evaluates the performance of 30 different modern image classification models. It finds that there is a significant drop from the accuracy in the original test set to the new test set - for instance, VGG and ResNet architectures drop from their well-established 93% accuracy to about 85%. However, the performance of classifiers relative to one another remains more or less constant - thus, the distribution in performance of classifiers can be considered to simply be horizontally shifted.

The results cast doubt on the robustness of current classifiers. The classification accuracy of widely used models drops significantly - for example, the accuracy loss of VGG and ResNet corresponds to multiple years of progress on the CIFAR-10 dataset. The distribution shift thus questions to what extent current models truly generalise.<br/>

* **June - [RF-Pose](http://rfpose.csail.mit.edu/)**

The paper provides accurate human pose estimation through walls and occlusions. It leverages the fact that wireless signals in the WiFi frequencies traverse walls and reflect off the human body, and uses a deep neural network approach that parses such radio signals to estimate 2D poses. The pose estimation works well regardless of the lighting conditions, and can also detect multiple humans. 

In the network, there is a teacher network that looks at the colour image of the wall, and predicts the pose that the human is in. There is also a student network that has the signal as an input, and it learns what the different distributions mean, and how they relate to different human positions and poses. The teacher network shows the student network the correct results, and the student learns how to produce them from radio signals instead of images.

Besides being used for motion capture in interactive video games, as well as helping create special effects for movies, pose estimation can also be used to help detect issues with a patient’s posture, track the activity of animals, understanding sign language and pedestrian activity in self-driving cars.<br/>

* **July - [Benchmarking Neural Network Robustness to Corruption & Perturbations](https://arxiv.org/pdf/1807.01697.pdf)**

This paper underlines a method to evaluate the performance of Image Classifiers in terms of their ability to withstand corruptions and perturbations. It creates two datasets - ImageNet-C (for corruptions) and ImageNet-P (for petrurbations) - which help test the robustness of Image Classifiers to such variations, which are common in real-life scenarios.

In the context of images, a corruption describes a modification to a base image through distorting its details. The paper utilises 15 different corruption functions on ImageNet mages, each of 5 levels of severity. These corruption functions describe methods including Gaussian Noise, the addition of snow and pixelation.

A perturbation describes the distorting of images by varying its appearance through transformative methods. The paper utilises 8 different perturbation functions on ImageNet images, including zoom, tilt and translation.

Testing the Classifier with images obtained from the ImageNet-C and ImageNet-P datasets, the paper creates a robustness score regarding a its robustness to both corruption and perturbation by averaging its accuracy over all functions of each type and over all levels of severity.<br/>

* **July - [Phrank](https://www.nature.com/articles/s41436-018-0072-y)**

The algorithm produced automates the most labor-intensive part of genetic diagnosis, that of matching a patient’s genetic sequence and symptoms to a disease described in the scientific literature. Without computer help, this match-up process takes 20 to 40 hours per patient - the process involves the expert looking at a list of around 100 of the patient’s suspicious-looking mutations, making an educated guess about which one might cause disease, checking  scientific literature, and then moving on to the next one. The algorithm developed by Bejerano’s team cuts the time needed by 90 percent. 

The algorithm’s name, Phrank, a mashup of “phenotype” and “rank,” gives a hint of how it works: it compares a patient’s symptoms and gene data to a medical-literature knowledge base, and then simply generates a ranked list of which rare genetic diseases are most likely to be responsible for the symptoms. Phrank, on average, ranked the true diagnosis 4th on the list of potential diagnoses it generated.<br/>

* **December - [GAN Dissection](https://arxiv.org/pdf/1811.10597.pdf)**

This paper proposes a framework to o visualise and understand GANs at the unit, object, and scene levels. It provides the ability to generate images of a scene, identify the GAN units or neurons that contribute to a particular object that is part of a scene, and then harness these to either activate or deactivate the presence of that particular object. This thus enables us to manipulate images without the need for tools like Photoshop.

For example, if we had an image of a church, we could indicate to this framework that we wished to remove the doors present in the image. The framework would thus remove the doors while maintaining the structure of the rest of the image in a suitable manner. We could then add the doors back, if desired. On top of this, we can select a particular region of an image where we wish to add something new - for example, I could add a tree to the right side of the image of a church. The framework understands that the trees have a root in the ground, and thus builds on from the ground up in the specified location. The framework is further able to recognise where additions are not suitable - for example, if we wished to draw a door in the sky, the framework would not accept this request.

The framework uses a segmentation network along with a dissection method to identify the individual units of the generator that match meaningful object classes, like trees. It then activates and deactivates the neurons corresponding to each object class when they are modified in the image - for example, inserting a tree activates the neurons in the GAN that corresponds to a tree. What allows this is a key finding in the paper - the same neurons control a specific object class in a variety of contexts, even if the final appearance of the object varies tremendously. The same neurons can switch on the concept of a "door" even if a big stone wall requires a big heavy door facing to the left, or a little hut requires a small curtain door facing to the right.<br/>

* **December - [Style-Based Generator](https://arxiv.org/pdf/1812.04948.pdf)**

This research paper, authored by scientists at processor and graphics card company Nvidia, demonstrates the potential of an alternative generator architecture for generative adversarial networks that borrows from style transfer literature. It allows for specific customisation and control over features within a human face. It has the potential to be applied to other fields, and has thus far been tested successfully on cars and rooms. 

The generator can combine different aspects of images. For example, if one wished to overlay the gender of one face with the face of another, the generator can do so. The aspects that can be transferred include gender, hair length, pose and the presence of glasses. 

The parameters of the generator can also be controlled one by one without modifying the core content of an image. For example, the presence of a stubble can be modified.

The generator can also perform interpolation. This means that if we have two images A and B, the generator can create intermediate images that map one to another. It can even change the gender in the process. All intermediate images look real too.<br/><br/>
  
## 2017
* **April - [Federatred Learning](https://ai.googleblog.com/2017/04/federated-learning-collaborative.html?utm_campaign=the_algorithm.unpaid.engagement&utm_source=hs_email&utm_medium=email&utm_content=70607703&_hsenc=p2ANqtz-9kYBnRclCyRm1_Fweb9tezCh4VeAFJVZTpjvf-fzz2akkq4AGCU5Uhhv-4ApNIZO7vb2ZpigcgT_lU3E_2sF1mtaZzqg&_hsmi=70607705)**

A big problem being faced by organisations working with developing Machine Learning algorithms and systems today regards privacy - consumers are unwilling to allow their data to be viewed by others, as this data is considered sensitive to them. Google AI's new research on Federated Learning proposes a solution to this.

The Federated Learning technique relies on distributed training - it allows for models to be trained independently on a subset of the universal data, and then assembles these independent models into a single, master model. 

There are a couple of use cases for this to better describe how it functions. Firstly, say medical patients are unwilling to have their health records be sent to other hospitals and organisations who they cannot trust. Federated Learning suggests that each hospital construct its own model using the limited patient data that it has, and then it assembles the models of each hospital into a single, unified model using Google's Federated Averaging algorithm. Secondly, say that we wish to train a predictive keyboard to be uniquely suited to our personal typing patterns on our smartphone. We can use a Federated model, which has been trained and compiled from the predictive patterns of many different users and their data, and then pass in our own personal keyboard typing data to update the model to be better suited to our personal typing habits.

Federated Learning technqiues have seen many updates and improvements since, and will certainly remain relevant as AI enters a privacy-centered time in its development.<br/>

* **September - [Deep Feature Consistent Deep Image Transformations (DFC-DIT)](https://arxiv.org/pdf/1707.09482.pdf)**

Say you need to downscale an image of yours without reducing the accuracy of the main features, or if you wished to remove RGB colours from an image, or if you display an image of high dynamic range on a screen that doesn’t support the range. Though there are hundreds of existing structures that do these, this paper describes a method that does these exceptionally well in comparison to current methods. 

The paper suggests a Deep Feature Consistent Deep Image Transformation (DFC-DIT) framework. It utilises a Convolutional Neural Network (CNN) that produces three outputs for an input image - a downscaled version, a decolorised version and a HDR tone mapped version. It also uses another pretrained and fixed deep CNN that employs the deep feature consistency principle - this ensures that all main features are preserved in the image.<br/>
