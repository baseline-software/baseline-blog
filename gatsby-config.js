module.exports = {
  siteMetadata: {
    title: `Gatsby with MongoDB`
  },
  plugins: [
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `blog22`,
        collection: `articles`,
        server: {
          address: `ds155313.mlab.com`,
          port: 55313
        },
        auth: {
          user: "michael",
          password: "Mlab22"
        },
        map: { documents: { description: `text/markdown` } }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`
  ]
}
