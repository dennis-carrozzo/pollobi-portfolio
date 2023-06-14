import { useState, useEffect } from 'react'
import { storyblokEditable, getStoryblokApi } from '@storyblok/react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ProjectCard from '@/components/ProjectCard'

export default function AllProjects ({ blok }) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      const storyblokApi = getStoryblokApi()
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        starts_with: 'projects/',
        is_startpage: false
      })
      setProjects(prev =>
        data.stories.map(project => {
          project.content.slug = project.slug
          project.content._uid = project.uuid
          return project.content
        })
      )
    }
    getProjects()
  }, [])

  return (
    <Stack
      component={Container}
      maxWidth='xl'
      justifyContent='center'
      alignItems='center'
      sx={{ width: 1 }}
      {...storyblokEditable(blok)}
    >
      <Stack
        justifyContent='center'
        alignItems='start'
        spacing={7}
        sx={{ marginBlock: { xs: 5, sm: 10, md: 20 } }}
      >
        {/* Header */}
        <Stack
          justifyContent='center'
          alignItems='center'
          spacing={5}
          sx={{ width: 1 }}
        >
          <Typography
            component='h2'
            variant='h3'
            align='center'
            color='secondary.dark'
          >
            {blok.title}
          </Typography>
          <Typography
            align='center'
            color='secondary'
            variant='body1'
            sx={{ width: { xs: 200, sm: 300 } }}
          >
            {blok.subtitle}
          </Typography>
        </Stack>
        {/* Projects Grid wrapper */}
        <Stack
          justifyContent='center'
          alignItems='center'
          sx={{
            position: 'relative',
            width: 1,
            paddingInline: { sm: '10%', md: 0 }
          }}
        >
          {/* Background Boxes */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: { xs: '-30%', md: '50%' },
              transform: { xs: 'translate(50%)', md: 'translate(-50%)' },
              width: { xs: 0.6, md: '112%' },
              height: projects.length <= 3 ? 50 : 150,
              zIndex: 2,
              backgroundColor: 'white'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: { xs: '-30%', md: '50%' },
              transform: { xs: 'translate(50%)', md: 'translate(-50%)' },
              width: { xs: 0.6, md: '112%' },
              height: projects.length <= 3 ? 50 : 150,
              zIndex: 2,
              backgroundColor: 'white'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 0, md: '50%' },
              transform: { xs: 'translate(50%)', md: 'translate(-50%)' },
              width: { xs: 0.3, md: projects.length <= 3 ? '110%' : '100%' },
              height: 1,
              minHeight: 300,
              backgroundColor: 'secondary.light'
            }}
          />
          {/* Projects Grid */}
          <Grid
            container
            spacing={{ xs: 5, md: 4, lg: 2 }}
            sx={{
              position: 'relative',
              zIndex: 5,
              width: 1,
              minWidth: projects.length <= 3 ? 'fit-content' : 'min-content',
              margin: 0
            }}
          >
            {!!projects[0] &&
              projects.map(project => {
                return (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={4}
                    key={project._uid}
                    justifyContent='center'
                    alignItems='center'
                  >
                    <Stack
                      justifyContent='center'
                      alignItems='center'
                      sx={{ width: 1 }}
                    >
                      <ProjectCard project={project} />
                    </Stack>
                  </Grid>
                )
              })}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  )
}
