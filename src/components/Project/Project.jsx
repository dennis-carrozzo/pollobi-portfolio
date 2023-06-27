import { storyblokEditable } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function Project ({ blok }) {
  return (
    <Container
      maxWidth='md'
      {...storyblokEditable(blok)}
      sx={{ paddingInline: { sm: 10 }, paddingBlock: 10 }}
    >
      <Stack spacing={5}>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems={{ xs: 'center', md: 'flex-end' }}
        >
          <Typography component='h1' variant='h3' sx={{ paddingRight: 20 }}>
            {blok.title}
          </Typography>
          <Box
            sx={{
              marginBlock: 1,
              width: { xs: 1, md: 125 },
              height: 125,
              position: 'relative'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                right: 10,
                borderRadius: '50%',
                width: 125,
                height: 125,
                backgroundColor: 'primary.light',
                '&:before':{
                  content: '""',
                  position:'absolute',
                  right: 5,
                  width:50,
                  height:50,
                  borderRadius: '50%',
                  border: '1px solid white'
                }
              }}
            />
          </Box>
        </Stack>
        <Typography variant='subtitle1' color='secondary'>
          {blok.summary}
        </Typography>
        <Divider direction='horizontal' />
        <Stack
          justifyContent='center'
          alignItems='center'
          sx={{ paddingInline: { sm: 8, md: 16 } }}
        >
          {!!blok.video && (
            <video
              width='320'
              height='240'
              controls
              autoPlay
              muted
              style={{ width: '100%', height: 'auto' }}
            >
              <source src={blok.video.filename} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          )}
        </Stack>
        <Box sx={{
          '& img': {
            display:'block',
            marginInline: 'auto',
            marginBlock: 5,
            maxWidth: 1,
            maxHeight: 400,
            height: 'auto',
            objectFit: 'cover'
          }
        }}>{render(blok.description)}</Box>
      </Stack>
    </Container>
  )
}
