export default function CardBuilder(role){

    

    const jobItemList = role.description.content.map((item) => {
        <p>{item}</p>
    })

    return (
        <div className="space-y-2">
            <h4 className="text-lg underline underline-offset-1">{role.description.header}</h4>
            {jobItemList}
        </div>
    )

}