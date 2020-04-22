import React from 'react'
import { Route, Switch } from 'react-router'
import PageNotFound from '../../components/PageNotFound'
import CustomerDashboardContainer from './CustomerDashboardContainer'
import './style.css'

const DashboardContainer: React.FC = () => {
  return (
    <div className='wide-container'>
      <Switch>
        <Route
          exact
          path='/dashboard*'
          render={() => <CustomerDashboardContainer />}
        />
        <Route exact path='/*' component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default DashboardContainer
