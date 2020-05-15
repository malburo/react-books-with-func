import React from "react";
import { Card, Button } from "antd";

const { Meta } = Card;

const BookCard = (props) => {
  const { data } = props;
  return (
    <Card
      hoverable
      style={{ width: 280 }}
      cover={
        <img
          alt="example"
          src={data.bookCover}
          style={{ height: 300, objectFit: "contain" }}
        />
      }
    >
      <Meta title={data.title} description={data.decription} />
      <p style={{ marginTop: 10, marginBottom: 10 }}>
        Người Bán: {data.nameSeller}
      </p>
      <Button type="primary" block>
        Thêm vào giỏ hàng
      </Button>
    </Card>
  );
};

export default BookCard;
