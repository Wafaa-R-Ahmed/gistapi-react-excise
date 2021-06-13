import styled from "styled-components";
import error from "../assets/error.svg";

export default function Error({ message }) {
  return (
    <Wrapper>      
      <img src={error} alt="An error occurred.." />
      <h4>{message || "An error occurred.."}</h4>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 5rem;
  width: 40rem;
  text-align: center;
`;