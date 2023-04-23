import "./App.css";
import { useState, useEffect } from "react";
import Table from "./table";

function App() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);

  const handleTask1 = async () => {
    // const res = await fetch("http://localhost:8081/users/task3");
    // const data = await res.json();
    // setData1(data.result);
    console.log(data1);
    console.log(data2);
    console.log(data3);
    console.log(data4);
    console.log(data5);
    setToggle1(!toggle1);
  };

  useEffect(() => {
    const Fetch = async () => {
      const res1 = await fetch("http://localhost:8081/users/task1");
      const data1 = await res1.json();
      setData1(data1.result);

      const res2 = await fetch("http://localhost:8081/users/task2");
      const data2 = await res2.json();
      setData2(data2.result);

      const res3 = await fetch("http://localhost:8081/users/task3");
      const data3 = await res3.json();
      setData3(data3.result);

      const res4 = await fetch("http://localhost:8081/users/task4");
      const data4 = await res4.json();
      setData4(data4.result);

      const res5 = await fetch("http://localhost:8081/users/task5");
      const data5 = await res5.json();
      setData5(data5.result);
    };
    Fetch();
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setToggle1(!toggle1)}>Task 1</button>
        {toggle1 ? <Table arr={data1} /> : null}
        <button onClick={() => setToggle2(!toggle2)}>Task 2</button>
        {toggle2 ? <Table arr={data2} /> : null}
        <button onClick={() => setToggle3(!toggle3)}>Task 3</button>
        {toggle3 ? <Table arr={data3} /> : null}
        <button onClick={() => setToggle4(!toggle4)}>Task 4</button>
        {toggle4 ? <Table arr={data4} /> : null}
        <button onClick={() => setToggle5(!toggle5)}>Task 5</button>
        {toggle5 ? <Table arr={data5} /> : null}
      </div>
    </>
  );
}

export default App;
