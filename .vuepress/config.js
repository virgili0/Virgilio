module.exports = {
  title: 'Virgilio',
  base: "/Virgilio/",
  description: 'Data Science E-Learning',

  themeConfig: {
    navbar: true,
    nav : [
          { text: 'Contribute', link: 'https://github.com/gbdev/pandocs' }],
    sidebar : [
    ['/', 'What is Virgilio?'],
    {
        title: 'Paradise',   // required
        //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/serving/paradiso/demystification-ai-ml-dl',
          '/serving/paradiso/what-do-i-need-for-ml',
          '/serving/paradiso/do-you-really-need-ml',
          '/serving/paradiso/use-cases',
          '/serving/paradiso/virgilio-teaching-strategy',
          '/serving/paradiso/introduction-to-ml'

        ]
    },
    ]
  }
}
