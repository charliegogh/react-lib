// 列表渲染
const list = [
  {
    id: 0,
    name: "1"
  },
  {
    id: 1,
    name: "2"
  }
];

export default function List(props) {
  console.log(props);
  return (
    <div className="list">
      {list.map((i) => (
        <div key={i.id}>{i.name}</div>
      ))}
    </div>
  );
}
