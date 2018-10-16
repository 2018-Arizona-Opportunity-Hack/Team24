import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
import  Typography  from '@material-ui/core/Typography';

import styles from './Styles';
class Login extends Component{
  state={
    username: "",
    password: ""
  };
  onChangeFieldHandler = (name, event)=>{
    this.setState({
      [name]: event.target.value
    });
  }
  onLoginClickHandler = () =>{
    this.props.loginUser({
      username: this.state.username,
      password: this.state.password
    });
  }
  componentDidMount(){

  }
  render() {
    return(
      <Grid container spacing={16} className = {this.props.classes.root}>
        <Paper elevation={2} className = {this.props.classes.paper}>
          <Grid item xs={12}>
            <Typography variant='h6' className={this.props.classes.title}>Sign In</Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={this.props.classes.formControl}>
              <InputLabel htmlFor='username' classes={
                {
                  root: this.props.classes.formLabel,
                }}>Username</InputLabel>
              <Input
                id = 'username'
                type = 'text'
                onChange = {(e)=>this.onChangeFieldHandler('username', e)}
                value = {this.state.username}
                error = {this.props.errors.username?true: false}
                autoComplete = "off" 
                className = {this.props.classes.formInput}>
              </Input>
              {this.props.errors.username? 
                <FormHelperText className = {this.props.classes.formHelper}>{this.props.errors.username}</FormHelperText>: null
              }
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={this.props.classes.formControl}>
              <InputLabel htmlFor='password' classes={
                {
                  root: this.props.classes.formLabel,
                }}>Password</InputLabel>
              <Input
                id = 'password'
                type = 'password'
                onChange = {(e)=>this.onChangeFieldHandler('password', e)}
                value = {this.state.password}
                error = {this.props.errors.password?true: false}
                autoComplete="off"
                className = {this.props.classes.formInput}>
              </Input>
              {this.props.errors.password? 
                <FormHelperText className = {this.props.classes.formHelper}>{this.props.login.password}</FormHelperText>: null
              }
            </FormControl>
          </Grid>
          <Grid item xs= {12}>
            <Button variant = 'contained' color='primary' onClick = {this.onLoginClickHandler} className={this.props.classes.button}>
              Login
            </Button>
          </Grid>
        </Paper>
      </Grid>
    )

  }
};
export default withStyles(styles)(Login);