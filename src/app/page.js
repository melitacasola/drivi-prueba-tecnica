import CardList from "./components/CardList";
import SearchComponent from "./components/SearchComponent";
// import SearchComponent from "./components/Search";
// import "./styles.css";
// import filterData from "./utils";


export default function Home({ searchParams }) {
  const query = searchParams?.query;
  // const filterPeliculas = filterData(peliculasData, query )
  // const [peliculas, setPeliculas] = useState([]);

  return (
    <div className="App">
      <h1 className="text-3xl text-red-700 m-16">Hello test Peliculas</h1>
      <SearchComponent />
      <section className="m-16">
      <CardList searchQuery={query} />
      </section>
    </div>
  );
}