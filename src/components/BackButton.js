import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function BackButton(props) {
    return (
        <Link to={props.href}>
        <button className="back-button">
            <HStack justify="center">
                <FontAwesomeIcon icon={faChevronLeft}/>
                <p>Back</p>
            </HStack>
        </button>
        </Link>
    )
}