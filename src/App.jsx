import { Routes,Route } from "react-router-dom"
import { Home,Content } from "./pages"
import useFetch from './hooks/fetch'
import { SliderComponent } from "./Components"

export default function App() {
  let {loading,error,data}= useFetch('http://localhost:1337/api/blogs?populate=*')
  if(loading) return <p>Loading ...</p>
  if(error) return <p>Error..</p>


  return (
    <div className=" bg-gray-100 ">
    <Routes>
    <Route path="/" element={<Home blogs={data?data:""}/>}> </Route>
    <Route path="/" element={<SliderComponent/>} />
   <Route path="/blog/:id" element={<Content blogs={data?data:""}/>}></Route>
   
    </Routes>

  </div>
  )
}
