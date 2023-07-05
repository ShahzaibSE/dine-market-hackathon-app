import Image from "next/image";
import HomeComponent from "../../components/home/home";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default async function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="flex flex-wrap p-12 md:p-24">
        <HomeComponent />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
