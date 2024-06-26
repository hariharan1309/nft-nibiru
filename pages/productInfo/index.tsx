import GraphCarousel from "../../components/GraphCarousel";
import { ItemsTabs } from "../../components/component";

export default function ProductInfo(){
    return(
        <section className="py-24">
            {/* <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
                <img
                    className="h-full w-full"
                    src="/images/gradient.jpg"
                    alt="gradient"
                />
                </picture>
                <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
                <img
                    className="h-full w-full"
                    src="/images/gradient_dark.jpg"
                    alt="gradient dark"
                />
            </picture> */}
            <div className=" flex flex-col gap-10 max-w-fit overflow-hidden">
                    <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-5">
                        <div className="bg-jacarta-800 flex flex-1 w-full h-full">
                            Img
                        </div>
                        <div className="flex flex-1">
                            <ItemsTabs />
                        </div>
                    </div>
                    <GraphCarousel />
                </div>
        </section>
    )
}