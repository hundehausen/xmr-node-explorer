import { useEffect, useState, useMemo } from "react";
import { getNodes } from "../lib/api";
import Table, { SelectColumnFilter } from "../components/Table";

const Nodes = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const nodes = await getNodes();
      setNodes(nodes);
    }
    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Address",
        accessor: "url",
      },
      {
        Header: "Port",
        accessor: "port"
      },
      {
        Header: "Height",
        accessor: "height",
      },
      {
        Header: "Country",
        accessor: "country",
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: "Last seen",
        accessor: "lastSeen",
      },
    ],
    []
  );

  return (
    <div className="mx-auto text-center flex flex-col">
      <h1 className="text-xl">All nodes</h1>
      <div className="mx-auto mt-8">
        <Table columns={columns} data={nodes} />
      </div>
    </div>
  );
};

export default Nodes;
