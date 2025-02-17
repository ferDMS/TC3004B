import Link from "next/link";

export default function Header() {
    return (
        <div className="flex w-screen h-24">
            <Link href=".">Home</Link>
            <Link href="Products">Products</Link>
            <Link href="TimeMachine">TimeMachine</Link>
        </div>
    );
}
