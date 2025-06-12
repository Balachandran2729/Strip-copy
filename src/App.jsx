import './App.css'
import Navbar from './context/Navbar'
import Content1 from './context/Content1'
import Content2 from './context/Content2'
import Content3 from './context/Content3'
// import Content4 from './context/Content4'

function App() {
  return (
    <div className="relative">
      <div className="animated-gradient absolute top-0 left-0 w-full h-[70vh] -z-10 " />
      <div className="relative z-10">
        <Navbar/>
        <Content1/>
        <Content2/>
      </div>
      <div>
        <Content3/>
        {/* <Content4/> */}
      </div>
    </div>
  )
}

export default App
