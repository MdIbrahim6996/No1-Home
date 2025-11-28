import { RiDoubleQuotesR } from "react-icons/ri";

const TestimonialCard = ({
    title,
    description,
    reviewer,
    reverse = false,
    light = true,
}: {
    reverse?: boolean;
    light?: boolean;
    title: string;
    description: string;
    reviewer: { name: string; role: string; image: string };
}) => {
    return (
        <div
            className={`flex md:gap-3 gap-1 ${
                reverse ? "md:flex-row flex-row-reverse" : ""
            }`}
        >
            {" "}
            <div className="card w-1/2 h-120  rounded-md overflow-hidden">
                <img
                    src={reviewer.image}
                    className="h-full w-full object-cover"
                    alt=""
                />
            </div>
            <div
                className={`card w-1/2 ${
                    !light ? "bg-brand-deep-navy" : "bg-brand-light-lime"
                }  rounded-md p-3 flex flex-col justify-between font-raleway`}
            >
                <div>
                    {/* <RiDoubleQuotesR
                                size={50}
                                className="fill-brand-midnight/80 stroke-brand-midnight/50"
                            /> */}
                    <RiDoubleQuotesR
                        size={50}
                        className={`${
                            light
                                ? "fill-brand-deep-navy stroke-brand-deefill-brand-deep-navy"
                                : "fill-brand-light-lime stroke-brand-light-lime"
                        } `}
                    />
                    <p
                        className={`${
                            !light
                                ? "text-brand-light-lime"
                                : "text-brand-deep-navy"
                        } font-medium  font-spaceGrotesk text-2xl mt-4`}
                    >
                        {title}
                    </p>
                </div>
                <div className="leading-5">
                    <p
                        className={`font-spaceGrotesk
                            ${
                                !light
                                    ? "text-brand-light-lime"
                                    : "text-brand-deep-navy"
                            }
                        `}
                    >
                        {description}
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                        <img
                            src={reviewer.image}
                            className="h-10 w-10 object-cover rounded-full"
                            alt=""
                        />
                        <div className="-space-y-0.5 text-sm">
                            <p
                                className={`font-semibold ${
                                    light
                                        ? "text-brand-deep-navy"
                                        : "text-brand-light-lime"
                                } `}
                            >
                                {reviewer.name}
                            </p>
                            <p
                                className={`text-xs ${
                                    light
                                        ? "text-brand-deep-navy"
                                        : "text-brand-light-lime"
                                }`}
                            >
                                {reviewer.role}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
