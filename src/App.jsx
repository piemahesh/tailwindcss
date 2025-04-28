import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Button } from "./components/Button";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    // <div className="flex flex-wrap shadow-xl items-center justify-between bg-[#4c5660]">
    //   {/* {Array.from({ length: 10 }).map((_, index) => (
    //     <Card key={index} />
    //   ))} */}
    //   <button className="btn bg-primary text-shadow ">Submit</button>
    //   <button className="btn bg-secondary shadow-xl">call</button>
    //   <p className="text-shadow shadow-xl">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
    //     repellendus minima nobis iusto at incidunt nemo, molestias vero commodi
    //     unde repudiandae tenetur quidem harum possimus qui aspernatur,
    //     consequuntur, eos voluptates.
    //   </p>

    //   <Button />
    // </div>
    <div>
      <Button
        onclick={() => {
          console.log("clicked");
        }}
        title={"Call"}
        isDisabled={false}
      />
      <Button isLoading={isLoading} title={"contact us"} />
      <Button title={"read more"} />
      <Button
        onDrag={() => {
          console.log("dragged");
        }}
        title={"submit"}
        styling={"bg-primary border border-white"}
      />
      <Button />
    </div>
  );
};

/*
sm
md
lg
xl
2xl
3xl
*/
