import Graph from "../../components/Graph";

export default function PageIndex(){
    return(
        <>
            <div className="grid grid-cols-2 my-24 gap-10">
                <Graph />
                <Graph />
                <Graph />
                <Graph />
                <Graph />
            </div>
        </>
    )
}