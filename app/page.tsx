import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex gap-4 m-4">
      <h1 className="text-3xl">Home Page</h1>
      <Button variant="default" size="lg" className="capitalize">
        click me
      </Button>
    </div>
  );
}
