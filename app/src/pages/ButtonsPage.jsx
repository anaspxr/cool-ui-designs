import Gradient from "../components/Buttons/Tailwind/Gradiant";
import SquareBorder from "../components/Buttons/Tailwind/SquareBorder";
import SquareFilled from "../components/Buttons/Tailwind/SquareFilled";

export default function ButtonsPage() {
  return (
    <div className="flex flex-wrap gap-8 p-5">
      <SquareBorder>SquareBorder</SquareBorder>
      <SquareBorder className="rounded-sm">Rounded sm</SquareBorder>
      <SquareBorder className="rounded-md">Rounded md</SquareBorder>
      <SquareBorder className="rounded-lg">Rounded lg</SquareBorder>
      <SquareBorder className="rounded-full">Rounded full</SquareBorder>

      <SquareFilled>SquareFilled</SquareFilled>
      <SquareFilled className="rounded-sm">Rounded sm</SquareFilled>
      <SquareFilled className="rounded-md">Rounded md</SquareFilled>
      <SquareFilled className="rounded-lg">Rounded lg</SquareFilled>
      <SquareFilled className="rounded-full">Rounded full</SquareFilled>

      <Gradient>Gradient</Gradient>
    </div>
  );
}
