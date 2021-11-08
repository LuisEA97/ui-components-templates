import React from 'react'
import { Menu } from '@headlessui/react'
import Dropdown from '../../components/Dropdown/Dropdown'
import DuplicateIcon from '../../icons/DuplicateIcon/DuplicateIcon'
import { ClipboardIcon } from '@heroicons/react/solid'
import { MusicNoteIcon } from '@heroicons/react/solid'
import { MicrophoneIcon } from '@heroicons/react/solid'
import { ViewListIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/solid'
import { CogIcon } from '@heroicons/react/solid'
import Button from '../../components/Button/Button'

const Root = () => {
    const testListAction = (text) => {
        console.log(text);
    }
    const testBtnAction = () => {
        alert('soy un boton')
    }
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
    return (
        <div >
            <h1>hola!</h1>
            <DuplicateIcon />
            <ClipboardIcon className="h-5 w-5 text-yellow-600" />
            <div className="py-2 mb-2 border-b">
                <Dropdown head="My options" options={menuList} />
            </div>
            <Button
                type='warning'
                text='Es un botón'
                icon={<i class="fas fa-check-circle self-center mr-2"></i>}
                action={testBtnAction}
            />
        </div>
    )
}

export default Root
