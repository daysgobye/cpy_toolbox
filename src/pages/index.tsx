import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
//@ts-ignore
import pegLogo from "../images/peglogo.jpg";

export default function IndexPage() {
  const pages = [
    {
      title: "Keyboard Tester",
      link: "/tester",
      description:
        "This is a simple keyboard tester that allows you to test your keyboard switches / build and make sure everything works",
    },
    {
      title: "Build Guide Generator",
      link: "/kb-bg",
      description:
        "This simple tool goes over a list of questions about your board and spits out a pretty good build guide for your keyboard.",
    },
    {
      title: "98",
      link: "/98",
      description:
        "98 is a virtual desktop built around Boardsource python. It contains simple tools like a terminal, ide and file browser.",
    },
    {
      title: "Ide",
      link: "/ide",
      description: "The same ide from 98 just on its own page.",
    },
    {
      title: "Terminal",
      link: "/terminal",
      description: "The same terminal from 98 just on its own page.",
    },
    {
      title: "Tool Settings",
      link: "/settings",
      description: "Settings from 98 just on its own page.",
    },
    {
      title: "POS",
      link: "/pos",
      description: "a bs pos",
    },
    {
      title: "menu left",
      link: "/menu1",
      description: "for the left screen",
    },
    {
      title: "menu center",
      link: "/menu2",
      description: "for the center screen",
    },
    {
      title: "menu right",
      link: "/menu3",
      description: "for the right screen",
    },
  ];
  return (
    <Layout>
      <div className="min-h-full bg-pink flex flex-1 h-full">
        <div className="grid gap-4 grid-cols-6	bg-pink p-4 pb-20 h-1/6	">
          <div className="col-span-full flex justify-between	h-50">
            <div className="bg-white m-5 p-2 border-2 border-black shadow-[6px_6px_0_rgba(0,0,0,1)] -rotate-3	max-h-28">
              <h2 className="text-5xl p-3 m-2 ">Hey.</h2>
            </div>

            <div className="bg-white m-8 p-2 border-2 border-black shadow-[6px_6px_0_rgba(0,0,0,1)] rotate-[16deg]	">
              <h2 className="text-5xl p-5 m-9">Welcome!! 🤙</h2>
            </div>
          </div>
          <div className="col-span-3 p-5 border-2   border-black bg-yellow">
            <h2 className="text-3xl mb-2">What is Peg Toolbox?</h2>
            <div className="flex">
              <p>
                Peg toolbox is a playground first and foremost. After that it is
                a collection of tools we have made for our selfs to use / learn
                with.
              </p>
              <div className=" static border-2 border-black bg-white shadow-[4px_4px_0_rgba(0,0,0,1)] p-4 pb-8 m-4 rotate-[-2deg] transform hover:rotate-[2deg] transition duration-250 ease-in-out	">
                <img
                  src={pegLogo}
                  alt="peg logo"
                  className="border-2 border-black "
                />
                <p className="text-6xl absolute rotate-[18deg] top-0 right-0 translate-x-[.75em] transform hover:rotate-[2deg] transition duration-250 ease-in-out">
                  🌭
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 p-5 border-2 border-black bg-light-blue">
            <h2 className="text-3xl mb-2">Available pages:</h2>
            <table className="static table-auto bg-white border-collapse border-2 border-black w-full">
              <thead>
                <tr>
                  <th className="border-2 border-black p-2">Page</th>
                  <th className="border-2 border-black p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page, i) => (
                  <tr>
                    <td className="border-2 border-black p-2">
                      <Link className="underline" to={page.link}>
                        {page.title}
                      </Link>
                    </td>
                    <td className="border-2 border-black p-2">
                      {page.description}
                    </td>
                  </tr>
                ))}
              </tbody>
              <p className="text-6xl absolute rotate-[40deg] right-0 transform hover:rotate-[2deg] transition duration-250 ease-in-out ">
                🐣
              </p>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export const Head: HeadFC = () => <title>cpy toolbox</title>;
