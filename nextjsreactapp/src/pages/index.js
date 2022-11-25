import Link from 'next/link';

const IndexPage = () =>{
  return(
    <div>
      <h1>Web shop</h1>
      <Link href="/products">Products</Link>
    </div>
  )
};

export default IndexPage;
