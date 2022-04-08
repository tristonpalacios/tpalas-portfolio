// import axios from 'axios'
export default function Animals({data}){
    return(
        <h1>Hello Animals </h1>
        // {data.rando}
    )
}

// export async function getStaticProps(){
//     const response = await axios.get(`http://${process.env.local}/api/animals`)
//     console.log(response.data)
//     return{
//         props:{data}
//     }
// }