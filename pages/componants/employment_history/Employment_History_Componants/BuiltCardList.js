import CardBuilder from "./CardBuilder"



export default function BuiltCardList(role){

    //console.log(role.role);
    const newRole = role.role

    return (<CardBuilder props={newRole} />)
}


    
    

 