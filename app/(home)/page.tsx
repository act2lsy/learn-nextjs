//(home) -> not path, route group, logical group
import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";

//server component
export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  // console.log(JSON.stringify(movies));
  //test
  return (
    <div className={styles.container}>
      {movies.map(
        (movie: { id: string; title: string; poster_path: string }) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        )
      )}
    </div>
  );
}
