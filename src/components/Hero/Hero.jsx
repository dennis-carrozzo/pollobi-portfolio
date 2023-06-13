import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Hero ({ blok }) {
  return (
    <Container
      {...storyblokEditable(blok)}
      disableGutters
      maxWidth='xl'
      sx={{
        position: 'relative',
        width: 1,
        height: { xs: '120vh', sm: '95vh' }
      }}
    >
      <Image
        src={blok.image.filename}
        alt={blok.image.alt}
        fill
        style={{objectFit:'cover'}}
        quality={100}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />
      <Box
        sx={{
          position: 'absolute',
          zIndex: 10,
          bottom: { xs: '10%', lg: '40%' },
          right: { xs: '50%', lg: '10%' },
          transform: { xs: 'translateX(50%)', lg: 'translate(0,50%)' },
          width: { xs: 0.8, md: 0.7, lg: 0.4 },
          backgroundColor: 'white',
          paddingBlock: 5,
          paddingInline: 3,
          color: 'secondary.main'
        }}
      >
        <Typography
          component='h1'
          variant='h3'
          align='left'
          sx={{ color: 'secondary.dark', marginBottom: 2 }}
        >
          {blok.title}
        </Typography>
        <Typography component='p' variant='h4' align='left'>
          {blok.subtitle}
        </Typography>
      </Box>
    </Container>
  )
}
