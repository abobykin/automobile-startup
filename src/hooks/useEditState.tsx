import { useState, useEffect } from 'react'

const useEditState = (currentItems) => {
  let emptyArray: Array<boolean> = []
  const [editMode, setEditMode] = useState(emptyArray)

  useEffect(() => {
    let currentEditModeStates: Array<boolean> = []
    for (let i = 0; i < currentItems.length; i++) {
      currentEditModeStates.push(false)
    }
    setEditMode(currentEditModeStates)
  }, [currentItems.length])

  const switchCurrent = (i) => {
    let currentEditModeStates = editMode
    currentEditModeStates[i] = true
    console.log(currentEditModeStates)
    setEditMode(currentEditModeStates)
  }

  return {
    switchCurrent,
    editMode,
  }
}

export default useEditState
