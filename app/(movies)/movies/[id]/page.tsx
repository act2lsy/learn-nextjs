import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { API_URL } from "../../../(home)/page";

// interface IParams {
//   params: Promise<{ id: string }>;
// }
// interface ISearchParams {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }

//doc : https://nextjs.org/docs/app/guides/upgrading/version-15#params--searchparams
type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

//자동호출
export async function generateMetadata(props: { params: Params }) {
  const id = (await props.params).id;
  const movie = await getMovie(id);
  return { title: movie.title };
}

async function getMovie(id: string) {
  //   throw new Error("error");
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieDetail(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = props.params;
  const id = (await params).id;
  const search = props.searchParams;
  // Test(search);
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

async function Test(searchParams: SearchParams) {
  if (searchParams != undefined) {
    const filters = JSON.stringify(await searchParams);
    console.log("===");
    console.log(filters);
  }
}
