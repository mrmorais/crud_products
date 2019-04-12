import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Typography, GridList, GridListTile } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { loadProducts, removeProduct } from '../actions/products'
import ProductItem from './ProductItem'

const styles= theme => ({
  container: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

class ProductList extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  removeProduct = (productId) => {
    this.props.removeProduct(productId)
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <Typography color="textPrimary" variant="subheading" gutterBottom>All Products</Typography>
        <div>
          <GridList cols={3} cellHeight={120} className={classes.gridList}>
            {
              this.props.products.map((product) => {
                return (
                  <GridListTile key={product._id}>
                    <ProductItem item={product} removeProduct={this.removeProduct} />
                  </GridListTile>
                )
              })
            }
          </GridList>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => {
      dispatch(loadProducts())
    },
    removeProduct: (productId) => {
      dispatch(removeProduct(productId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProductList))
