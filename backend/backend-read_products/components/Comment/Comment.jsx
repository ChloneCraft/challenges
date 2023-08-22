import useSWR from "swr";
import { useRouter } from "next/router";

export default function Comment() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `/api/products/${id}` : null);
  console.log(data);

  return <div>{data.reviews[0].text}</div>;
}
