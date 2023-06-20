import Image from "next/image";
import HomeComponent from "../../components/home/home";
import Header from "../../components/header";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="flex flex-wrap min-h-screen p-12 md:p-24">
        <HomeComponent />
      </main>
    </div>
  );
}
