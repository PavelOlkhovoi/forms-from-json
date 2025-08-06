import { Button, DatePicker, Space, version } from "antd";
import { useState } from "react";
import useOnUrlChange from "./hooks/useOnUrlChange";
import { useSelector, useDispatch } from "react-redux";
import { getData, setData } from "./store/slices/dataSlice";

function App() {
  const [count, setCount] = useState(0);
  const getDates = useSelector(getData);
  const dispatch = useDispatch();
  const param = useOnUrlChange("test");
  return (
    <div className="w-full">
      <div className="ml-8 text-3xl font-bold underline">Hello world!</div>
      <div style={{ padding: "0 24px" }}>
        <h1>antd version: {param ? param : version}</h1>
        <Space>
          <DatePicker />
          <Button type="primary">Primary Button</Button>
        </Space>
        <div
          onClick={() => {
            dispatch(setData(["banana", "hvost"]));
          }}
        >
          Set
        </div>
      </div>
    </div>
  );
}

export default App;
