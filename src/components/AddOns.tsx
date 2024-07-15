import { useState } from "react";
import AddOn from "./AddOn"
import Title from "./Title"


type addOns = {
    info: {
        yearly: boolean;
        AddOns: { title: string, selected: boolean, info: string, price: number }[]
    };
    but2: (addOnsInfo: {
        title: string;
        info: string;
        price: number;
        selected: boolean;
    }[]) => void;
    goBack: () => void;
}


function AddOns({ info, but2 }: addOns) {
    const [arrayAddOns, setArrayAddOns] = useState(info.AddOns)

    function handleClick(e: string) {
        const data = arrayAddOns.map((add) => {
            if (add.title === e) {
                return {
                    ...add, selected: !add.selected
                }
            } else {
                return { ...add }
            }
        })
        setArrayAddOns(data);
        but2(data);
    }




    // function sendData() {
    //     but2(arrayAddOns)
    // }




    const listofAddOn = arrayAddOns.map((addon) => (
        <AddOn selectedAddOns={() => handleClick(addon.title)} key={addon.title} title={addon.title} info={addon.info} price={addon.price} yearly={info.yearly} selected={addon.selected} />
    ))


    return (
        <div className=" absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:static  lg:h-[28rem]  w-[90%] lg:w-[28rem] flex flex-col lg:m-0 rounded-md  -mt-14 bg-white lg:p-0 p-6 py-10">
            <Title title="Pick add-ons" info="Add-ons help enhance your gaming experience." />
            <div className="flex flex-col gap-4">
                {listofAddOn}
            </div>
            {/* <div className=" mt-auto flex justify-between">
                <button className=" text-neutral-cool-gray p-2 px-5 rounded-md" onClick={() => { goBack() }} >Go-Back</button>
                <button className="bg-primary-marine-blue text-white p-2 px-5 rounded-md" onClick={sendData}>Next Step</button>
            </div> */}
        </div>
    )
}

export default AddOns