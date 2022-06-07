import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  id: nanoid(),
  name: "untitled.sql",
  content: `-- create a table
  CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    gender TEXT NOT NULL
  );
  -- insert some values
  INSERT INTO students VALUES (1, 'Ryan', 'M');
  INSERT INTO students VALUES (2, 'Joanna', 'F');
  -- fetch some values
  SELECT * FROM students WHERE gender = 'F';`,
  language: "sql",
  output: "Run Code to see Output",
};
const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setOutput: (state, action) => {
      state.output = action.payload;
    },
  },
});

export const { setContent, setName, setOutput } = fileSlice.actions;

export default fileSlice.reducer;
