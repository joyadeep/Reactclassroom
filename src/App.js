import Button from "./atoms/Button";
import Error from "./atoms/Error";
import Input from "./atoms/Input";
import Label from "./atoms/Label";
import Footer from "./organisms/Footer";
import Navbar from "./organisms/Navbar";

function App() {

  return (
    <div >
      <Navbar>
        <h1 className="text-4xl tracking-tighter font-semibold first-letter:text-red-500">E-commerce</h1>
        <div>menu</div>
      </Navbar>
      <h1 className='text-center text-6xl font-semibold'>Start your project here</h1>
      <h4 className="text-center text-xl mt-3">fonts not included !</h4>
      <Button title="Demo"  className="mx-auto bg-green-500"  />
      <Label title={'Name'} />
      <Input placeholder="Enter your name" />
      <Error error={'invalid name'} />
      <Footer> 
        <h1>hello world</h1>
      </Footer>
    </div>
  );
}

export default App;
