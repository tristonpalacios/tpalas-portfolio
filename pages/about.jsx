// import SSE caching image tag
import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {

    return(
        <div>

        <h1 className={styles.aboutTitle}>Hello my darling</h1>
        {/* loading an image locally */}
        {/* and img tag works but doesnt benefit from Next SSR caching */}
        <Image
        src='/vercel.svg'
        alt='vercel logo'
        width={2000}
        height={200}
        />

        {/* loading an image from another hosting domain */}
        <Image
        src={'https://placekitten.com/300/300'}
        alt="picture of a kitty"
        width={300}
        height={300}
        />

        </div>
    )

}

