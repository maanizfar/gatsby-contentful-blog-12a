/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MetaDataQuery
// ====================================================

export interface MetaDataQuery_site_siteMetadata {
  title: string | null
  description: string | null
  author: string | null
}

export interface MetaDataQuery_site {
  siteMetadata: MetaDataQuery_site_siteMetadata | null
}

export interface MetaDataQuery {
  site: MetaDataQuery_site | null
}
