import danger from "../../../assets/icons/danger.svg"
import BorderButton from "../borderButton"

export default function TryAgainModal({ closeModal, headerText1, headerText2, buttonText }: {
    closeModal: VoidFunction,
    buttonText: string;
    headerText1: string;
    headerText2?:string
 }) {
    return (
        <div className="flex h-full w-full flex-col items-center justify-around">
            <div className="flex flex-col items-center gap-4">
                <img src={danger} width={136} height={136} />
                <p className="font-trajan text-center text-[40px] !leading-none font-bold">
                    {headerText1}
                    <br />
                    {headerText2}
                </p>
            </div>
            <BorderButton onClick={closeModal} text={buttonText} />
        </div>
    )
}
