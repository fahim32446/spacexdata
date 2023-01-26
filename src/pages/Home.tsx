import Heder from '../components/Header';
import Card from '../components/Card';
import {useGetMissionsQuery} from "../redux/spacexApi";
const Home = () => {
  const { data, isFetching, isLoading } = useGetMissionsQuery("");


 
  

  console.log(data);


  
  return (
    <div>
        <Heder />

      {isLoading ? "loading" : (
        <Card />
        
      )}
    </div>
  )
}

export default Home