const DarkModeMenu = {
  color: 'var(--dark-text)',
  darkContent: 'var(--dark-content)',
  darkMenu: 'var(--dark-menu)'
}

const darkModeMenu = (props) => {
  return {
    background: props.darkMode ? DarkModeMenu.darkContent : false,
    transition: '.2s linear'
  }
}

const darkModeContent = (props) => {
  return {
    background: props.darkMode ? DarkModeMenu.darkMenu : false,
    transition: '.2s linear'
  }
}

const darkModeText = (props) => {
  return {
    color: props.darkMode ? DarkModeMenu.color : false,
  }
}

const darkModeBorderButton = (props) => {
  return {
    border: props.darkMode ? '2px solid var(--dark-text)' : ''
  }
}

export { darkModeMenu, darkModeText, darkModeContent, darkModeBorderButton }