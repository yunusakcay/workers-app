import { Fragment } from "react"
import Card from "./Card"
import Button from "./Button"
import ReactDOM from 'react-dom'


const Backdrop = (props) => {
    return (
        <div className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0 left-0" onClick={props.onConfirm}></div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className="errorModal">
            <Card className="w-[36rem] p-[0] z-20">
                <header className="bg-orange-500 text-white rounded-t-xl p-4 text-xl text-center">{props.title}</header>
                <section className="p-4">{props.message}</section>
                <footer className="p-4 flex justify-end">
                    <Button className="w-32" onClick={props.onConfirm}>Tamam</Button>
                </footer>
            </Card>
        </div>
    )
}

const ErrorModal = (props) => {
    const { error, onConfirm } = props;
    const { title, message } = error;

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={onConfirm} />,
                document.getElementById("backdrop-root")
            )}

            {ReactDOM.createPortal(
                <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
                document.querySelector("#overlay-root")
            )}
        </Fragment>
    );
};

export default ErrorModal