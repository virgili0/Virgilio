# Virgilio Data Science

Virgilio is an **open-source initiative**, aiming to **mentor and guide** anyone in the world of the **Data Science**.
Our vision is to give *everyone* the chance to get involved in this field, **get self-started** as a practitioner, **gain new skills** and **learn to navigate** through the infinite web of resources and find the ones useful for *you*.


## -----> [**Meet Virgilio now!**](https://virgili0.github.io/Virgilio/)
![Figure 1](virgilio.PNG "1") 

# What is Virgilio?

Studying and reading through the web means swimming in an **infinite jungle of chaotic information**, even more so in rapidly changing innovative domains. 

_Have you ever felt overwhelmed_ when trying to approach **Data Science** without a real “path” to follow? 

Are you tired of clicking <kbd>Run</kbd>, <kbd>Run</kbd>, <kbd>Run</kbd>... on a Jupyter Notebook, with that false sense of confidence given by the comfort zone of the work of others?

Have you ever got confused because of the several and contradicting names for the same algorithm or approach, from different websites and fragmented tutorials? 

**Virgilio addresses these critical issues for free, for everyone.**


### Develop

Here's how we serve the Virgilio website from plain markdown files and notebooks and how you can deploy a local version to contribute. Node and npm are required.

Clone the repository:

```bash
git clone https://github.com/virgili0/Virgilio
cd Virgilio
```

Install npm dependencies and run vuepress
```bash
npm install
npx vuepress dev content/
```

Your local version of the website is live at [localhost:8080](http://localhost:8080). To deploy the build on the master branch: `npm run deploy`.

The sidebar is configured in `.vuepress/config.js`. Our custom vuepress theme is in `content/.vuepress/theme` while the static assets are served from `content/.vuepress/public`.

### Contribute

Awesome, check the [contribution guidelines](docs/contributing.md) to involved in our project!

### About

Virgilio is developed and maintained by [these awesome people](docs/contributors.md).
You can email us `virgilio.datascience (at) gmail.com` or join the [Discord chat](https://discord.gg/UpQ8bb7).

### License

Contents are released under the Creative Commons BY-NC-SA 4.0 [license](https://github.com/virgili0/Virgilio/blob/dev/LICENSE). Code is released under the [MIT license](https://github.com/virgili0/Virgilio/blob/dev/.vuepress/LICENSE).
The Virgilio image comes from [here](https://upload.wikimedia.org/wikipedia/commons/c/ce/Virgil_.jpg).
