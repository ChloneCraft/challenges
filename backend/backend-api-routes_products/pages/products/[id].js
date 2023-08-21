import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);
  if (isLoading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  return (
    <div>
      {data.id} {data.name}
    </div>
  );
}
