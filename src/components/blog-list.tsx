import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BlogListQuery } from "./__generated__/BlogListQuery"
import BlogListItem from "./blog-list-item"

const BlogList = () => {
  const data = useStaticQuery<BlogListQuery>(query)

  return (
    <ul>
      {data.allContentfulBlogPost.edges.map(edge => (
        <BlogListItem
          key={edge.node.slug}
          title={edge.node.title}
          slug={edge.node.slug}
          featuredImage={edge.node.featuredImage?.fluid?.src}
          publishedDate={edge.node.publishedDate}
          excerpt={edge.node.excerpt?.excerpt}
          author={edge.node.author?.name}
          authorAvatar={edge.node.author?.profilePicture?.fluid?.src}
        />
      ))}
    </ul>
  )
}

export default BlogList

const query = graphql`
  query BlogListQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "Do MMMM, YYYY")
          excerpt {
            excerpt
          }
          featuredImage {
            fluid(maxWidth: 750) {
              ...GatsbyContentfulFluid
            }
          }
          author {
            name
            profilePicture {
              fluid(maxWidth: 200) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`
