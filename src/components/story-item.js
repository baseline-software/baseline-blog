import React from "react"
import { Link, graphql } from "gatsby"

class StoryItem extends React.Component {
  render() {
    const item = this.props.item
    return (
      <li>
        <div>
          <a href={item.title}>{item.title}</a> —{` `}
          <Link to={`/item/${item.id}/`}>more details</Link>
        </div>
      </li>
    )
  }
}

export default StoryItem

export const storyFragment = graphql`
  fragment Story_item on mongodbBlog22Articles {
    id
    title
  }
`
