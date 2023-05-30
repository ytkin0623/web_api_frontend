import React from 'react';
//import cats from './cats.json';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import axios from "axios";
import { api } from './common/http-common';

const DetailArticle = () => {
  const { aid } = useParams();
  const navigate= useNavigate();

  axios.get(`${api.uri}/cats`).then((response) => 
    { return (<><h1>Hi</h1></>);}
    ).catch((error) => console.log(error));

  let test = axios.get(`${api.uri}/cats`).then((response) => test = response.data[1]);
  console.log(test.Object.data);

  // return (
  //         <>
  //           <h1>{cat.title}</h1>
  //           <p>{cat.fullText}</p>          
  //           <Button type="primary" onClick={()=>navigate(-1)}>Back</Button>
  //         </>
  //       );

  // for(let i =0; i < cats.length; i++) {  
  //   const cat = cats[i];
  //   console.log("Cat ID: " + cat.id);
  //   console.log("Cat Aid: " + aid);
  //   if(cat.id == +aid) {
  //     return (
  //       <>
  //         <h1>{cat.title}</h1>
  //         <p>{cat.fullText}</p>          
  //         <Button type="primary" onClick={()=>navigate(-1)}>Back</Button>
  //       </>
  //     );
  //   }
    // } else {
    //   return (<p>Local Store: {localStorage.getItem('atoken')}</p>)
    // }
  //}
  
}

export default DetailArticle;