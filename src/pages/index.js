import Head from 'next/head'
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent
} from '@storyblok/react'

export default function Home ({ story }) {
  story = useStoryblokState(story)
  return (
    <div>
      <Head>
        <title>Pollobi Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StoryblokComponent blok={story.content} />
    </div>
  )
}

export async function getStaticProps ({ params, ...context }) {
  const slug = 'home'

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
      story: data.story,
      key: data.story.id,
      config: config ? config.story : false
    }
  }
}
