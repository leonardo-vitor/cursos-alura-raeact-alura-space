import Banner from "components/Banner";
import Footer from "components/Footer";
import Gallery from "components/Gallery";
import Header from "components/Header";
import Popular from "components/Popular";
import Sidebar from "components/Sidebar";
import styles from './homePage.module.scss';

export default function HomePage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.principal}>
                    <Sidebar />
                    <Banner />
                </section>

                <div className={styles.gallery}>
                    <Gallery />
                    <Popular />
                </div>
            </main>

            <Footer />
        </>
    )
}