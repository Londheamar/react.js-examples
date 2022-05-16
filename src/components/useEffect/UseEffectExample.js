import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users/londheamar";

export const UseEffectExample = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <div className="useEffect">
      {isLoading ? (
        <div>Loading user...</div>
      ) : isError ? (
        <div>Error loading user...</div>
      ) : (
        <>
          <div className="img">
            <img src={user.avatar_url} alt="user" />
          </div>
          <div className="details">
            <h3>
              <a rel="noreferrer" target="_blank" href={user.html_url}>
                {user.name}
              </a>
            </h3>
            <p>{user.bio}</p>
          </div>
        </>
      )}
    </div>
  );
};
