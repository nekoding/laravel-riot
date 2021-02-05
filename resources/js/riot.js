import * as riot from 'riot'
import App from './App/app.riot'
import Anchor from './App/Components/anchor.riot'

// Registering child component
riot.register('anchor', Anchor)

// Mount parent component
const mountApp = riot.component(App)
const app = mountApp(document.getElementById('root'), { message: "Riot x Laravel Boilerplate" })


