module.exports = {
    title: 'Virgilio',
    base: "/Virgilio/",
    description: 'Data Science E-Learning',
  plugins: {
    'sitemap': {
      hostname: 'https://virgili0.github.io/Virgilio/'
    },
  },
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
                    '/paradiso/demystification-ai-ml-dl',
                    '/paradiso/what-do-i-need-for-ml',
                    '/paradiso/do-you-really-need-ml',
                    '/paradiso/use-cases',
                    '/paradiso/virgilio-teaching-strategy',
                    '/paradiso/introduction-to-ml'
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
                            ['/purgatorio/fundamentals/math-fundamentals', 'Mathematics'],
                            ['/purgatorio/fundamentals/statistics-fundamentals', 'Statistics'],
                            ['/purgatorio/fundamentals/python-fundamentals', 'Python'],
                            '/purgatorio/fundamentals/jupyter-notebook',
                            '/purgatorio/fundamentals/the-data-science-process'
                        ]
                    },
                    {
                        title: 'Define The Scope and Ask Questions', // required
                        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                        collapsable: false, // optional, defaults to true
                        sidebarDepth: 1, // optional, defaults to 1
                        children: [
                            '/purgatorio/define-the-scope-and-ask-questions/frame-the-problem',
                            '/purgatorio/define-the-scope-and-ask-questions/usage-and-integration',
                            '/purgatorio/define-the-scope-and-ask-questions/starting-a-data-project',
                            '/purgatorio/define-the-scope-and-ask-questions/workspace-setup-and-cloud-computing'
                        ]
                    },
                    {
                        title: 'Collect and Prepare Data', // required
                        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                        collapsable: false, // optional, defaults to true
                        sidebarDepth: 1, // optional, defaults to 1
                        children: [
                            '/purgatorio/collect-and-prepare-data/data-collection',
                            '/purgatorio/collect-and-prepare-data/data-preparation',
                            '/purgatorio/collect-and-prepare-data/data-visualization',
                        ]
                    },
                    {
                        title: 'Select and Train Machine Learning Models', // required
                        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                        collapsable: false, // optional, defaults to true
                        sidebarDepth: 1, // optional, defaults to 1
                        children: [
                            '/purgatorio/select-and-train-machine-learning-models/machine-learning-theory',
                            '/purgatorio/select-and-train-machine-learning-models/deep-learning-theory',
                            '/purgatorio/select-and-train-machine-learning-models/evaluation-and-finetuning',
                            '/purgatorio/select-and-train-machine-learning-models/tools-and-libraries'
                        ]
                    },
                    {
                        title: 'Launch and Mantain the System ', // required
                        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                        collapsable: false, // optional, defaults to true
                        sidebarDepth: 1, // optional, defaults to 1
                        children: [
                            '/purgatorio/launch-and-mantain-the-system/serving-trained-models',
                            '/purgatorio/launch-and-mantain-the-system/monitoring-usage-and-behavior',
                            '/purgatorio/launch-and-mantain-the-system/automation-and-reproducibility'
                        ]
                    },
                    {
                        title: 'Now Go Build ', // required
                        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                        collapsable: false, // optional, defaults to true
                        sidebarDepth: 1, // optional, defaults to 1
                        children: [
                            '/purgatorio/now-go-build/a-messy-real-world',
                            '/purgatorio/now-go-build/transfer-learning',
                            '/purgatorio/now-go-build/best-practices'

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
                    title: 'Time Series', // required
                    //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1, // optional, defaults to 1
                    children: [
                        ['inferno/time-series/time-series','Time Series Master Guide'],
                    ]
            },
            {
                        title: 'Computer Vision', // required
                        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                        collapsable: false, // optional, defaults to true
                        sidebarDepth: 1, // optional, defaults to 1
                        children: [
                            'inferno/computer-vision/introduction-to-computer-vision',
                            'inferno/computer-vision/object-instance-segmentation',
                            'inferno/computer-vision/object-tracking',
                            ['inferno/computer-vision/Object_detection_based_on_Deep_Learning','Object detection based on Deep Learning'],
                        ]
                },
                
                {
                        title: 'Soft Skills', // required
                        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                        collapsable: false, // optional, defaults to true
                        sidebarDepth: 1, // optional, defaults to 1
                        children: [
                            'inferno/soft-skills/impactful-presentations'
                        ]
                },
                
                {
                        title: 'Tools', // required
                        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                        collapsable: false, // optional, defaults to true
                        sidebarDepth: 1, // optional, defaults to 1
                        children: [
                            'inferno/tools/geo-gebra',
                            'inferno/tools/latex',
                            'inferno/tools/regex',
                            'inferno/tools/wolfram-alpha',
                        ]
                },
                {
                        title: 'Research', // required
                        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                        collapsable: false, // optional, defaults to true
                        sidebarDepth: 1, // optional, defaults to 1
                        children: [
                            'inferno/research/zotero',
                            'inferno/research/sota-papers',
                        ]
                }]
            },
            /*
            {
              title: 'Inferno', // required
              //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1, // optional, defaults to 1
              children: [
                '/paradiso/demystification-ai-ml-dl',
                '/paradiso/what-do-i-need-for-ml',
                '/paradiso/do-you-really-need-ml',
                '/paradiso/use-cases',
                '/paradiso/virgilio-teaching-strategy',
                '/paradiso/introduction-to-ml'
              ]
            },
            */
        ]
    }
}