import { Table } from "antd";
import React, { useState } from "react";

const AntTable = () => {
  const [dynDataSource, setdynDataSource] = useState([]);

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "3",
      name: "Musarraf",
      age: 25,
      address: "Sri Lanka",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  //Creating coloums for the dynamic data according to the responsedata.
  //!  VERY IMPORTANT  the dataIndex should be the same the same name in the datasourse property.
  const dynamicColumns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
  ];

  async function getData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setdynDataSource(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>AntTable</h1>
      <Table dataSource={dataSource} columns={columns} />

      <button onClick={getData}>get dynamic data</button>

      <Table dataSource={dynDataSource} columns={dynamicColumns} />
    </div>
  );
};

export default AntTable;
