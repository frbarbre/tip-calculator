import { Calculator } from "./components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-tip-medium-gray w-screen min-h-screen flex items-center justify-center text-tip-dark-gray">
      <div className="flex flex-col gap-12 items-center">
        <Image
          src={"/logo.svg"}
          alt="splitter logo"
          width={200}
          height={150}
          className="object-contain w-24"
        />
        <Calculator />
      </div>
    </main>
  );
}
