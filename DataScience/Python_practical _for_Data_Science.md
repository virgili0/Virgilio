
# **Python practical for Data Science**

## Introduction

Explore best practices and fundamental knowledge that will allow you to perform data analysis using Python. In this guide, you will learn how to use Jupyter notebooks and Python libraries such as Pandas, Matplotlib or Numpy in order to explore and analyze your dataset.


## **What is Data Science?**

Essentially, [Data Science](https://en.wikipedia.org/wiki/Data_science) is about _extracting knowledge_  from  _massive amounts of data_ to generate information. This is essentially done using several disciplines such as Mathematics and Computer Science such as statistics, probabilistic models, machine learning, data storage, computer programming, and so on.

For more information, We invite readers to take a look at [this book](https://www.amazon.com/Data-Science-Scratch-Principles-Python/dp/149190142X).

## Prerequisites

It is necessary to be initiated into *Python programming* before attending this guide. We will also refer to the basic notions of *probability and statistics*, as well as *relational algebra*.

## Main purposes

After following this guide, readers should familiarize themselves with the following tasks:


*   Creating and installing Python modules;
*   Modification and use of Jupyter notebooks;
*   Data visualization with `Matplotlib`;
*   Handling tables with `Numpy`;
*   Handling a dataset with `Pandas`.


## **Guide program**

We will propose a hierarchical content according to the following plan:



1.   [Setup your work environment](#1.-setup-your-work-environment);
2.   [Get started with Numpy library](#2.-get-started-with-numpy-library);
3.   [Manipulate data using Numpy and Matplotlib](#3.--manipulate-data-using-numpy-and-matplotlib);
4.   [Deal with a large amount of data using Pandas library](#4.-deal-with-a-large-amount-of-data-using-pandas-library).

Let's get started.

### **1.   Setup your work environment**

In order to begin analyzing data with Python, we need to have some background, as with all other relevant topics. Now, we will try to explain how to install Jupyter on your own machine.

In case you don't have Python yet, it is possible to install Python, including all the necessary libraries, and the Jupyter notebook directly, by using [this solution](https://jupyter.org/install.html).
Once Python has been previously installed, you will need to install the Jupyter notebook, as well as the following libraries: `Pandas`  ,   `Matplotlib` ,  `Numpy`  and  `SciPy`.
 

In practice, there are two possible solutions to install the Jupyter notebook and its necessary libraries:



*   Full installation in conjunction with the Anaconda distribution;
*   Installation of the Jupyter notebook exclusively (without Anaconda).


#### 1.1. Full installation in conjunction with the Anaconda distribution

For those who have never installed Python, it is recommended to install the Anaconda distribution directly. This is what we will do in this section. Note that Anaconda is therefore a Python distribution, developed for Data Science.

Everything we need, Anaconda will install everything we need, certainly, but it can install a little too much (libraries that we won't use, and so on). You can download an improved version of Anaconda here: [Download](https://conda.io/en/latest/). However, libraries, especially Jupyter, will not be installed automatically for this purpose. As a result, this is a solution for experienced users.


On [this page](http://docs.anaconda.com/anaconda/install)  you will find the formal installation instructions in case these instructions are no longer effective.


In order to install Anaconda on Windows or MacOs, you must:

*  (1) Download the setup file for [Windows](https://www.anaconda.com/distribution/#windows) or [MacOs](https://www.anaconda.com/distribution/#macos), then launch it by double-clicking on the downloaded file;
*  (2) Once the installation is finished, make sure that everything has been done by executing the Jupyter program.

In case of any issues when installing Anaconda, please discuss them on [this community](https://www.anaconda.com/anaconda-community/). 

#### 1.2. Installation of the Jupyter notebook exclusively (without Anaconda)

To avoid installing Anaconda, you can follow the following instructions after you have installed Python:

*   Check that the `pip program` is installed on your machine. For that, you just type `pip` into a console. Usually, the pip program was started at the same time as Python. Next, input these codelines successively:
```
      python -m pip install --upgrade pip    
      python -m pip install jupyter
```
By typing the following command in your console, you can verify if the setup went well:


```
        jupyter notebook
```

Now you can create a new notebook.


*   Check that the `pip program` is installed on your machine. For that, you just type `pip` into a console. Then, type these commands into your console:


```
        pip install scipy
        pip install numpy
        pip install matplotlib
        pip install pandas
```

As an alternative, you can test Jupyter now, without installing anything via [this link](https://jupyter.org/try).

Let us do our first experiment in a Jupyter notebook:

To create a new notebook, click on `New` from the main Jupyter window and then on `Python 3`, like this:

![create a new notebook](https://i.ibb.co/dWDfrwV/ju1.jpg)

In the directory from which you started Jupyter, a file named `Untitled.ipynb` has normally been created.
All Python commands must be typed in the field beside the `In [ ]` label.  To do this, simply type several instructions simultaneously. Functions can even be defined. All variables produced in each cell will be accessible in all cells of the notebook. When you are finished entering them, press `Shift+Enter` to execute them.

To test it, type for example `2 + 5` in the empty cell located in the center of the window. Then click on this button:
![Test](https://i.ibb.co/0VQWxHS/2.jpg)

### 2.   Get started with Numpy library

In this section, we remember the basics of Python programming. In addition, we will not make a list of everything we need to master, but we will simulate a whole problem. Well, we first heard about the  [Monty Hall problem](https://www.montyhallproblem.com/). The game involves a presenter against a competitor (the player). This player is positioned in front of three closed doors. There is a car behind one of them and a goat behind each of the others. First, it must indicate a door. Then the presenter must open a door that is neither the one chosen by the candidate nor the one hiding the car. The competitor then has the right to open the door or he initially chose, or to open the third door.


First of all, let's set up our workspace in a notebook:



```
# For displaying graphics in the code sequence, 
# and not in a separate window:
%matplotlib inline

# By using the randint function, which generates numbers
# whole in a random way:
from random import randint, seed

# An Enum is a data structure that consists of a 
# set of appointed elements. This type of variable can be
# have as value one of these elements.
from enum import Enum

# For displaying graphs:
import matplotlib.pyplot as plt
```

Here we define a subclass of Enum that will contain the possible strategies. This code involves the use of object-oriented programming concepts, including classes and heritages. 



```
class Strategy(Enum):
    CHANGE = 1
    KEEP = 2  
```
It is possible to define our function. We will create a very simple function. It only represents a part of the game for a particular strategy. 




```
# Uses the system clock to initialize the generator of 
# pseudo-random numbers.
seed()

def Hall_game(strategy):
    ''' Simulates part of the Monty Hall game. This function simulates the participant's choice of door, the elimination of a bad door by the presenter, and the final choice. It only returns the result of the game, because that we will only need the result to perform our calculations.
    
    Args:
        strategy (strategy): The player's strategy
        
    Returns:
        bool: Has the player won?
 '''
    doors =[0, 1, 2]
    
    good_door = randint(0,2)
    
    # Choice of player
    first_choice = randint(0,2)
    
    # We have two doors left
    doors.remove(first_choice)
    
    # The presenter eliminates a door
    if first_choice == good_door:
        doors.remove(doors[randint(0,1)])
    else:
        doors =[good_door]
    
    second_choice = 0
    # The second choice depends on the strategy
    if strategy == strategy.CHANGE:
        second_choice = doors[0]
    elif strategy == strategy.KEEP:
        second_choice = first_choice
    else:
        raise ValueError("Strategy not recognized!")
    
    return second_choice == good_door
```

`Randint` function returns a random integer between its two arguments. For example, randint(0,1) will return 0 or 1. 

We will now test our function. Run the next line several times to make sure the result is random.


```
Hall_game(Strategie.CHANGE)
```
In this case, it will be necessary to define a function that will launch the game over and over again, and return the result of each game in a `list`.

In order to make calculations on these results, we will no longer keep them as Boolean variables (True or False) but according to the player's victory (1 if he has won, 0 if he has lost).



```
def Play(strategy, nb_turns):
    ''' Simulates a sequence of game turns. This function returns the results of several games of the Monty Hall game in the form of a list of winnings by the player.
    
    Args:
        strategy (strategy): The player's strategy
        nb_turns (int): Number of revolutions
        
    Returns:
        list: List of players' winnings for each game
    '''

    return[1 if Hall_game(strategy) else 0 for i in range(nb_turns)]   
```


For a given number of games (10000), it is first necessary to know which strategy is the most effective for the player. We have a list containing up to 1 as the number of games won by the player. It is just necessary to calculate the sum of all the items in this list, with the `sum function`, to know the number of 1.


```
print("By changing doors, the player has won {} on 10,000 games."
      .format(sum(Play(strategy.CHANGE, 10000))))
      
print("By keeping his initial choice, the player has won {} out of 10,000 games."
      .format(sum(play(strategy.KEEP, 10000))))
```

Output:

```
By changing doors, the player won 6666 out of 10,000 games.
By keeping his initial choice, the player has won 3320 out of 10,000 games.
```


### 3.   Manipulate data using Numpy and Matplotlib

**3.1. Manipulate data using Numpy**

This section will focus on how to efficiently load, store and manipulate data. They can be found in a wide variety of sources, but they can always be considered as arrays of numbers. We' re going to see a tool to manipulate these arrays: Numpy. NumPy (Numerical Python) provides an interface to store and process data. Numpy arrays are like Python lists, but Numpy allows to make things much more efficient, especially for larger arrays.

Let's start by importing Numpy:



```
import numpy as np

```
**Creating Numpy arrays**

Numpy arrays, unlike Python lists, can only contain one type of members. There are several ways to create arrays in Numpy:



```
# Array of integers:
np.array([1, 2, 3])

```
In case there are different types of data in the starting list, Numpy will try to convert them all to the most generic type. For example, integers `int` will be converted to `float` numbers:



```
np.array([3.1, 4, 5, 6])
```
As an alternative, it is also possible to manually set a type:


```
np.array([1, 2, 3], dtype='float32')

```

In many instances, it is more effective, particularly for large arrays, by creating them directly. Numpy has several functions for this task:



```
# An array of length 10, filled with integers that are worth 0
np.zeros(10, dtype=int)

# A 3x5 size array filled with floating point numbers of value 1
np.ones((3, 5), dtype=float)

# A 3x5 table filled with 3.14
np.full((3, 5), 3.14)

# A table filled with a linear sequence
# starting from 0 and ending from 20, with a step of 2
np.arange(0, 20, 2)

# A table of 5 values, uniformly spaced between 0 and 1
np.linspace(0, 1, 5)

# This one you already know! Try also "randint" and "normal"
np.random((3, 3))

# The identity matrix size 3x3 
np.eye(3)
```

**Array properties, Indexation and Slicing**

Each Numpy array has some properties that are often useful.

```
np.random.seed(0)
x1 = np.random.randint(10, size=6) # Dimension table 1
print("dimensions number of x1:", x1.ndim)
print("shape of x1:", x1.shape)
print("size of x1:", x1.size)
print("type of x1:", x1.dtype)
```

In order to do this, we will often need to access one or more elements of a array.  


```
print(x1)

# To get access to the first element
print(x1[0])

# to get access to the last element
print(x1[-1])

x2 = np.random.randint(10, size=(3, 4)) # Dimension table of 2
print(x2[0,1])

# We can also set different values
x1[1] = "1000"
print(x1)

x1[1] = 3.14
print(x1)
```
In the same way that we can index elements using `[]`, we can access to a set of elements by combining `[]` and `:`. There is a simple rule for syntax: `x[start:end:step]`.




```
print(x1[:5]) # The first five elements

print(x1[5:]) # Elements starting at index 5

print(x1[::2]) # One of two elements
```
Two or more arrays can be concatenated:



```
x = np.array([1, 2, 3])
y = np.array([3, 2, 1])
np.concatenate([x, y])
```

So far, we have seen very basic things on Numpy arrays. Starting from here, we'll see what makes Numpy really essential. The benchmark implementation of Python, also called CPython, is very flexible, but this flexibility makes it unable to use all the possible optimizations.



```
def reverse_calculation(values):
    output = np.empty(len(values))
    for i in range(len(values)):
        output[i] = 1.0 / values[i]
    return output
        
values = np.random.randint(1, 10, size=5)
print(reverse_calculation(values))

wide_array = np.random.randint(1, 100, size=1000000)
 
```

We now provide an overview of such operations:



```
# First of all, there are simple mathematical operations
x = np.arange(4)
print("x =", x)
print("x + 5 =", x + 5)
print("x - 5 =", x - 5)
print("x * 2 =", x * 2)
print("x / 2 =", x / 2)
print("x // 2 =", x // 2)  
```
Alternatively, you can also call functions on Numpy arrays, and even on Python lists.



```
x = [-6, -3, 2, 5]
print("Absolute value:", np.abs(x))
print("Exponential:", np.exp(x))
print("Logarithm:", np.log(np.abs(x))
```
You can also execute Boolean operations on your arrays:



```
x = np.random.rand(4,4)
x > 0.7
```
Numpy has functions to sum up these data on his arrays:



```
L = np.random.random(10)
np.sum(L)
```
**3.2. Manipulate data using Matplotlib**

Matplotlib was created to generate graphics directly from Python. In this section, we focus on using Matplotlib as a visualization tool in Jupyter notebooks.

To begin the process, let's set up the workspace:



```
%matplotlib inline
import matplotlib.pyplot as plt
plt.style.use('seaborn-whitegrid')
import numpy as np
```
Let's start by examining a simple case-like drawing the curve of a `sin` function:



```
fig = plt.figure()
ax = plt.axes()
x = np.linspace(0, 10, 1000)
ax.plot(x, np.sin(x));
```
Output:

![sin](https://i.imgur.com/lH3Nu2V.png)

The `fig` variable refers to a container that contains all items (axes, labels, data, etc.). The axes match the square shown above, which will then contain the data from the graph.


In the case of discrete datasets (points), we frequently use error bars to represent, for each point, the incertitude as to its exact value:



```
x = np.linspace(0, 30, 80)
dy = 0.3
y = np.sin(x) + dy * np.random.randn(80)

plt.errorbar(x, y, yerr=dy, fmt='.k');
```
Output:

![discrete datasets](https://i.imgur.com/a75mTEo.png)



### 4.   Deal with a large amount of data using Pandas library


The Pandas library is one of the basic libraries for data science in Python. Pandas offers easy-to-use and robust data structures and the means to use them quickly. In this section, we will discuss what is of interest to the Pandas library, as well as the basic operations on the main object of this library, the `Dataframe`.

This pandas can be represented by a numpy array:



```
import numpy as np
panda_numpy = np.array([200,50,100,80])
panda_numpy
```

Output:

`array([200,  50, 100, 80])`


It is possible to do this:



```
family = [
    np.array([100, 5, 20, 80]), # mom 
    np.array([50, 2.5, 10, 40]), # baby 
    np.array([110, 6, 22, 80]), # daddy 
]
```

Let's represent the `family` with Pandas:



```
import pandas as pd
family_df = pd.DataFrame(family)
famille_df
```
Output:



```
    0    1    2    3
0   100  5.0  20  80
1   50   2.5  10  40
2   110  6.0  22  80
```

The object that can be used to represent arrays  is the `DataFrame` object

In fact, we can do even better, by specifying column names and row names:



```
family_df = pd.DataFrame(family_numpy,
                                index = ['mom','baby','dad'],
                                columns = ['legs','hair','hands','belly'])
family_df
```
Output:



```
       legs  hair  hands  belly
 mom   100.0   5.0   20.0    80.0
 baby     50.0   2.5   10.0    40.0
 dad    110.0   6.0   22.0    80.0
```
Here are some of the little features of Dataframes. Firstly, to access to belly column of our array. There are two possible syntaxes, which return exactly the same result:



```
family_df.belly
family_df["belly"]
```
Output:

```
mom     80.0
baby    40.0
dad     80.0
Name: belly, dtype: float64

```

 We will now see the whole family one by one, via the `iterrows` method by returning a tuple that has as its first element the index and the content of the line:
 
 

```
for ind, content in family_df.iterrows():
    print("Family:  %s :" % ind)
    print(content)
```

Output:



```
 Family: mom:
 legs 100.0
 hair 5.0
 hands 20.0
 belly 80.0
 Name: mom, dtype: float64

 Family: baby:
 legs 50.0
 hair 2.5
 hands 10.0
 belly 40.0
 Name: baby, dtype: float64

 Family: daddy:
 legs 110.0
 hair 6.0
 hands 22.0
 belly 80.0
 Name: dad, dtype: float64

```
The Pandas library is the one that is pointed in the manipulation of arrays. It is therefore possible to read a CSV file with Pandas: it only takes one line to create a dataframe from a CSV:



```
data = pd.read_csv("dataset.csv", sep=";")
```

* The `data` variable now contains a dataframe containing the data from the csv file;
* The values in our CSV file are separated by the `;` symbol ;
* As a default, `pd.read_csv` expects values that are separated by a comma.


------------
Created by Khaled Bayoudh. Contacts: [mail](mailto:khaled.isimm@gmail.com) [platform](http://deep-tech.cf)






