import React from 'react'
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>

    <Button.Group widths='2'>
      <Link to="/">
      <Button inverted color="blue" circular>
        Home
      </Button>
      </Link>
      <Link to="planets">
      <Button inverted color="brown" circular>
        Planets
      </Button>
      </Link>
    </Button.Group>
    </div>
  )
}

export default Navbar
