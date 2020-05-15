import React from "react";
import { Input } from "antd";
const { Search } = Input;

const SearchBook = (props) => {
  const { onChange } = props;
  return (
    <Search placeholder="input search text" onChange={onChange} enterButton />
  );
};
export default SearchBook;
