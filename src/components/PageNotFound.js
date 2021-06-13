import styled from "styled-components";
import notFound from "../assets/404.svg";

export default function PageNotFound() {
  return (
    <Wrapper>      
      <img src={notFound} height={200} alt="Page not found" />
      <h3>Page not found</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 5rem;
  text-align: center;
`;