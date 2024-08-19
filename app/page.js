import Link from "next/link";
import bg from '@/public/bg.png';
import Image from "next/image";

export default function Home() {

  return (
    <div className="mt-24">
      <Image
        src={bg}
        alt="Mountains and forests with two cabins"
        fill
        className="object-cover object-top brightness-75"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-6xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-6 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}