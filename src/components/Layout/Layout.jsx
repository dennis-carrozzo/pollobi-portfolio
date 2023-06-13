import Footer from '@/components/Footer'
import Config from '@/components/Config'
const Layout = ({ children, story }) => {
  return (
    <div>
      <Config blok={story?.content} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
