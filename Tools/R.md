R is free statistical software. It is an open source implementation of the S language. R is a powerful software application for interacting with data. It is freely available worldwide. With R, you can create sophisticated graphs, carry out statistical analyses, and create and run simulations. [R is also a programming language with an extensive set of built-in functions so you can write your own code to build your own statistical tools. Advanced users can even incorporate functions written in other languages, such as C, C++, and Fortran.

A core team of statisticians and many other contributors work to update and improve R and to make versions that run well under all of the most popular operating systems. Most importantly to you, R is free, high-quality statistical software that will be useful as you learn statistics even though it is also a first-rate tool for professional statisticians. Why use R for introductory statistics? There are several reasons that make R an excellent choice of statistical software for an introductory statistical course. First, R is free and available on the Web. You can use it on your home computers and are not tied to campus labs. Second, R is powerful, widely-used software. The knowledge of R you gain during the course potentially translates to a marketable skill. You will learn to use a tool that has many practical uses outside the classroom. Third, even though it is not the simplest statistical software, the basics are easy enough to master that learning to use R need not interfere overly much with learning the statistical concepts encountered in an introductory course. Fourth, did I mention that it is free and you can use it at home? The primary drawback to using R in an introductory course is that most existing documentation for R is written for an audience that is knowledgeable about statistics and has experience with other statistical computing programs. In contrast, this document intends to make R accessible to the typical student in an introductory statistics course who is new to both statistical concepts and statistical computing. The aim is to teach you how to install R on your home computer and to teach you to use R to learn the statistical concepts usually included in an introductory course with explanations and examples aimed at the appropriate level. This document purposely does not attempt to teach you about R&#39;s advanced features. The intention is to teach you enough R to enhance your learning of introductory statistics and to point you in the direction of more information should you find a desire to learn more.

The Comprehensive R Archive Network web page at http://cran.r-project.org/ is the authoritative source of information about R.

We will describe some of the basic functionality of R. Usually, you interact with R through a command-line interface — you type in a command and R responds. Once you have mastered a few commands, the command-line interface gives you efficient control of an extremely powerful tool for interacting with data. Gaining mastery of a few R commands does take some learning and patience as R is finnicky. You will undoubtedly experience some challenges as you work to learn a new skill that is not wholly intuitive, but it is well worth the effort. Onward! The following commands give a glimpse of what R can do. You will find it most beneficial, actually, to type these commands into R to see the results yourself. **Calculating with numbers.**

\&gt; 2 + 2

[1] 4

\&gt; 12 \* 3 - 10/2 + sqrt (16)

[1] 35

\&gt; 3^2 [1] 9

\&gt; 1:10 [1] 1 2 3 4 5 6 7 8 9 10

\&gt; sum(1:10)

[1] 55

\&gt; mean(1:10)

[1] 5.5

\&gt; sd(1:10)

[1] 3.027650

You can use R like a calculator. The \* symbol stands for multiplication and the ^ symbol stands for exponentiation. The colon operator : creates an array of numbers from the first to the second.

R has a number of built-in functions such as mean and sum that have obvious meaning. The command sum(1:10) calculated 1 + 2 + 3 + · · · + 10 The symbol [1] that precedes the output says that the first row begins with the first number of the output. Long answers are broken across rows, like in this example with similarly useful row labels.

\&gt; 1:100

[1] 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 [19] 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 [37] 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 [55] 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 [73] 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 [91] 91 92 93 94 95 96 97 98 99 100

**Calculating with arrays**. R can do arithmetic operations on arrays. If you multiply an array of numbers by a single number, the multiplication happens separately for each number. You can also add or multiply equal-sized arrays of numbers.

\&gt; 2 \* (1:15)

[1] 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30

\&gt; (1:10) + (10:1)

[1] 11 11 11 11 11 11 11 11 11 11

\&gt; (1:4)^2

[1] 1 4 9 16

**Assigning variables.** You can use the = sign to create new variables. Typing the name of a variable displays it.

\&gt; a = 1:10

\&gt; a

[1] 1 2 3 4 5 6 7 8 9 10

\&gt; mean(a)

[1] 5.5

(An alternative to the = syntax is to use the key combination \&lt;- which was created to look like an arrow. Older documentation may use this instead of the equal sign, but both are valid methods.)

**Combining arrays.** The c function in R concatenates things. (Because c is a reserved function name in R, it is preferable not to use c as the name of a variable lest you or R gets confused. I tend to use cc when I really want to use c.)

\&gt; a = 1:10

\&gt; b = 15:20

\&gt; cc = c(b, a, b)

\&gt; cc

[1] 15 16 17 18 19 20 1 2 3 4 5 6 7 8 9 10 15 16 17 18 19 20

**Using functions.** R has many built in functions and you can write your own if you want. To see a function, just type its name. If you want actually to use the function, you need to add parentheses at the end, possibly with arguments in between.

\&gt; mean

function (x, ...)

UseMethod(&quot;mean&quot;)

\&gt; mean(cc)

[1] 12.04545

Here is code to create a function that computes the area of a rectangle.

\&gt; findArea = function(x, y) {

+ return(x \* y)

+ }

\&gt; findArea(13, 4)

[1] 52

You do not need to type in the + prompt. That&#39;s how R lets you know that the previous command was incomplete. This can happen when you have a command that begins with a ( or a { and you type a return before the command ends. You can often rectify this by typing the missing } or ). If you have mistyped and can&#39;t get out of the + prompt, pressing the Esc key usually works to get back to a regular prompt. **Changing your workspace.** R keeps all of the variables you keep in memory as it runs. When you end an R session, you may save your workspace. This allows you to have variables you have previously defined available without the need to create them all again from scratch. There will also be times when you will want to read in data sets or read some R code. To do these things more easily, it is often a good idea to change R&#39;s workspace. By default, R will use as its workspace the folder in which the executable program exists. You will most likely want to change the workspace to a new folder where you might keep data from the textbook and your homework. You change the workspace for R under both Windows and Macintosh versions by using the File menu and selecting

**Change Directory...** with your mouse. My advice is to have a folder where you keep work and to change the workspace to this folder each time you start R.

**Quitting R.** To quit, you can type q() on a command line or you can quit through the File menu. R will prompt you if you want to save your workspace.
