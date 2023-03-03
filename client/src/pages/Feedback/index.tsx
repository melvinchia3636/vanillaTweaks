/* eslint-disable no-shadow */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Listbox, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import React, { Fragment, useState } from "react";
import DeclarationHeader from "../../components/DeclarationHeader";

const VERSION = [
  "1.11",
  "1.12",
  "1.13",
  "1.14",
  "1.15",
  "1.16",
  "1.17",
  "1.18",
  "1.19",
];

function Feedback() {
  const [selected, setSelected] = useState(VERSION[VERSION.length - 1]);

  return (
    <div className="w-full mt-20 sm:pb-20 text-white flex flex-col items-center">
      <DeclarationHeader title="Feedback" />
      <div className="w-[calc(75%+3rem)] mt-16 p-6 bg-[#E99743] mb-4 rounded-md text-white shadow-md">
        For questions about datapacks/resource packs, or to get help on how to
        install, please&nbsp;
        <a
          href="https://discord.com/invite/qG53qwF"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-[1.5px]"
        >
          join our Discord Server
        </a>
        &nbsp; for quicker help.
      </div>
      <div className="pb-16 pt-4 w-3/4">
        <p className="leading-8">
          Feedback is incredibly useful for the Vanilla Tweaks team! It gives us
          unique ideas and allows us to fix any bugs that slipped through
          development. The Vanilla Tweaks team will be notified when you submit
          a report and adding an email will allow us to contact you if something
          isn&apos;t quite clear. Keep in mind that we might not be able to
          respond to all feedback, as it can be quite busy at times.
          <br />
          Use the form below and try to be as specific as possible. Thank you
          for taking the time to do so!
        </p>
        <form className="mt-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="John Doe"
              className="w-full p-4 rounded-md bg-neutral-700 text-white placeholder-neutral-500 shadow-md"
            />
            <label htmlFor="email" className="mt-4 font-semibold">
              Email (optional)
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@gmail.com"
              className="w-full p-4 rounded-md bg-neutral-700 text-white placeholder-neutral-500 shadow-md"
            />
            <label htmlFor="type" className="mt-4 font-semibold">
              Type
            </label>
            <div className="flex gap-y-2 gap-x-6 flex-wrap">
              {["Suggestions", "Issues", "Other"].map((_type, index) => (
                <div className="inline-flex items-center">
                  <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor={_type.toLowerCase()}
                    data-ripple-dark="true"
                  >
                    <input
                      id={_type.toLowerCase()}
                      name="type"
                      type="radio"
                      checked={index === 0}
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-[1.5px] border-blue-gray-200 text-[#E99743] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#E99743] checked:before:bg-[#E99743] hover:before:opacity-10"
                    />
                    <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[#E99743] opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <circle data-name="ellipse" cx="8" cy="8" r="8" />
                      </svg>
                    </div>
                  </label>
                  <label
                    className="mt-px cursor-pointer select-none font-light"
                    htmlFor={_type.toLowerCase()}
                  >
                    {_type}
                  </label>
                </div>
              ))}
            </div>
            <label htmlFor="subject" className="mt-4 font-semibold">
              Subject
            </label>
            <div className="flex gap-y-2 gap-x-6 flex-wrap">
              {[
                "Resource Packs",
                "Datapacks",
                "Crafting Tweaks",
                "Website / Discord",
              ].map((_subject, index) => (
                <div className="inline-flex items-center">
                  <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor={_subject.toLowerCase()}
                    data-ripple-dark="true"
                  >
                    <input
                      id={_subject.toLowerCase()}
                      name="subject"
                      type="radio"
                      checked={index === 3}
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-[1.5px] border-blue-gray-200 text-[#E99743] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#E99743] checked:before:bg-[#E99743] hover:before:opacity-10"
                    />
                    <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[#E99743] opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <circle data-name="ellipse" cx="8" cy="8" r="8" />
                      </svg>
                    </div>
                  </label>
                  <label
                    className="mt-px cursor-pointer select-none font-light"
                    htmlFor={_subject.toLowerCase()}
                  >
                    {_subject}
                  </label>
                </div>
              ))}
            </div>
            <label htmlFor="version" className="font-semibold">
              Version
            </label>
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-neutral-700 p-4 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <Icon
                      icon="uil:angle-down"
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-neutral-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {VERSION.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-4 pl-10 pr-4 ${
                            active
                              ? "bg-neutral-600 text-neutral-400"
                              : "text-neutral-400"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected
                                  ? "font-semibold text-white"
                                  : "font-normal"
                              }`}
                            >
                              {person}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                                <Icon
                                  icon="uil:check"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
            <label htmlFor="feedback" className="mt-4 font-semibold">
              Feedback
            </label>
            <textarea
              name="feedback"
              id="feedback"
              className="w-full p-4 rounded-md bg-neutral-700 text-white placeholder-neutral-500 resize-none shadow-md"
              placeholder="I think you should add..."
              rows={10}
            />
            <button
              type="submit"
              className="w-full p-4 rounded-md text-lg bg-[#E99743] hover:bg-[#dd8a38] transition-all font-semibold mt-8 text-white shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
