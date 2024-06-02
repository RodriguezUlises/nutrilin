import Head from "next/head";
import styles from "@/styles/Home.module.css";

import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Product } from "@/components/Product/Product";
import { Services } from "@/components/Services/Services";
import { Contact } from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nutriologa Joselin</title>
        <meta name="description" content="Nutriologa Joselin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <main className={`${styles.main}`}>
        <Header />
        <Hero />
        <About />
        <Services />
        <Product />
        <Contact />
      </main>
    </>
  );
}
