import Head from 'next/head'
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent
} from '@storyblok/react'

export default function Page ({ story, projects }) {
  story = useStoryblokState(story)
  return (
    <div>
      <Head>
        <title>{story ? story.name : 'Pollobi Portfolio'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StoryblokComponent blok={story.content} />
    </div>
  )
}

export async function getStaticProps ({ params, ...context }) {
  const slug = params.slug ? params.slug.join('/') : 'home'
  const sbParams = {
    version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    resolve_links: 'url'
  }

  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)
  const { data: config } = await storyblokApi.get(
    'cdn/stories/config',
    sbParams
  )
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      config: config ? config.story : false
    }
  }
}

export async function getStaticPaths () {
  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get('cdn/links/', {
    version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
  })
  const paths = []
  Object.keys(data.links).forEach(linkKey => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
      return
    }

    const slug = data.links[linkKey].slug
    const splittedSlug = slug.split('/')

    paths.push({ params: { slug: splittedSlug } })
  })

  return {
    paths,
    fallback: false
  }
}
