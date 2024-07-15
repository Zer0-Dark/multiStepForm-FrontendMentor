

import Title from "../components/Title.tsx";

type Props = {
    but: (arg3: string, arg0: string) => void;
    info: {
        name: string,
        mail: string,
        phone: string
    }
    error: {
        name: boolean,
        mail: boolean,
        phone: boolean
    }
}

function PersonalInfo({ but, info, error }: Props) {
    console.log(error);

    function handleName(e: React.ChangeEvent<HTMLInputElement>) {

        but("name", e.target.value)

    }

    // Render the form for capturing personal information
    return (
        <div className=" absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:static  lg:h-[28rem]  w-[90%] lg:w-[28rem] flex flex-col lg:m-0 rounded-md  -mt-14 bg-white lg:p-0 p-6 py-8">
            <Title title="Personal Info" info="Please provide your name, email address, and phone number" />
            <div className="flex flex-col">
                <form className="text-primary-marine-blue font-semibold flex flex-col">
                    <div className="flex justify-between">
                        <h1>Name</h1>
                        {error.name && <p className="text-primary-straberry-red">This Field is required!</p>}
                    </div>
                    <input
                        placeholder="e.g.Stephen King"
                        value={info.name}
                        onChange={handleName}
                        className={` w-[90%] lg:w-full focus:outline-primary-purplish-blue p-2 rounded-md mt-2 border-2 `}
                        type="text"
                    />


                    <div className="flex justify-between mt-4">
                        <h1>Email Address</h1>
                        {error.mail && <p className="text-primary-straberry-red">This Field is required!</p>}

                    </div>
                    <input
                        placeholder="e.g.stephenking@lorem.com"
                        value={info.mail}
                        onChange={(e) => { but("mail", e.target.value) }}
                        className={`w-[90%] lg:w-full   focus:outline-primary-purplish-blue p-2 rounded-md mt-2 border-2 `}
                        type="email"
                    />

                    <div className="flex justify-between mt-4">
                        <h1>Phone Number</h1>
                        {error.phone && <p className="text-primary-straberry-red">This Field is required!</p>}

                    </div>
                    <input
                        placeholder="e.g. +1 234 567 890"
                        value={info.phone}
                        onChange={(e) => { but("phone", e.target.value) }}
                        className={`w-[90%] lg:w-full  focus:outline-primary-purplish-blue p-2 rounded-md mt-2 border-2 `}
                        type="tel"

                    />
                </form>


            </div>

        </div>
    );
}

export default PersonalInfo
