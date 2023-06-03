import Image from "next/image";
import HomeComponent from "../../components/home/home";
import Header from "../../components/header";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HomeComponent />
      </main>
    </div>
  );
}
