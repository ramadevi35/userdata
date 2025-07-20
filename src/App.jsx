import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const inputChange = (e) => {
    const input = e.target.value;
    //test
    setSearch(input);
  };
  const serchData = data.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.id.toString().includes(search)
  );
  return (
    <>
      <input type="text" placeholder="Search..." onChange={inputChange} />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone No</th>
          </tr>
        </thead>
        <tbody>
          {serchData.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
