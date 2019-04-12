import React, { Component } from 'react'
import { Card, CardContent, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  container: {
    padding: '5px'
  },
  button: {
    float: 'right'
  },
  title: {
    display: 'inline-flex'
  }
})

class ProductItem extends Component {
  removeProduct = () => {
    this.props.removeProduct(this.props.item._id)
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6" className={classes.title}>
              { this.props.item.name }
            </Typography>
            <Button
              className={classes.button}
              onClick={this.removeProduct}
              color="secondary">Delete</Button>
            <Typography variant="subtitle1" color="textSecondary">
              $ { this.props.item.price }
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(ProductItem)
