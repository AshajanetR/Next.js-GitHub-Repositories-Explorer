import React,{Suspense} from 'react'
import Link from 'next/link';
import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';
const RepoPage = ({params:{name}}) => {
    console.log(name)
  return (
    <div className="card">
    <Link href="/code/repos" className="btn btn-back">
      Back to Repositories
    </Link>
  
    <Repo  name={name}/>
  
    <Suspense fallback={<div>keep calm and code..</div>}>
    <RepoDirs name={name} />
    </Suspense>
    
    </div>
  );
};

export default RepoPage;