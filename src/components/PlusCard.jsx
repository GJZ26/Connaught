import { useEffect, useRef, useState } from 'react'
import '../assets/stylesheets/PlusCard.css'


export default function PlusCard({
    numberToShow,
    description,
    time = 1
}) {

    return (
        <div className="plus-card">
            <h4>
                {
                    numberToShow
                }
            </h4>
            <span>
                {
                    description
                }
            </span>
        </div>
    )
}