import Example from "@/components/Example";
import Test from "@/public/assets/icons/test.svg";

export default function Home() {
  return (
    <div className="container text-green-400">
      <h1 className="text-9xl text-green-400">Gift</h1>
      <div className="w-[100px] bg-blue-100  ">
        <Test className="h-8 w-8 fill-red-600 stroke-blue-300 text-current" />
      </div>
      <Example />
      <div className="h-14 w-full bg-emerald-100"></div>
    </div>
  );
}
