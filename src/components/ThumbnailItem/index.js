import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, checkThumbnailIsMatched} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const updateTheScore = () => {
    checkThumbnailIsMatched(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="thumbnail-btn" onClick={updateTheScore}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ThumbnailItem
