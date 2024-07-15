import icon from "../assets/icon-thank-you.svg"
function Finish() {
    return (
        <div className=" absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:static  lg:h-[28rem]  w-[90%] lg:w-[28rem] flex flex-col justify-center items-center lg:m-0 rounded-md  -mt-14 bg-white lg:p-0 p-6 py-10">
            <img className="w-28 mb-8" src={icon} alt="thank you"></img>
            <h1 className="mb-8 text-3xl text-primary-marine-blue font-bold">Thank you!</h1>
            <p className="px-3 text-center text-neutral-cool-gray">Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@loregaming.com.</p>
        </div>
    )
}

export default Finish