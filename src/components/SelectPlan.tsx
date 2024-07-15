import { useState } from "react";
import PlanCard from "./PlanCard";
import Title from "./Title";
import arcadeIcon from "../assets/icon-arcade.svg";
import advancedIcon from "../assets/icon-advanced.svg";
import proIcon from "../assets/icon-pro.svg";

type SelectPlanProps = {
    info: {
        selectedPlan: string;
        yearly: boolean;
        price: number;
    };
    but1: (selectedPlan: string, price: number) => void;
    goBack: () => void;
    isYearly: () => void;
}

function SelectPlan({ info, but1, isYearly }: SelectPlanProps) {

    //type of THE selected plan
    const [selectedPlan, setSelectedPlan] = useState(info.selectedPlan);
    //if it's yearly or not 


    // the pricese
    const prices: { Arcade: number, Advanced: number, Pro: number } = { Arcade: 9, Advanced: 12, Pro: 15 };
    //the price of the plan which selected 
    const [price, setPrice] = useState(prices[selectedPlan as keyof object]);


    const handlePlanSelection = (plan: string) => {
        setSelectedPlan(plan);
        setPrice(prices[plan as keyof object]);
        but1(plan, prices[plan as keyof object]);
        console.log(prices[plan as keyof object]);
    };

    const isPlanSelected = (plan: string) => selectedPlan === plan;


    function changeYearly(): void {
        isYearly();
        but1(selectedPlan, price)
    }

    return (
        <div className=" absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:static  lg:h-[28rem]  w-[90%] lg:w-[28rem] flex flex-col lg:m-0 rounded-md  -mt-14 bg-white lg:p-0 p-6 py-8">
            <Title title="Select your plan" info="You have the option of monthly or yearly billing." />
            <div className="flex justify-between lg:flex-row  flex-col lg:w-auto w-full items-center">
                {["Arcade", "Advanced", "Pro"].map((plan) => (
                    <PlanCard
                        key={plan}
                        icon={plan === "Arcade" ? arcadeIcon : plan === "Advanced" ? advancedIcon : proIcon}
                        name={plan}
                        price={prices[plan as keyof object]}
                        yearly={info.yearly}
                        selectedPlan={() => handlePlanSelection(plan)} // important way 
                        selected={isPlanSelected(plan)}
                    />
                ))}
            </div>
            <div className="flex lg:mt-10 gap-4 justify-center text-primary-marine-blue font-bold bg-neutral-alabaster p-4">
                <h1>Monthly</h1>
                <div onClick={changeYearly} className="w-11 cursor-pointer p-1 rounded-full bg-primary-marine-blue transition-transform">
                    <div className={`bg-white h-full w-1/2 rounded-full transition-transform ${info.yearly ? "translate-x-full" : ""}`}></div>
                </div>
                <h2>Yearly</h2>
            </div>

        </div>
    );
}

export default SelectPlan;
