import Head from "next/head";

import Hero from "../components/home/hero/hero";
import OurServices from "../components/home/ourservices/ourServices";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>SSR GEEK</title>
				<meta
					name='description'
					content='Nextjs, Reactjs , Fullstack web development company'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
			<OurServices />

			<footer className={styles.footer}></footer>
		</div>
	);
}
