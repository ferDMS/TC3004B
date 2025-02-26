import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <div className="flex w-auto h-24 shadow-xl">
            <div className="flex items-center px-20 bg-green-300">
                <Link href=".">
                    <Image
                        src="/images/logo-plant-shop.webp"
                        alt="Logo"
                        width={400}
                        height={100}
                    />
                </Link>
            </div>
            <div className="flex w-screen items-center justify-evenly text-2xl font-bold bg-green-400">
                <Link href=".">Home</Link>
                <Link href="Products">Products</Link>
                <Link href="TimeMachine">TimeMachine</Link>
            </div>
        </div>
    );
}
