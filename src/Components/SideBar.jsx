import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../Utils/constants.js";

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((cat, index) => (
      <button
        key={index}
        className="category-btn"
        style={{
          background: cat.name === selectedCategory && "#FC1503",
          color: "#fff",
        }}
        onClick={() => setSelectedCategory(cat.name)}
      >
        <span
          style={{
            color: cat.name === selectedCategory ? "#fff" : "red",
            marginRight: "15px",
          }}
        >
          {cat.icon}
        </span>
        <span
          style={{
            opacity: cat.name === selectedCategory ? "1" : "0.8",
          }}
        >
          {cat.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
