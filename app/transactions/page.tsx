import { CardBank } from "@/components/CardBank";
import { Section } from "@/components/Section";
import { SectionContent } from "@/components/Section/SectionContent";
import { SectionContentTitle } from "@/components/Section/SectionContentTitle";
import Image from "next/image";

export default function Transactions() {
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
                        My Expense
                    </h1>
                </SectionContentTitle>
                <div className="bg-white p-6 rounded-2xl mt-4">
                    <ul className="grid grid-cols-6 items-baseline">
                        <li>
                            <div className="h-32 w-12 bg-[#EDF0F7] rounded-2xl"></div>{" "}
                            Month
                        </li>
                        <li>
                            <div className="h-40 w-12 bg-[#EDF0F7] rounded-2xl"></div>{" "}
                            Month
                        </li>
                        <li>
                            <div className="h-12 w-12 bg-[#EDF0F7] rounded-2xl"></div>{" "}
                            Month
                        </li>
                        <li>
                            <div className="h-20 w-12 bg-[#EDF0F7] rounded-2xl"></div>{" "}
                            Month
                        </li>
                        <li>
                            <div className="h-52 w-12 bg-[#16DBCC] rounded-2xl"></div>{" "}
                            Month
                        </li>
                        <li>
                            <div className="h-44 w-12 bg-[#EDF0F7] rounded-2xl"></div>{" "}
                            Month
                        </li>
                    </ul>
                </div>
            </SectionContent>

            <SectionContent className="lg:col-span-2 lg:w-full">
                <SectionContentTitle>
                    <h1 className="font-bold text-xl">
                        Recent Transaction
                    </h1>
                </SectionContentTitle>
                <div className="mt-4 flex flex-col bg-white rounded-2xl p-4 space-y-4 ">
                    <nav className="flex justify-around">
                        <ul className="text-blue-600 border-b-2 border-blue-600 px-4">
                            All Transaction
                        </ul>
                        <ul className=" px-4">Income</ul>
                        <ul className=" px-4">Expense</ul>
                    </nav>

                    <ul className="w-full space-y-4">
                        <li className="flex w-full justify-between items-center">
                            <div className="flex">
                                <Image
                                    src="./arrow-top.svg"
                                    width={40}
                                    height={40}
                                    alt="arrow point to top"
                                    className="scale-y-[-1]"
                                />
                                <div className="ml-4">
                                    <h1 className="text-md font-bold">
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
                                    src="./arrow-top.svg"
                                    width={40}
                                    height={40}
                                    alt="arrow point to top"
                                />
                                <div className="ml-4">
                                    <h1 className="text-md font-bold">
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
                                    src="./arrow-top.svg"
                                    width={40}
                                    height={40}
                                    alt="arrow point to top"
                                />
                                <div className="ml-4">
                                    <h1 className="text-md font-bold">
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
                </div>
            </SectionContent>
        </Section>
    );
}
