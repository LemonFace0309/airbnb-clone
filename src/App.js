import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import Header from './shared/Header/Header'
import Home from './components/Home/Home'
import SearchPage from './components/SearchPage/SearchPage'
import Footer from './shared/Footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/search' exact component={SearchPage} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
