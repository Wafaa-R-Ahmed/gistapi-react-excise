import styled from "styled-components";
import Gist from "./Gist";

const GistList = ({ gists }) => {
  const gistItems = gists.map((g) => <Gist key={g.id} gist={g} />);

  return (
  <Wrapper>
      {gists && gists.length > 0  && gistItems }
  </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 20rem;
`;
export default GistList;
