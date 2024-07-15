type Props = {
    number: string;
    title: string;
    active: boolean
}

function Step(props: Props) {

    // if it's currently active we make it styled diffrent 
    const style: string = props.active ? "bg-primary-light-blue text-primary-marine-blue" : ""


    return (
        <div className="flex justify-center items-center gap-x-4 text-white mb-4">
            <h1 className={`border-2 py-2 px-4 rounded-full font-bold ${style}`}>{props.number}</h1>
            <div className=" w-24 lg:block hidden">
                <p className="text-sm text-neutral-cool-gray ">Step {props.number}</p>
                <h2 className="">{props.title}</h2>
            </div>
        </div>
    )
}

export default Step