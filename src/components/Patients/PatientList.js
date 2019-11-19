// An patient list contains a list of patient cards
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm.js";
import CharacterCard from "./CharacterCard";
import Header from "./Header.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [patients, setPatients] = useState([{id: 1, name: 'Jonathan Chen', email: 'jonathan@random.com', birthdate: '01-11-1111', age: 99},
  {id: 1, name: 'Jonathan Chen', email: 'jonathan@random.com', birthdate: '01-11-1111', age: 99}]);

  return (
    <div>
      <Header />
      <ListContainer>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/characters">All Characters</Link>
          <Link to="#">Random Thing</Link>
        </Nav>
        <SearchForm characters={characters} setSearchResults={setSearchResults}/>
          {
            (searchResults.map(character => 
               <CharacterCard key={character.id} character={character} />
            ))
          }
      </ListContainer>
    </div>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin-bottom: 2rem;
  background-color: #99ffcc;
  padding: 10px 0;
  a {
    text-decoration: none;
    font-size: 1.6rem;
    background: aliceblue;
    border-radius: 0.3rem;
    padding: 0.3rem;
    color: darkblue;
  }
  a:hover {
    color: aliceblue;
    background: darkslateblue;
  }
`;