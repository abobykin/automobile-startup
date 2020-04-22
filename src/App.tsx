import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import classNames from 'classnames'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Homepage from './components/Homepage'
import AboutUs from './components/AboutUs'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import ContactUs from './components/ContactUs'
import BecomePartner from './components/BecomePartner'
import SignupContainer from './containers/SignupContainer'
import LoginContainer from './containers/LoginContainer'
import Logout from './containers/LoginContainer/Logout'
import PageNotFound from './components/PageNotFound'
import DashboardContainer from './containers/DashboardContainer'
import { AuthorizedProvider } from './contexts/AuthorizedContext'
import { saveState, loadState } from './contexts/localStorage'
import './App.scss'

const App: React.FC = () => {
  const [fixedLayout, setFixedLayout] = useState(false)
  const [authorized, setAuthorized] = useState(
    loadState() ? loadState().authorized : false
  )

  useEffect(() => {
    saveState({ authorized: authorized })
  }, [authorized])

  return (
    <AuthorizedProvider value={authorized}>
      <Router>
        <div
          className={classNames('layout-wrapper', {
            'fixed-page': fixedLayout,
            'dashboard-background': authorized,
          })}
        >
          <Header onChangeFixedLayout={setFixedLayout} />

          <main>
            <Switch>
              <Route path='/aboutus' component={AboutUs} />
              <Route path='/howitworks' component={HowItWorks} />
              <Route path='/faq' component={FAQ} />
              <Route path='/contactus' component={ContactUs} />
              <Route path='/become-partner' component={BecomePartner} />
              <Route path='/signup*' component={SignupContainer} />

              {authorized ? (
                <Redirect exact from='/login' to='/dashboard' />
              ) : (
                <Redirect exact from='/dashboard*' to='/login' />
              )}

              <Route
                path='/login*'
                render={() => <LoginContainer setAuthorized={setAuthorized} />}
              />
              <Route path='/dashboard*' component={DashboardContainer} />
              <Route
                path='/logout'
                render={() => <Logout setAuthorized={setAuthorized} />}
              />
              <Route exact path='/' component={Homepage} />
              <Route exact path='/*' component={PageNotFound} />
            </Switch>
          </main>

          {window.innerWidth <= 990 && (
            <div className='message-for-mobile-users'>
              <h3>Please feel free to you the mobile app instead.</h3>
              <div className='sidebar-store-buttons'>
                <h4>Download our App</h4>
                <div className='store-buttons'>
                  <Link to='/'>
                    <span className='store-button'>Apple Store</span>
                  </Link>
                  <Link to='/'>
                    <span className='store-button'>Google Play</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          <Footer />
        </div>
      </Router>
    </AuthorizedProvider>
  )
}

export default App
