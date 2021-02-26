export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'tuto-sanity-nuxt-events-studio',
                  apiId: '9546ab03-2d3f-479e-8043-fbe887f659af'
                },
                {
                  buildHookId: '6038d9d73ad19ce30310e7cc',
                  title: 'Events Website',
                  name: 'tuto-sanity-nuxt-events',
                  apiId: '26a43a12-4621-430d-bd72-43ff350198a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Boubacar-Beuzy-Ba/tuto-sanity-nuxt-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://tuto-sanity-nuxt-events.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
