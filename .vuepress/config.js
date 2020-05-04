module.exports = {
  title: 'Virgilio',
  base: "/Virgilio/",
  description: 'Data Science E-Learning',

  themeConfig: {
    navbar: true,
    nav: [
      { text: 'Contribute', link: 'https://github.com/virgili0/Virgilio' }
    ],
    sidebar: [
      ['/', 'What is Virgilio?'],
      {
        title: 'Paradiso', // required
        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [
          '/serving/paradiso/demystification-ai-ml-dl',
          '/serving/paradiso/what-do-i-need-for-ml',
          '/serving/paradiso/do-you-really-need-ml',
          '/serving/paradiso/use-cases',
          '/serving/paradiso/virgilio-teaching-strategy',
          '/serving/paradiso/introduction-to-ml'
        ]
      },
      {
        title: 'Purgatorio', // required
        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [{
            title: 'Fundamentals', // required
            //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
            collapsable: false, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
            children: [
              '/serving/purgatorio/fundamentals/math-fundamentals',
              '/serving/purgatorio/fundamentals/statistics-fundamentals',
              '/serving/purgatorio/fundamentals/python-fundamentals',
              '/serving/purgatorio/fundamentals/jupyter-notebook',
              '/serving/purgatorio/fundamentals/the-data-science-process'
            ]
          },
          /*
          Define The Scope and Ask Questions 
          Collect and Prepare Data 
          Select and Train Machine Learning Models 
          Launch and Mantain the System 
          */
        ]
      },
      /*
      {
        title: 'Inferno', // required
        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [
          '/serving/paradiso/demystification-ai-ml-dl',
          '/serving/paradiso/what-do-i-need-for-ml',
          '/serving/paradiso/do-you-really-need-ml',
          '/serving/paradiso/use-cases',
          '/serving/paradiso/virgilio-teaching-strategy',
          '/serving/paradiso/introduction-to-ml'
        ]
      },
      */
    ]
  }
}