import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Link,withRouter } from 'react-router-dom'


function Signupbottom(props) {
    return (
        <Grid container>
        <Grid item xs>
          <Link to="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link to="/" variant="body2">
            {props.text}
          </Link>
        </Grid>
      </Grid>
    )
}

export default  Signupbottom
