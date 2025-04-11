import Image from "next/image";
import { CardBank } from "../components/CardBank";
import { Section } from "@/components/Section";
import { SectionContent } from "@/components/Section/SectionContent";
import { SectionContentTitle } from "@/components/Section/SectionContentTitle";

export default function Home() {
    return (
        <Section className="bg-[#F5F7FA] lg:grid lg:grid-cols-3 lg:gap-x-12 lg:auto-rows-fr">
            <SectionContent className="lg:col-span-2 lg:w-full">
                <SectionContentTitle>
                    <h1 className="font-bold text-xl">
                        My Cards
                    </h1>
                    <h2>See All</h2>
                </SectionContentTitle>
                <div className="flex mt-4 gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar lg:w-full lg:h-full">
                    <CardBank
                        balance="5,600"
                        cardHolder="Thadeu Alves"
                        variant={false}
                    />
                    <CardBank
                        balance="1,200"
                        cardHolder="Thadeu Alves"
                        variant
                    />
                </div>
            </SectionContent>

            <SectionContent>
                <SectionContentTitle>
                    <h1 className="font-bold text-xl">
                        Recent Transaction
                    </h1>
                </SectionContentTitle>
                <ul className="w-full mt-4 p-4 space-y-4 bg-white rounded-2xl">
                    <li className="flex w-full justify-between items-center">
                        <div className="flex">
                            <Image
                                src="./card.svg"
                                width={60}
                                height={60}
                                alt="card"
                            />
                            <div className="ml-4">
                                <h1 className="text-xl">
                                    Deposit from My
                                </h1>
                                <h2 className="text-[#718EBF]">
                                    28 January 2021
                                </h2>
                            </div>
                        </div>
                        <h3 className="ml-8 text-red-500">
                            -$850
                        </h3>
                    </li>
                    <li className="flex w-full justify-between items-center">
                        <div className="flex">
                            <Image
                                src="./card.svg"
                                width={60}
                                height={60}
                                alt="card"
                            />
                            <div className="ml-4">
                                <h1 className="text-xl">
                                    Deposit Paypa.
                                </h1>
                                <h2 className="text-[#718EBF]">
                                    28 January 2021
                                </h2>
                            </div>
                        </div>
                        <h3 className="ml-8 text-green-500">
                            +$2,500
                        </h3>
                    </li>
                    <li className="flex w-full justify-between items-center">
                        <div className="flex">
                            <Image
                                src="./card.svg"
                                width={60}
                                height={60}
                                alt="card"
                            />
                            <div className="ml-4">
                                <h1 className="text-xl">
                                    Deposit from My
                                </h1>
                                <h2 className="text-[#718EBF]">
                                    28 January 2021
                                </h2>
                            </div>
                        </div>
                        <h3 className="ml-8 text-green-500">
                            +$5,400
                        </h3>
                    </li>
                </ul>
            </SectionContent>

            <SectionContent className="lg:col-span-2 lg:w-full ">
                <SectionContentTitle>
                    <h1 className="font-bold text-xl">
                        Weekly Activity
                    </h1>
                </SectionContentTitle>
                <div className="bg-white rounded-2xl p-4 lg:w-full mt-4">
                    <div className="flex justify-end gap-4">
                        <h1 className="text-green-400 flex items-center gap-1">
                            <div className="h-4 w-4 bg-green-400 rounded-full"></div>
                            Diposti
                        </h1>
                        <h1 className="text-red-400 flex items-center gap-1">
                            <div className="h-4 w-4 bg-red-400 rounded-full"></div>
                            Withdraw
                        </h1>
                    </div>
                    <ul className="grid grid-cols-8 gap-4 w-full">
                        <li className="space-y-4 h-full text-right flex flex-col justify-end max-w-12">
                            <p>500</p>
                            <p>400</p>
                            <p>300</p>
                            <p>200</p>
                            <p>100</p>
                            <p>0</p>
                            <p></p>
                        </li>
                        <li className="h-full flex flex-col justify-end text-center">
                            <div className="flex justify-around items-baseline">
                                <div className="w-3 h-45 bg-blue-400 rounded-full"></div>
                                <div className="w-3 h-28 bg-green-400 rounded-full"></div>
                            </div>
                            <p>Jan</p>
                        </li>
                        <li className="h-full flex flex-col justify-end text-center">
                            <div className="flex justify-around items-baseline">
                                <div className="w-3 h-15 bg-blue-400 rounded-full"></div>
                                <div className="w-3 h-50 bg-green-400 rounded-full"></div>
                            </div>
                            <p>Feb</p>
                        </li>
                        <li className="h-full flex flex-col justify-end text-center">
                            <div className="flex justify-around items-baseline">
                                <div className="w-3 h-38 bg-blue-400 rounded-full"></div>
                                <div className="w-3 h-22 bg-green-400 rounded-full"></div>
                            </div>
                            <p>Mar</p>
                        </li>
                        <li className="h-full flex flex-col justify-end text-center">
                            <div className="flex justify-around items-baseline">
                                <div className="w-3 h-30 bg-blue-400 rounded-full"></div>
                                <div className="w-3 h-47 bg-green-400 rounded-full"></div>
                            </div>
                            <p>Apr</p>
                        </li>
                        <li className="h-full flex flex-col justify-end text-center">
                            <div className="flex justify-around items-baseline">
                                <div className="w-3 h-25 bg-blue-400 rounded-full"></div>
                                <div className="w-3 h-35 bg-green-400 rounded-full"></div>
                            </div>
                            <p>May</p>
                        </li>
                        <li className="h-full flex flex-col justify-end text-center">
                            <div className="flex justify-around items-baseline">
                                <div className="w-3 h-50 bg-blue-400 rounded-full"></div>
                                <div className="w-3 h-12 bg-green-400 rounded-full"></div>
                            </div>
                            <p>Jun</p>
                        </li>
                        <li className="h-full flex flex-col justify-end text-center">
                            <div className="flex justify-around items-baseline">
                                <div className="w-3 h-20 bg-blue-400 rounded-full"></div>
                                <div className="w-3 h-40 bg-green-400 rounded-full"></div>
                            </div>
                            <p>Jul</p>
                        </li>
                    </ul>
                </div>
            </SectionContent>

            <SectionContent>
                <SectionContentTitle>
                    <h1 className="font-bold text-xl">
                        Quick Transfer
                    </h1>
                </SectionContentTitle>
                <div className="bg-white rounded-2xl py-4 mt-4">
                    <ul className="flex p-4 justify-between  space-y-4 ">
                        <li className="flex flex-col items-center">
                            <Image
                                src="./profile.svg"
                                width={60}
                                height={60}
                                alt="menu icon"
                            />
                            <h1 className="mt-2">
                                Livia Bator
                            </h1>
                            <h2 className="text-sm text-[#718EBF]">
                                CEO
                            </h2>
                        </li>
                        <li className="flex flex-col items-center">
                            <Image
                                src="./profile.svg"
                                width={60}
                                height={60}
                                alt="menu icon"
                            />
                            <h1 className="mt-2">
                                Livia Bator
                            </h1>
                            <h2 className="text-sm text-[#718EBF]">
                                CEO
                            </h2>
                        </li>
                        <li className="flex flex-col items-center">
                            <Image
                                src="./profile.svg"
                                width={60}
                                height={60}
                                alt="menu icon"
                            />
                            <h1 className="mt-2">
                                Livia Bator
                            </h1>
                            <h2 className="text-sm text-[#718EBF]">
                                CEO
                            </h2>
                        </li>
                        <li className="flex items-center">
                            <div className="bg-white rounded-full shadow w-10 h-10 flex justify-center items-center">
                                <Image
                                    src="./arrow.svg"
                                    width={15}
                                    height={15}
                                    alt="menu icon"
                                />
                            </div>
                        </li>
                    </ul>
                    <div className="flex justify-around h-10 items-center">
                        <p className="text-[#718EBF]">
                            Write amount
                        </p>
                        <div className="flex bg-[#EDF1F7] overflow-hidden rounded-full">
                            <input
                                type="number"
                                placeholder="525.50"
                                className="bg-[#EDF1F7] w-24 px-4"
                            />
                            <button className="bg-[#1814F3] rounded-full w-20 text-white h-10">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </SectionContent>
        </Section>
    );
}
