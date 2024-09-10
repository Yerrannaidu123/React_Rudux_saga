import React from "react";
import { useState } from "react";
import axios from "axios";

function Post() {
  const [newData, setNewData] = useState();
  const handleCreate = async () => {
    try {
      const response = await axios.post("https://fakestoreapi.com/products", [
        newData,
      ]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Create New Data</h2>
      <input
        type="text"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      {newData}
    </div>
  );
}

export default Post;
