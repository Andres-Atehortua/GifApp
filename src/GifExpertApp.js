import React, { useState } from "react";
import AddCategories from "components/AddCategories";
import GifGrid from "components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategories setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
