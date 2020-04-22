import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import currentVehicles from './CustomerVehicles/currentVehicles'
import initialEditModeStates from './CustomerVehicles/initialEditModeStates'
import SidebarForDashboard from '../SidebarForDashboard'
import CustomerProfile from './CustomerProfile'
import CustomerVehicles from './CustomerVehicles'
import CustomerRepairs from './CustomerRepairs'
import CustomerSingleRepair from './CustomerSingleRepair'

const CustomerDashboardContainer = () => {
  const [editMode, setEditMode] = useState<boolean[]>(initialEditModeStates)
  const [newVehicleMode, setNewVehicleMode] = useState(false)

  const changeEditState = (i, state) => {
    let currentEditModeState = [...editMode]
    if (i !== null) {
      currentEditModeState[i] = state
      setEditMode(currentEditModeState)
    } else {
      setNewVehicleMode(state)
    }
  }

  return (
    <div className='dashboard-container'>
      <SidebarForDashboard />
      <div className='dashboard-content'>
        <Switch>
          <Route exact path='/dashboard' component={CustomerProfile} />
          <Route exact path='/dashboard/repairs' component={CustomerRepairs} />
          <Route
            exact
            path='/dashboard/repairs/:repairId'
            component={CustomerSingleRepair}
          />
          <Route
            exact
            path='/dashboard/vehicles'
            render={() => (
              <CustomerVehicles
                changeEditState={changeEditState}
                editMode={editMode}
                currentVehicles={currentVehicles}
                newVehicleMode={newVehicleMode}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  )
}

export default CustomerDashboardContainer
