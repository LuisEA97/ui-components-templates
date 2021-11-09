import React, { useState } from 'react'
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
    const [planSelected, setPlanSelected] = useState({})
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
        /* setPlanSelected(plan) */
        console.log(plan);
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
                <Dropdown head="Dropdown menu" options={menuList} theme="#065F46" />
            </div>
            <Button
                type='warning'
                text='Es un botón'
                icon={<i class="fas fa-check-circle self-center mr-2"></i>}
                action={testBtnAction}
            />
            <div className="py-2 mb-2 border-b flex justify-center ">
                <ModalInfo
                    options={optionsDialog}
                    buttonTheme="#065F46"
                />
            </div>
            <div className="py-2 mb-2 border-b flex flex-col justify-center ">
                <div className="self-center">
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
            <div className="py-2 mb-2 border-b flex justify-center ">
                <Toggle text="Toggle me!" callBack={handleToggleValue} theme="#065F46" />
                <span className="font-semibold ml-2">{toggled ? 'Active' : 'Not active'}</span>
            </div>
            <div className="py-2 mb-2 border-b flex justify-center ">
                <Faq faqs={faqTexts} buttonColor="#D1FAE5" buttonTextColor="#065F46" />
            </div>
            <div className="py-2 mb-2 border-b flex justify-center ">
                <VerticalRadio menu={plans} theme="#065F46" callBack={handlePlanValue} />
            </div>
            <span>{planSelected.name}</span>
        </div>
    )
}

export default Root
