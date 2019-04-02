# DialogFlow，Python 和 Flask 打造 ChatBot

## 我们有 99.94847％ 的死亡概率，卢克(路加)
简单来说，[Chatbot](https://medium.com/swlh/what-is-a-chatbot-and-how-to-use-it-for-your-business-976ec2e0a99f)是一种模拟人类对话(以文本和音频形式）的计算机程序，我们将其视为智能和有用的。他们最重要的应用是个人或企业虚拟助手。聊天机器人可以挖掘大量数据，为客户挑选最好的金块，无论是故障排除解决方案还是推荐新产品。此外，它们还为您的企业和客户提供了非常直观的界面。根据具体情况，聊天机器人可以从用户所说的内容中了解个性化交互并构建以前的交互，从而提供[令人满意和未来的客户体验](https://mobilemonkey.com/chatbots/chatbot-examples)。

## 为什么选择 Dialogflow
[DialogFlow](https://dialogflow.com/)是来自谷歌的初学者友好聊天机器人平台，尽管有几个平台([这里](https://chatbotsmagazine.com/choosing-the-best- chatbot-platform-101-a-beginners-guide-e841b41192c7）一个关于选择合适平台的炫酷指南)，DialogFlow 对于初学者来说是最好的权衡。 你找到[这里](https://chatbotsjournal.com/25-chatbot-platforms-a-comparative-table-aeefc932eaff)另一个比较表。

我选择了 DialogFlow，因为：

- 融入 Google 的机器学习专业知识和 Google Cloud Speech-to-Text 等产品
- 是一项在 Google 云端平台上运行的 Google 服务，可让您扩展到数亿用户
- 非常适合初学者，直观，并且具有完整而清晰的文档

## 先决条件
本指南将使用 [Python](https://www.python.org/)和它的 [Flask](http://flask.pocoo.org/)轻量级库，让您构建一个完整且可部署的聊天机器人应用程序。所以，如果你不懂 Python，那就自己做礼物吧 [学习吧！](https://automatetheboringstuff.com/)

# 索引
- [学习 DialogFlow](#学习-DialogFlow)
- [GUI 方法](#GUI-方法)
    - [更深入的方法](#更深入的方法)
    - [我们的第一个智能体](#我们的第一个智能体)
    - [试验 API](#试验-API)
- [实践项目](#实践项目)
    - [启动并运行 Flask 和 webhooks](#启动并运行-Flask-和-webhooks)
    - [我们的智能体，但有 API 调用](#我们的智能体，但有-API-调用)
    - [使用 Flask 处理 webhooks](#使用-Flask-处理-webhooks)
    - [部署我们的聊天机器人](#部署我们的聊天机器人)
    - [Chatbot 提示和最佳实践](#Chatbot-提示和最佳实践)
- [项目创意](#项目创意)

## 学习 DialogFlow
我喜欢 DialogFlow 的是因为对初学者友好。事实上，我们将学习如何部署真正的聊天机器人的方法如下：
- 通过图形用户界面的第一个温和的方法来理解概念(意图，实体，上下文......)
- 一种更 “编码” 的方法，使用 Python 客户端进行 [RESTful](https://it.wikipedia.org/wiki/Representational_State_Transfer) API 调用，以重现相同的智能体但使用代码(而不是 GUI 中的点击)。
- 当我们能够使用 Python API 调用构建智能体时，我们将使用它们来创建您将在多个渠道上部署的端到端聊天机器人项目(Slack，Facebook，Telegram ......)
开始吧！

### GUI 方法
我建议你做的第一件事是通过 [官方介绍](https://dialogflow.com/docs) 和分步教程。它将使您从零到能够使用 GUI 创建智能体(单个聊天机器人应用程序)。
[这里](https://console.dialogflow.com/api-client/#/login)您可以开始构建智能体并按照本教程的步骤进行操作。
在此阶段您不会遇到任何问题，您无需编写任何代码，只需按照教程进行 “实现” 即可。

### 我们的第一个智能体
如果您已经关注该指南，您现在可以从 GUI 创建一个简单的聊天机器人。
所以，让我们亲自动手，创造我们的第一个智能体！

- 创建一个新的智能体并从 GUI 开发它，直到他能够重现这个 “我迷失” 的意图与 FollowUpIntents：

Bot: Hi! I'm Virgilio! How can I help you?\
Human: Tell me which is the best _Data Science_ project in _Italy_.\
B: Without a doubt, the best project about _Data Science_ in _Italy_ is _Virgilio_! Do you want to reach it?\
H: Yes.\
B: Here's the link, you're welcome :)\
B: [ ...drops the link ]

就是这样，现在。尝试重现对话，您可以从 GUI 右上角的栏中尝试智能体。
请注意，这里有三个实体。哪个？
请记住，您可以使用两个系统实体(如小时，日期，语言，地点......)和自定义实体！
当你完成后，让我们继续下一步！

### 试验 API
既然您对 DialogFlow 概念非常满意，我们就可以深入了解兔子洞并开发环境，以便使用 Python 开发聊天机器人。这将为我们带来代码的强大功能，以构建和处理大量的聊天机器人(以及更多的东西)。
假设您安装了 Python3，请在要放置配置文件的文件夹中安装 [Python SDK](https://dialogflow-python-client-v2.readthedocs.io/en/latest/index.html)，启动 shell 并键入：

```
pip install dialogflow
```

如果它不起作用，可能是因为你有一个旧的 Python 2 安装。在这种情况下，输入：

```
pip3 install dialogflow
```

现在去 [这里](https://github.com/googleapis/dialogflow-python-client-v2/tree/master/samples) 开心一下。在这些示例中已经完成了很多工作，使用它们，您已经可以完成很多工作。我创建文件夹 “examples”，我把那些 python 文件。
现在按照 “开始之前” 说明 [这里](https://dialogflow-python-client-v2.readthedocs.io/en/latest/) 进行操作。
在项目中创建新智能体并从 GUI 添加意图。连接到智能体程序，从 python 脚本初始化 dialogflow 客户端，并读取智能体程序中已存在的意图。像这样：

```
from examples import intent_management
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = <your path>/<your credentials file>.json"
projectID = <your project id>

client = dialogflow.IntentsClient()
parent = client.project_agent_path(projectID)
management.list_intents(parent)
```

它应该返回一个 JSON，其中包含所有请求的信息(在本例中，是您现有的意图)。

JSON 是信息表示的新事实标准，所以 [get comfortable](https://www.w3schools.com/whatis/whatis_json.asp)随之而来！

所以，你有这些文件带有低级函数的包装器(在这种情况下，在 list_intent()函数内的第 40 行调用了 intent_management.py 中的低级函数)。

这些文件对于入门非常有用，但最终，您希望获得最大的表现力和灵活性。所以你想掌握较低级别的功能。

### 更深入的方法

现在尝试使用 dialogflow 模块的低级函数重新生成我们创建的意图。您在这里获得了所需的所有信息，[文档](https://cloud.google.com/dialogflow-enterprise/docs/reference/rest/v2-overview) 做得非常好！通常，每次要与 API 通信时，都需要构建 JSON(您的请求)，并且您将收到 JSON(响应)。

### 启动并运行 Flask 和 webhooks

Dialogflow 的 API 允许您根据会话输入在您自己的系统上执行操作，将您的会话界面嵌入您的应用或网站，并动态更改您的智能体的行为。 Dialogflow API 围绕三个主要用例：

- 实现：根据会话输入在您自己的系统上执行操作。您可以执行查询数据库或 API 以通过任何集成向用户提供信息( Google 上的操作，Slack 等)
- 检测意图 API：将使用 Dialogflow 构建的会话界面嵌入到您的应用，网站或设备中。使用用户的查询调用此 API 以获取您的 DIalogflow 智能体的响应方式
- 智能体 API：通过编辑智能体的意图，实体和上下文来动态更改智能体的行为。使用 Dialogflow 的智能体 API 以编程方式通过 Dialogflow 控制台执行任何操作。

在这里，您可以看到清晰的架构。

![图 1-1](https://raw.githubusercontent.com/dialogflow/resources/master/images/overview.png "1")

基本上，您希望拥有一个构建智能体的 `.py` 文件(使用 API​​调用)，然后您的智能体就可以从用户那里获取查询并将它们(一旦识别出用户查询)发送到后端应用程序(您的 webhook)。在我们的例子中，后端的应用程序(webhook)是使用 Flask 构建的。

**Fulfillment** 是部署为 webhook 的代码，它允许 Dialogflow 智能体按意图调用业务逻辑。在对话过程中，履行允许您使用 Dialogflow 自然语言处理提取的信息在后端生成动态响应或触发操作。

大多数 Dialogflow 智能体使用履行来执行以下操作：根据从数据库中查找的信息生成动态响应，根据客户要求的产品下订单，实施规则并赢得游戏条件。

### 我们的智能体，但有 API 调用
现在是时候让我们的再次动手！
这次我们将添加后端应用程序，而不是静态答案。
[这里](https://www.pragnakalp.com/dialogflow-fulfillment-webhook-tutorial/)你有一个关于如何在你的机器上运行 Flask 应用程序的一致而完整的教程(使用 Ngrok 在你的机器上暴露他的 webhook)，到网络。
现在您已经完成了整个堆栈，您可以开始创建任何类型的应用程序！

### 部署我们的聊天机器人
部署智能体的最明智方法是通过 Facebook Messenger 或 Telegram 等常用通信渠道。
[这里](https://hub.packtpub.com/creating-and-deploying-a-chatbot-using-dialogflow-tutorial/) 您可以找到有关如何将 chatbot 应用程序部署到现实世界的非常全面的教程。这很容易，不是吗？

### Chatbot 提示和最佳实践
我在这里收集了一些包含最佳实践的最佳文章和 StackOverflow 问题。

- [1](https://dzone.com/articles/best-practices-for-lively-chatbots), [2](https://miningbusinessdata.com/automatically-generate-dialogflow-faq-chatbot-csv-file/), [3](https://www.comm100.com/blog/chatbot-best-worst-practices.html), [4](https://chatbotsmagazine.com/11-more-best-ux-practices-for-building-chatbots-67362d1104d9), [5](https://thebrainfiles.wearebrain.com/chatbot-best-practice-learnings-and-insights-from-companies-like-abn-amro-booking-com-6e4c329c60a5), [6](https://www.marutitech.com/8-best-practices-bot-development/), [7](https://stackoverflow.com/questions/52426295/dialogflow-intent-lifespan-best-practice-and-performance)

[这里](https://medium.com/the-mission/how-to-effectively-run-a-chatbot-development-project-a445d2d1170f)和 [这里](https://botpress.io/blog/successful-chatbot-projects-avoid-these-mistakes/) 你将找到关于如何规划你的商业聊天的 2 篇指南。

### 项目创意
我已经在这里为您提供了一系列链接，其中包含许多项目创意。玩得开心！

- [1](https://chatbotsmagazine.com/80-chatbot-ideas-for-enterprise-bots-4bb73281f593), [2](https://www.messengerpeople.com/best-of-8-chatbot-projects-you-will-love-to-discover/), [3](https://www.quora.com/What-are-some-cool-ideas-where-chat-bots-can-be-put-to-use), [4](https://www.wordstream.com/blog/ws/2017/10/04/chatbots), [5](https://www.ideas2it.com/blogs/50-chatbot-use-cases/)


----
由_clone95_撰写