import * as React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from "react";
import axios from 'axios';
import apiurl from './common/api';

var token = localStorage.getItem("accessToken");

import swal from 'sweetalert';

function useQuery() {
  return new URLSearchParams(window.location.search);
}

function verifyLineCode(code,state) {
  var params = {
    "state" : state,
    "code" : code
  }
  const config = {
    headers: { 
      'Content-Type': 'application/json'
    }
  }
  axios.post(apiurl + '/notify/verify', params, config)
    .then(res => {
        //console.log(res);
        swal("Successfully linked with Line Notify!", {
          icon: "success",
        });
        swal("Success", "Successfully link with Line Notify!", "success")        
        window.location.href = '/profilen';
      })
    .catch(error => {
        //console.log(error);
        swal("Failed", "Failed to link Line Notify!");
        window.location.href = '/profilen';
    });
}

function Notify(){
  useEffect(()=>{
    var code = useQuery().get('code')
    var state = useQuery().get('state')
    verifyLineCode(code,state)
    //localStorage.setItem('state', JSON.stringify(state))
  },[])
  //console.log()
  return (
    <div>
    </div>
  )
}

export default Notify;