import { Footer, Header, Hero, KitDigital, Navigation, Stats } from "./components"
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Navigation />
        <KitDigital />
        <Stats />
      </main>
      {/* <Contact /> */}
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Footer />
    </>
  )
}

export default App