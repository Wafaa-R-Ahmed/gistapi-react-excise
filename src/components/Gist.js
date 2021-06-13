import { useState, useEffect } from "react";
import Octicon from "react-octicon";
import styled from "styled-components";
import { format } from "date-fns";
import Avatar from "./Avatar";

const Gist = ({ gist }) => {
  const [files, setFiles] = useState([]);
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  const init = () => {
    let _files = [];
    for (const file in gist.files) {
      _files.push(gist.files[file]);
    }
    setFiles(_files);
    setCreatedAt(format(new Date(gist.created_at), "dd/MM/yyyy"));
    setUpdatedAt(format(new Date(gist.updated_at), "dd/MM/yyyy"));
  };

  useEffect(() => {
    init();
  }, []);

  const gistFiles = files.map((file) => {
    return (
      <FileWrapper key={file.filename}>
        <a
          href={file.raw_url}
          target="_blank"
          title={`${file.filename} | ${file.language}`}
          rel="noreferrer"
        >
          <Octicon className="icon" name="file" />
          {file.filename}
        </a>
      </FileWrapper>
    );
  });

  return (
    <Wrapper>
      <LinksWrapper>
        <a href={gist.owner.url} target="_blank" rel="noreferrer">
          <Avatar url={gist.owner?.avatar_url} />
        </a>
        <a href={gist.owner.url} target="_blank" rel="noreferrer">
          <h4>{gist.owner.login}</h4>
        </a>
        <a
          className="push-to-right"
          href={gist.url}
          target="_blank"
          rel="noreferrer"
        >
          <Octicon className="icon" name="code" />
          <span> {files?.length} File(s)</span>
        </a>
        <a href={gist.forks_url} target="_blank" rel="noreferrer">
          <Octicon className="icon" name="repo-forked" />
          <span> {gist.forks?.length} Forks</span>
        </a>
        <a href={gist.comments_url} target="_blank" rel="noreferrer">
          <Octicon className="icon" name="comment" />
          <span> {gist.comments} Comment(s)</span>
        </a>
        <a href={gist.url} target="_blank" rel="noreferrer">
          <Octicon className="icon" name="star" />
          <span> Stars</span>
        </a>
      </LinksWrapper>
      <div className="date">Created at: {createdAt}</div>
      <div className="date">Last updated at: {updatedAt}</div>
      <div className="desc">{gist.description}</div>
      {gist.files && gist.files.length > 0 && gistFiles}
      {gistFiles}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-bottom: 1px solid #eee;

  & .date {
    display: inline-block;
    color: #828282;
    font-size: 12px;
    margin: 0.25rem 1rem 0.25rem 0;
  }
  & .desc {
    font-size: 16px;
    padding: 1.5rem 0 1rem 0;

  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 50rem;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 1.5em;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;

  & .push-to-right {
    margin-left: auto;
  }
  & a {
    color: #0088ff;
    text-decoration: none;
  }
`;

const FileWrapper = styled.div`
  display: inline-block;
  margin: 1rem 0.25rem;
  & a {
    color: #0088ff;
    text-decoration: none;
  }
`;

export default Gist;
