import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardContent, Typography, TextField, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { createNewProduct } from '../actions/products'

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

class NewProduct extends Component {
  state = { name: '', price: '' }

  constructor(props) {
    super(props)
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  submitNewProductForm = () => {
    this.props.createNewProduct(this.state, () => {
      this.setState({ name: '', price: '' })
    })
  }

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
            value={this.state.name}
            margin="normal"
            onChange={this.handleChange('name')}
          />
          <TextField
            className={classes.textField}
            label="Price"
            placeholder="Product's price"
            value={this.state.price}
            margin="normal"
            onChange={this.handleChange('price')}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.submitNewProductForm}
          >Create</Button>
        </CardContent>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewProduct: (body, success, error) => {
      dispatch(createNewProduct(body, success, error))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewProduct))
