# WolframAlpha
[WolframAlpha](https://www.wolframalpha.com) (WA) is a computational knowledge engine, which is a very fancy way of saying that WolframAlpha is a platform that can answer your questions. WolframAlpha is most notable for its capabilities regarding mathematics and it can be a very powerful tool to help you with your computations.

## Accessing WolframAlpha
WolframAlpha's knowledge engine can be accessed online through [wolframalpha.com](https://www.wolframalpha.com) but if you have access to a license, perhaps through your university/research center/company, you might want to install [Wolfram Mathematica](https://www.wolfram.com/mathematica/), _"a modern technical computing system spanning most areas of technical computing — including neural networks, machine learning, image processing, geometry, data science, visualizations, and others"_.

## WolframAlpha's mathematical capabilities
This little guide will focus on teaching some of the WA's mathematical capabilities. Please bear in mind that there is much more that it can do! This is what we will be covering:

  - [Basic calculations](#basic-calculations)
  - [Plotting functions](#plotting-functions)
  - [Solving polynomial equations](#solving-polynomial-equations)
  - [Computing series and summations](#computing-series-and-summations)
  - [Finding derivatives](#finding-derivatives)
  - [Computing integrals](#computing-integrals)
  - [Finding limits](#finding-limits)
  
Some things to bear in mind: whenever you input something into WA, you get the link of your query, so that you can actually share what you asked and the answer given pretty easily. For example, following [this link](https://www.wolframalpha.com/input/?i=Who+is+the+US+president) you can see what WA told me when I asked him who the US president is. Another important thing to notice is that you don't have to follow a strict syntax when asking things to WA, even though the more you can facilitate WA's life, the better.

Also note that the language WA developed, Mathematica, uses `[]` for function calls, instead of `()`, and all function names are capitalized, so `Sqrt[n]` would give you the usual square root function, that in many languages would probably be used as `sqrt(n)`.
  
### Basic calculations
WolframAlpha can, of course, be used as a pretty advanced calculator. Typing in `2^100` will give you the well-known answer of `1267650600228229401496703205376`. Some useful operators to know include:
  - The usual addition `+`, subtraction `-`, multiplication `*` and division `/`
  - The power operator `^`, used as `x^y`, which can also be used as `Power[x, y]`
  - To find the remainder of a division, either type in `x mod m` or use `Mod[x, y]`
  - The square root is `Sqrt[x]`, and the `n`-th root of `x` is given by `Root[x, n]`, so the [cubic root of 8](https://www.wolframalpha.com/input/?i=Root%5B8,+3%5D) would be found by typing in `Root[8, 3]`
  - The factorial operator can be written as `n!` or as `Factorial[n]`

### Plotting functions
There are several different types of plots you can ask WA to do, but perhaps the most basic one would be to plot a simple function from the reals to the reals, like [plotting x^2](https://www.wolframalpha.com/input/?i=plot+x%5E2), which can be done by typing in `plot x^2` or `plot Power[x, 2]`.\
When plotting functions, we don't always want the range that WA suggests, so [`plot x^2 from -5 to 1`](https://www.wolframalpha.com/input/?i=plot+x%5E2+from+-5+to+1) would change the range from the default to the interval from -5 to 1.

For simpler plots, writing in plain English what we want works just fine, but for more complex or intricated plots, we will be better of using the Mathematica syntax. So a regular plot like `plot x^2 from -5 to 1` becomes `Plot[x^2, {x, -5, 1}]`, where the function `Plot[]` is used to say we want a plot, the first argument `x^2` is the function we want to plot and the second argument `{x, -5, 1}` is a list (lists in Mathematica are denoted with `{}`) with the variable, the left limit and the right limit. So [`Plot[x^2, {x, -5, 1}]`](https://www.wolframalpha.com/input/?i=Plot%5Bx%5E2,+%7Bx,-5,1%7D%5D) produces the same plot as before.

To plot more than one function, we can give a list of functions as first argument, instead of just a function. For example, [`Plot[ {x^2, x^3, x^4}, {x, 1, 5} ]`](https://www.wolframalpha.com/input/?i=Plot%5B%7Bx%5E2,+x%5E3,+x%5E4%7D,+%7Bx,+1,+5%7D%5D) will plot three different polynomials, from 1 to 5.

To plot functions of two variables, we can use the function `Plot3D`, so if we type in [`Plot3D[x^2 + y^2 + x*y, {x, -2, 2}, {y, -2, 0}]`](https://www.wolframalpha.com/input/?i=Plot3D%5Bx%5E2+%2B+y%5E2+%2B+x*y,+%7Bx,+-2,+2%7D,+%7By,+-2,+0%7D%5D) we will be plotting the function `x^2 + y^2 + xy` when `x` varies between -2 and 2 and when `y` varies between -2 and 0.

### Solving polynomial equations
To be added soon!

### Computing series and summations
To be added soon!

### Finding derivatives
To be added soon!

### Computing integrals
To be added soon!

### Finding limits
To be added soon!
