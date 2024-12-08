import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
    return (
        <div className="flex-justify-evenly">
            <div>
            <img
                src="/Shop List.png" // Replace this with the actual leaf image path
                alt="Leaf"
                className="w-[1920px] h-[410px]" />
        </div>
        <div>
            <img
                src="/About us.png" // Replace this with the actual leaf image path
                alt="Leaf"
                className="w-[1320px] h-[634px] top-[530]" />
        </div>
        <div>
                <img
                    src="/Why chose us.png" // Replace this with the actual leaf image path
                    alt="Leaf"
                    className="w-[1320px] h-[765px]" />
            </div>
            <div>
                <img
                    src="/Team Member.png" // Replace this with the actual leaf image path
                    alt="Leaf"
                    className="w-[1320px] h-[686px]" />
            </div>
            <div>
                <img
                    src="/Testimonials.png" // Replace this with the actual leaf image path
                    alt="Leaf"
                    className="w-[1320px] h-[765px]" />
            </div>
            <div>
                <img
                    src="/Food Menu.png" // Replace this with the actual leaf image path
                    alt="Leaf"
                    className="w-[1320px] h-[941px]" />
            </div>
            <div>
                <img
                    src="/Component 75.png" // Replace this with the actual leaf image path
                    alt="Leaf"
                    className="w-[1920px] h-[774px]" />
            </div>
    </div>

    );
}
export default AboutUs;