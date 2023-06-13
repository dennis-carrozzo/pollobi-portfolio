import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import NextMuiLink from '../NextMuiLink'

// todo: add navigation to footer
// todo: add links to footer
const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: 'secondary.dark',
        color: 'white',
        padding: 6,
        position: 'relative'
      }}
      component='footer'
      justifyContent='center'
      alignItems='center'
      spacing={1}
    >
      <Typography variant='h6' align='center'>
        Pollobi
      </Typography>
      <Typography variant='subtitle2' align='center' component='p'>
        Animation
      </Typography>
      <Typography
        variant='body2'
        align='center'
        sx={{ position: 'absolute', bottom: 10 }}
      >
        {'Copyright © '}
        <NextMuiLink color='inherit' to='/'>
          Pollobi
        </NextMuiLink>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </Stack>
  )
}

export default Footer
