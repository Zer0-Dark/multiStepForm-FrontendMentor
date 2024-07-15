type Props = {
    name: string;
    icon: string;
    price: number;
    yearly: boolean;
    selected: boolean,
    selectedPlan: () => void;

}

function PlanCard({ name, icon, price, yearly, selected, selectedPlan }: Props) {

    return (
        <div onClick={() => { selectedPlan() }} id={name} className={` flex lg:flex-col cursor-pointer rounded-md  lg:justify-between lg:w-36 w-[100%]  border-2 hover:border-primary-purplish-blue p-2 lg:p-4 mb-3 lg:mb-0 ${selected ? "border-primary-purplish-blue" : ""}`}>
            <img className="w-12 " src={icon} alt="icon"></img>
            <div className="lg:mt-16 lg:ml-0 ml-4 lg:block h-full   ">
                <h1 className="  text-primary-marine-blue capitalize font-bold">{name}</h1>
                <h2 className="text-neutral-cool-gray">${yearly ? `${price * 10}/yr` : `${price}/mo`}</h2>
                {yearly && <h3 className="text-primary-marine-blue font-bold">2 months free</h3>}
            </div>
        </div>
    )
}

export default PlanCard