import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import Home from './pages/Home/Home';
import Layout from './layouts/Layout';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <Router>
      <ChakraProvider
        resetCSS
      >
        <Layout>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/bag' component={Cart} exact />
          </Switch>
        </Layout>

      </ChakraProvider>
    </Router>
  );
}

export default App;
