import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogItemData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/:${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({
      blogItemData: updatedData,
      isLoading: false,
    })
  }

  renderBlogItemDetails = () => {
    const {blogItemData} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogItemData
    return (
      <div className="flex-container-2">
        <p className="main-title">{title}</p>
        <div>
          <img src={avatarUrl} className="avatar-image-url" alt="" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} className="main-image-url" alt="" />
        <p className="paragraph-text">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
