import React, { useState } from 'react'
import Dialog from '../../components/Dialog/Dialog'
import Dropdown from '../../components/Dropdown/Dropdown'
import ListBox from '../../components/ListBox/ListBox'
import { MusicNoteIcon } from '@heroicons/react/solid'
import { MicrophoneIcon } from '@heroicons/react/solid'
import { ViewListIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/solid'
import { CogIcon } from '@heroicons/react/solid'
import Button from '../../components/Button/Button'

const Root = () => {
    const [value, setValue] = useState('')
    const testListAction = (text) => {
        console.log(text);
    }
    const testBtnAction = () => {
        alert('soy un boton')
    }
    const handleListValue = (text) => {
        setValue(text)
    }

    const options = [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'aaaaaa'
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
        openButton: '',
        title: '',
        text: '',
        type: 'dialog'
    }
    return (
        <div >
            <div className="py-2 mb-2 border-b">
                <Dropdown head="My options" options={menuList} />
            </div>
            <Button
                type='warning'
                text='Es un botón'
                icon={<i class="fas fa-check-circle self-center mr-2"></i>}
                action={testBtnAction}
            />
            <div className="py-2 mb-2 border-b">
                <Dialog />
            </div>
            <div className="py-2 mb-2 border-b inline-flex">
                <ListBox
                    options={options}
                    callBack={handleListValue}
                    text="Select a value..."

                />
                <span className="ml-2 self-center font-semibold">{value}</span>
            </div>
        </div>
    )
}

export default Root
