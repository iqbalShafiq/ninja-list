import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, []);

	return (
		<>
			<Head>
				<title>Page Not Found</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div className="not-found">
				<h1>Ooopss...</h1>
				<h2>That page cannot be found.</h2>
				<p>You will be redirected to the homepage.</p>
				<p>
					If you're not redirected, please click link below{" "}
					<Link href="/">
						<a>Homepage</a>
					</Link>
				</p>
			</div>
		</>
	);
};

export default NotFound;
