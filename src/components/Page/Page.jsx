import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import Box from '@mui/material/Box'

const Page = ({ blok }) => (
  <Box
    component='main'
    sx={{
      width: 1,
      overflow: 'hidden',
      scrollBehavior: 'smooth'
    }}
    {...storyblokEditable(blok)}
  >
    {blok.body.map(nestedBlok => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </Box>
)

export default Page
