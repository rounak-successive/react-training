// 9.Implement a responsive sidebar navigation using Material-UI's Drawer component. Include links that allow users to navigate between different sections of your web app.

import { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { Link } from 'react-router-dom'

const TemporaryDrawer = () => {
  const [state, setState] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setState(open)
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { text: 'Question 1', link: '../1' },
          { text: 'Question 2', link: '../2' },
          { text: 'Question 3', link: '../3' },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link} relative='path'>
              <ListItemIcon>{<AssignmentIcon />}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
      <Drawer anchor={'left'} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  )
}

export default TemporaryDrawer
