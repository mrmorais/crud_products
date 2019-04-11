import React, { Component } from 'react'

import { Card, CardContent, Typography, TextField, GridListTile } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  container: {
    padding: '5px'
  }
})

class ProductItem extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6">
              { this.props.name }
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              $ { this.props.price }
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(ProductItem)
