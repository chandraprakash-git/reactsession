import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import Table from "./Table";
const Home = () => {
  const [getData, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.publicapis.org/entries").then((result) => {
      setData(result.data.entries);
    });
  }, []);

  return (
    <Layout>
      <div>This is Home Component</div>
      <Table data={getData} data1={"data 1"} />
    </Layout>
  );
};

export default Home;
