import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  container: {
    marginTop: '10px',
    marginBottom: '10px'
  }
})

class MainPage extends Component {
  render() {
    const { classes } = this.props

    return (
      <AppBar position="static" color="primary" className={classes.container}>
        <Toolbar>
          <Typography variant="title" color="inherit">Product management</Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(MainPage)