import icon from "../assets/icon-checkmark.svg"
type Props = {
    title: string,
    info: string,
    price: number,
    yearly: boolean,
    selected: boolean,
    selectedAddOns: () => void
}


function AddOn({ title, info, price, yearly, selected, selectedAddOns }: Props) {
    const clicked = selected;

    function clickedFun() {
        selectedAddOns();

    }
    return (
        <div onClick={clickedFun} className={`w-full px-4 py-9 h-16 border-2 rounded-md flex  items-center  hover:border-primary-purplish-blue cursor-pointer ${clicked ? "border-primary-purplish-blue" : ""}`}>
            <div className={` h-6 w-6 rounded-md ${clicked ? "bg-primary-purplish-blue" : "border-2"}`}>
                <img className="w-full h-full p-1" src={icon}></img>
            </div>
            <div className="ml-6">
                <h1 className=" text-primary-marine-blue font-semibold">{title}</h1>
                <h2 className=" text-neutral-cool-gray text-sm">{info}</h2>
            </div>
            <h3 className="ml-auto text-primary-purplish-blue">+${yearly ? price * 10 : price}{yearly ? "/yr" : "/mo"}</h3>

        </div>
    )
}

export default AddOn