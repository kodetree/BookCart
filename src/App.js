import React from 'react'

// bring Provider from react-redux, it's the bridge for connecting react to redux
import { Provider } from 'react-redux'

// Bring the redux store too
import store from './redux/store'

// Components
import BookList from './Components/booklist.component'

const App = () => {
  return (
    // Register your redux Provider here
    <Provider store={store}>
      <BookList />
    </Provider>
  )
}
export default App