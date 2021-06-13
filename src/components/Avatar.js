import styled from "styled-components";

const Avatar = ({ url }) => {
  return (
    <Wrapper>
      <Img src={url} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  margin: 0.125rem;
`;

const Img = styled.img`
  vertical-align: middle;
  width: 5rem;
  height:5rem;
  border-radius: 50%;
`;

export default Avatar;
