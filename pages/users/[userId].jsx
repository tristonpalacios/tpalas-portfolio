import { useRouter } from "next/router";

export default function UserIdPage(){
    const router = useRouter()
    const {userId} = router.query

    return(
        <div>
            <h1>Hello user, with an id of {userId}</h1>
        </div>
    )
}