import { useState } from "react"
import PersonalInfo from "./components/PersonalInfo"
import Step from "./components/Step"
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summry from "./components/Summry";
import Finish from "./components/Finish";



function App() {
  //making object to store the values of the all form 
  const [info, setInfo] = useState({
    name: "", mail: "", phone: "", selectedPlan: "Arcade", yearly: false, price: 9,
    AddOns: [{ title: "Online service", info: "Acess to multiplayer games", price: 1, selected: false },
    { title: "Larger storage", info: "Extra 1TB of cloud save", price: 2, selected: false },
    { title: "Customaizable profile", info: "Custom theme on your profile", price: 2, selected: false }]
  });
  console.log(info)

  const [error, setError] = useState({ name: false, mail: false, phone: false });

  //the indexing for the step we are on 
  const [pageIndex, setPageIndex] = useState(0);




  //the function passed to components :


  //function for the step one (Your info)
  function getYourInfo(type: string, info: string) {
    if (type == "name") {
      setInfo((prev) => {
        return (
          {
            ...prev,
            name: info,
          }
        )
      }

      ); // we pass the data to our object
    } else if (type == "mail") {
      setInfo((prev) => {
        return (
          {
            ...prev,
            mail: info,
          }
        )
      }

      ); // we pass the data to our object
    } else if (type == "phone") {
      setInfo((prev) => {
        return (
          {
            ...prev,
            phone: info,
          }
        )
      }

      ); // we pass the data to our object
    }



  }

  function next() {


    if (info.name == "" && info.mail == "" && info.phone == "") {
      setError({ name: true, mail: true, phone: true })
    } else if (info.name == "" && info.mail == "") {
      setError({ name: true, mail: true, phone: false })

    } else if (info.name == "" && info.phone == "") {
      setError({ name: true, mail: false, phone: true })

    } else if (info.phone == "" && info.mail == "") {
      setError({ name: false, mail: true, phone: true })

    } else if (info.name == "") {
      setError({ name: true, mail: false, phone: false })

    } else if (info.mail == "") {
      setError({ name: false, mail: true, phone: false })

    } else if (info.phone == "") {
      setError({ name: false, mail: false, phone: true })

    } else {
      setError({ name: false, mail: false, phone: false })
      setPageIndex((prev) => prev + 1)
    }


    if (pageIndex === 4) {
      console.log(info);
    }
  }

  //function for the step two (select plan)
  function getYourPlan(selectedPlan: string, price: number) {
    setInfo((prev) => {
      return (
        {
          ...prev,
          selectedPlan: selectedPlan,
          price: price
        }
      )
    })
    // setPageIndex(2);
  }

  function isYearly() {

    setInfo((prev) => {
      return (
        {
          ...prev,
          yearly: !info.yearly
        }
      )
    })
  }



  //function for the step three (ADD-ONS)

  function getYourAddOns(AddOns: { title: string; info: string; price: number; selected: boolean; }[]) {
    setInfo((prev) => {
      return (
        {
          ...prev,
          AddOns: AddOns
        }
      )
    })

  }







  // go back button 
  function goBack() {
    if (pageIndex !== 0) {
      setPageIndex((prev) => prev - 1);

    }
  }

  function goBackTwice() {
    setPageIndex((prev) => prev - 2);
  }



  //displaying the current step by looking at the pageIndex
  let current = <PersonalInfo info={info} error={error} but={getYourInfo} />
  if (pageIndex == 0) {
    current = <PersonalInfo info={info} error={error} but={getYourInfo} />
  } else if (pageIndex == 1) {
    current = <SelectPlan info={info} but1={getYourPlan} isYearly={isYearly} goBack={goBack} />
  } else if (pageIndex == 2) {
    current = <AddOns info={info} but2={getYourAddOns} goBack={goBack} />
  } else if (pageIndex == 3) {
    current = <Summry info={info} goBackTwice={goBackTwice} />
  } else if (pageIndex == 4) {
    current = <Finish />
  }




  return (
    <section className="w-full lg:w-fit lg:flex flex-col justify-center items-center lg:items-stretch lg:flex-row lg:relative    gap-12 lg:mt-12 lg:p-4 m-auto lg:bg-white rounded-md lg:shadow-md lg:min-h-0 min-h-[800px] ">
      <aside className=" lg:bg-main-aside bg-mobile-aside bg-center bg-cover lg:p-12 pt-8 h-44 lg:h-auto  ">
        <div className="flex justify-center gap-5 lg:block">

          {/* Loopin on the steps for the steps menu on the aside */}
          {[
            { title: "YOUR INFO", number: "1", index: 0 },
            { title: "SELECT PLAN", number: "2", index: 1 },
            { title: "ADD-ONS", number: "3", index: 2 },
            { title: "SUMMARY", number: "4", index: pageIndex == 3 ? 3 : 4 }
          ].map(step => (
            <Step
              key={step.index}
              title={step.title}
              number={step.number}
              active={pageIndex === step.index}
            />
          ))}


        </div>
      </aside>

      <main className="lg:p-8 lg:pb-10 lg:w-fit  rounded-md flex justify-center w-[90%]   ">
        {current}

      </main>

      {
        pageIndex == 4 ? null :
          <div className=" fixed lg:absolute bottom-0 lg:bottom-8 lg:right-12 lg:bg-inherit bg-white w-screen  lg:w-[28rem] flex justify-between lg:p-0 p-4  ">
            {
              pageIndex == 0 ? <div></div> :
                <button onClick={goBack} className="text-neutral-cool-gray p-2 px-5 rounded-md">Go Back</button>}


            {
              pageIndex === 3 ?
                <button onClick={next} className=" bg-primary-purplish-blue  p-2 px-6 rounded-md text-white">Confirm</button>
                :
                <button onClick={next} className="bg-primary-marine-blue  p-2 px-5 rounded-md text-white">Next Step</button>
            }


          </div>
      }

    </section>
  )
}

export default App
