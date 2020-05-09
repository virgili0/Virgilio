# Index
 - [You have immense power](#Contribute)
 - [Easiest way to contribute](#Easiest-way-to-contribute)
 - [Contributing with new guides](#Contributing-with-new-guides)
 - [General Tips](#General-Tips)
 - [Guide Template](#Guide-Template)
 - [Creating a Pull Request](#Creating-a-Pull-Request)

 
# Contribute

> “There is immense power when a group of people with similar interests gets together to work toward the same goals.” 

The mission of Virgilio is to share free and curated knowledge paths and high-quality content, and we think that everyone can put his hands in this wonderful and serious game!

If you know how to use a tool or a framework, or you faced some business problems and their complications, why not writing a guide about it?
 
> Several studies and empirical proofs show that the fastest and most effective way to learn something, is to teach it.

Moreover, thousands of people will read it and would be grateful to you! 👍 
Don't worry about the correctness of your English or the depth of your knowledge, experienced people at Virgilio will help you make your guide of the highest quality.
If you want to contribute to the Virgilio project, test to @Clone95 on Telegram and check out our future guides roadmap: maybe you can find that we already need your help!
Feel free to suggest new ideas, guides, or entire sections! 


## Easiest way to contribute
The easiest way to contribute would be by sharing this repository with everyone you know. Send it to everyone who might enjoy leaning something new!

## Contributing with new guides
If you want to write a new guide, that would be great! You can contact us if you want to be sure that no one else is already writing about what you had in mind, or to find out if someone else would be interested in helping you write about a particular topic!

If you want to write a guide, please take some time to read a couple of them to get a feel for the style that the guides should follow. You can have a look at the WolframAlpha or GeoGebra guides.

Before writing, you also need to check the [Guide Template](#Guide-Template).

Do your best to write clearly and without errors! Provide relevant links whenever you can and only free resources. You are welcome to leave your contact details in the end of the guide, but you are not forced to do so!

# General Tips
In general, Virgilio has to be the place that you go to and ensures you that the next step you're taking and the approach you are following are the right ones. This means that the ideal guide:

- Introduces you to the what, why and the context in plain English (following the template).
- If practice oriented (_Purgatorio and Inferno_), exposes you to practical experience with exercises and hands-on projects. Kaggle is a good place to find them: choose a project and give it as a “final homework”, giving tips and different solutions (if possible).
- Drives you step-by-step through progressive theory+practice+example for each step. Like a book basically, but concise, with pointers to the right resources and brief suggestions about how to approach them.
- Don't re-invent the wheel. Probably someone has done a very good job explaining Back Propagation, why not to leverage this? Other authors will be more than happy to have credits and share their work!
The thing that matters is that you provide this resource inside a logical path, with reasons for that, introducing it, and "linking" with explanations to the rest of the guide. It can just be 3-4 lines, if they are sufficient. Of course, the more original content you develop, the more you can build an awesome learning place. 
- Gives you, for each step, some pointers to resources like "best practices for ____" or repos of examples.

### **The bottom line** is the following: 

Virgilio wants to be the mentor who "lines up" a series of resources of which the Internet already possesses most. 

It wants to be those _lines that connect the dots_ of knowledge.
It wants to be the place in which you go to, to look for references and useful links, organized in a _logical and progressive way_. 
It wants to _decrease the cognitive load_ in the approach to complex and interconnected themes such as machine learning and data science in general.


You have a lot of examples of guides that have already been written.
If the guide you are writing is highly pratical, consider using a Jupyter Notebook.

# Guide Template

# Title of the guide about X

# What you will learn 
Try to be specific.

## Prerequisites
It would be great if you knew
  1. this thing
  2. this other thing
  3. and this might be useful as well

Link here all prerequisites.

## Time to complete
Give here an estimation of the time needed to walk through the contents and to tackle the practice part (if any).

# Index
 - [Section A](#section-a)
   - [Subsection A1](#subsection-a1)
   - [Subsection A2](#subsection-a2)
 - [Section B](#section-b)
 - ...
 - [Practice](#Practice)
 - [Conclusions](#Conclusions)
 - [Further reading](#Further-reading)

Let's dive right in!
 
### Section A
Section A is great because it is the first section of them all!

And this would be another very interesting paragrah!
 
#### Subsection A1
In particular, I just went deeper into subsection A1!

#### Subsection A2
And of course there is subsection A2...

### Section B
Which is then followed by Section B.

### Practice 
Here you can give exercises too, in order to access to the next step of the path, 

or a project from Kaggle. For the project, give some guidelines and try to give an example solution (you can easily find dozens of solution notebooks on Kaggle)

### Conclusions
We concluded that _x_, _y_ and _z_.

### Further reading
You should definitely check this if you liked **x**, or read this if you liked **y**.

----
Written by _author_


## Creating a Pull Request
If you are going to create a Pull Request, regardless of the reason, please take the time to give the PR a concise, relevant title (less than 50 characters) and write a descriptive, informative summary in the larger text field. This will let us review your PR faster, instead of having to first interpret what you did, and then decide if the changes are any good (which they probably are!).

We are very interested in having people help us! That is the point of a community! But we would rather not spend hours trying to decipher the changes you made.

## Frontend

To contribute and develop on the frontend:

- Install NodeJS and npm
- Clone the repository and cd into it

```
npm install
npx vuepress dev
```

Sidebar is configured in `.vuepress/config.js`.

Your local version of the website is live at `localhost:8080`. To deploy the build on the master branch: `npm run deploy`.
