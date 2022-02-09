import { useEffect, useState } from "react";
import { getNodes } from "../lib/api";
import Node from "../components/Node";

const Nodes = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const nodes = await getNodes();
      setNodes(nodes);
    }
    fetchData();
  }, []);

  return (
    <div className="mx-auto text-center">
      <h1 className="text-xl">All nodes</h1>
      <div>
        {nodes.map((node) => (
          <Node node={node}/>
        ))}
      </div>
    </div>
  );
};

export default Nodes;
