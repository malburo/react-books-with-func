import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Avatar from "./components/Avatar/Avatar";
import BookCard from "./components/BookCard/BookCard";
import SearchBook from "./components/Search/Search";
import TableTransactions from "./components/Tables/TableTransactions/TableTransactions";

const data = {
  _id: "5ea64e1994a0de2bb4e83fa9",
  title: "You don't know js",
  decription: "Một quyển sách javascript vô cùng thú vị",
  bookCover:
    "http://res.cloudinary.com/malburo/image/upload/v1588086262/lazoprsivfw4m1jakzpr.jpg",
  seller: "5ea58cf882aa501c38ca3770",
  nameSeller: "Tong quoc bao",
};

function App() {
  return (
    <div className="App">
      <Avatar></Avatar>
      <BookCard data={data}></BookCard>
      <SearchBook></SearchBook>
      <TableTransactions></TableTransactions>
    </div>
  );
}

export default App;
