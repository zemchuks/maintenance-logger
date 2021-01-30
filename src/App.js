import React, { Fragment, useEffect } from 'react'
import SearchBar from './components/layout/SearchBar'
import Logs  from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/Techs/AddTechModal'
import TechListModal from './components/Techs/TechListModal'
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/store'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import 'material-design-icons/iconfont/material-icons.css'
import './App.css';

const store = ConfigureStore()

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit()
  })

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  )
}

export default App;