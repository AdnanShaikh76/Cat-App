import React, {useState, useEffect} from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { getcatdetails } from '../API';
import Button from 'react-bootstrap/Button';
import "../App.css"

const CardDetails = () => {
  const { id } = useParams();
  const [catDetail, setCatDetail] = useState(null);
  const navigate = useNavigate();

  console.log()

  useEffect(() => {
    const fetchcatdetails = async () =>{
      const data = await getcatdetails();
      const selectedCat = data.find(cat => cat.id === id);
      setCatDetail(selectedCat);
      // console.log(data)
    }
    fetchcatdetails();
  }, [id]);

  const Handleclick = () => {
    navigate(`/`);
  }
console.log(catDetail)
  if (!catDetail) {
    return <p>Loading...</p>; // Show loading message while fetching data
  }

  return (
    <div className='text-center'>
      <h1>{catDetail?.breeds[0].name}</h1>  
      <img style={{ width: "250px"}}src={catDetail.url} alt="" />
      <p className='fs-4 m-4'>{catDetail?.breeds[0].description}</p>
      <p>Origin From : {catDetail?.breeds[0].origin}</p>
      <p>Life Span : {catDetail?.breeds[0].life_span} years</p>
      <Button onClick={Handleclick} variant="dark">Show More Details</Button>
    </div>
  );
};

export default CardDetails;