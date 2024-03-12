import axios from 'axios';

const instance = axios.create({
 baseURL: 'http://localhost:8000',
});

async function uploadUrl(name,url) {
 try {
   const response = await instance.post('/seturl',{
    "name":name,
    "url":url
  });
   console.log(response);
   return (response)
 } catch (error) {
   console.error(error);
 }

}

export {uploadUrl}