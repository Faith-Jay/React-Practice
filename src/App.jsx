import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainSection from './components/MainSection'
import data from "./data"

function App() {

  const newMainSection = data.map((item) => {
    return <MainSection key= {item.name} item={item}/>
  })

  return (
    <div>
      <Header />
      <section className='sectionInApp'>
       {newMainSection}
      </section>
      <Footer />
    </div>
  )
}

export default App
