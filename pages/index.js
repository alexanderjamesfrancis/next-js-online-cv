import Footer from './componants/page_defaults/Footer'
import Header from './componants/page_defaults/Header'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainHome from './componants/home/Home'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <MainHome />

      <Footer />
    </div>
  )
}