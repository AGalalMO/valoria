import bg from "../../../../assets/backgrounds/modal.png"

export const ModalWrapper = ({ children, classes }: { children: React.ReactNode; classes?:string}) => {
    return (
        <div className={`flex h-full flex-col items-center justify-center gap-8`}>
            <div
                className={`flex min-h-[600px] flex-col items-center justify-center gap-8 border-5 border-[#DC8E2F] p-10 ${classes ? classes : ""}`}
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: "center"
                }}
            >
                {children}
            </div>
        </div>
    )
}