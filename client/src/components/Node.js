const Node = ({ node }) => {
  const { name, port, url, country, lastSeen } = node;
  return (
    <div className="flex flex-row px-4 py-2 bg-slate-400 mt-2">
      <div className="node-name">{name}</div>
      <div className="node-port">{port}</div>
      <div className="node-url">{url}</div>
      <div className="node-country">{country}</div>
      <div className="node-last-seen">{lastSeen}</div>
    </div>
  );
};

export default Node;
