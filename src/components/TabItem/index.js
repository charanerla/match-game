import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, updateActiveTabItem} = props
  const {tabId, displayText} = tabDetails

  const changeIsActiveStatus = () => {
    updateActiveTabItem(tabId)
  }

  const cssStylingForListItem = isActive ? 'active-tab' : 'inactive-tab'
  const cssStylingForBtn = isActive
    ? 'tab-button active-tab-btn'
    : 'tab-button inactive-tab-btn'
  return (
    <li className={cssStylingForListItem}>
      <button
        type="button"
        className={cssStylingForBtn}
        onClick={changeIsActiveStatus}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
