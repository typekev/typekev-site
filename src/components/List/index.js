import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;

  & li {
    margin-bottom: 1.25rem;
    & span {
      text-align: left !important;
    }
  }
`;

export default List;
