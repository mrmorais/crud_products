import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import NewProduct from './NewProduct'
import HeaderBar from './HeaderBar'
import ProductList from './ProductList'

const styles = (theme) => ({

})

class MainPage extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className="container">
        <HeaderBar/>
        <NewProduct/>
        <ProductList/>
      </div>
    )
  }
}

export default withStyles(styles)(MainPage)