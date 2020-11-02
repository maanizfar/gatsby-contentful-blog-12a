import React from "react"
import BlogList from "../components/blog-list"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Blog Page</h1>
    <BlogList />
  </Layout>
)

export default IndexPage
