import Card from "./Card";

function Tours(tours) {
    return(
        <div>
                <div>
                    <h1> Plan of a Tour </h1>
                </div>

                <div>
                     {
                        tours.map((tour)=>{
                            return <Card {...tour}></Card>
                        })
                     }
                </div>

        </div>
    )
}

export default  Tours;