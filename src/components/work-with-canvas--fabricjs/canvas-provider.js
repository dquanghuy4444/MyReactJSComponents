import {
    useCallback,
    createContext,
    useState,
} from "react"
import { fabric } from "fabric"
import { initAligningGuidelines } from "../components/handlers/aligning_guidelines"

export const CanvasContext = createContext([])

export const CanvasProvider = ({ children }) => {
    const [canvas, setCanvas] = useState(null)
    const [activeObject, setActiveObject] = useState(null)

    const initCanvas = useCallback((el) => {
        const canvasOptions = {
            preserveObjectStacking: true,
            selection: true,
            defaultCursor: "default",
            backgroundColor: "#f3f3f3",
        }
        let c = new fabric.Canvas(el, canvasOptions)
        initAligningGuidelines(c)
        c.renderAll()
        setCanvas(c)
    }, [])

    const loadFromJSON = useCallback((el, json) => {
        let c = new fabric.Canvas(el)
        c.loadFromJSON(
            json,
            () => {
                c.renderAll.bind(c)
                c.setWidth(json.width)
                c.setHeight(json.height)
            },
            function(o, object) {
                fabric.log(o, object)
            })
        c.renderAll()
        setCanvas(c)
    }, [])

    return (
        <CanvasContext.Provider
            value={{ canvas, initCanvas, loadFromJSON, activeObject, setActiveObject }}
        >
            {children}
        </CanvasContext.Provider>
    )
}
