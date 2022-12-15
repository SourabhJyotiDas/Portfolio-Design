// import Head from "next/head";
import React, { useState } from 'react';
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import deved from "../Imgs/dev-ed-wave.png";
import code from "../Imgs/code.png";
import design from "../Imgs/design.png";
import consulting from "../Imgs/consulting.png";
import web1 from "../Imgs/web1.png";
import web2 from "../Imgs/web2.png";
import web3 from "../Imgs/web3.png";
import web4 from "../Imgs/web4.png";
import web5 from "../Imgs/web5.png";
import web6 from "../Imgs/web6.png";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""} id='main'>
            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
                <nav className="py-5 mb-12  dark:text-white sticky top-0 bg-white dark:bg-gray-900 z-10">
                    <ul className="flex justify-between items-center ">
                        <li className="font-burtons text-lg">SOURABH</li>
                        <li>
                            <BsFillMoonStarsFill
                                onClick={() => setDarkMode(!darkMode)}
                                className=" cursor-pointer"
                            />
                        </li>
                        <li>
                            <a
                                className=" text-xs bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-1 border-none rounded-md "
                                href="/"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
                <section className="min-h-screen">

                    <div className="text-center py-10">
                        <h2 className="text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                            SOURABH
                        </h2>
                        <h3 className="text-xl py-2 dark:text-white md:text-3xl">
                            Developer and designer.
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                            Freelancer providing services for programming and design content
                            needs. Join me down below and let's get cracking!
                        </p>
                        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                            <AiFillTwitterCircle />
                            <AiFillLinkedin />
                            <AiFillYoutube />
                        </div>
                        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 relative overflow-hidden mt-20 md:h-96 md:w-96">

                            <img src={deved} layout="fill" objectfit="cover" alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="text-2xl py-1 dark:text-white ">Services I offer</h3>
                        <p className="text-sm py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Since the beginning of my journey as a freelance designer and
                            developer, I've done remote work for
                            <span className="text-teal-500"> agencies </span>
                            consulted for <span className="text-teal-500">startups </span>
                            and collaborated with talanted people to create digital products
                            for both business and consumer use.
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            I offer from a wide range of services, including brand design,
                            programming and teaching.
                        </p>
                    </div>
                    <div className="lg:flex gap-10">
                        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                            <img src={design} width={100} height={100} alt="" />
                            <h3 className="text-lg font-medium pt-8 pb-2  ">
                                Beautiful Designs
                            </h3>
                            <p className="py-2">
                                Creating elegant designs suited for your needs following core
                                design theory.
                            </p>
                            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                            <p className="text-gray-800 py-1">Photoshop</p>
                            <p className="text-gray-800 py-1">Illustrator</p>
                            <p className="text-gray-800 py-1">Figma</p>
                            <p className="text-gray-800 py-1">Indesign</p>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                            <img src={code} width={100} height={100} alt="" />
                            <h3 className="text-lg font-medium pt-8 pb-2 ">
                                Code your dream project
                            </h3>
                            <p className="py-2">
                                Do you have an idea for your next great website? Let's make it a
                                reality.
                            </p>
                            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                            <p className="text-gray-800 py-1">Photoshop</p>
                            <p className="text-gray-800 py-1">Illustrator</p>
                            <p className="text-gray-800 py-1">Figma</p>
                            <p className="text-gray-800 py-1">Indesign</p>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                            <img src={consulting} width={100} height={100} alt="" />
                            <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
                            <p className="py-2">
                                Are you interested in feedback for your current project? I can
                                give you tips and tricks to level it up.
                            </p>
                            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                            <p className="text-gray-800 py-1">Photoshop</p>
                            <p className="text-gray-800 py-1">Illustrator</p>
                            <p className="text-gray-800 py-1">Figma</p>
                            <p className="text-gray-800 py-1">Indesign</p>
                        </div>
                    </div>
                </section>
                <section className="py-10">
                    <div>
                        <h3 className="text-2xl py-1 dark:text-white ">Portofolio</h3>
                        <p className="text-sm py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Since the beginning of my journey as a freelance designer and
                            developer, I've done remote work for
                            <span className="text-teal-500"> agencies </span>
                            consulted for <span className="text-teal-500">startups </span>
                            and collaborated with talanted people to create digital products
                            for both business and consumer use.
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            I offer from a wide range of services, including brand design,
                            programming and teaching.
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1 ">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web1}
                                alt=""

                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web2}
                                alt=""

                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web3}
                                alt=""

                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web4}
                                alt=""

                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web5}
                                alt=""
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web6}
                                alt=""
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
