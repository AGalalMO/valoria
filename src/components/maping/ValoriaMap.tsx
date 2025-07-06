/* eslint-disable @typescript-eslint/no-explicit-any */
export const ValoriaMap = ({ currentRoad, currentStep }:any) => {
    return (
        <div style={{ border: "2px solid #444", padding: "1rem", margin: "1rem 0" }}>
            <h3>🗺️ Valoria Map View</h3>
            <p>
                Selected Road: <strong>{currentRoad || "None"}</strong>
            </p>
            <p>
                Current Step: <strong>{currentStep || "Not started"}</strong>
            </p>
        </div>
    )
}
