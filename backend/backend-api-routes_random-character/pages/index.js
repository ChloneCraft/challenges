import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(`/api/random-character`, fetcher);
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  console.log(data);
  return (
    <h1>
      First name: {data.firstName} <br />
      Last name: {data.lastName}
      <br /> Twitter: {data.twitter}
      <br /> Geohash: {data.geohash}
    </h1>
  );
}
