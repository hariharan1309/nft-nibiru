import GraphCarousel from "../../components/GraphCarousel";
import { ItemsTabs } from "../../components/component";

export default function ProductInfo(){
    return(
        <section className="py-24 flex flex-col gap-10 max-w-fit overflow-hidden">
            <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-5">
                <div className="bg-gray-500 flex flex-1 w-full h-full">
                    Img
                </div>
                <div className="flex flex-1">
                    <ItemsTabs />
                </div>
            </div>
            <GraphCarousel />
        </section>
    )
}