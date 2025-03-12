import styled from "styled-components";

export const ProductsDetailsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(1, minmax(auto, 1fr));
  max-width: 1024px;
  margin: auto;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  align-items: center;

  @media (min-width: 640px) {
    align-items: start;
  }
`;
