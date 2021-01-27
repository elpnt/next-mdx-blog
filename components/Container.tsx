import NavBar from './NavBar'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="flex-1 w-full justify-center max-w-3xl mx-auto px-4">
        {children}
      </main>
      <Footer />
    </div>
  )
}
