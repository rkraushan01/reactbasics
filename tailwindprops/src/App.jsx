import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
       <h1
       className='bg-green-400 text-black p-4 rounded-xl mb-4 w-full'
       >Tailwind testing</h1>
   
    <Card username = "John"/>
    <Card username='Wick'/>
  
   <Footer/>
    

    </>
  )
}

export default App
