import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { CopyBlock, dracula } from "react-code-blocks";
import code from '../../components/langSnippets/langSnippets'
import ModalInfo from '../../components/ModalInfo/ModalInfo'
import Dropdown from '../../components/Dropdown/Dropdown'
import ListBox from '../../components/ListBox/ListBox'
import Toggle from '../../components/Toggle/Toggle'
import Faq from '../../components/Faq/Faq'
import { MusicNoteIcon } from '@heroicons/react/solid'
import { MicrophoneIcon } from '@heroicons/react/solid'
import { ViewListIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/solid'
import { CogIcon } from '@heroicons/react/solid'
import Button from '../../components/Button/Button'
import VerticalRadio from '../../components/VerticalRadio/VerticalRadio'

const Root = () => {

    const [value, setValue] = useState('')
    const [toggled, setToggled] = useState(false)
    const [currentPlan, setCurrentPlan] = useState({ name: 'test' })
    const testListAction = (text) => {
        console.log(text);
    }
    const testBtnAction = () => {
        alert('soy un boton')
    }
    const handleListValue = (text) => {
        setValue(text)
    }
    const handleToggleValue = (value) => {
        setToggled(value)
    }
    const handlePlanValue = (plan) => {
        setCurrentPlan(plan)
    }
    const options = [
        'This is the first option',
        'Second option',
        'Third one, bla bla',
        'Another option',
        'Extra option: The game'
    ]
    const menuList = [
        [
            {
                title: 'My music',
                icon: <MusicNoteIcon />,
                action() { testListAction('My music') }
            },
            {
                title: 'Podcasts',
                icon: <MicrophoneIcon />,
                action() { testListAction('Podcasts') }
            },
        ],
        [
            {
                title: 'Settings',
                icon: <CogIcon />,
                action() { testListAction('Settings') }
            },

            {
                title: 'Oops!',
                icon: <i className="fas fa-star"></i>,
                action() { testListAction('This should not appear') },
                disabled: true
            }
        ],
        {
            title: 'Another thing',
            icon: <HeartIcon />,
            action() { testListAction('Another thing') }
        },
        {
            title: 'Last thing',
            icon: <ViewListIcon />,
            action() { testListAction('blablablabla') }
        },
    ]
    const optionsDialog = {
        buttonText: 'Modal Info',
        title: 'Información',
        text: 'Éste es un cuadro de texto simple. Puedes utilizarlo para mostrar información al usuario',
        closingText: 'Aceptar'
    }
    const faqTexts = [
        {
            title: 'Why is this here?',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis soluta dolores reprehenderit mollitia enim exercitationem expedita qui quas asperiores officiis?'
        },
        {
            title: 'Otro texto de prueba',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis soluta dolores reprehenderit mollitia enim exercitationem expedita qui quas asperiores officiis?'
        },
        {
            title: 'Quiero una pizza',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis soluta dolores reprehenderit mollitia enim exercitationem expedita qui quas asperiores officiis?'
        },
    ]
    const plans = [
        {
            name: 'Save',
            descr1: 'The cheapiest',
            descr2: 'Starting at $59.99'
        },
        {
            name: 'Regular',
            descr1: 'Everyone loves it',
            descr2: 'Starting at $99.99'
        },
        {
            name: 'Premium',
            descr1: 'Recommended by us!',
            descr2: '$129.99'
        },

    ]

    return (
        <div className="text-center">
            <div className="flex justify-center py-2 mb-2 border-b">
                <div className="h-full flex flex-col self-center justify-center items-center">
                    <Dropdown className="self-center" head="Click me!" options={menuList} theme="#065F46" />
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-4xl">Dropdown menu:</h2>
                    <div className="mt-2 mb-4 text-gray-500">
                        <span>(Dropdown component)</span>
                    </div>
                    <div className="px-2 md:px-12 lg:px-24 text-left">
                        <p className="font-medium text-gray-800">Ideal para implementar en un menú de opciones. <br /> Totalmente accesible y personalizable</p>
                    </div>
                    <div className="my-4">
                        <Link to="/vertical-list"
                            className="px-4 py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-900 hover:shadow-md transition-all ease-in-out duration-200"
                        >
                            <span>Detalles</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="py-2 mb-2 border-b flex justify-center ">
                <div className="md:w-48 self-center">
                    <Button
                        type='standard'
                        text='Standard'
                        action={testBtnAction}
                    />
                    <Button
                        type='danger'
                        text='Danger!'
                        icon={<i class="fas fa-check-circle self-center mr-2"></i>}
                        action={testBtnAction}
                    />
                    <Button
                        type='success'
                        text='Success!'
                        icon={<i class="fas fa-check-circle self-center mr-2"></i>}
                        action={testBtnAction}
                    />
                    <Button
                        type='warning'
                        text='Warning!'
                        icon={<i class="fas fa-check-circle self-center mr-2"></i>}
                        action={testBtnAction}
                    />
                    <Button
                        theme="#DB2777"
                        customTextColor="#FFFFF"
                        text='Custom button'
                        icon={<i class="fas fa-check-circle self-center mr-2"></i>}
                        action={testBtnAction}
                    />
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-4xl">Buttons:</h2>
                    <div className="px-2 md:px-12 mt-4 lg:px-24 text-center">
                        <p className="font-medium text-gray-800">Botones completamente personalizables <br /> Escoge un estilo prediseñado para tu botón, ¡o personaliza los colores a tu gusto!</p>
                    </div>
                    <div className="my-4">
                        <Link to="/vertical-list"
                            className="px-4 py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-900 hover:shadow-md transition-all ease-in-out duration-200"
                        >
                            <span>Detalles</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-2 mb-2 border-b">
                <div className="h-full md:w-48 flex flex-col self-center justify-center items-center">
                    <ModalInfo
                        options={optionsDialog}
                        buttonTheme="#065F46"
                    />
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-4xl">Alert:</h2>
                    <div className="mt-2 mb-4 text-gray-500">
                        <span>(ModalInfo component)</span>
                    </div>
                    <div className="px-2 md:px-12 lg:px-24 text-center">
                        <p className="font-medium text-gray-800">¿Quieres mostrar un aviso a tus usuarios? <br /> Éste componente es ideal para mostrar cuadros de textos</p>
                    </div>
                    <div className="my-4">
                        <Link to="/vertical-list"
                            className="px-4 py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-900 hover:shadow-md transition-all ease-in-out duration-200"
                        >
                            <span>Detalles</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-2 mb-2 border-b">
                <div className="flex flex-col self-center justify-center items-center">
                    <div className="h-full md:w-64">
                        <ListBox
                            options={options}
                            callBack={handleListValue}
                            text="List box..."
                            theme="#065F46"

                />
                    </div>
                    <div className="my-3">
                        <span className="ml-2 self-center font-semibold">{value}</span>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-4xl">Lists:</h2>
                    <div className="mt-2 mb-4 text-gray-500">
                        <span>(ListBox component)</span>
                    </div>
                    <div className="px-2 md:px-12 lg:px-24 text-center">
                        <p className="font-medium text-gray-800">¿Buscas implementar un select menu? <br /> Éste componente es ideal para permitir a tus usuarios seleccionar entre múltiples opciones</p>
                    </div>
                    <div className="my-4">
                        <Link to="/vertical-list"
                            className="px-4 py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-900 hover:shadow-md transition-all ease-in-out duration-200"
                        >
                            <span>Detalles</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-2 mb-2 border-b">
                <div className="flex flex-col self-center justify-center items-center">
                    <div className="h-full flex flex-row md:w-64">
                        <Toggle text="Toggle me!" callBack={handleToggleValue} theme="#065F46" />
                        <span className="font-semibold ml-2">{toggled ? 'Active' : 'Not active'}</span>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-4xl">Toggles!:</h2>
                    <div className="mt-2 mb-4 text-gray-500">
                        <span>(Toggle component)</span>
                    </div>
                    <div className="px-2 md:px-12 lg:px-24 text-center">
                        <p className="font-medium text-gray-800">
                            Toggle me and see the magic!
                        </p>
                    </div>
                    <div className="my-4">
                        <Link to="/vertical-list"
                            className="px-4 py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-900 hover:shadow-md transition-all ease-in-out duration-200"
                        >
                            <span>Detalles</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-2 mb-2 border-b">
                <div className="flex flex-col self-center justify-center items-center">
                    <div className="h-full flex flex-row md:w-96">
                        <Faq faqs={faqTexts} buttonColor="#D1FAE5" buttonTextColor="#065F46" />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-4xl">Collapsible element:</h2>
                    <div className="mt-2 mb-4 text-gray-500">
                        <span>(Faq component)</span>
                    </div>
                    <div className="px-2 md:px-12 lg:px-24 text-center">
                        <p className="font-medium text-gray-800">
                            ¿Quieres responder a las dudas más frecuentes que tengan tus usarios? ¡Ésto es para tí!
                        </p>
                    </div>
                    <div className="my-4">
                        <Link to="/vertical-list"
                            className="px-4 py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-900 hover:shadow-md transition-all ease-in-out duration-200"
                        >
                            <span>Detalles</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="py-2 mb-2 border-b flex justify-center ">
                <VerticalRadio menu={plans} theme="#065F46" callBack={handlePlanValue} />
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-4xl">Choose an option component:</h2>
                    <div className="mt-2 mb-4 text-gray-500">
                        <span>(VerticalRadio component)</span>
                    </div>
                    <div className="px-2 md:px-12 lg:px-24 text-left">
                        <p className="font-medium text-gray-800">Te permite escoger una sola de las opciones.<br /> Ideal para permitir a los usuarios escoger entre uno de los métodos de compra que existen, o para escoger un tipo de suscripción</p>
                    </div>
                    <div className="my-4">
                        <Link to="/vertical-list"
                            className="px-4 py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-900 hover:shadow-md transition-all ease-in-out duration-200"
                        >
                            <span>Detalles</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Root
