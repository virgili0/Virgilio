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
                            ['/serving/purgatorio/fundamentals/math-fundamentals', 'Linear Algebra'],
                            ['/serving/purgatorio/fundamentals/statistics-fundamentals', 'Statistics'],
                            ['/serving/purgatorio/fundamentals/python-fundamentals', 'Python'],
                            '/serving/purgatorio/fundamentals/jupyter-notebook',
                            '/serving/purgatorio/fundamentals/the-data-science-process'
                        ]
                    },
                    {
                        title: 'Define The Scope and Ask Questions', // required
                        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                        collapsable: false, // optional, defaults to true
                        sidebarDepth: 1, // optional, defaults to 1
                        children: [
                            '/serving/purgatorio/define-the-scope-and-ask-questions/frame-the-problem',
                            '/serving/purgatorio/define-the-scope-and-ask-questions/usage-and-integration',
                            '/serving/purgatorio/define-the-scope-and-ask-questions/starting-a-data-project',
                            '/serving/purgatorio/define-the-scope-and-ask-questions/workspace-setup-and-cloud-computing'
                        ]
                    },
                    {
                        title: 'Collect and Prepare Data', // required
                        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                        collapsable: false, // optional, defaults to true
                        sidebarDepth: 1, // optional, defaults to 1
                        children: [
                            '/serving/purgatorio/collect-and-prepare-data/data-preparation',
                            '/serving/purgatorio/collect-and-prepare-data/data-visualization',
                        ]
                    },
                    {
                        title: 'Select and Train Machine Learning Models', // required
                        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                        collapsable: false, // optional, defaults to true
                        sidebarDepth: 1, // optional, defaults to 1
                        children: [
                            '/serving/purgatorio/select-and-train-machine-learning-models/machine-learning-theory',
                            '/serving/purgatorio/select-and-train-machine-learning-models/deep-learning-theory',
                            '/serving/purgatorio/select-and-train-machine-learning-models/evaluation-and-finetuning',
                            '/serving/purgatorio/select-and-train-machine-learning-models/tools-and-libraries'
                        ]
                    },
                    {
                        title: 'Launch and Mantain the System ', // required
                        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                        collapsable: false, // optional, defaults to true
                        sidebarDepth: 1, // optional, defaults to 1
                        children: [
                            '/serving/purgatorio/launch-and-mantain-the-system/serving-trained-models',
                        ]
                    },
                    /*
                    Define The Scope and Ask Questions 
                    Collect and Prepare Data 
                    Select and Train Machine Learning Models 
          
                    */
                ]
            },
            {
                title: 'Inferno', // required
                //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1, // optional, defaults to 1
                children: [{
                    title: 'Fundamentals', // required
                    //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1, // optional, defaults to 1
                    children: [
                        ['/serving/purgatorio/fundamentals/math-fundamentals', 'Linear Algebra'],
                        ['/serving/purgatorio/fundamentals/statistics-fundamentals', 'Statistics'],
                        ['/serving/purgatorio/fundamentals/python-fundamentals', 'Python'],
                        '/serving/purgatorio/fundamentals/jupyter-notebook',
                        '/serving/purgatorio/fundamentals/the-data-science-process'
                    ]
                }, ]
            }
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