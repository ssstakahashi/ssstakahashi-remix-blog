import useCanvas from './useCanvas'

const Canvas = (props: any) => {

    const { draw, ...rest } = props
    const ref = useCanvas(draw)

    return <canvas ref={ref} {...rest}> </canvas>
}

export default Canvas