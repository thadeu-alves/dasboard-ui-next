import Image from "next/image";

interface CardProps {
    balance: string;
    cardHolder: string;
    variant: boolean;
}

export function CardBank({
    balance,
    cardHolder,
    variant,
}: CardProps) {
    const blueGradient =
        "bg-gradient-to-r from-[#4C49ED] to-[#0A06F4]";
    const whiteGradient = "border border-[#718EBF]";

    return (
        <div
            className={`w-80 lg:flex-1 lg:h-full p-8 rounded-2xl flex-none snap-center text-white  flex flex-col gap-4 lg:justify-between ${
                variant ? whiteGradient : blueGradient
            }`}
        >
            <div className="flex justify-between items-center">
                <div>
                    <h2
                        className={
                            variant ? "text-black" : ""
                        }
                    >
                        Balance
                    </h2>
                    <h1
                        className={`font-bold text-xl ${
                            variant ? "text-black" : ""
                        }`}
                    >
                        ${balance}
                    </h1>
                </div>
                <Image
                    src="./chip.svg"
                    width={40}
                    height={40}
                    alt="menu icon"
                />
            </div>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-[#718EBF]">
                        CARD HOLDER
                    </h2>
                    <h1
                        className={`font-bold ${
                            variant ? "text-black" : ""
                        }`}
                    >
                        {cardHolder}
                    </h1>
                </div>
                <div>
                    <h2 className="text-[#718EBF]">
                        VALID THRU
                    </h2>
                    <h1
                        className={`font-bold ${
                            variant ? "text-black" : ""
                        }`}
                    >
                        12/22
                    </h1>
                </div>
            </div>
            <div className="border-t-2 border-t-[#718EBF]">
                <h1
                    className={`text-2xl font-bold ${
                        variant ? "text-black" : ""
                    }`}
                >
                    3778 **** **** 1234
                </h1>
            </div>
        </div>
    );
}
