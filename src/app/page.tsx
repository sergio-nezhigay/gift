import Example from "@/components/Example";
import TestIcon from "@/public/assets/icons/test.svg";

export default function Home() {
  return (
    <div className="container bg-green-300">
      <h1 className="text-9xl text-green-700">Gift</h1>
      <TestIcon className="h-12 w-12 fill-red-600 stroke-blue-300" />
      <Example />
    </div>
  );
}
