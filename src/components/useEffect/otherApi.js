import React, { useEffect, useState } from "react";
const url = "https://swapi.dev/api/people/1";
export const OtherApi = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState([]);

  const fetchApi = (url) => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setLoading(false);
          setError(true);
        }
      })
      .then((user) => {
        setTimeout(() => {
          setLoading(false);
          setUser(user);
        }, 2000);
      });
  };
  useEffect(() => {
    fetchApi(url);
  }, []);
  return (
    <div className="useEffect--other">
      <div className="useEffect--other--heading">
        This is an example of swapi.dev API.
      </div>
      <div className="useEffect--other--body">
        {isLoading ? (
          <div>Loading user...</div>
        ) : isError ? (
          <div>Error loading user...</div>
        ) : (
          <>
            <div className="details">
              <h3>
                Name :
                <a rel="noreferrer" target="_blank" href={user.url}>
                  {user.name}
                </a>
              </h3>
              <p>
                Gender : {user.gender}
                <br />
                Created At : {user.created}
                <br />
                Edited At : {user.edited}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
