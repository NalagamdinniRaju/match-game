import './index.css'

const TabsList = props => {
  const {eachTabDetails, onTabClicked, activeButton} = props
  const {displayText, tabId} = eachTabDetails

  const onImageTabItemClicked = () => {
    onTabClicked(tabId)
  }
  const activeClassButton = activeButton && 'active-button'
  return (
    <li>
      <button
        type="button"
        className={`button ${activeClassButton}`}
        onClick={onImageTabItemClicked}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabsList
