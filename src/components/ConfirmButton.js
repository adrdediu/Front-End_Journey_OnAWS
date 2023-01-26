
import { HStack } from "@chakra-ui/react"
export default function ConfirmButton(props) {
    return(
        <button className="confirm-button" type={props.type} onClick={props.onSubmit}>
            <HStack justify="center">
                <p>{props.title}</p>
            </HStack>
        </button>
    )
}