import { useState } from 'react'
import Axios from 'axios'

const useAxios =  (initialUrl:string, initparams : any) => {
  console.info(initialUrl);
  console.info(initparams);
  
  	//const [url, setUrl] = useState(initialUrl);
	  const [value, setValue] = useState('');
Axios
  .post(initialUrl, initparams)
  .then( (res) => {
    setValue(JSON.stringify(res));
    console.log(JSON.stringify(res))
  })
  .catch((err) =>{
    console.log(JSON.stringify(err))
  })
  return value;
}
export default useAxios;