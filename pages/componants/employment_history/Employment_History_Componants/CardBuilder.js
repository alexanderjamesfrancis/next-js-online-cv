import RoleList from "./RoleList";

export default function CardBuilder(role) {
    //console.log(role);

  const [header, content] = role.role

    //console.log(header);
  //console.log(content.content);
  return (
    
    <div className="space-y-2">
      <h4 className="text-lg underline underline-offset-1">{header.header}</h4>
      <div>

        {content.content.map((item, index) => {
            return(<RoleList roleItem={item} key={index} />)
        })}
      </div>
      
    </div>
  );
}
