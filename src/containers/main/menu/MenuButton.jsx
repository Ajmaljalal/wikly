import React, { memo } from 'react'
import { useHistory } from 'react-router'
// import { Link, connect } from 'react-router-dom'
import { MenuStyles } from './Menu.styles'

function MenuButton({ onClick, icon, isActive, path }) {
  const history = useHistory()
  const changeCurrentAppScreen = () => {
      const screen = path.slice(1)
      onClick(screen)
      history.push(path)
  }

  if (path) {
    return (
      <div onClick={changeCurrentAppScreen}>
        <MenuStyles.Image src={icon} isActive={isActive} alt={path} />
      </div>
    )
  } else return (
    <div onClick={onClick}>
      <MenuStyles.Image src={icon} isActive={isActive} alt={path} />
    </div>
  )
}
export default memo(MenuButton)
