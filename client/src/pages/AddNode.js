import { addNode } from "../lib/api";

const AddNode = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const node = {
      name: event.target.name.value,
      url: event.target.url.value,
      country: event.target.country.value,
      port: event.target.port.value,
    };
    await addNode(node);
  };
  return (
    <div className="mx-auto w-1/4">
      <h1 className="text-xl text-center mt-4">Add Node</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700">URL</span>
            <input type="text" name="url" className="mt-1 block w-full" placeholder="node.cryptocano.de" />
          </label>
          <label className="block">
            <span className="text-gray-700">Port</span>
            <input type="text" name="port" className="mt-1 block w-full" placeholder="18081" />
          </label>
          <label className="block">
            <span className="text-gray-700">Country</span>
            <input type="text" name="country" className="mt-1 block w-full" placeholder="Switzerland" />
          </label>
          <button type="submit" className="mx-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
            Add Node
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNode;
