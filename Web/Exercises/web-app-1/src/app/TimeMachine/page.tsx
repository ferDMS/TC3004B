import Link from "next/link";
import Header from "../../components/Header";

export default function Home() {
    return (
        <div className="flex flex-col">
            <Header></Header>
            <div>TimeMachine!</div>
        </div>
    );
}
