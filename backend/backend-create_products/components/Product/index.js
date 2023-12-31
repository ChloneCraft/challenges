import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledButton } from "../Button/Button.styled";
import { ProductCard } from "./Product.styled";
import Comments from "../Comments";
import CommentForm from "../CommentForm/CommentForm";
import { useState } from "react";
import ProductForm from "../ProductForm";

export default function Product({ onSubmit, onDelete }) {
  const [isEditMode, setIsEditMode] = useState(false);
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
      <button
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        Edit
      </button>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
      {isEditMode && <ProductForm onSubmit={onSubmit} />}
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <CommentForm />
      <StyledButton type="button" onClick={() => router.push("/")}>
        Back to all
      </StyledButton>
    </ProductCard>
  );
}
