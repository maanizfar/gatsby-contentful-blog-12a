import React from "react"
import { Link } from "gatsby"

interface Props {
  title: string | null
  slug: string | null
  publishedDate: string | null
  featuredImage?: string | null
  excerpt?: string | null
  author?: string | null
  authorAvatar?: string | null
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
    <div>
      <Link to={`/${slug}`}>
        <h3>{title}</h3>
      </Link>
      <p>{publishedDate}</p>
      <p>{excerpt}</p>
      {featuredImage && title && (
        <Link to={`/${slug}`}>
          <img src={featuredImage} alt={title} />
        </Link>
      )}
      <h6>{author}</h6>
      {authorAvatar && author && <img src={authorAvatar} alt={author} />}
    </div>
  )
}

export default BlogListItem
