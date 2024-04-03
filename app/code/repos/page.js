import React from 'react'
import Link from 'next/link';
import {FaStar,FaCodeBranch,FaEye} from "react-icons/fa";
async function getRepos(){
    const response =await fetch("https://api.github.com/users/AshajanetR/repos",
    {
        next:{
        revalidate:60,
}
});
    
   // await new Promise((resolve)=>setTimeout(resolve,5000));

    const repos=response.json();
    return repos;
    }

const Repose = async() => {
    const repos=await getRepos();
   // console.log(repos);
  return (
    <div className='repos-container'>
        <h2>Repositories</h2>
        <ul className='repo-list'>
            {
                repos.map((repo)=>{
                    return(
                        <li key={repo.id}>
<Link href={`/code/repos/${repo.name}`}>
    <h3>{repo.name}</h3>
    <p>{repo.description}</p>
    <div className='repo-details'>
<span>
    <FaStar />{repo.stargazers_count}
</span>
<span>
    <FaCodeBranch />{repo.forks_count}
</span>
<span>
    <FaEye />{repo.watchers_count}
</span>
    </div>
</Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Repose;