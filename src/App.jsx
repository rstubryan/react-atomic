import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1 className="text-2xl font-bold underline">Hello World</h1>
      <Button>Click Me</Button>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
}

export default App;
