import Category from "../ui/category";
import Header from "../ui/Header";
import Hero from "../ui/Hero";

function Home() {
  return (
    <div className="h-full min-h-screen bg-secondary-0">
      <Header />
      <div className="container xl:max-w-screen-xl">
        <Hero />
        <Category />
      </div>
    </div>
  );
}
export default Home;
