---
title: Data Visualization
author: clone95
description: The purpose of this guide is to show you the importance of data visualization and why it's so useful when working with data.
---

# What you will learn 
The purpose of this guide is to show you the importance of data visualization and why it's so useful when working with data.
We'll show you best practices and reasons for using them, along with the "storytelling" approach to data science.

# Index

- [Data Visualization](#data-Visualization)
- [Legolas, how do your elf eyes see?](#Legolas,-how-do-your-elf-eyes-see?)
- [The Importance of Context](#The-importance-of-context)
- [The Data / Ink Ratio](#The-Information-/-Ink-Ratio)
- [Choose an Effective Visual](#Choose-an-Effective-Visual)
- [Focus your Audience’s Attention](#Focus-your-Audience’s-Attention)
- [Think like a Designer](#Think-like-a-Designer)
- [Exploring Model Visuals](#Exploring-Model-Visuals)
  - [Line Graph](#Line-Graph)
  - [Annotated Line Graph](#Annotated-Line-Graph)
  - [Stacked Bars](#Stacked-Bars)
  - [Positive and Negative Stacked Bars](#Positive-and-Negative-Stacked-Bars)
  - [Horizontal Stacked Bars](#Horizontal-Stacked-Bars)
- [Data Visualization tools](#Data-Visualization-tools)
  - [Microsoft Excel](#Microsoft-Excel)
  - [MatplotLib](#MatplotLib)
  - [Seaborn](#Seaborn)
  - [Bokeh](#Bokeh)
  - [Tableau](#Tableau)
  - [Power Bi](#Power-Bi)
- [Take Inspiration](#Take-Inspiration)
- [Storytelling with Data](#Storytelling-with-Data)
- [Common Visualization Mistakes](#Common-Visualization-Mistakes)
- [Additional Resources](#Additional-Resources)
- [Conclusions](#Conclusions)

# Data Visualization 

It was hard for the Homo Sapiens to survive in the African savannah: a human or animal could kill you at any time.
The human brain has evolved in this wild and unpredictable context, and evolution has "coincidentally" chosen to devote a great deal of computing power to capturing and understanding the world through **sight** ([more than 60 %](https://www.quora.com/How-much-of-the-brain-is-involved-with-vision-What-about-hearing-touch-etc)).\
So, it' trivial that a clear and effective data visualization it's one of your best weapons in the Data Science world.

The track which inspired me for this guide is one of the must-buy book [**Storytelling with Data**](https://www.amazon.it/Storytelling-Data-Visualization-Business-Professionals/dp/1119002257/ref=sr_1_1?adgrpid=52005426669&gclid=CjwKCAjwndvlBRANEiwABrR32EhKMtGs8M5mBgl5lQJZCf9fglkx87ujqYVZk6gHsMDxKOd9yQa7uRoCin8QAvD_BwE&hvadid=255222968297&hvdev=c&hvlocphy=1008297&hvnetw=g&hvpos=1t3&hvqmt=e&hvrand=3841532584099296285&hvtargid=kwd-297573901809&keywords=storytelling+with+data&qid=1555538994&s=gateway&sr=8-1). By far is the best data visualization book I've ever read.

You can find [here](http://www.bdbanalytics.ir/media/1123/storytelling-with-data-cole-nussbaumer-knaflic.pdf) the free PDF. 

Another piece of dense knowledge, with exceptional conciseness and "father" of every data visualization book: [**The Visual Display of Quantitative Information**](https://www.amazon.it/Visual-Display-Quantitative-Information/dp/0961392142).

I assume you know [basic Python](https://github.com/clone95/Virgilio/blob/master/NewToDataScience/PythonBasic.md).

Each content listed here **is not** tool-specific (apart from "tools", did you ever imagine that?).

### Legolas, how do your elf eyes see?
What do I intend with Data Visualization?\
Let's consider the [Tableau](https://www.tableau.com/learn/articles/data-visualization) definition:
>Data visualization is a graphical representation of information. By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data.
In the world of Big Data, data visualization tools and technologies are essential to analyze massive amounts of information and make data-driven decisions."

And according to [Wikipedia](https://en.wikipedia.org/wiki/Data_visualization):

>Effective visualization helps users analyze and reason about data and evidence. It makes complex data more accessible, understandable and usable. Users may have particular analytical tasks, such as making comparisons or understanding causality, and the design principle of the graphic should follow the task.

So, the **goal** of Data Visualization is to _communicate data facts_ to drive wise business decisions. Often these decisions have to be taken by executives, councils or managers and maybe they don't know all the technical stuff behind data!

Another interesting concept you should be familiar with, is the Data-Driven company, a business model that more and more convincing organization to marry it.

[Here](https://triggerbee.com/data-driven-marketing) you find a nice definition of Data-Driven company and [here](https://www.businessmodelsinc.com/big-data-business-models/) an interesting article about it.

As a data scientist, you are the interface among several business functions: product, research, techies and managers, and your main goal is to convince people into taking the right decisions, based on data.

Often you intend to abstract the representation of the data from the underlying technical details and make them available for others. 
As usual, the target you refer to is fundamental in the decision of what data to communicate, and how.

The natural consequence of this statement is that you need to consider the importance of context. 

### The Importance of Context
As in any other field of communication, knowing your audience is critical to understand what you need to communicate.\
[Here](https://www.watershedlrs.com/blog/data-storytelling-know-your-audience) you find an article with some tips to know your audience.\
Basically, the more you know about your audience interests, jobs, and individual situations, the more you can intercept their business needs and desires.
The more you can be specific about who your audience is, the more effective your position will be for successful communication.\
Avoid a general audience, such as "external stakeholders" or "anyone in the product department", trying to communicate to too many different individuals with different needs at once, you risk not communicating to any of them as effectively as you would if you narrowed your target audience.\
If _you must_ remain general for some reason, try to simplify the most you can, and check [here](https://www.anl.gov/education/writing-a-general-audience-abstract) for some useful tips.\
[Here](https://www.techchange.org/2015/05/21/audience-matters-in-data-visualization/) you have some other reason why your data presentation should be driven by the target audience.\
Once you've clear in mind your target, you can start developing the content you want to present.


### The Data / Ink Ratio
The human brain has limited resources and overkilling it with numbers and notions can only lead to negative effects. People become bored easily, especially if your charts are hard to read or they offer _too much_ information. 
As most of the concepts I taught you in the [Impactful presentation guide](https://github.com/clone95/Virgilio/blob/master/Specializations/SoftSkills/ImpactfulPresentations.md), Less Is More is one of the principles you need to follow strictly.
The Tufte's book stresses this out mercilessly calling it "Information / Ink Ratio".
[Here](https://www.darkhorseanalytics.com/blog/data-looks-better-naked) you find an interesting journey of a chart, that brings it to un-readable to the state-of-art of minimalism.\ The general lesson here is to get rid of everything is not needed to communicate the core of your data: extra lines, numbers, legends, names, points and so on. 

The more noise you can avoid, the more your information will flow gently to your audience and the more they'll remember it.

**Data/Ink Ratio = Amount of Ink used on Data / Amount of Ink used** 

Some additional resources to learn how to optimize the Data / Ink Ratio:
- [1](https://thedoublethink.com/tuftes-principles-for-visualizing-quantitative-information/), [2](https://medium.com/@sudharsanasai/declutter-your-chart-with-data-ink-ratio-6f6908727842), [3](http://davidgiard.com/2011/05/12/DataVisualizationPart5DataInk.aspx), [4](https://www.blue-granite.com/blog/data-visualization-remove-chart-clutter-and-focus-on-the-insights), [5](https://www.idashboards.com/blog/2016/05/19/spring-cleaning-eliminate-the-data-clutter/), [6](http://www.storytellingwithdata.com/blog/2016/3/1/declutter-your-data-visualizations)


### Choose an Effective Visual
As a warrior choose his weapon depending on the context, you have to wisely choose the chart to use to represent each number you want to communicate.\
[Here](https://chartio.com/learn/dashboards-and-charts/what-are-common-chart-types-and-how-to-use-them/) is a list of the most common shapes and ideas to present data.\
As you can see, there are many different graphs and other types of visual displays of information, but a handful will work for the majority of your needs ([please don't use cake charts](https://www.businessinsider.com/pie-charts-are-the-worst-2013-6?IR=T)!).\
[Here](https://support.geckoboard.com/hc/en-us/articles/115002929972-How-to-choose-the-right-data-visualization) and [here](https://blog.hubspot.com/marketing/types-of-graphs-for-data-visualization) you have a detailed checklist easy to follow, in order to decide which type of chart suits best for your case.

### Focus your Audience’s Attention
Within the brain, there are three types of memory that are important to understand as we design visual communications: [iconic](https://en.wikipedia.org/wiki/Iconic_memory) memory, [short‐term](https://en.wikipedia.org/wiki/Short-term_memory) memory, and [long‐term](https://en.wikipedia.org/wiki/Long-term_memory) memory. What we need to leverage well for our presentations is the iconic one. In fact, she's responsible for the most part of the first impression about what we see, and has by far the most important impact on our perception.\
[Here](https://brevitaz.com/data-visualisations/) you find a good explanation about how to understand how to leverage iconic memory.\
[Here](https://www.clarityinsights.com/blog/perception-communication) another good read about this topic.

### Think like a Designer
The most important principle in design is that "the design of _____ should be driven by its function".\
Imagine a [gladius](https://it.wikipedia.org/wiki/Gladius_hispaniensis), the bread-and-butter weapon of the Roman army: you can _easily understand_ what's his purpose, even if no one told you!\
Read [here](https://www.team-consulting.com/insights/design-drivers-what-drives-great-design/) a gentle introduction to design theory, really recommended!\
[Here](http://guides.lib.berkeley.edu/data-visualization/design) you find useful design guidelines, and [here](https://uxdesign.cc/designing-a-dashboard-how-to-make-sure-it-will-show-useful-data-23af7e233d21) how to design an effective dashboard. 

### Exploring Model visuals
#### Line Graph
Despite its simplicity is the most effective chart you can show (remember, less is more!). Probably the most part of the data you have can be presented through a line graph.\
[Here](https://www.smartdraw.com/line-graph/) you find how to use its power with awareness. 

#### Annotated Line Graph
Like the previous one, but with annotations that can help readability.\
[Here](http://www.storytellingwithdata.com/blog/2018/1/22/88-annotated-line-graphs) you find only 88 examples of that :-)

#### Stacked Bars
Probably the most effective chart to compare quantities, they were used more than [270 years ago](https://gizmodo.com/these-250-year-old-charts-and-graphs-were-the-very-firs-1445388576)!\
[Here](https://www.smashingmagazine.com/2017/03/understanding-stacked-bar-charts/) you find complete guidelines to use them. 
[Here](https://peltiertech.com/excel-3d-charts-charts-with-no-value/) you can understand why is important to keep them as simple as possible, without 3D effects. Really interesting and in-depth read.

#### Positive and Negative Stacked Bars
With negative values, you can easily show bad-vs-good performance or in-vs-out flows.\
[Here](https://peltiertech.com/diverging-stacked-bar-charts/) a detailed explanation about how and when to use them.

#### Horizontal Stacked Bars
You don't need to be a fan of the Flat Earth "theory" to use Horizontal bar chart! They're similar to their vertical cousins, but orienting the chart horizontally means the category names along the left are easy to read in the horizontal text.\
[Here](https://apexcharts.com/javascript-chart-demos/bar-charts/) a guide about using them.
[Here](https://depictdatastudio.com/when-to-use-horizontal-bar-charts-vs-vertical-column-charts/) an interesting article that explains when to choose horizontal or vertical bars. 

### Storytelling with Data
When you see a great play, watch a captivating movie, or read a fantastic book, you’ve experienced the magic of the story. A good story grabs your attention and takes you on a journey, evoking an emotional response. In the middle of it, you find yourself not wanting to turn away or put it down. After finishing it—a day, a week, or even a month later—you could easily describe it to a friend.

If you reach this goal in your audience, you've arrived, and you have won the first prize! 

- **Find a subject you care about**. It is this genuine caring, and not your games with language, which will be the most compelling and seductive element in your style.
- **Keep it simple**. Great masters wrote sentences which were almost childlike when their subjects were most profound. “To be or not to be?” asks Shakespeare’s Hamlet. The longest word is three letters.
- **Choose who to leave behind**. If a sentence or a chart, no matter how excellent, does not illuminate your subject in some new and useful way, scratch it out.
- **Don't fool people with data**. [These](https://venngage.com/blog/misleading-graphs/) are clear examples of what I'm saying.  
- **Be clear**. If I broke punctuation, or I bend the meaning of the words (technical and not), I would simply won't be understood.
- **Pity the readers**. Our audience requires us to be sympathetic and patient teachers, ever willing to simplify and clarify.
- **Be suggestive**. Try to summon pictures, sounds, and feeling during your stories.
- **Have a great End**. Leave your audience with a sentence that will be the remainder of your presentation, the most internal core of your topic. The things you want your audience this about when they remember your presentation. 

For other tips and suggestions about storytelling, check my other [Impactful presentation guide](https://github.com/clone95/Virgilio/blob/master/Specializations/SoftSkills/ImpactfulPresentations.md).

Sorry, I'm a [DRY principle](https://it.wikipedia.org/wiki/Don%27t_repeat_yourself) hopeless fan.


### Data Visualization tools
I this section I introduce you to the most accessible and well-known tools, that will give you an expendable skill in Data Visualization. 

#### Microsoft Excel
Do a favor to yourself, learn [**Excel now!**](https://www.youtube.com/watch?v=-ujVQzTtxSg&list=PLWPirh4EWFpEpO6NjjWLbKSCb-wx3hMql)\
Excel is the swiss-knife for a lot of basic data management, computation, and representation.\
Despite its scalability limits, it's still one of the tools that _support companies_ today.\
Take [this](https://www.youtube.com/watch?v=RwUSUjRGKVM) course about data visualization with Microsoft Excel.  
[Here](https://www.keynotesupport.com/excel-basics/excel-charts-beginners.shtml) you have another good one.\
[Here](https://www.webucator.com/tutorial/intermediate-microsoft-excel/visualizing-your-data.cfm) you have some exercises to test your skill.\
[Here](https://policyviz.com/2017/07/25/my-top-10-data-visualization-excel-websites/) a list of cool websites about Excel visualizations.

#### Matplotlib

[Matplotlib](https://matplotlib.org/) is one of the most used libraries for graphical representation in Python and a lot of other libraries are built on the top of it.
My personal opinion about it is that it's not too easy to understand and implement, but today is still relevant to grasp the most out of the tutorials on the Internet. You also have a lot of examples in [StackOverflow](https://stackoverflow.com/).\
The [official beginner's guide](https://matplotlib.org/users/beginner.html) is really complete and contains everything you need to get started and then proficient with the library.\
[Here](https://matplotlib.org/Matplotlib.pdf) you have the complete documentation.\
[Here](https://pythonspot.com/matplotlib/) another bunch of chart-specific tutorials.\
[Here](https://www.machinelearningplus.com/plots/top-50-matplotlib-visualizations-the-master-plots-python/) an ensemble of the 50 most useful visualizations with code.\
[Here](http://www.randalolson.com/2014/06/28/how-to-make-beautiful-data-visualizations-in-python-with-matplotlib/) you find advanced charts and the code to realize them.
[Here](https://www.cheatography.com/gabriellerab/cheat-sheets/matplotlib-pyplot/) an handy cheat-sheet.

Challenge yourself:
- [1](http://www.ceda.ac.uk/static/media/uploads/ncas-reading-2015/matplotlib_exercises_solutions.pdf), [2](https://pynative.com/python-matplotlib-exercise/), [3](https://anaconda.org/gwinnen/matplotlib-exercises/notebook), [4](https://www.w3resource.com/graphics/matplotlib/)

Best Practices
- [1](https://www.scivision.dev/best-practices-for-matplotlib-plots/), [2](https://www.quora.com/What-are-some-best-practices-for-matplotlib-to-improve-the-quality-and-appearance-of-your-graphs-and-plots), [3](https://stackoverflow.com/questions/18059269/best-practices-to-write-function-embedding-matplotlib-plot-call), [4](https://matplotlib.org/tutorials/introductory/lifecycle.html)

#### Seaborn
As your brain is fascinated by the beauty in humans, art, or cute puppies, it is by beautiful visualizations. A common library **built on top of Matplotlib** is [Seaborn](https://seaborn.pydata.org/). It's used to enhance Matplotlib charts, so you need to become comfortable with the "mother library" first.\
Follow [this](https://www.youtube.com/playlist?list=PL998lXKj66MpNd0_XkEXwzTGPxY2jYM2d) Youtube tutorial, it covers the most you need to get started with it.\
Then read [this](https://stepupanalytics.com/introduction-to-python-for-data-visualization-with-seaborn/) long and complete blog post.\
[Here](https://www.kaggle.com/kanncaa1/seaborn-tutorial-for-beginners) you find another long tutorial for beginners. 

Challenge yourself: [1](https://anaconda.org/gwinnen/seaborn-exercises/notebook), [2](http://unsupervisedlearning.co.uk/2017/11/08/seaborn-exercises-solutions/), [3](https://www.codecademy.com/courses/learn-seaborn/lessons/seaborn-distributions/exercises/box-plots-ii), [4](https://anaconda.org/gwinnen/seaborn-exercises/notebook)

Best practices: [1](http://walkerke.github.io/geog30323/slides/data-visualization/), [2](https://mode.com/resources/analytics-dispatch/data-visualization-best-practices/), [3](https://www.datacamp.com/courses/improving-your-data-visualizations-in-python), 

Additional examples: [1](https://python-graph-gallery.com/category/seaborn/), [2](https://jakevdp.github.io/PythonDataScienceHandbook/04.14-visualization-with-seaborn.html), [3](https://towardsdatascience.com/data-visualization-using-seaborn-fc24db95a850), [4](https://www.kaggle.com/mchirico/plotly-seaborn-examples)

#### Bokeh
From the [Bokeh](http://bokeh.pydata.org/en/latest/) documentation:

>Bokeh is an interactive visualization library that targets modern web browsers for presentation. Its goal is to provide elegant, concise construction of versatile graphics, and to extend this capability with high-performance interactivity over very large or streaming datasets. Bokeh can help anyone who would like to quickly and easily create interactive plots, dashboards, and data applications.

Bokeh prides itself on being a library for interactive data visualization.

Unlike popular counterparts in the Python visualization space, like Matplotlib and Seaborn, Bokeh renders its graphics using HTML and JavaScript. This makes it a great candidate for building interactive web-based dashboards and applications. 

But what's the real difference among Bokeh, Matplotlib and Seaborn?

As a comment in this Reddit [thread](https://www.reddit.com/r/Python/comments/4tuwoz/how_do_you_decide_between_the_plotting_libraries/) says: 

Each library has its own distinct purpose:

Matplotlib is for basic plotting -- bars, pies, lines, scatter plots, etc.

Seaborn is for statistical visualization -- use it if you're creating heatmaps or somehow summarizing your data and still want to show the distribution of your data

Bokeh is for interactive visualization -- if your data is so complex (or you haven't yet found the "message" in your data), then use Bokeh to create interactive visualizations that will allow your viewers to explore the data themselves.

[Here](https://mybinder.org/v2/gh/bokeh/bokeh-notebooks/master?filepath=tutorial%2F00%20-%20Introduction%20and%20Setup.ipynb) you have the official tutorial. It covers pretty everything you need to know, go through it. It contains exercises too.\
[Here](http://bokeh.pydata.org/en/latest/docs/user_guide.html) you have the official user guide.

Another list of useful additional tutorials: [1](https://towardsdatascience.com/data-visualization-with-bokeh-in-python-part-one-getting-started-a11655a467d4), [2](https://realpython.com/python-data-visualization-bokeh/), [3](https://towardsdatascience.com/data-visualization-with-bokeh-in-python-part-one-getting-started-a11655a467d4)

Additional examples: [1](https://www.journaldev.com/19527/bokeh-python-data-visualization), [2](https://programminghistorian.org/en/lessons/visualizing-with-bokeh), [3](https://www.analyticsvidhya.com/blog/2015/08/interactive-data-visualization-library-python-bokeh/), [4](https://www.geeksforgeeks.org/python-data-visualization-using-bokeh/), [5](https://github.com/bokeh/bokeh/tree/master/examples)

#### Power BI
[Power Bi](https://powerbi.microsoft.com/it-it/) is a super cool tool from Microsoft, used mostly in Business Intelligence to build relationships among data, cleaning and visualizing them in wonderful interactive dashboards. The thing that I love of Power BI is that's free for personal usage and very cheap for enterprise purposes. It's also super easy to use.\
Check [this](https://www.youtube.com/watch?v=gqO0EiCn4cY) tutorial for beginners and then explore the official [Guided Learning](https://docs.microsoft.com/en-us/power-bi/guided-learning/), they have a lot of step-by-step tutorials and side projects to challenge yourself. 

Good additional resources to follow: [1](https://www.youtube.com/user/mspowerbi), [2](https://www.youtube.com/channel/UCFp1vaKzpfvoGai0vE5VJ0w), [3](https://www.youtube.com/channel/UC-h-wArcxJC8zBOD-UxfCOg), [4](https://www.youtube.com/channel/UCaTn-yDjPDvf-1CtJJHTNcQ), [5](https://www.youtube.com/user/ModernExcel)

Best practices: [1](https://www.c-sharpcorner.com/article/power-bi-best-practices-part-3/), [2](https://docs.microsoft.com/it-it/power-bi/visuals/power-bi-visualization-best-practices), [3](https://community.powerbi.com/t5/Community-Blog/Best-Practices-For-Power-BI-Desktop-Development/ba-p/521710), [4](https://www.c-sharpcorner.com/article/power-bi-best-practices-part-3/), [5](https://powerpivotpro.com/2017/06/top-5-power-bi-visual-design-practices-transforming-good-great/)

### Take Inspiration
The best way you can get self-confident with data visualization is to watch, watch, and watch data visualization.
I put here plenty of resources where you can take inspiration and ideas from.

Websites: [1](https://www.idashboards.com/blog/2018/07/06/get-inspired-19-inspiring-data-viz-designs/), [2](https://medium.com/@Infogram/18-data-visualization-resources-for-education-and-inspiration-529c6f528983), [3](https://www.pinterest.it/stevenschillema/data-visualization-inspiration/?lp=true), [4](https://www.designyourway.net/blog/inspiration/data-visualization-designs-that-should-inspire-you-23-infographics/), [5](https://www.awwwards.com/websites/data-visualization/), [6](https://mode.com/resources/analytics-dispatch/data-visualization-examples/), [7](https://visme.co/blog/examples-data-visualizations/), [8](https://datavizproject.com/)

Bonus point!
Try [Google Facets](https://pair-code.github.io/facets/), a super useful web-tool for fast visualizations. It's really EASY to use, and you can upload your dataset and get the first insights from it. It's also awesome for showing data to not-technical people.

### Storytelling with Data
I can't stress more on this point. When you prepare data visualizations, focus on a story to tell to your audience.\
This approach has several [proven and positive](https://www.dataplusscience.com/files/Kosara_Computer_2013.pdf) effects.\
[**Definitely check this**](https://www.slideshare.net/kris77chan/edward-segel-interactivestorytelling), is the best resource I've ever found on this concept applied in data visualization.\
[Here](http://www.nickdiakopoulos.com/2013/04/12/storytelling-with-data-what-are-the-impacts-on-the-audience/) you find a good article that explains _why_.\
[Here](https://www.slideshare.net/kris77chan/edward-segel-interactivestorytelling)'s a great presentation about storytelling with data.\
[Here](https://www.forbes.com/sites/brentdykes/2016/03/31/data-storytelling-the-essential-data-science-skill-everyone-needs/#202002b852ad) another interesting read.

### Common Visualization Mistakes
From an old Chinese statement:
> Look at the other's mistakes, and correct your ones.

To know what are the most frequent mistakes is fundamental to master a skill, so I list here for you a bunch of resources that will give you the awareness of the "Don't"s in data visualization:

- [1](https://www.anychart.com/blog/2017/08/29/data-visualization-mistakes-avoid/), [2](https://undullify.com/data-visualization-102-common-mistakes-visualizing-data/), [3](https://www.rtinsights.com/what-are-the-5-most-common-data-visualization-mistakes/), [4](https://thenextweb.com/dd/2015/05/15/7-most-common-data-visualization-mistakes/), [5](https://www.reddit.com/r/datascience/comments/8wj1nr/play_your_charts_right_an_illustrated_collection/)

### Additional Resources
I really love data visualization and during the last years, I've collected a lot of cool websites and "need-to-bookmark" places. I've already given you a lot of them, here I list everything else is remaining.

- [Data is Beautiful SubReddit](https://www.reddit.com/r/dataisbeautiful/)
- [Analytics SubReddit](https://www.reddit.com/r/dataviz/)
- [The Pudding](https://pudding.cool/)
- [Flow Data](https://flowingdata.com/)
- [Small Multiples](https://smallmultiples.com.au/projects/)
- [Awesome Interactive Journalism](https://github.com/wbkd/awesome-interactive-journalism)
- [EdwardTufte Twitter account](https://twitter.com/EdwardTufte)
- [Fivethirtyeight](https://fivethirtyeight.com/)
- [List of super cool websites](https://www.reddit.com/r/dataisbeautiful/comments/435g7b/i_love_live_data_visualizations_heres_every_one/)
- [Every line of Hamilton](https://pudding.cool/2017/03/hamilton/)
- [Storytelling with Data blog](http://www.storytellingwithdata.com/)

### Conclusions
In this guide we've tried to list a map of the most useful resources about data visualization (after searching and compared a lot of them), trying to give you a reference point of the subject.\
You know that the only way to become really comfortable with something is to face it in the first person. So the best tip I can give you is "find your project". 

- Choose an argument that interests you in some way. You can find a lot o free public dataset to experiment with. Check your country websites or enter [Kaggle](https://www.kaggle.com/) or  [UCI](https://archive.ics.uci.edu/ml/index.php) to find a lot of them. 
- Plot the data in every way you can experiment, applying the techniques you have seen.
- Inspire yourself watching how people visualized similar datasets. Search in Kaggle for "Visualization" and you'll be stunned by the number of examples.

It's better to be proficient in one tool and barely know other ones, than being the jack of all trades but masters of none. So, I suggest you choose the tool that inspires you more and diving deep into that. In fact, the tools we've seen overlap with each other in many ways, but they are different in scale and approach.

