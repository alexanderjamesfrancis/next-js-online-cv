export default function About_Me_Skills() {
    return(
        <div>
            <h3 className="font-bold text-center underline underline-offset-1 mb-6">Skills</h3>
                <div className="flex flex-col justify-center items-center md:flex-row py-6">
                    {/* Left Flex */}
                    <div className="flex flex-col text-center space-y-4 px-4">
                        <p className="font-semibold">Patience</p>
                        <p>Data collection and manipulation of data using Excel</p>
                        <p>Maintaining data integrity and consistent format</p>
                        <p>Excellent customer service experience</p>
                        <p>Team-player and leadership qualities</p>
                        <p className="font-semibold">Excellent inter-personal skills with customers, colleagues and suppliers</p>
                        <p>Critical cash handling experience and responsivitys</p>
                        <p>Clean driving licence for 10+ years</p>
                    </div>
                    {/* Right Flex */}
                    <div className="flex flex-col text-center space-y-4 px-4">
                        <p>Keen analytical skills and attention to detail</p>
                        <p>Excellent customer service experience</p>
                        <p>Able to work strongly individually or collectively as part of a team</p>
                        <p className="font-semibold">Adaptable</p>
                        <p>Strong computer & PC skills including experience with in-house systems and software</p>
                        <p>Experience of statutory health and safety legislation</p>
                        <p>Clean driving licence for 10+ years</p>
                    </div>
                </div>

        </div>
    )
}