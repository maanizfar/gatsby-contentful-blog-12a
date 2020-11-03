/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPostDataQuery
// ====================================================

export interface BlogPostDataQuery_contentfulBlogPost_body {
  json: any | null
}

export interface BlogPostDataQuery_contentfulBlogPost_featuredImage_fluid {
  base64: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export interface BlogPostDataQuery_contentfulBlogPost_featuredImage {
  fluid: BlogPostDataQuery_contentfulBlogPost_featuredImage_fluid | null
}

export interface BlogPostDataQuery_contentfulBlogPost_author_bio {
  bio: string | null
}

export interface BlogPostDataQuery_contentfulBlogPost_author_profilePicture_fixed {
  base64: string | null
  width: number
  height: number
  src: string
  srcSet: string
}

export interface BlogPostDataQuery_contentfulBlogPost_author_profilePicture {
  fixed: BlogPostDataQuery_contentfulBlogPost_author_profilePicture_fixed | null
}

export interface BlogPostDataQuery_contentfulBlogPost_author {
  name: string | null
  bio: BlogPostDataQuery_contentfulBlogPost_author_bio | null
  profilePicture: BlogPostDataQuery_contentfulBlogPost_author_profilePicture | null
}

export interface BlogPostDataQuery_contentfulBlogPost {
  title: string | null
  publishedDate: any | null
  body: BlogPostDataQuery_contentfulBlogPost_body | null
  featuredImage: BlogPostDataQuery_contentfulBlogPost_featuredImage | null
  author: BlogPostDataQuery_contentfulBlogPost_author | null
}

export interface BlogPostDataQuery {
  contentfulBlogPost: BlogPostDataQuery_contentfulBlogPost | null
}

export interface BlogPostDataQueryVariables {
  slug: string
}
