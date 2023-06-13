import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import NextMuiLink from '@/components/NextMuiLink'

const Config = ({ blok }) => {
  return (
    <AppBar
      component='nav'
      sx={{
        position: 'sticky',
        zIndex: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 1,
        boxShadow: 'none'
      }}
      {...storyblokEditable(blok)}
    >
      <Toolbar
        sx={{
          width: 1,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'white'
        }}
      >
        <NextMuiLink
          href='/'
          sx={{
            textDecoration: 'none',
            color: 'secondary.main'
          }}
        >
          <Typography
            variant='h6'
            component='h1'
            sx={{ width: 'min-content', minWidth: 275, display: 'inline' }}
          >
            Pollobi&apos;s Portfolio
          </Typography>
        </NextMuiLink>
      </Toolbar>
    </AppBar>
  )
}

export default Config
