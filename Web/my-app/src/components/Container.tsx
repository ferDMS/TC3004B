import { ReactNode } from "react";

interface ContainerProps {
  items: ReactNode[];
}

export default function Container(props: ContainerProps) {
  return (
    <div className="flex justify-center items-center p-4 bg-gray-100">
      {props.items.map((item, index) => (
        <div key={index} className="mx-10">
          {item}
        </div>
      ))}
    </div>
  );
}
