import React, { useState } from 'react'
import { CopyBlock, dracula } from "react-code-blocks";
import code from '../../components/langSnippets/langSnippets'
import VerticalRadio from '../../components/VerticalRadio/VerticalRadio'

const VerticalList = () => {
    const [currentPlan, setCurrentPlan] = useState({ name: 'test' })
    const handlePlanValue = (plan) => {
        setCurrentPlan(plan)
    }
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
        <div>
            <div className="py-2 mb-2 border-b flex justify-center ">
                <VerticalRadio menu={plans} theme="#065F46" callBack={handlePlanValue} />
                <div className="w-1/2 text-left shadow-2xl">
                    <CopyBlock
                        language="jsx"
                        text={code["verticalRadioCode"]}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
            </div>
        </div>
    )
}

export default VerticalList
