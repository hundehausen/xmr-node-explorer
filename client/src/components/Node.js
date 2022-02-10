const Node = ({ node }) => {
  const { port, url, height, country, lastSeen } = node;
  return (
    <div className="flex flex-row px-4 py-2 bg-slate-100 mt-2 text-center justify-center">
      <div className="mx-4">{url}</div>
      <div className="mx-4">{port}</div>
      <div className="mx-4">{height}</div>
      <div className="mx-4">{country}</div>
      <div className="mx-4">{lastSeen}</div>
    </div>
  );
};

export default Node;
