import styled from "styled-components";

export const CheckoutContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  max-width: 1024px;
  margin: auto;

  @media (min-width: 679px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    /* gap: 5rem; */

    .cart-details {
      background-color: whitesmoke;
      padding: 1rem 2rem;
    }

    .customer-details {
      padding: 1rem 2rem;
    }
  }
`;
