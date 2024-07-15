
type Props = {
    title: string,
    info: string
}

function Title({ title, info }: Props) {
    return (
        <div className="lg:mb-8 mb-4 lg:w-fit w-[100%]">
            <h1 className="text-primary-marine-blue text-2xl font-bold">{title}</h1>
            <p className="text-neutral-cool-gray w-[80%] lg:w-full mt-2">{info}</p>
        </div>
    )
}

export default Title;