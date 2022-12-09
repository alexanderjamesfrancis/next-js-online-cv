import RoleList from "./RoleList";

export default function CardBuilder(props) {
    //console.log(role);

  // const [header, content] = role.role
  const head = props.props[0].header
  console.log(props.props[0].content);
  const content = props.props[0].content
    //console.log(header);
  //console.log(content.content);
  return (
    
    <div className="space-y-2">
      <h4 className="text-lg underline underline-offset-1">{head}</h4>
      <div>

        {content.map((item, index) => {
            return(<RoleList roleItem={item} key={index} />)
        })}
      </div>
      
    </div>
  );
}
