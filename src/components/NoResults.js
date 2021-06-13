import styled from "styled-components";
import notFound from "../assets/no-results.svg";

export default function NoResult() {
  return (
    <Wrapper>      
      <img src={notFound} height={200} alt="Your search did not return any results" />
      <h3>Your search did not return any results.</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 5rem;
  text-align: center;
`;