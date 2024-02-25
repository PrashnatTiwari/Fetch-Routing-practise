import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItems} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItems
  return (
    <Link to={`/blogs/${id}`} className="link-container">
      <li className="card-container">
        <img src={imageUrl} alt="" className="image-url" />
        <div className="details-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="flex-container">
            <img src={avatarUrl} className="avatar-url" alt="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
