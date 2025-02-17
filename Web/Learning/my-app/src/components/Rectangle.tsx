interface RectangleProps {
  text: string;
}

export default function Rectangle(props: RectangleProps) {
  return (
    <div className="relative bg-white w-48 h-32 rounded-lg shadow">
      <span className="w-full h-full flex justify-center items-center text-5xl font-black">
        {props.text}
      </span>
    </div>
  );
}
