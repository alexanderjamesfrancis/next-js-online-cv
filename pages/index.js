import Footer from './componants/page_defaults/Footer'
import Header from './componants/page_defaults/Header'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainHome from './componants/home/Home'
import employment_data from './api/employment_data'

export default function Home() {
  const data = employment_data()
  console.log(data);

  return (
    <div className={styles.container}>
      <Header />
      <MainHome />

      <Footer />
    </div>
  )
}
