import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <ul>
      {data.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
}
