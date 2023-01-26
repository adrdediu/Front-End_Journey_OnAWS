import { HStack} from "@chakra-ui/react"
import React from "react"

const stageStyle = {
    width:"50px",
    height:"40px",
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
    borderRadius:"50px",
    fontFamily: 'Markazi Text',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "40px",
    filter: "drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25))",
    border: "0.2px solid #000000"
}
const stageStyleNotReady = {
    ...stageStyle,
    backgroundColor:"#F4CE14",
    color:"black"
}

const stageStyleReady ={
    ...stageStyle,
    backgroundColor:"#495E57",
    color:"white"
}

const readyLine = {
    border: "4px solid #495E57"
}

const notReadyLine = {
    border: "1px dashed #495E57"
}

function  stageRenderer(phase){
    
    if(phase === '1')
        return(
            <HStack justifyContent="center"spacing={0}>
                <div style={stageStyleReady}>1</div>
                <hr className="progress-bar-intermediary-lines" style={notReadyLine}/>
                <div style={stageStyleNotReady}>2</div>
                <hr className="progress-bar-intermediary-lines" style={notReadyLine}/>
                <div style={stageStyleNotReady}>3</div>
            </HStack>
        )
    else if (phase === '2')
        return(
        <HStack justifyContent="center" spacing={0}>
            <div style={stageStyleReady}>1</div>
            <hr className="progress-bar-intermediary-lines" style={readyLine}/>
            <div style={stageStyleReady}>2</div>
            <hr className="progress-bar-intermediary-lines" style={notReadyLine}/>
            <div style={stageStyleNotReady}>3</div>
        </HStack>
        )
    else if(phase === '3')
        return(
        <HStack justifyContent="center"spacing={0}>
            <div style={stageStyleReady}>1</div>
            <hr className="progress-bar-intermediary-lines" style={readyLine}/>
            <div style={stageStyleReady}>2</div>
            <hr className="progress-bar-intermediary-lines" style={readyLine}/>
            <div style={stageStyleReady}>3</div>
        </HStack>
        )
}

export default function ProgressBar({phase}) {
    return(
        <div className="progress-bar" >
            {stageRenderer(phase)}
        </div>
    )
}