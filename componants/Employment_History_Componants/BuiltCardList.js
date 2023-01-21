import CardBuilder from "./CardBuilder";

export default function BuiltCardList(role) {
  const newRole = role.role;

  return <CardBuilder props={newRole} />;
}
