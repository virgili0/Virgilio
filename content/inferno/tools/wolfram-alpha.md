---
title: Wolfram Alpha
author: rogerjs
description: The purpose of this guide is to show you the endless capabilities of the Wolfram Alpha engine and how to use it to perform complex calculations.
---

# Index
  - [Wolfram Alpha](#wolfram-Alpha)
  - [Accessing WolframAlpha](#accessing-WolframAlpha)
  - [A first taste](#A-first-taste)
  - [Basic calculations](#basic-calculations)
  - [Plotting functions](#plotting-functions)
  - [Solving equations](#solving-equations)
  - [Solving inequalities](#solving-inequalities)
  - [Matrix algebra](#matrix-algebra)
  - [Computing series and summations](#computing-series-and-summations)
  - [Finding derivatives](#finding-derivatives)
  - [Computing integrals](#computing-integrals)
  - [Finding limits](#finding-limits)
  - [Miscellaneous](#miscellaneous)
  

# Wolfram Alpha
[WolframAlpha](https://www.wolframalpha.com) (WA) is a computational knowledge engine, which is a very fancy way of saying that WolframAlpha is a platform that can answer your questions. WolframAlpha is most notable for its capabilities regarding mathematics and it can be a very powerful tool to help you with your computations.

## Accessing WolframAlpha
WolframAlpha's knowledge engine can be accessed online through [wolframalpha.com](https://www.wolframalpha.com) but if you have access to a license, perhaps through your university/research center/company, you might want to install [Wolfram Mathematica](https://www.wolfram.com/mathematica/), _"a modern technical computing system spanning most areas of technical computing — including neural networks, machine learning, image processing, geometry, data science, visualizations, and others"_.

## A first taste
Whenever you input something into WA, you get the link of your query, so that you can actually share what you asked and the answer given pretty easily. For example, following [this link](https://www.wolframalpha.com/input/?i=Who+is+the+US+president) you can see what WA told me when I asked him who the US president is. Through this guide, blue letters with a gray background give a link to a WA query. So if you click this -> [`What is the 345th decimal place of pi`](https://www.wolframalpha.com/input/?i=What+is+the+345th+decimal+place+of+pi) you will see what WA answered me when I asked for the 345th decimal place of pi (it's 5, by the way).

Another important thing to notice is that you don't have to follow a strict syntax when asking things to WA, even though the more you can facilitate WA's life, the better.

Also note that Mathematica - the language developed by the creators of WA -, uses `[]` for function calls, instead of `()`, and all function names are capitalized, so `Sqrt[n]` would give you the usual square root function, that in many languages would probably be used as `sqrt(n)`. This is relevant because WA supports a subset of Mathematica's functions.

One final **very important** hint is that if you have Mathematica, you can get step-by-step solutions to limits, integrals and derivatives (only to name a few) by starting a command with `==`.
  
### Basic calculations
WolframAlpha can, of course, be used as a pretty advanced calculator. Typing in `2^100` will give you the well-known answer of `1267650600228229401496703205376`. Some useful operators to know include:
  - The usual addition `+`, subtraction `-`, multiplication `*` and division `/`
  - The power operator `^`, used as `x^y`, which can also be used as `Power[x, y]`
  - To find the remainder of a division, either type in `x mod m` or use `Mod[x, y]`
  - The square root is `Sqrt[x]`, and the `n`-th root of `x` is given by `Root[x, n]`, so the cubic root of 8 would be found by typing in [`Root[8, 3]`](https://www.wolframalpha.com/input/?i=Root%5B8,+3%5D)
  - The factorial operator can be written as `n!` or as `Factorial[n]`
  - The logarithm and the exponential function are respectively written as `Log[x]` and `Exp[x]`
  - Trigonometric functions have the usual names, but capitalized; for example, `Tan[x]`, `Sin[x]`, `ArcCos[x]` are respectively the tangent, sine and arc-cosine functions

### Plotting functions
There are several different types of plots you can ask WA to do, but perhaps the most basic one would be to plot a simple function from the reals to the reals, like [plotting x^2](https://www.wolframalpha.com/input/?i=plot+x%5E2), which can be done by typing in `plot x^2` or `plot Power[x, 2]`.\
When plotting functions, we don't always want the range that WA suggests, so [`plot x^2 from -5 to 1`](https://www.wolframalpha.com/input/?i=plot+x%5E2+from+-5+to+1) would change the range from the default to the interval from -5 to 1.

For simpler plots, writing in plain English what we want works just fine, but for more complex or intricated plots, we will be better of using the Mathematica syntax. So a regular plot like `plot x^2 from -5 to 1` becomes `Plot[x^2, {x, -5, 1}]`, where the function `Plot[]` is used to say we want a plot, the first argument `x^2` is the function we want to plot and the second argument `{x, -5, 1}` is a list (lists in Mathematica are denoted with `{}`) with the variable, the left limit and the right limit. So [`Plot[x^2, {x, -5, 1}]`](https://www.wolframalpha.com/input/?i=Plot%5Bx%5E2,+%7Bx,-5,1%7D%5D) produces the same plot as before.

To plot more than one function, we can give a list of functions as first argument, instead of just a function. For example, [`Plot[ {x^2, x^3, x^4}, {x, 1, 5} ]`](https://www.wolframalpha.com/input/?i=Plot%5B%7Bx%5E2,+x%5E3,+x%5E4%7D,+%7Bx,+1,+5%7D%5D) will plot three different polynomials, from 1 to 5.

To plot functions of two variables, we can use the function `Plot3D`, so if we type in [`Plot3D[x^2 + y^2 + x*y, {x, -2, 2}, {y, -2, 0}]`](https://www.wolframalpha.com/input/?i=Plot3D%5Bx%5E2+%2B+y%5E2+%2B+x*y,+%7Bx,+-2,+2%7D,+%7By,+-2,+0%7D%5D) we will be plotting the function `x^2 + y^2 + xy` when `x` varies between -2 and 2 and when `y` varies between -2 and 0.

### Solving equations
Solving equations can be done very easily. In fact, just typing in [`solve x^2 + x - 1 = 0 for x`](https://www.wolframalpha.com/input/?i=solve+x%5E2+%2B+x+-+1+%3D+0+for+x) gives you what you would expect. Using Mathematica notation, you would type [`Solve[x^2 + x - 1 == 0, x]`](https://www.wolframalpha.com/input/?i=Solve%5Bx%5E2+%2B+x+-+1+%3D%3D+0,+x%5D).

A great thing of WA and of Mathematica as well is their ability to do symbolic calculations, which also means your equations can have parameters or other unknowns, and WA will try to give you the answer in terms of those parameters. For example, we can ask WA for the general formula to solve a polynomial equation of degree 4 with [`Solve[x^4 + b*x^3 + c*x^2 + d*x + e == 0, x]`](https://www.wolframalpha.com/input/?i=Solve%5Bx%5E4+%2B+b+x%5E3+%2B+c+x%5E2+%2B+d+x+%2B+e+%3D%3D+0,+x%5D) which returns the nasty formulas.

The equations you want to solve do not need to be polynomial ones! For example, [`Solve[Log[x] + Exp[x] == 1, x]`](https://www.wolframalpha.com/input/?i=Solve%5B+Log%5Bx%5D+%2B+Exp%5Bx%5D+%3D%3D+1,+x%5D) gives the value of the number `x` that solves the equation `Log[x] + Exp[x] == 1`.

Systems of equations can also be solved. Just like you would give a list of functions to the `Plot[]`, now we give a list of equations to the `Solve[]`. For example, we want to solve the two equations `Log[x] + y == 1` and `Log[x] + Log[y] == 2`, which we do by typing in [`Solve[ {Log[x] + y == 1, Log[y] + Log[x] == 2}, {x,y} ]`](https://www.wolframalpha.com/input/?i=Solve%5B+%7BLog%5Bx%5D+%2B+y+%3D%3D+1,+Log%5By%5D+%2B+Log%5Bx%5D+%3D%3D+2%7D,+%7Bx,y%7D+%5D). Two **important** things to notice here! First, the result that WA gives includes a function `W` that most people won't know; WA helps people by writing slightly to the right what each component of the solution is, so WA actually says here that _"W(z) is the product log function"_, which we can then google for. Second, notice how the second argument of `Solve[]` was `{x,y}` and **not** `x`! We need to tell WA all the variables we have; if we only write `x`, then WA is trying to solve a different problem: [`Solve[ {Log[x] + y == 1, Log[y] + Log[x] == 2}, x ]`](https://www.wolframalpha.com/input/?i=Solve%5B+%7BLog%5Bx%5D+%2B+y+%3D%3D+1,+Log%5By%5D+%2B+Log%5Bx%5D+%3D%3D+2%7D,+x+%5D)

### Solving inequalities
To solve inequalities you do it in a similar way to equations, but instead use the function `Reduce[]`. As an example, we solve the simultaneous system of inequalities `x y > 3` and `x + y < 0` by typing in [`Reduce[{x + y < 0, x y > 3}, {x,y}]`](https://www.wolframalpha.com/input/?i=Reduce%5B%7Bx+%2B+y+%3C+0,+x+y+%3E+3%7D,+%7Bx,y%7D%5D)

### Matrix algebra
Matrices are used a lot, and sometimes we just need some place to go to check a determinant, the eigenvalues or the eigenvectors of a matrix, or maybe even invert it. You may need that, and when you do, WA has got your back.

In WA, matrices are lists of lists. The outer lists collects all the rows, and the inner lists have the elements of each row, so the identity matrix of dimension 2 would be represented as [`{ {1, 0}, {0, 1} }`](https://www.wolframalpha.com/input/?i=%7B%7B1,+0%7D,+%7B0,+1%7D%7D) (by just inputing the matrix WA will automatically give you plenty of information about the matrix).

To find the determinant or the trace of a matrix, you would respectively use the functions `Det[]` and `Trace[]`, so for example [`Det[{ {a, b}, {c, d} }]`](https://www.wolframalpha.com/input/?i=Det%5B%7B%7Ba,+b%7D,+%7Bc,+d%7D%7D%5D) gives the determinant of a general 2 by 2 matrix, and [`Trace[{ {a, b}, {c, d} }]`](https://www.wolframalpha.com/input/?i=Trace%5B%7B%7Ba,+b%7D,+%7Bc,+d%7D%7D%5D) gives its trace.

To find the inverse, you use [`Inverse[{ {a, b}, {c, d} }]`](https://www.wolframalpha.com/input/?i=Inverse%5B%7B%7Ba,+b%7D,+%7Bc,+d%7D%7D%5D).

To ask for the eigenvalues (resp. the eigenvectors) you would type in [`Eigenvalues[{ {a, b}, {c, d} }]`](https://www.wolframalpha.com/input/?i=Eigenvalues%5B%7B%7Ba,+b%7D,+%7Bc,+d%7D%7D%5D) (resp. [`Eigenvectors[{ {a, b}, {c, d} }]`](https://www.wolframalpha.com/input/?i=Eigenvectors%5B%7B%7Ba,+b%7D,+%7Bc,+d%7D%7D%5D)), even though asking for one usually also gives the other.

Of course that all of this can be done with bigger matrices, and matrices with actual numbers, not just parameters! For example, we can compute the eigenvalues of some 5 by 5 matrix, say [`Eigenvalues[{ {1,2,3,4,5},{6,7,8,9,10},{11,12,13,14,15},{16,17,18,19,20},{21,22,23,24,25} }]`](https://www.wolframalpha.com/input/?i=Eigenvalues%5B%7B%7B1,2,3,4,5%7D,%7B6,7,8,9,10%7D,%7B11,12,13,14,15%7D,%7B16,17,18,19,20%7D,%7B21,22,23,24,25%7D%7D%5D) gives `0, 0, 0, -3.642, 68.64`.

Probably more relevant for university courses, but WA also diagonalizes matrices/finds their Jordan canonical form. For that, use [`JordanDecomposition[{ {1, 2}, {0, 3} }]`](https://www.wolframalpha.com/input/?i=JordanDecomposition%5B%7B%7B1,+2%7D,+%7B0,+3%7D%7D%5D) which also gives the similarity matrix and the matrix in diagonal/Jordan canonical form.

### Computing series and summations
Another thing that Wolfram  Alpha can do is compute summations and series; both with known values and with unknown values. For example, I never know by heart what is the formula to compute the sum of the first terms of a geometric series like `1 + x + x^2 + x^3 + ... + x^n`. WA can help me by just inputing [`sum x^i with i from 0 to n`](https://www.wolframalpha.com/input/?i=sum+x%5Ei+with+i+from+0+to+n), which gives the formula I always forget! But then again, we would be better off using Mathematica's syntax, which for sums/series is through the function `Sum[]`. The first argument is the expression you want to sum, the second argument is the range of the dummy variable! For example, [`Sum[x^i, {i, 0, n}]`](https://www.wolframalpha.com/input/?i=Sum%5Bx%5Ei,+%7Bi,+0,+n%7D%5D) gives the same result as before.

We can also sum, for example, the first 20 factorials with [`Sum[Factorial[n], {n, 1, 20}]`](https://www.wolframalpha.com/input/?i=Sum%5BFactorial%5Bn%5D,+%7Bn,+1,+20%7D%5D) (which gives `2561327494111820313` by the way).

Infinite sums, which are called series, are computed by replacing the upper limit of the dummy variable with `infty`. So if we input [`Sum[1/n, {n, 1, infty}]`](https://www.wolframalpha.com/input/?i=Sum%5B1%2Fn,+%7Bn,+1,+infty%7D%5D) our dear WA lets us know that the [harmonic series diverges](http://mathspp.blogspot.com/2018/10/twitter-proof-sum-of-inverses-diverges.html).

Another interesting example is [`Sum[1/n^2, {n, 1, infty}]`](https://www.wolframalpha.com/input/?i=Sum%5B1%2Fn%5E2,+%7Bn,+1,+infty%7D%5D), which actually gives `pi^2/6`.

Finite/infinite products work the same way, except that we use the function `Product[]`. For example, there is an interesting product formula that gives `pi/2`, and the first 100 terms of that product show that it is close: [`Product[(4i^2)/((2i-1)*(2i+1)), {i, 1, 100}]`](https://www.wolframalpha.com/input/?i=Product%5B(4i%5E2)%2F((2i-1)*(2i%2B1)),+%7Bi,+1,+100%7D%5D) is close to [`Pi/2`](https://www.wolframalpha.com/input/?i=pi%2F2) (more on this example in the limits section).

### Finding derivatives
Differentiating a function is something that can get really nasty. Thankfully, WA does it for us with little effort! We can get some basic derivatives with [`differentiate cos(sin(x)) wrt x`](https://www.wolframalpha.com/input/?i=differentiate+cos(sin(x))+wrt+x). The equivalent Mathematica command would be [`D[Cos[Sin[x]], x]`](https://www.wolframalpha.com/input/?i=D%5BCos%5BSin%5Bx%5D%5D,+x%5D), where the `D` stands for differentiation, probably. Notice that the first argument is the function you want to differentiate, and the second argument is the variable with respect to which you want to differentiate.

Higher-order derivatives can be done by specifying the variable and the order: [`D[x^5, {x, 5}]`](https://www.wolframalpha.com/input/?i=D%5Bx%5E5,+%7Bx,+5%7D%5D) gives the fifth derivative of the function `x^5`.

Functions of several variables can also be differentiated easily, as WA and Mathematica will treat as constants everything that is not the variable specified. For example, [`D[x^2 + y^2, x]`](https://www.wolframalpha.com/input/?i=D%5Bx%5E2+%2B+y%5E2,+x%5D) gives `2x`, obviously.

To find mixed partial derivatives, just put the function as the first argument, and then all the variables you want to differentiate with respect to, in order. For example, if you want to find the mixed partial derivative of `f` with respect to `a`, then `b`, then `c`, do [`D[f[a,b,c], a, b, c]`](https://www.wolframalpha.com/input/?i=D%5Bf%5Ba,b,c%5D,+a,+b,+c%5D). Notice how for this last one, WA returns the symbolic expression, as `f` was just some generic function. This means we can also get WA to tell us the rules of differentiation. For example, we can ask WA to differentiate the product `f(x)g(x)`: [`D[f[x] * g[x], x]`](https://www.wolframalpha.com/input/?i=D%5Bf%5Bx%5D+*+g%5Bx%5D,+x%5D) that gives the product rule `(fg)' = f'g + fg'`.

Typical operations on (usually scalar) functions that include derivatives can be computed with WA as well. In the following list I assume we are working with some function `f(x, y, z)` of three variables. The number of variables can be easily changed!
  - Gradient of `f` can be computed with [`gradient f[x,y,z]`](https://www.wolframalpha.com/input/?i=gradient+f%5Bx,y,z%5D) in WA and `D[f[x,y,z], { {x,y,z} }]` in Mathematica
  - The divergence of the vector function `(f1(x,y,z), f2(x,y,z), f3(x,y,z))` can be found with [`divergence {f1[x,y,z], f2[x,y,z], f3[x,y,z]}`](https://www.wolframalpha.com/input/?i=divergence+%7Bf1%5Bx,y,z%5D,+f2%5Bx,y,z%5D,+f3%5Bx,y,z%5D%7D) in WA and `Div[{f1[x, y, z], f2[x, y, z], f3[x, y, z]}, {x, y, z}]` in Mathematica
  - The curl is similar, expect that we replace `divergence` with `curl` for the WA computation and use the function `Curl[]` in Mathematica, instead of `Div`
  - Laplacian of `f` can be computed with [`laplacian f[x,y,z]`](https://www.wolframalpha.com/input/?i=laplacian+f%5Bx,y,z%5D) in WA and `Laplacian[f[x, y, z], {x, y, z}]` in Mathematica

### Computing integrals
Unfortunately, computing integrals with WolframAlpha is very difficult... Not! It works just like anything else. You just type it in in WA and you get an answer: [`integrate exp(-x^2) with x from 0 to infinity`](https://www.wolframalpha.com/input/?i=integrate+exp(-x%5E2)+with+x+from+0+to+infinity). Mathematica's way of doing things would be [`Integrate[ Exp[-x^2], {x, 0, infty}]`](https://www.wolframalpha.com/input/?i=Integrate%5B+Exp%5B-x%5E2%5D,+%7Bx,+0,+infty%7D%5D).

Of course the variable of integration can be any variable and the bounds can be changed as well, and they can include plus and minus infinity.

To find anti-derivatives, you just omit the bounds of the variable. For example, to find an anti-derivative of `cos(sin(x))tan(x)` we could type in [`Integrate[Cos[Sin[x]]Tan[x], x]`](https://www.wolframalpha.com/input/?i=Integrate%5BCos%5BSin%5Bx%5D%5DTan%5Bx%5D,+x%5D) and we get a very long answer. Sometimes WA can't find an anti-derivative, and it will let you know that.

If all we need is an (accurate) numerical value and we don't need WA to give us the exact answer (which it will try to give always and whenever possible) we can explicitly use the function `NIntegrate[]` instead of `Integrate`: [`NIntegrate[Cos[1/x + Pi/2]^5, {x,1,infty}]`](https://www.wolframalpha.com/input/?i=NIntegrate%5BCos%5B1%2Fx+%2B+Pi%2F2%5D%5E5,+%7Bx,1,infty%7D%5D).

As a final remark, note that if you use WA/Mathematica to check if you are doing your antiderivatives correctly, remember that sometimes a function has more than one antiderivative. If you were trying to find the antiderivative of a function `h` and arrived at some function `f` but then WA got to a different function `g`, it doesn't necessarily mean you got it wrong! Just try deriving your function `f` and see if that gives `h`, as it should!

### Finding limits
To find a limit of an expression or function, just type it as you would expect it: [`limit of 1/x as x goes to -infty`](https://www.wolframalpha.com/input/?i=limit+of+1%2Fx+as+x+goes+to+-infty). The function one may want to use here is `Limit[]`. It works like almost all other function we've seen. The first argument is the expression and the second argument is the variable; the only thing to be careful here is the way in which we tell WA to where the variable is converging. The previous example would be written [`Limit[1/x, x -> -infty]`](https://www.wolframalpha.com/input/?i=Limit%5B1%2Fx,+x+-%3E+-infty%5D).

It is often useful to also define the direction from which the variable approaches the limiting value. For example we know that the limit of `1/x` when `x` goes to 0 changes as `x` approaches 0 from the left or from the right. So we can actually check that [`Limit[1/x, x -> 0^+]`](https://www.wolframalpha.com/input/?i=Limit%5B1%2Fx,+x+-%3E+0%5E%2B%5D) is different from [`Limit[1/x, x -> 0^-]`](https://www.wolframalpha.com/input/?i=Limit%5B1%2Fx,+x+-%3E+0%5E-%5D) where the exponent notation `0^+` and `0^-` is used to define the side from which we approach 0 here.

Also, in the [summations and series](#computing-series-and-summations) I mentioned that a certain product could be used to compute `pi/2`. The product I am talking about is [`Product[(4i^2)/((2i-1)*(2i+1)), {i, 1, infty}]`](https://www.wolframalpha.com/input/?i=Product%5B(4i%5E2)%2F((2i-1)*(2i%2B1)),+%7Bi,+1,+infty%7D%5D) and if you follow the link you will see that WA can't actually give you the exact value. Instead, it gave me the value of the product if I only go up to 5 terms and it gave me a **closed** formula for the product up to `n`: [`Product[(4i^2)/((2i-1)*(2i+1)), {i, 1, n}]`](https://www.wolframalpha.com/input/?i=Product%5B(4i%5E2)%2F((2i-1)*(2i%2B1)),+%7Bi,+1,+n%7D%5D). Now I will use the `Limit[]` function to prove that I am actually not lying! If I put that closed formula inside the `Limit` function and ask `n` to go to infinity like so: [`Limit[(Pi Gamma[1 + n]^2)/(2 Gamma[1/2 + n] Gamma[3/2 + n]), n -> infty]`](https://www.wolframalpha.com/input/?i=Limit%5B(Pi+Gamma%5B1+%2B+n%5D%5E2)%2F(2+Gamma%5B1%2F2+%2B+n%5D+Gamma%5B3%2F2+%2B+n%5D),+n+-%3E+infty%5D), we get the desired `pi/2`.

### Miscellaneous
To find if a number is prime, you can use the function `PrimeQ[]`, for example type [`PrimeQ[4234523457]`](https://www.wolframalpha.com/input/?i=PrimeQ%5B4234523457%5D) to conclude that 4234523457 is not a prime number because `4234523457 = 3×53×97×463×593`.

Similarly, use the function `Prime[]` to find out the `n`-th prime. For example, type [`Prime[4234523457]`](https://www.wolframalpha.com/input/?i=Prime%5B4234523457%5D) to find out that the 4234523457th prime is `102951556637`.

---
Brought to you by the editor of the [Mathspp Blog](https://mathspp.blogspot.com/), [RojerGS](https://github.com/RojerGS).
