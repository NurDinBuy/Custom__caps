import React from 'react';
import { Home } from '../home';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setCaps } from '../../redux/actions/caps';
import Login from '../login';
import TodoApi from '../../sevice/TodoAPI';

const App = () => {
  // const dispatch = useDispatch()
  // useEffect(() =>{
  //   axios.get('http://localhost:3000/db.json').then(({ data }) => {
  //      dispatch(setCaps(data.pizzas))
  //   })
  // },[]) 
  // const dispatch = useDispatch()
  const dispatch = useDispatch();
  // const [ items , setItems ] = useState([])
  useEffect(() => {
    axios.get('http://164.92.190.147:8000/api/v1/caps/').then(({ data }) => {
      dispatch(setCaps(data));
      console.log(data);
    });
  }, []);

  // console.log(items);

  const credeintials = localStorage.getItem('credentials');
  if (credeintials) {
    return <Home />;
  } else {
    return <Login />;
  }
};

export default App;
