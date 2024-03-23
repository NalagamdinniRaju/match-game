import './index.css'

const GameImageItem = props => {
  const {imageDetails, checkImageIsMatched} = props
  const {thumbnailUrl, id} = imageDetails
  const onThumbnailClicked = () => {
    checkImageIsMatched(id)
  }
  return (
    <li className="thumbnail-image">
      <button type="button" className="btn">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail"
          onClick={onThumbnailClicked}
        />
      </button>
    </li>
  )
}

export default GameImageItem
