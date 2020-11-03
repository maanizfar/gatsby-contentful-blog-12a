import { graphql, Link, PageProps } from "gatsby"
import Img, { FixedObject, FluidObject } from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BlogPostDataQuery } from "./__generated__/BlogPostDataQuery"
import SEO from "../components/seo"

const BlogPost: React.FC<PageProps<BlogPostDataQuery>> = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <SEO title={data.contentfulBlogPost?.title || ""} />
      <Link to="/">back</Link>
      <h1>{data.contentfulBlogPost?.title}</h1>
      <p>{data.contentfulBlogPost?.publishedDate}</p>
      {data.contentfulBlogPost?.featuredImage && (
        <Img
          fluid={data.contentfulBlogPost?.featuredImage?.fluid as FluidObject}
        />
      )}

      {documentToReactComponents(data.contentfulBlogPost?.body?.json, options)}

      <Img
        fixed={
          data.contentfulBlogPost?.author?.profilePicture?.fixed as FixedObject
        }
      />
      <h6>{data.contentfulBlogPost?.author?.name}</h6>
      <p>{data.contentfulBlogPost?.author?.bio?.bio}</p>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostDataQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      body {
        json
      }
      featuredImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      author {
        name
        bio {
          bio
        }
        profilePicture {
          fixed(width: 150) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`
