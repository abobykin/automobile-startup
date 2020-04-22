import currentVehicles from './currentVehicles'

let initialArray: object[] = [...currentVehicles]
let initialEditModeStates: boolean[] = []
for (let object of initialArray) {
  for (let [key, value] of Object.entries(object)) {
    if (key === 'editMode') initialEditModeStates.push(value)
  }
}

export default initialEditModeStates
