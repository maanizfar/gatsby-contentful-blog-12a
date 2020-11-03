import React from "react"
import { Link } from "gatsby"
import Img, { FixedObject, FluidObject } from "gatsby-image"

import styles from "./blog-list-item.module.css"

interface Props {
  title: string | null
  slug: string | null
  publishedDate: string | null
  featuredImage?: FluidObject | null
  excerpt?: string | null
  author?: string | null
  authorAvatar?: FixedObject | null
}

const BlogListItem: React.FC<Props> = ({
  title,
  slug,
  publishedDate,
  featuredImage,
  excerpt,
  author,
  authorAvatar,
}) => {
  return (
    <div className={styles.container}>
      {featuredImage && title && (
        <Link to={`/blog/${slug}`} className={styles.imageContainer}>
          <Img fluid={featuredImage} style={{width: "auto", height:"100%"}} />
        </Link>
      )}
      <div className={styles.infoContainer}>
        <div>
          <Link to={`/blog/${slug}`}>
            <h3 className={styles.title}>{title}</h3>
          </Link>
          <p>{excerpt}</p>
        </div>

        <div className={styles.bottomContainer}>
          <div className={styles.authorContainer}>
            {authorAvatar && author && (
              <Img
              fixed={authorAvatar}
              className={styles.authorAvatarContainer}
              />
              )}
              <div>
                <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                  published by
                </p>
                <p style={{ fontWeight: 600 }}>{author}</p>
              </div>
          </div>
              <p className={styles.date}>{publishedDate}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogListItem
