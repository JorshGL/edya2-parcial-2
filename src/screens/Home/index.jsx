import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPhotos } from "../../store/slices/posts/photosThunks"
import PhotoGrid from "../../components/PhotoGrid"


const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPhotos())
  }, [])

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-emerald-500 p-10 text-7xl font-black font-title">Photo App</h1>
      <PhotoGrid />      
    </div>
  )
}

export default Home
