import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import NextMuiLink from '@/components/NextMuiLink'
import Image from 'next/image'
export default function ProjectCard ({ project }) {
  return (
    <Stack
      component={Card}
      justifyContent='center'
      alignItems='center'
      sx={{
        position: 'relative',
        width: 'min-content',
        height: 'min-content',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover>.MuiBox-root': {
          opacity: 0.7
        },
        '&:hover>.MuiStack-root': {
          opacity: 1
        }
      }}
      raised
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          width: 1,
          height: 1,
          backgroundColor: 'black',
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }}
      />
      {/* Image */}
      <Image
        src={project.image.filename}
        alt={project.image.alt}
        width={300}
        height={300}
      />
      <Stack
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 1,
          paddingInline: 3,
          opacity: 0,
          transition: 'opacity 0.3s ease',
          transitionDelay: '0.2s',
          color: 'white',
          overflow: 'hidden'
        }}
        justifyContent='center'
        alignItems='center'
        spacing={3}
      >
        <Typography
          variant='button'
          component='h3'
          align='center'
        >
          {project?.title}
        </Typography>
        <NextMuiLink href={`/projects/${project.slug}`}>
          <Button
            variant='outlined'
            sx={{ color: 'white', borderColor: 'white', paddingInline: 3 }}
          >
            View
          </Button>
        </NextMuiLink>
      </Stack>
    </Stack>
  )
}
