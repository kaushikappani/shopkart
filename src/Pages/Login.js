import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Navbar from '../Components/Navbar'

const Login = () => {
  return (
      <div>
          <Navbar auth={false} />
          <Container>
              <Grid container>
                  <Grid item> </Grid>
              </Grid>
          </Container>
    </div>
  )
}

export default Login