export default function CardBuilder(role) {
  

  // const jobItemList = role.content.map((item) => {
  //     <p>{item}</p>
  // })

  return (
    <div className="space-y-2">
      <h4 className="text-lg underline underline-offset-1">{role.header}</h4>
      {/* {content.map((item) => {
                return <p>{item}</p>
            })} */}
    </div>
  );
}
