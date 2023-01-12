import RoleList from "./RoleList";

export default function CardBuilder(props) {
  const builtCard = props.props.map((item, index) => {
    //console.log(item.content);
    return (
      <div key={index} className="space-y-2">
        <h4 className="text-lg underline underline-offset-1">{item.header}</h4>
        <div>
          {item.content.map((line, index) => {
            return <p key={index}>{line}</p>;
          })}
        </div>
      </div>
    );
  });

  return <div>{builtCard}</div>;
}
