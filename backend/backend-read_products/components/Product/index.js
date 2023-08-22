import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledLink } from "../Link/Link.styled";
import { ProductCard } from "./Product.styled";
import Comment from "../Comment/Comment";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id ? `/api/products/${id}` : null);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length !== 0 && <Comment />}
      <StyledLink href={"/"}>Back to all</StyledLink>
    </ProductCard>
  );
}
