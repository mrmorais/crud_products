import React, { Component } from 'react'

import { Card, CardContent, Typography, TextField, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles= theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px',
    marginBottom: '10px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    marginLeft: theme.spacing.unit,
    marginTop: 3 * theme.spacing.unit
  }
})

class MainPage extends Component {
  render() {
    const { classes } = this.props

    return (
      <Card className={classes.container}>
        <CardContent>
          <Typography color="textPrimary" variant="subtitle1">Create a new product</Typography>
            <TextField
              className={classes.textField}
              label="Name"
              placeholder="Product's name"
              margin="normal"
            />
            <TextField
              className={classes.textField}
              label="Price"
              placeholder="Product's price"
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >Create</Button>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(MainPage)
