import React from 'react'
import { FaFolder, FaRegFile } from 'react-icons/fa';
import Link from 'next/link';
async function fetchRepocontents(name){

  
    const response =await fetch(`https://api.github.com/repos/AshajanetR/${name}/contents`)
    const contents=await response.json();
    return contents;
}
const RepoDirs = async({name}) => {
  
    const contents=await fetchRepocontents(name);
    console.log(contents)
  return <>
    <h3>Contents</h3>
    <ul>
        {
          contents.map((dir)=>(
            <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>
            {dir.type==="dir" ?<FaFolder />: <FaRegFile />}
                
               
                <span>{dir.path}</span>
                {console.log(dir.path)}
                </Link>
            </li>
          ))  
        }
    </ul>
  </>
}

export default RepoDirs