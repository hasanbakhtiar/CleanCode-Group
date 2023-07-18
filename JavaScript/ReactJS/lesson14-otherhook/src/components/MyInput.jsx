import React, { forwardRef, useImperativeHandle } from 'react'

const MyInput = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        hi: sayhi
    }))

    const sayhi = () => {
        alert('hello')
    }
    return (
        <input type="text" />
    )
})

export default MyInput