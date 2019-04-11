import React, { Component } from 'react'
import { Typography, GridList, GridListTile, GridListTileBar, Card, CardContent } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

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
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <Typography color="textPrimary" variant="subheading" gutterBottom>All Products</Typography>
        <div>
          <GridList cols={3} cellHeight={120} className={classes.gridList}>
            <GridListTile key="1"><ProductItem name={'Pdodo fsd sfds sdf '} price={12} /></GridListTile>
            <GridListTile key="2"><ProductItem name={'Pdodod'} price={12} /></GridListTile>
            <GridListTile key="3"><ProductItem name={'Pdodod'} price={12} /></GridListTile>
            <GridListTile key="4"><ProductItem name={'Pdodod'} price={12} /></GridListTile>
            <GridListTile key="5"><ProductItem name={'Pdodod'} price={12} /></GridListTile>
          </GridList>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ProductList)
