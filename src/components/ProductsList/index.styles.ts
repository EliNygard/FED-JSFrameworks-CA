import styled from "styled-components";

export const Ul = styled.ul`
  max-width: 1280px;
  margin: auto;
  margin-top: 3rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 494px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
