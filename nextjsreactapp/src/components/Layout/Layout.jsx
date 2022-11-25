import axios from "axios";
import NavBar from "components/Navbar/NavBar"
import useSWR from 'swr'

async function fetcher(url) {
    const response = await axios.get(url);
    return response.data;
}

export default function Layout({ children}) {

    const { data, error } = useSWR('http://localhost:3001/products', fetcher);

    if(error) return error
    if(!data) return 'loading'

    return (
        <>
            <NavBar categories={[...new Set(data.map(product => product.category))]}/>
            <main>{children}</main>
        </>
    )
}