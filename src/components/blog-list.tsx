import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BlogListQuery } from "./__generated__/BlogListQuery"
import BlogListItem from "./blog-list-item"

import { FixedObject, FluidObject } from "gatsby-image"

const BlogList = () => {
  const data = useStaticQuery<BlogListQuery>(query)

  return (
    <ul style={{padding: '0 1rem'}}>
      {data.allContentfulBlogPost.edges.map(edge => (
        <BlogListItem
          key={edge.node.slug}
          title={edge.node.title}
          slug={edge.node.slug}
          featuredImage={edge.node.featuredImage?.fluid as FluidObject}
          publishedDate={edge.node.publishedDate}
          excerpt={edge.node.excerpt?.excerpt}
          author={edge.node.author?.name}
          authorAvatar={edge.node.author?.profilePicture?.fixed as FixedObject}
        />
      ))}
    </ul>
  )
}

export default BlogList

const query = graphql`
  query BlogListQuery {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "Do MMM, YYYY")
          excerpt {
            excerpt
          }
          featuredImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          author {
            name
            profilePicture {
              fixed(width: 42, height: 42) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  }
`
