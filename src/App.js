import React from 'react'

// bring Provider from react-redux, it's the bridge for connecting react to redux
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
// Bring the redux store too
import store from './redux/store'

// Components
import BookList from './Components/booklist.component'
import Header from './Header/header.component'

const App = () => {
  return (
    <Provider store={store}>
      <Header></Header>
    </Provider>
  )
}
export default App
