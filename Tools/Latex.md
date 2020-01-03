# LaTeX
LaTeX is a markup language (or, as said in the [official website](https://www.latex-project.org/about/), "a document preparation system for high-quality typesetting") used to create wonderful papers and presentations. Almost all papers you will read during your career are written using LaTeX. So, let's see how it works!

## Why LaTeX?
For years now LaTeX has been the go-to tool whenever someone needs to create a document that will contain mathematical formulas. LaTeX is used a lot to write scientific papers and it is also used by bloggers and scientific content creators in the internet. You can even use LaTeX syntax on facebook messenger! (which only renders if you are on your computer)

## Installation
There are several LaTeX distributios, you can see a complete list [here](http://www.tug.org/interest.html#free).

Under Unix systems, you can install [TeXLive](http://www.tug.org/texlive/). In particular, under Ubuntu you can type in the terminal `sudo apt-get install texlive-full`. 
Under Windows systems, you can install [MiKTeX](https://miktex.org/) or also [TexLive](http://www.tug.org/texlive/).
Under MacOs, [MacTex](http://www.tug.org/mactex/).

After the installation, you need an editor to write your LaTeX document. You can use whatever editor you want (notepad, vim, nano, gedit and so on) but I recommend you to choose [Texmaker](http://www.xm1math.net/texmaker/) which is free and cross platform. It is also worth saying that Visual Studio Code with some dedicated extensions (such as [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)) is pretty good to use.

## Writing a document
There are tons of on-line guides about LaTeX to get you started. Among them:
- A comprehensive guide can be found [here](https://en.wikibooks.org/wiki/LaTeX).
- Another cool guide [here](https://www.latex-tutorial.com/tutorials/).
- [This one](http://www.docs.is.ed.ac.uk/skills/documents/3722/3722-2014.pdf) is perfect for beginners.
- Also [here](http://web.mit.edu/rsi/www/pdfs/new-latex.pdf) another guide.

It's also possible to write your LaTeX document on-line and share it with your collaborators using [OverLeaf](https://www.overleaf.com/).

There are already lots of templates made. You can find some of them [here](https://www.latextemplates.com/).

To draw awesome graphs and charts, you can use the package [TikZ](https://en.wikipedia.org/wiki/PGF/TikZ).

Also a good site to keep in mind when facing a problem with LaTeX is [StackOverflow](https://tex.stackexchange.com/) with the LaTeX dedicated section.

### Tools to increase productivity
The LaTeX syntax can seem daunting at first, with plenty of new commands for all the mathematical symbols you know and need to use.
  - [This website](https://www.codecogs.com/latex/eqneditor.php) allows one to write a formula online, and it also has plenty of symbols in which you can just click, generating the code you need. You can also preview your formula, so that it is easier for you to make sure everything is being properly written.
  - Whenever you need a symbol but you don't know the command, use [this site](http://detexify.kirelabs.org/classify.html). All you have to do is draw the symbol and then suggestions will appear on the right.
  - Creating tables in LaTeX can be particularly annoying. I usually do it [here](https://www.tablesgenerator.com/) and then ask the site to generate the appropriate code.
  - [MathJax](https://www.mathjax.org/) is one of the ways in which you can get LaTeX to render, say, in your blog! (example [here](http://mathspp.blogspot.com/2018/11/twitter-proof-roots-go-hand-in-hand.html), where the formulas are rendered with MathJax)
  - [Mathpix Snipping Tool](https://mathpix.com/) helps you to convert images to LaTeX by just taking a screenshort of desired math formula. It can also recognize arrays and various math fonts.

## Useful Packages

Now that you know how to produce a (simple) LaTeX document, you may feel the need to write or draw particular content. To do so, you can use specific packages. All you need to do is to include them at the beginning of your document with the command `\usepackage{name_of_the_package}`.

### Displaying Math

The [`amsmath` package](https://ctan.org/pkg/amsmath) provides miscellaneous enhancements for improving the information structure and printed output of documents that contain mathematical formulas, as stated in [this useful guide](http://texdoc.net/texmf-dist/doc/latex/amsmath/amsldoc.pdf). 

Extra mathematical fonts and symbols can be used by including the [`amssymb` package](https://ctan.org/pkg/amsfonts). A recap can be found [here](http://milde.users.sourceforge.net/LUCR/Math/mathpackages/amssymb-symbols.pdf).

### Code Blocks

The [`listings` package](https://ctan.org/pkg/listings) allows to insert programming code in your LaTeX document. You can highlight code, or specify your language of choice and let the package automatically colour special words, comments, etc for you. [Here](https://www.overleaf.com/learn/latex/Code_listing) a guide with examples.

Based on the previous package, [`pythonhighlight`](https://ctan.org/pkg/pythonhighlight) is a simple Python highlighting style to be used with LaTeX. You can find the very simple instructions [here](https://github.com/olivierverdier/python-latex-highlighting).

To write pseudocode, you can use [algorithms](https://ctan.org/pkg/algorithms), which consists in two packages: `al­go­rithm` and `al­go­rith­mic`. [Here](https://math-linux.com/latex-26/faq/latex-faq/article/how-to-write-algorithm-and-pseudocode-in-latex-usepackage-algorithm-usepackage-algorithmic) you can find examples and useful commands.

### Logic

For natural deductions there's the [`bussproofs` package](https://ctan.org/pkg/bussproofs). You can find the user guide with examples [here](https://www.math.ucsd.edu/~sbuss/ResearchWeb/bussproofs/BussGuide2_Smith2012.pdf).

If you find tedious manually writing truth tables, [here](http://www.siafoo.net/snippet/249) you'll find an incredibly useful Pyhton script. It automatically generates the LaTeX code of a compiled truth table given one or more propositional logic formulas. (Note: remember that in Python you can write *p* &rarr; *q* as `not p or q` as they are logically equivalent).

### Automata

To draw finite state machines with LaTeX you can use the `tikz-automata` package, [here](https://www3.nd.edu/~kogge/courses/cse30151-fa17/Public/other/tikz_tutorial.pdf) a quick tutorial. You can also automatically generate the code using [this website](https://notendur.hi.is/aee11/automataLatexGen/).

### This is why you need to learn Machine Learning 
Oh damn, take a look at [this](https://mathpix.com/).

------------
Created by Damiano Azzolini. Contacts: [mail](mailto:damiazz94@gmail.com) [github](https://github.com/damianoazzolini)

Expanded upon by the editor of the [Mathspp Blog](https://mathspp.blogspot.com), [RojerGS](https://github.com/RojerGS), and by Lara Vignotto ([mail](mailto:lara.vignotto@gmail.com), [github](https://github.com/laravignotto))
