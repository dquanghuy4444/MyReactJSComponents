import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import styled from 'styled-components';
import axios from 'axios';

type DataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const WindowWrap = styled.div`
  max-width: 800px;
  margin: 0 auto;
  .listItem {
    padding: 20px;
  }
  .ListItemEven {
    background-color: #f8f8f0;
  }
`;

const WindowFaker = () => {
  const [data, setData] = useState<DataType[]>([]);

  const URL = 'https://jsonplaceholder.typicode.com/posts';
  const GetData = async (): Promise<any> => {
    const { data } = await axios.get(URL);
    return data;
  };

  const fetchData = async () => {
    const data = await GetData();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Row = ({ index, style }: { index: number; style: any }) => (
    <div
      key={index}
      style={style}
      className={
        index % 2 ? 'ListItemOdd listItem' : 'ListItemEven listItem'
      }
    >
      <h3>{`${data[index].title}-${data[index].id}`}</h3>
      <p>{data[index].body}</p>
    </div>
  );

  return (
    <WindowWrap>
      {data && (
        <List
          width={800}
          height={700}
          itemCount={data.length}
          itemSize={120}
        >
          {Row}
        </List>
      )}
    </WindowWrap>
  );
};

export default WindowFaker;
