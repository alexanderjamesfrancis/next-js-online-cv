export default function About_Me_Skills() {
    return(
        <div>
            <h3 className="font-bold text-center underline underline-offset-1 mb-6">Skills</h3>
                <div className="flex flex-col justify-center md:flex-row py-6">
                    {/* Left Flex */}
                    <div className="flex flex-col text-center space-y-4 w-1/3 px-4">
                        <p className="font-bold underline">Professional Skills</p>
                        <p>Data collection and manipulation using Excel</p>
                        <p>Maintaining data integrity and consistent format</p>
                        <p>Excellent customer service experience</p>
                        <p>Keen analytical skills and attention to detail</p>
                        <p>Strong computer & PC skills including experience with in-house systems and software. E.g. Salesforce</p>
                        <p>Experience of statutory health and safety legislation such as RIDDOR and HACCP system. </p>
                        
                    </div>
                    {/* Right Flex */}
                    <div className="flex flex-col text-center space-y-4 w-1/3 px-4">
                        <p className="font-bold underline">Personal Skills</p>
                        <p>Patient</p>
                        <p>Adaptable</p>
                        <p>Team-player and leadership qualities</p>
                        <p>Inter-personal skills between both individuals and departments</p>
                        <p>Calm under pressure</p>

                        
                        
                    </div>
                </div>

        </div>
    )
}