import bgModal from "../../assets/backgrounds/modal.png"
import dangerImg from "../../assets/icons/danger.svg"
import yes from "../../assets/icons/yes.svg"
import no from "../../assets/icons/noCrop.svg"
import ImageButton from "../shared/imageButton"
import { MAP_MODAL_TYPE } from "../../types/Enums"
import BorderButton from "../shared/borderButton"
import type { MapModalPropsType } from "../../types/InteractiveMap"
export default function MapModal({
    onClickChangeRoute,
    onClickCancelChangeRoute,
    modalOptions,
    onSelectSoliderPercentage,
    askForMen,
    continueWithoutMoreMen
}: MapModalPropsType) {
    return (
        <>
          
            {modalOptions?.isOpen ? (
                <div className="absolute top-0 left-0 z-[1000] flex h-full w-full items-center justify-center">
                    <div
                        style={{
                            backgroundImage: `url(${bgModal})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}
                        className={`flex min-w-[750px] flex-col items-center justify-center gap-6 border-5 border-[#DC8E2F] p-8`}
                    >
                        {modalOptions.modalType == MAP_MODAL_TYPE.CHANGE_ROUTE ? (
                            <>
                                <div className="flex items-center">
                                    <img src={dangerImg} width={120} height={120} />
                                    <p className="text-3xl font-bold text-white"> CHANGE ROUTE</p>
                                </div>
                                <p className="text-2xl text-white">
                                    do you want to change the Route ?
                                </p>
                                <div className="flex w-[400px] items-center justify-between">
                                    <ImageButton
                                        icon={yes}
                                        onClick={onClickChangeRoute}
                                        text="YES"
                                    />
                                    <ImageButton
                                        icon={no}
                                        onClick={onClickCancelChangeRoute}
                                        text="NO"
                                    />
                                </div>
                            </>
                        ) : modalOptions.modalType == MAP_MODAL_TYPE.SOLIDER_PERCENTAGE ? (
                            <>
                                <div className="flex items-center">
                                    <img src={dangerImg} width={120} height={120} />
                                    <p className="text-3xl font-bold text-white"> Select</p>
                                </div>
                                <p className="text-2xl text-white">
                                    Choose Solider Percentage You Need To change
                                </p>
                                <div className="flex w-[600px] items-center justify-between">
                                    <BorderButton
                                        bottomBorder={false}
                                        onClick={onSelectSoliderPercentage}
                                        text="70%"
                                    />
                                    <BorderButton
                                        bottomBorder={false}
                                        onClick={onSelectSoliderPercentage}
                                        text="60%"
                                    />
                                    <BorderButton
                                        bottomBorder={false}
                                        onClick={onSelectSoliderPercentage}
                                        text="50%"
                                    />
                                </div>
                            </>
                        ) : modalOptions.modalType == MAP_MODAL_TYPE.INCREASE_SOLDIERS ? (
                            <>
                                <div className="flex items-center">
                                    <img src={dangerImg} width={120} height={120} />
                                    <p className="text-3xl font-bold text-white"> Select</p>
                                </div>
                                <p className="text-2xl text-white">
                                    Enemies ahead Do you want to increase soldiers
                                </p>
                                <div className="flex w-[400px] items-center justify-between">
                                    <ImageButton icon={yes} onClick={askForMen} text="YES" />
                                    <ImageButton
                                        icon={no}
                                        onClick={continueWithoutMoreMen}
                                        text="NO"
                                    />
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            ) : null}
        </>
    )
}

 