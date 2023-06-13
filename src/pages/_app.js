import { storyblokInit, apiPlugin } from '@storyblok/react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import AllProjects from '@/components/AllProjects'
import Config from '@/components/Config'
import Hero from '@/components/Hero'
import MenuLink from '@/components/MenuLink'
import Page from '@/components/Page'
import Layout from '@/components/Layout'
import Project from '@/components/Project'
import ProjectCard from '@/components/ProjectCard'
// import RichText from '@/components/RichText'
import theme from '@/theme'

const components = {
  AllProjects,
  Config,
  Hero,
  MenuLink,
  Page,
  Project,
  ProjectCard
  // RichText
}

storyblokInit({
  accessToken: process.env.storyblokPreviewToken,
  use: [apiPlugin],
  components
})

function MyApp ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout story={pageProps.config}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
