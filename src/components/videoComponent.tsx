/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { ModalWrapper } from "./features/enterValoria/components/modalWrapper";
import BorderButton from "./shared/borderButton";
import { useTranslation } from "react-i18next";

export default function VideoPlayer({ video, onEnd }: { video: string, onEnd: VoidFunction }) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isLoading, setIsLoading] = useState(true);
        const [isMuted, setIsMuted]=useState(true)
const {t}=useTranslation()
    return (
        <ModalWrapper>
            <div style={{ position: "relative", width: "100%" }}>
                <video
                    ref={videoRef}
                    onEnded={onEnd}
                    autoPlay
                    muted
                    style={{ width: "100%" }}
                    onLoadedData={() => setIsLoading(false)}
                >
                    <source src={video} type="video/mp4" />
                </video>
                {isLoading && (
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(0,0,0,0.5)",
                            color: "white",
                            fontSize: "1.5rem",
                            zIndex: 2,
                        }}
                    >
                        Loading...
                    </div>
                )}
            </div>
            <div className="flex flex-row items-center">
                <BorderButton
                    onClick={() => {
                        if(isMuted)
                        {
                            (videoRef as any).current.muted = false
                            setIsMuted(false)
                           }
                        else
                        {
                            (videoRef as any).current.muted = true
                            setIsMuted(true)
                        }
                            
                    }}
                    text={!isMuted?t('mute'):t('unmute')}
                    size="sm"
                />
                <BorderButton onClick={onEnd} text={t('skip')} size="sm" />
            </div>
        </ModalWrapper>
    )
}