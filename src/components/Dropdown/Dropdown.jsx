import React, { Fragment } from 'react'
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from '@heroicons/react/solid'


const Dropdown = ({ head, options }) => {
    return (
        <Fragment >
            <Menu as="div" className="w-56 relative">
                <Menu.Button className="inline-flex justify-center px-4 py-2 bg-opacity-20 bg-black rounded-lg font-semibold text-gray-50 text-sm focus:outline-none hover:shadow-md transition-all ease-in-out duration-150" >
                    {head}
                    <ChevronDownIcon
                        className="w-5 h-5 ml-2 -mr-1 "
                    />
                </Menu.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className="inline-flex flex-col shadow-md absolute top-10 left-0 bg-white focus:outline-none rounded-md p-1 w-56"
                    >
                        {
                            options.map((group, i) => {
                                return Array.isArray(group) ? (
                                    <div key={'group_' + i} className="pb-1 mb-1 border-b border-gray-100">
                                        {group.map((element, index) => {
                                            return (
                                                <Menu.Item key={index} disabled={element.disabled} >
                                                    {({ active, disabled }) => (
                                                        <button onClick={() => element.action()} className={`focus:outline-none inline-flex py-1 px-4 font-medium w-full rounded-md ${disabled ? 'text-gray-300' : active ? 'bg-purple-700 text-gray-50' : 'text-gray-800'}`}>
                                                            <div className="w-4 self-center mr-2">
                                                                {element.icon}
                                                            </div>
                                                            {element.title}
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            )
                                        })}
                                    </div>
                                ) : (
                                    <Menu.Item key={'group_' + i} disabled={group.disabled} >
                                        {({ active, disabled }) => (
                                            <button onClick={() => group.action()} className={`focus:outline-none inline-flex py-1 px-4 font-medium w-full rounded-md ${disabled ? 'text-gray-300' : active ? 'bg-purple-700 text-gray-50' : 'text-gray-800'}`}>
                                                <div className="w-4 self-center mr-2">
                                                    {group.icon}
                                                </div>
                                                {group.title}
                                            </button>
                                        )}
                                    </Menu.Item>
                                )
                            })
                        }

                    </Menu.Items>
                </Transition>
            </Menu>
        </Fragment>
    )
}

export default Dropdown
