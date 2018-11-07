import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"

class Item extends React.Component {
  render() {
    const story = this.props.data.mongodbCloudDocuments
    console.log(story)
    return (
      <div className="blog-post-container">
        <Helmet title={`CodeStack - ${story.user}`} />
        <div className="blog-post">
          <h1>{story.user}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: story.user }}
          />
        </div>
      </div>
    )
  }
}

export default Item

export const pageQuery = graphql`
  query($id: String!) {
    mongodbBlog22Articles(id: { eq: $id }) {
      id
      title
      subTitle
      link
      image
    }
  }
`
