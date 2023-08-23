import {
  StyledForm,
  StyledHeading,
  StyledLabel,
} from "../ProductForm/ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function CommentForm() {
  const router = useRouter();
  const { id } = router.query;
  const products = useSWR(`/api/products`);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const commentData = Object.fromEntries(formData);

    const response = await fetch(`/api/reviews/${id}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      await response.json();
      products.mutate();
      event.target.reset();
    } else {
      console.log(response.status);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add a Comment</StyledHeading>
      <StyledLabel htmlFor="title">
        Title:
        <input type="text" id="title" name="title" />
      </StyledLabel>
      <StyledLabel htmlFor="text">
        Comment:
        <input type="text" id="text" name="text" />
      </StyledLabel>
      <StyledLabel htmlFor="rating">
        Rating:
        <input type="number" id="rating" name="rating" min="1" /> /5
      </StyledLabel>
      <StyledButton type="submit">Post</StyledButton>
    </StyledForm>
  );
}
