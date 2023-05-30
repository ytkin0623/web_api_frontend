import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Spin } from 'antd';
//import cats from './cats.json';
import { api } from './common/http-common';
import axios from 'axios';
import {LoadingOutlined} from '@ant-design/icons';

const Cats = () => {
  const [cats, setCats] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(()=>{
    axios.get(`${api.uri}/cats`)
      .then((res)=>{
        setCats(res.data);
      })
      .then(()=>{
        setLoading(false);
      })
  }, []);

  if(loading){
    const antIcon = <LoadingOutlined style={{ fontSize: 48}} spin />
    return(<Spin indicator={antIcon} />);
  } else {
    if(!cats){
      return(<div>There is no article available now.</div>)
    } else {
      return(
        <Row>
          {
            cats && cats.map(({id, title, context})=> (
              <Col span={8} key={id}>
                <Card title={title} style={{width: 300}}>
                  <p>{context}</p>
                  <p></p>
                  <Link to={`/a/${id}`}>Details</Link>
                </Card>
              </Col>
            ))
          }
        </Row>
      )
    }
  }
}

export default Cats;