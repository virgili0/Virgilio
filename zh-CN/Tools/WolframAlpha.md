
# WolframAlpha

[WolframAlpha](https://www.wolframalpha.com) (WA) 是一个计算知识引擎，这是一种非常奇特的方式，可也以说 WolframAlpha 是一个可以回答你问题的平台。 WolframAlpha 以其数学能力而闻名，它可以成为一个非常强大的工具来帮助你进行计算。

## 访问 WolframAlpha

WolframAlpha 的知识引擎可以通过 [wolframalpha.com](https://www.wolframalpha.com) 在线访问，但如果你可以通过你的大学 / 研究中心 / 公司访问许可证，你可能需要安装 [Wolfram Mathematica](https://www.wolfram.com/mathematica/) ，_“跨越大多数技术计算领域的现代技术计算系统 - 包括神经网络，机器学习，图像处理，几何，数据科学，可视化等 “_。

## WolframAlpha 的数学能力

这本小指南将重点介绍 WA 的一些数学能力。请记住，还有更多可以做的事情！这是我们将要涉及的内容：

- [基本计算](#基本计算)
- [绘图函数](#绘图函数)
- [求解方程](#求解方程)
- [解不等式](#解不等式)
- [矩阵代数](#矩阵代数)
- [计算级数和总和](#计算级数和总和)
- [求导](#求导)
- [计算积分](#计算积分)
- [求极限](#求极限)
- [其他](#其他)

每当你向 WA 输入内容时，你都会获得查询的链接，这样你就可以非常轻松地分享你提出的问题和答案。例如，在 [此链接](https://www.wolframalpha.com/input/?i=Who+is+the+US+president) 之后，当我问他美国总统是谁时，你可以看到 WA 告诉我的内容。通过本指南，带有灰色背景的蓝色字母提供了 WA 查询的链接。所以如果你点击这个 - > [`pi 的第 345 个小数位是什么？`](https://www.wolframalpha.com/input/?i=What+is+the+345th+decimal+place+of+pi) 当我想求 pi 的第 345 个小数位(顺便说一下，它是 5) 时，你会看到 WA 回答我的内容。

另一个需要注意的重要事项是，在向 WA 询问事物时，你不必遵循严格的语法，当然准确的问法可以让WA更好的帮到你。

另请注意，Mathematica - 由 WA 的创建者开发的语言 - 使用 `[]` 进行函数调用，而不是 `()`，并且所有函数名都是大写的，所以 `Sqrt[n]` 会给你通常的平方根函数，在许多语言中可能用作 `sqrt(n)`。这是相关的，因为 WA 支持 Mathematica 函数的子集。

最后一个 **非常重要的** 提示是，如果你有 Mathematica，你可以通过用 `==` 开始命令来获得极限，积分和求导(仅举几例) 的逐步解决方案。

### 基本计算

当然，WolframAlpha 可以用作非常先进的计算器。输入 `2^100` 将为你提供 `1267650600228229401496703205376` 的众所周知的答案。一些有用的操作需要知道：

- 通常加法 `+`，减法 `-`，乘法 `*` 和除法 `/`
- 幂运算符 `^`，用作 `x^y`，也可以用作`Power[x，y]`
- 要找到除法的余数，可以输入 `x mod m` 或使用 `Mod[x，y]`
- 平方根是 `Sqrt[x]`，`x` 的第 n 个根由 `Root[x，n]` 给出，所以通过键入[`来找到 8 的立方根。 Root[8,3]`](https://www.wolframalpha.com/input/?i=Root%5B8,+3%5D)
- 阶乘运算符可以写成 `n!` 或`Factorial[n]`
- 对数和指数函数分别写为 `Log[x]` 和 `Exp[x]`
- 三角函数具有通常的名称，但是大写; 例如，`Tan[x]`，`Sin[x]`，`ArcCos[x]` 分别是正切，正弦和反余弦函数

### 绘图函数

你可以使用 WA 做几种不同类型的图表，但也许最基本的图表是绘制从实数到实数的简单函数，像 [plotting x^2](https://www.wolframalpha.com/input/?i=plot+x%5E2) ，可以通过输入 `plot x^2` 或 `plot Power[x，2]` 来完成。
在绘制函数时，我们并不总是想要 WA 的默认范围，所以[`plot x^2 from -5 to 1`](https://www.wolframalpha.com/input/?i=plot+x%5E2+from+-5+to+1) 会将范围从默认值更改为 - 5 到 1 之间的范围。

对于更简单的图，用简单的英文就可以言简意赅的表述，但是对于更复杂或复杂的图，我们将更好地使用 Mathematica 语法。所以像 `plot x^2 from -5 to 1` 的常规图表变成了`Plot[x^2, {x, -5, 1}]`，其中函数 `Plot[]` 用于表示我们想要的图，第一个参数 `x ^ 2` 是我们想要绘制的函数，第二个参数 `{x，-5,1}` 是一个列表(Mathematica 中的列表用 `{}` 表示) 和变量，左极限和右极限。所以[`Plot[x^2, {x, -5, 1}]`](https://www.wolframalpha.com/input/?i=Plot%5Bx%5E2,+%7Bx,-5,1%7D%5D) 产生与以前相同的图。

要绘制多个函数，我们可以将函数列表作为第一个参数，而不仅仅是函数。例如，[`Plot[ {x^2, x^3, x^4}, {x, 1, 5} ]`](https://www.wolframalpha.com/input/?i=Plot%5B%7Bx%5E2,+x%5E3,+x%5E4%7D,+%7Bx,+1,+5%7D%5D) 将绘制三个不同的多项式，从 1 到 5。

为了绘制两个变量的函数，我们可以使用函数 `Plot3D` ，所以如果我们输入 [`Plot3D[x^2 + y^2 + x*y, {x, -2, 2}, {y, -2, 0}]`](https://www.wolframalpha.com/input/?i=Plot3D%5Bx%5E2+%2B+y%5E2+%2B+x*y,+%7Bx,+-2,+2%7D,+%7By,+-2,+0%7D%5D )当`x` 在 - 2 和 2 之间以及当 y  在 - 2 和 0 之间变化时，我们将绘制函数 `x^2 + y^2 + xy` 。

### 求解方程

可以非常容易地解方程。事实上，只需键入 [`solve x^2 + x - 1 = 0 for x`](https://www.wolframalpha.com/input/?i=solve+x%5E2+%2B+x+-+1+%3D+0+for+x) 为你提供你所期望的。使用 Mathematica 表示法，你可以输入 [`Solve[x^2 + x - 1 == 0, x]`](https://www.wolframalpha.com/input/?i=Solve%5Bx%5E2+%2B+x+-+1+%3D%3D+0,+x%5D)。

WA 和 Mathematica 的一个好处是它们能够进行符号计算，这也意味着你的方程可以有参数或其他未知数，WA 将尝试根据这些参数给出答案。例如，我们可以向 WA 请求通用公式求解度为 4 的多项式方程 [`Solve[x^4 + b*x^3 + c*x^2 + d*x + e == 0, x]`](https://www.wolframalpha.com/input/?i=Solve%5Bx%5E4+%2B+b+x%5E3+%2B+c+x%5E2+%2B+d+x+%2B+e+%3D%3D+0,+x%5D) 返回令人讨厌的公式。

你想要解的方程不需要是多项式的！例如，[`Solve[Log[x] + Exp[x] == 1, x]`](https://www.wolframalpha.com/input/?i=Solve%5B+Log%5Bx%5D+%2B+Exp%5Bx%5D+%3D%3D+1+x%5D) 解给出方程 `Log[x] + Exp[x] == 1` 的未知数 `x` 的值。

方程组也可以求解。就像你给`Plot[]` 给出一个函数列表一样，现在我们给 `Solve[]` 一个方程列表。例如，我们想要解两个方程 `Log[x] + y == 1` 和 `Log[x] + Log[y] == 2`，我们通过输入 [`Solve[ {Log[x] + y == 1, Log[y] + Log[x] == 2}, {x,y} ]`](https://www.wolframalpha.com/input/?i=Solve%5B+%7BLog%5Bx%5D+%2B+y+%3D%3D+1,+Log%5By%5D+%2B+Log%5Bx%5D+%3D%3D+2%7D,+%7Bx,y%7D+%5D) 。这里有两个 **重要** 的事情要注意！首先，WA 给出的结果包括大多数人不会知道的函数 `W`; WA 通过略微向右写入解的每个组件来帮助人们，因此 WA 实际上在这里说_“W(z) 是乘积对数函数(product log function)”_，然后我们可以谷歌搜索。其次，请注意 `Solve[]` 的第二个参数是 `{x，y}` **不是** `x` ！我们需要告诉 WA 我们拥有的所有变量; 如果我们只写 `x`，那么 WA 正试图解另一个问题：[`Solve[ {Log[x] + y == 1, Log[y] + Log[x] == 2}, x ]`](https://www.wolframalpha.com/input/?i=Solve%5B+%7BLog%5Bx%5D+%2B+y+%3D%3D+1,+Log%5By%5D+%2B+Log%5Bx%5D+%3D%3D+2%7D,+x+%5D)

### 解不等式

为了解不等式，你可以用与方程类似的方式来实现它，但是使用函数 `Reduce[]`。作为一个例子，我们通过输入 [`Reduce[{x + y < 0, x y > 3}, {x,y}]`](https://www.wolframalpha.com/input/?i=Reduce%5B%7Bx+%2B+y+%3C+0,+x+y+%3E+3%7D,+%7Bx,y%7D%5D) 来解不等式组 `xy> 3` 和 `x + y <0` 。[`Reduce[{x + y < 0, x y > 3}, {x,y}]`](https://www.wolframalpha.com/input/?i=Reduce%5B%7Bx+%2B+y+%3C+0,+x+y+%3E+3%7D,+%7Bx,y%7D%5D)

### 矩阵代数

矩阵被大量使用，有时我们只需要一些地方来检查行列式，矩阵的特征值或特征向量，甚至可能将其求逆。你可能需要这样做，当你这样做时，WA 支持你。

在 WA 中，矩阵是列表的列表。外部列表是所有行的集合，内部列表具有每行的元素，因此维度 2 的单位矩阵将表示为 [`{ {1, 0}, {0, 1} }`](https://www.wolframalpha.com/input/?i=%7B%7B1,+0%7D,+%7B0,+1%7D%7D) (只需输入矩阵 WA 就会自动为你提供大量有关矩阵) 。

要找到矩阵的行列式或迹，你可以分别使用函数 `Det[]` 和 `Trace[]` ，例如 [`Det[{{a, b}, {c, d}}]`](https://www.wolframalpha.com/input/?i=Det%5B%7B%7Ba,+b%7D,+%7Bc,+d%7D%7D%5D) 给出了一般性的决定因素 2 乘 2 矩阵，[`Trace[{{a, b}, {c, d}}]`](https://www.wolframalpha.com/input/?i=Trace%5B%7B%7Ba,+b%7D,+%7Bc,+d%7D%7D%5D) 给出其迹。

要查找反函数，可以使用 [`Inverse[{{a, b}, {c, d}}]`](https://www.wolframalpha.com/input/?i=Inverse%5B%7B%7Ba,+b%7D,+%7Bc,+d%7D%7D%5D)。

要求特征值(或特征向量) ，你可以输入 [`Eigenvalues[{{a, b}, {c, d}}]`](https://www.wolframalpha.com/input/?i=Eigenvalues%5B%7B%7Ba,+b%7D,+%7Bc,+d%7D%7D%5D) (分别为 [`Eigenvectors[{{a, b}, {c, d}}]`](https://www.wolframalpha.com/input/?i=Eigenvectors%5B%7B%7Ba,+b%7D,+%7Bc,+d%7D%7D%5D))，即使通常只求一个也给了另一个。

当然，所有这些都可以用更大的矩阵和具有实际数字的矩阵来完成，而不仅仅是参数！例如，我们可以计算一些 5 乘 5 矩阵的特征值，比如 [`Eigenvalues[{{1,2,3,4,5},{6,7,8,9,10},{11,12,13,14,15},{16,17,18,19,20},{21,22,23,24,25}}]`](https://www.wolframalpha.com/input/?i=Eigenvalues%5B%7B%7B1,2,3,4,5%7D,%7B6,7,8,9,10%7D,%7B11,12,13,14,15%7D,%7B16,17,18,19,20%7D,%7B21,22,23,24,25%7D%7D%5D) 给出 `0, 0, 0, -3.642, 68.64`。

可能与大学课程更相关，但 WA 也对矩阵进行了对角化 / 找到了他们的若尔当标准型(Jordan canonical form)。为此，使用 [`JordanDecomposition[{{1, 2}, {0, 3}}]`](https://www.wolframalpha.com/input/?i=JordanDecomposition%5B%7B%7B1,+2%7D,+%7B0,+3%7D%7D%5D) 其也给出了相似矩阵和对角矩阵和若尔当标准型矩阵。

### 计算级数和总和

Wolfram Alpha 可以做的另一件事是计算总和和级数; 具有已知值和未知值。例如，我从来不知道计算几何级数的第一项之和的公式是什么，例如 `1 + x + x^2 + x^3 + ... + x^n`。 WA 可以通过输入 [`sum x^i with i from 0 to n`](https://www.wolframalpha.com/input/?i=sum+x%5Ei+with+i+from+0+to+n) 来帮助我，这给出了我永远忘记的公式！但话说回来，我们最好使用 Mathematica 的语法，对于 sums / series 来说，它是通过函数 `Sum[]`。第一个参数是要求求和的表达式，第二个参数是虚拟变量的范围！例如，[`Sum[x^i, {i, 0, n}]`](https://www.wolframalpha.com/input/?i=Sum%5Bx%5Ei,+%7Bi,+0,+n%7D%5D) 给出与以前相同的结果。

例如，我们也可以计算 [`Sum[Factorial[n], {n, 1, 20}]`](https://www.wolframalpha.com/input/?i=Sum%5BFactorial%5Bn%5D,+%7Bn,+1,+20%7D%5D)将前 20 个阶乘相加(顺便一提，答案是 `2561327494111820313`) 。

无穷和，称为序列，通过用 `infty` 替换虚拟变量的上限来计算。所以如果我们输入[`Sum[1/n, {n, 1, infty}]`](https://www.wolframalpha.com/input/?i=Sum%5B1%2Fn%5E2,+%7Bn,+1,+infty%7D%5D) 我们亲爱的 WA 让我们知道[调和级数发散](http://mathspp.blogspot.com/2018/10/twitter-proof-sum-of-inverses-diverges.html) 。

另一个有趣的例子是 [`Sum[1/n^2, {n, 1, infty}]`](https://www.wolframalpha.com/input/?i=Sum%5B1%2Fn%5E2,+%7Bn,+1,+infty%7D%5D)，实际上给出了 `pi^2/6`。

有限 / 无穷乘积以相同的方式工作，除了我们使用函数 `Product[]`。例如，有一个有趣的乘积公式给出了 `pi/2`，该乘积的前 100 项表明它是接近的：[`Product[(4i^2)/((2i-1)*(2i+1)), {i, 1, 100}]`](https://www.wolframalpha.com/input/?i=Product%5B(4i%5E2)%2F((2i-1)*(2i%2B1)),+%7Bi,+1,+100%7D%5D) 接近 [`Pi/2`](https://www.wolframalpha.com/input/?i=pi%2F2) (此示例中的更多关于极限部分)。

### 求导

函数求导可能会变得非常讨厌。值得庆幸的是，WA 为我们做了一些努力。我们可以用 [`differentiate cos(sin(x)) wrt x`](https://www.wolframalpha.com/input/?i=differentiate+cos(sin(x))+wrt+x) 。等效的 Mathematica 命令是 [`D[Cos[Sin[x]], x]`](https://www.wolframalpha.com/input/?i=D%5BCos%5BSin%5Bx%5D%5D,+x%5D) ，其中 `D` 代表求导。请注意，第一个参数是你要求导的函数，第二个参数是你要求导的变量。

高阶导数可以通过指定变量和顺序来完成：[`D[x^5, {x, 5}]`](https://www.wolframalpha.com/input/?i=D%5Bx%5E5,+%7Bx,+5%7D%5D) 给出函数 `x^5` 的五阶导数。
几个变量的函数也可以很容易地求导，因为 WA 和 Mathematica 将把所有不是指定变量的东西视为常量。例如，[`D[x^2 + y^2, x]`](https://www.wolframalpha.com/input/?i=D%5Bx%5E2+%2B+y%5E2,+x%5D) 显然给出了 `2x`。

要找到混合偏导数，只需将函数作为第一个参数，然后按顺序将所有要分辨的变量放在一起。例如，如果你想找到 `f` 相对于`a` 的混合偏导数，那么 `b`，然后 `c`，做 [`D[f[a,b,c], a, b, c]`](https://www.wolframalpha.com/input/?i=D%5Bf%5Ba,b,c%5D,+a,+b,+c%5D) 。请注意，对于最后一个，WA 返回符号表达式，因为 `f` 只是一些泛型函数。这意味着我们也可以让 WA 告诉我们求导的规则。例如，我们可以要求 WA 乘积求导 `f(x)g(x)`: [`D[f[x] * g[x], x]`](https://www.wolframalpha.com/input/?i=D%5Bf%5Bx%5D+*+g%5Bx%5D,+x%5D) 给出乘积规则 `(fg) '= f'g + fg'`。

包含导数的(通常是标量) 函数的典型运算也可以用 WA 计算。在下面的列表中，我假设我们正在处理三个变量的函数 `f(x，y，z)`。变量的数量可以很容易地改变！
    - `f` 的梯度可以用 [`gradient f[x，y，z]`] 来计算(https://www.wolframalpha.com/input/?i=gradient+f%5Bx,y,z%5D ) 在 WA 和 Mathematica 中的 `D[f[x，y，z]，{{x，y，z}}]`
    - 向量函数 `(f1(x,y,z), f2(x,y,z), f3(x,y,z))` 的发散可以用 [`divergence {f1[x,y,z], f2[x,y,z], f3[x,y,z]}`](https://www.wolframalpha.com/input/?i=divergence+%7Bf1%5Bx,y,z%5D,+f2%5Bx,y,z%5D,+f3%5Bx,y,z%5D%7D) 和 Mathematica 中的 `Div[{f1[x, y, z], f2[x, y, z], f3[x, y, z]}, {x, y, z}]`
    - `curl` 是类似的，期望我们用 `curl` 替换 `divergence` 进行 WA 计算并使用 Mathematica 中的函数 `Curl[]`，而不是 `Div`
    - `f` 的拉普拉斯算子可以在 WA 用 [`laplacian f[x，y，z]`](https://www.wolframalpha.com/input/?i=laplacian+f%5Bx,y,z%5D)  和 Mathematica 中的 `Laplacian[f[x，y，z]，{x，y，z}]` 来计算。

### 计算积分

不幸的是，用 WolframAlpha 计算积分非常困难...... 不是！它就像其他任何东西一样。你只需在 WA 输入它就可以得到答案：[`integrate exp(-x^2) with x from 0 to infinity`](https://www.wolframalpha.com/input/?i=integrate+exp(-x%5E2)+with+x+from+0+to+infinity) 。 Mathematica 上的方法是 [`Integrate[ Exp[-x^2], {x, 0, infty}]`](https://www.wolframalpha.com/input/?i=Integrate%5B+Exp%5B-x%5E2%5D,+%7Bx,+0,+infty%7D%5D)。

当然，积分变量可以是任何变量，边界也可以改变，它们可以包括正负无限。

要查找原函数，只需省略变量的边界即可。例如，要找到 `cos(sin(x))tan(x)` 的原函数，我们可以输入 [`Integrate[Cos[Sin[x]]Tan[x], x]`](https://www.wolframalpha.com/input/?i=Integrate%5BCos%5BSin%5Bx%5D%5DTan%5Bx%5D,+x%5D) 我们得到一个很长的答案。有时 WA 找不到原函数，它会告知你这一情况。

如果我们只需要一个(精确的) 数值，并且我们不需要 WA 给出确切的答案(它将尽可能地给出它们) ，我们可以明确地使用函数 `NIntegrate[]` 而不是 `Integrate`: [`NIntegrate[Cos[1/x + Pi/2]^5, {x,1,infty}]`](https://www.wolframalpha.com/input/?i=NIntegrate%5BCos%5B1%2Fx+%2B+Pi%2F2%5D%5E5,+%7Bx,1,infty%7D%5D) 。

最后再补充一句，请注意，如果你使用 WA / Mathematica 检查你是否正确地进行了原函数，请记住有时一个函数有多个原函数。如果你试图找到一个函数 `f` 的原函数并且到达某个函数 `f` 但是 WA 得到了一个不同的函数 `g`  ，它并不一定意味着你弄错了！只是尝试推导你的函数 `f` ，看看是否能推导至 `h`，讲道理他应该是的！

### 求极限

要找到表达式或函数的极限，只需按照你的预期输入：[`limit of 1/x as x goes to -infty`](https://www.wolframalpha.com/input/?i=limit+of+1%2Fx+as+x+goes+to+-infty) 。这里可能想要使用的函数是 `Limit[]`。它就像我们见过的几乎所有其他函数一样。第一个参数是表达式，第二个参数是变量; 这里唯一需要注意的是我们告诉 WA 变量收敛的方式。前面的例子将写成 [`Limit[1/x, x -> -infty]`](https://www.wolframalpha.com/input/?i=Limit%5B1%2Fx,+x+-%3E+-infty%5D)。

定义变量接近极限值的方向通常也很有用。例如，我们知道 `x` 变为 0 时的 `1/x`  的极限随着 `x`从左边或右边接近 0 而改变。所以我们实际上可以检查 [`Limit[1/x, x -> 0^+]`](https://www.wolframalpha.com/input/?i=Limit%5B1%2Fx,+x+-%3E+0%5E%2B%5D) 不同于[`Limit[1/x, x -> 0^-]`](https://www.wolframalpha.com/input/?i=Limit%5B1%2Fx,+x+-%3E+0%5E-%5D) 其中指数符号 `0^+` 和 `0^-` 用于定义我们在这里接近 0 的一侧。

此外，在 [计算级数和总和](#计算级数和总和) 中我提到某个乘积可用于计算 `pi/2`。我所说的乘积是 [`Product[(4i^2)/((2i-1)*(2i+1)), {i, 1, infty}]`](https://www.wolframalpha.com/input/?i=Product%5B(4i%5E2)%2F((2i-1)*(2i%2B1)),+%7Bi,+1,+infty%7D%5D) 如果你遵循链接你会看到 WA 实际上不能给你确切的值。相反，它给了我乘积的值，如果我只达到 5 个项，它给了我一个 **接近** 公式的乘积到`n`：[`Product[(4i^2)/((2i-1)*(2i+1)), {i, 1, n}]`](https://www.wolframalpha.com/input/?i=Product%5B(4i%5E2)%2F((2i-1)*(2i%2B1)),+%7Bi,+1,+n%7D%5D) 。现在我将使用 `Limit[]` 函数来证明我实际上不是在撒谎！如果我把那个接近的公式放在 `Limit` 函数中并让`n` 像这样去无穷大：[`Limit[(Pi Gamma[1 + n]^2)/(2 Gamma[1/2 + n] Gamma[3/2 + n]), n -> infty]`](https://www.wolframalpha.com/input/?i=Limit%5B(Pi+Gamma%5B1+%2B+n%5D%5E2)%2F(2+Gamma%5B1%2F2+%2B+n%5D+Gamma%5B3%2F2+%2B+n%5D),+n+-%3E+infty%5D)，我们将得到答案`pi/2`。

### 其他

要查找数字是否为素数，可以使用函数 `PrimeQ[]`，例如键入 [`PrimeQ[4234523457]`](https://www.wolframalpha.com/input/?i=PrimeQ%5B4234523457%5D) 得出结论 4234523457 不是质数，因为 `4234523457 = 3×53×97×463×593`。

类似地，使用函数 `Prime[]` 找出第 n 个素数。例如，键入 [`Prime[4234523457]`](https://www.wolframalpha.com/input/?i=Prime%5B4234523457%5D) 以查明第4234523457个质数是 “102951556637”。



由 [Mathspp Blog](https://mathspp.blogspot.com/) ，[RojerGS](https://github.com/RojerGS) 负责编辑，[Taotianli](https://github.com/taotianli)翻译并校对。

