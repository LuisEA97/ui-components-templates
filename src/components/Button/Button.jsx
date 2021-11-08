import React, { Fragment } from 'react'

const Button = ({ type, text, icon, action }) => {
    const btnColor = (text) => {
        switch (text) {
            case 'standard':
                return {
                    bg: 'bg-blue-700',
                    hover: 'bg-blue-800'
                }

            case 'warning':
                return {
                    bg: 'bg-yellow-600',
                    hover: 'bg-yellow-700'
                }

            case 'danger':

                return {
                    bg: 'bg-red-700',
                    hover: 'bg-red-800'
                }

            case 'success':
                return {
                    bg: 'bg-green-700',
                    hover: 'bg-green-800'
                }

            default:
                break;
        }
    }
    return (
        <Fragment>
            <button onClick={() => action()} className={`inline-flex py-1 px-4 rounded-md font-semibold text-gray-50 hover:${btnColor(type).hover} ${btnColor(type).bg} transition-all ease-in-out duration-200 hover:shadow`} >
                {icon}
                <span>{text}</span>
            </button>
        </Fragment>
    )
}

export default Button
