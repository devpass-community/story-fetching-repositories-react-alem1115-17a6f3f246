import React, { useState } from "react";
import { ListGroup, Button, Spinner, ListGroupItem } from "react-bootstrap";
import "./styles.css";

const List = () => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRepositories = async () => {
    setIsLoading(true);
    const res = await fetch("https://api.github.com/users/devpass-tech/repos");
    const data = await res.json();
    setRepositories(data);
    setIsLoading(false);
  };

  return (
    <div className="list">
      <div className="container">
        <h2 className="title">Devpass Repositories</h2>

        {isLoading ? (
          <Spinner />
        ) : (
          <ListGroup className="repositoriesList">
            {repositories.map((repository) => (
              <ListGroupItem key={repository.id}>{repository.name}</ListGroupItem>
            ))}
          </ListGroup>
        )}
        <Button data-testid="button" className="button" variant="primary" onClick={() => fetchRepositories()}>
          Fetch repositories
        </Button>
      </div>
    </div>
  );
};

export default List;
