import React from 'react'
import {FaStar,FaCodeBranch,FaEye} from "react-icons/fa";

async function fetchrepo(name){
  //await new Promise((resolve)=>setTimeout(resolve,3000));
    const response= await fetch(`https://api.github.com/repos/AshajanetR/${name}`)
    const repo=await response.json();
    return repo;
}
const Repo = async({name}) => {
    const repo=await fetchrepo(name);
  return <>
    <h2>{repo.name}</h2>
    <p>{repo.description}</p>
    <div className='card-stats'>
      <div className='card-stat'>
        <FaStar />
        <span>{repo.stargazers_count}</span>
      </div>
      <div className='card-stat'>
        <FaCodeBranch />
        <span>{repo.forks_count}</span>
      </div>
      <div className='card-stat'>
        <FaEye />
        <span>{repo.watchers_count}</span>
      </div>
    </div>
  </>

}

export default Repo