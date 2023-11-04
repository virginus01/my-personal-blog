import Link from "next/link";
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>The First Post</title>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() => console.log("facebook sdk loaded")}
                />
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href={"/"}>Back to Homepage</Link>
            </h2>
        </Layout>
    );
}