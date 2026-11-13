import { useEffect, useState } from "react";


const Filter = () => {
    const [allData, setAllData] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searchEmail, setSearchEmail] = useState("");
    const [filteredData, setFilteredData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users",
                );
                const jsonData = await response.json();
                console.log(jsonData);
                setAllData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="filter-container">
                <div className="filter-header">
                    <h2>Users Data</h2>
                </div>
                <div className="filter-body">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={searchName}
                        onChange={(e) => {
                            const value = e.target.value;
                            const filteredData = value
                                ? allData.filter(
                                      (user) =>
                                          user.name.toLowerCase() ===
                                          value.toLowerCase(),
                                  )
                                : [];
                            setFilteredData(filteredData);
                            setSearchName(value);
                        }}
                        placeholder="Search by name..."
                    />

                    <label>Email:</label>
                    <input
                        type="text"
                        value={searchEmail}
                        onChange={(e) => {
                            const value = e.target.value;
                            const filteredData = value
                                ? allData.filter((user) =>
                                      user.email
                                          .toLowerCase()
                                          .includes(value.toLowerCase()),
                                  )
                                : [];
                            setFilteredData(filteredData);
                            setSearchEmail(value);
                        }}
                        placeholder="Search by email..."
                    />

                    <select
                        onChange={(e) => {
                            const selectedUser = allData.filter(
                                (user) => user.id === Number(e.target.value),
                            );
                            setFilteredData(selectedUser);
                        }}>
                        <option value="">Select User</option>
                        {allData.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>

                    <select
                        onChange={(e) => {
                            const selectedEmail = allData.filter(
                                (user) => user.email === e.target.value,
                            );
                            setFilteredData(selectedEmail);
                        }}>
                        <option value="">Select email</option>
                        {allData.map((user) => (
                            <option key={user.id} value={user.email}>
                                {user.email}
                            </option>
                        ))}
                    </select>

                    {filteredData.length > 0 ? (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>User Name</th>
                                        <th>Phone</th>
                                        <th>Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.username}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.website}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    ) : (
                        <h1>No data found</h1>
                    )}
                </div>
            </div>
        </>
    );
};

export default Filter;
