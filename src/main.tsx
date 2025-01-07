//@LIBRERIAS
import { PersistGate } from 'redux-persist/integration/react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

//@COMPONENTES
import RouterComponent from './router/router.component'

//@REDUCERS
import { persistor, store } from './store'

//@SASS
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterComponent />
    </PersistGate>
  </Provider>
)
