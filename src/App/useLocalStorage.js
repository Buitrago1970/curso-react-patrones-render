import React, { useReducer } from 'react';


const initialState = (initalValue) => ({
  item: initalValue,
  error: false,
  loading: true,
  sincronizedItem: true
})

const actionTypes = {
  success: 'SUCCESS',
  error: "ERROR",
  loading: 'LOADING',
  save: 'SAVE',
  sincronized: 'SINCRONIDED'
}

const reducerObject = (state, payload) => ({
  [actionTypes.success]: {
    ...state,
    item: payload,
    loading: false,
    sincronizedItem: true,
  },
  [actionTypes.error]: {
    ...state,
    error: payload
  },
  [actionTypes.save]: {
    ...state,
    item: payload
  },
  [actionTypes.sincronized]: {
    ...state,
    loading: true,
    sincronizedItem: false
  }

})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state
}

function useLocalStorage(itemName, initialValue) {
  // hook reducer
  const [state, dispatch] = useReducer(reducer, initialState(initialValue))
  // STATE
  const {
    item,
    loading,
    error,
    sincronizedItem
  } = state

  const onSuccess = (item) => {
    dispatch({ type: actionTypes.success, payload: item })
  }
  const onError = (error) => {
    dispatch({ type: actionTypes.error, payload: error })
  }
  const onSave = (newItem) => {
    dispatch({ type: actionTypes.save, payload: newItem })
  }
  const onSincronized = () => {
    dispatch({ type: actionTypes.sincronized })
  }

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem)
      } catch (error) {
        onError(error)
      }
    }, 2000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem)
    } catch (error) {
      onError(error)
    }
  };
  const sincronized = () => {
    onSincronized()
  }
  return {
    item,
    saveItem,
    loading,
    error,
    sincronized,
  };
}

export { useLocalStorage };
