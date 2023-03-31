import Footer from './footer'
import Meta from './meta'
import Header from './header'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>
          <Header />
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
