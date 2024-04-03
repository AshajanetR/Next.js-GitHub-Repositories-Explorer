import React from 'react'

async function fetchcontent(name,path){
    console.log(name,path)
    const response= await fetch(`https://raw.githubusercontent.com/AshajanetR/${name}/main/${path}`)
    const content= await response.text();
    return content;
}


const Dirpage = async({params:{name,path}}) => {
    const content= await fetchcontent(name,path);
    console.log(content)
    
  return (
    <div><p className='card'>{content} </p></div>
  )
}

export default Dirpage