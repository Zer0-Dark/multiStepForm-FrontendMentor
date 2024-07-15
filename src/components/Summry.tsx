import Title from "./Title"


type summryProps = {
    info: {
        selectedPlan: string;
        yearly: boolean;
        price: number;
        AddOns: { selected: boolean; price: number; title: string; info: string }[];
    };
    goBackTwice: () => void;
}

function Summry({ info, goBackTwice }: summryProps) {

    // to get total prive
    function getAllPrice() {
        //get all addons prices
        let addOnsPrice = 0;
        for (let i = 0; i < info.AddOns.length; i++) {
            if (info.AddOns[i].selected) {
                addOnsPrice += info.AddOns[i].price;
            }
        }

        // check if user choosed the yearly plan or not 
        if (info.yearly) {
            addOnsPrice = addOnsPrice * 10
            addOnsPrice += info.price * 10
        } else {
            addOnsPrice = addOnsPrice * 1;
            addOnsPrice += info.price
        }


        // return the addons total price summed to the main price
        return addOnsPrice;
    }




    return (
        <div className=" absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:static  lg:h-[28rem]  w-[90%] lg:w-[28rem] flex flex-col lg:m-0 rounded-md  -mt-14 bg-white lg:p-0 p-6 py-10">
            {/* The title component */}
            <Title title="Finishing up" info="Double-check everything looks OK before confirming." />

            {/* info of the summery */}
            <div className=" bg-neutral-alabaster rounded-md p-4 ">
                <div className="flex justify-between items-center mb-4 border-b-2 pb-4">
                    <div className="">
                        <h1 className=" font-bold text-primary-marine-blue ">{info.selectedPlan}{`(${info.yearly ? "Yearly" : "Monthly"})`}</h1>
                        <button className=" underline text-neutral-cool-gray" onClick={goBackTwice}>Change</button>
                    </div>
                    <div>
                        <h1 className="text-primary-marine-blue font-bold">${info.yearly ? info.price * 10 : info.price}/{info.yearly ? "yr" : "mo"}</h1>
                    </div>
                </div>

                {info.AddOns.map((addOn, index) => {
                    if (addOn.selected) {
                        return (
                            <div className="flex mb-2 justify-between" key={index}>
                                <h1 className="text-sm text-neutral-cool-gray">{addOn.title}</h1>
                                <h2 className="text-primary-marine-blue">
                                    +${info.yearly ? addOn.price * 10 : addOn.price}
                                    {info.yearly ? "/yr" : "/mon"}
                                </h2>
                            </div>
                        );
                    }
                    return null;
                })}



            </div>

            {/* total price */}
            <div className="px-4 mt-6 text-sm flex justify-between">
                <h1 className=" text-neutral-cool-gray ">Total {info.yearly ? "(per year)" : "(per month)"}</h1>
                <h1 className=" text-xl text-primary-purplish-blue font-bold">+${getAllPrice()}</h1>
            </div>


            {/* buttons
            <div className="flex justify-between justify-self-end mt-auto">
                <button className=" text-neutral-cool-gray p-2 px-5 rounded-md" onClick={goBack}>Go-Back</button>
                <button className=" bg-primary-purplish-blue p-2 px-5 rounded-md text-white" onClick={() => { but3() }}>Confirm</button>
            </div> */}
        </div>
    )
}

export default Summry