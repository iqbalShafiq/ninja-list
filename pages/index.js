import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat expedita facere nesciunt, placeat iusto voluptatem debitis dolores illo deleniti reprehenderit
					sed, commodi eligendi laboriosam?
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime explicabo porro delectus possimus consectetur aspernatur eaque dolore voluptas, ducimus labore?
					Quibusdam eos nisi nobis!
				</p>

				<Link href="/ninjas/">
					<a className={styles.btn}>See all ninja listing</a>
				</Link>
			</div>
		</>
	);
}
