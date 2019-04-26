import React from 'react'
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <Button.Group>
      <Link to="/">
      <Button>
        Home
      </Button>
      </Link>
      <Link to="planets">
      <Button>
        Planets
      </Button>
      </Link>
    </Button.Group>
  )
}

export default Navbar
