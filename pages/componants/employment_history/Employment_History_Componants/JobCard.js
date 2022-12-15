import CardBuilder from "./CardBuilder";
import BuiltCardList from "./BuiltCardList";

export default function JobCardList(data) {
  const {
    companyName,
    dateWorked,
    roleWorked,
    descriptionHeader,
    description,
  } = data.data;

  return (
    <div className="flex flex-col max-w-full px-8 py-4 mx-2 my-2 shadow-2xl md:px-28 border scale-95 hover:scale-100 transition duration-200">
      <div className="underline underline-offset-1 mb-4">
        <h3 className="font-bold">{companyName}</h3>
        <div className="font-semibold">
          <h4>From {dateWorked}</h4>
          <h3>{roleWorked}</h3>
        </div>
      </div>

      <p className="mb-4">{descriptionHeader}</p>
      <div className="space-y-8">
        <BuiltCardList role={description} />
      </div>
    </div>
  );
}
