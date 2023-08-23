import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";

export default function ProductForm({ onSubmit }) {
  // const products = useSWR("/api/products");
  function handleSubmit(event) {
    onSubmit(event);
    //   event.preventDefault();

    //   const formData = new FormData(event.target);
    //   const productData = Object.fromEntries(formData);
    //   const response = await fetch("/api/products", {
    //     method: "POST",
    //     body: JSON.stringify(productData),
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   if (response.ok) {
    //     await response.json();
    //     products.mutate();
    //     event.target.reset();
    //   } else {
    //     console.log(response.status);
    //   }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>heading</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input type="number" id="price" name="price" min="0" />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
