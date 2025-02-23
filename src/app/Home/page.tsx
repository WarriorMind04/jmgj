import Menu from "../Components/menu";
import Counter from "../counter/page";
import Registro from "../Components/signup";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp14699777.jpg')",
      }}
    >
      <Menu />
      <Registro />
      <Counter />
    </div>
  );
}
