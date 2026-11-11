// import React from "react";

const styles = {
    card: {
        width: "30%",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        borderRadius: "16px",
        padding: "24px 24px 90px 24px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
        border: "1px solid #f1f5f9",
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    title: {
        fontSize: "18px",
        fontWeight: "700",
        color: "#1e293b",
        margin: "0 0 16px 0",
    },
    placeholder: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px dashed #cbd5e1",
        borderRadius: "8px",
        padding: "36px 16px",
        textAlign: "center",
    },
    heading: {
        fontSize: "15px",
        fontWeight: "600",
        color: "#334155",
        margin: "0 0 6px 0",
    },
    subtitle: {
        fontSize: "13px",
        color: "#64748b",
        margin: 0,
    },
};

const Leftpanel = ({ selectedNode }) => {
    return (
        <>
            <div style={styles.card}>
                <h2 style={styles.title}>Node Details</h2>
                {selectedNode ? (
                    <div>
                        <h3 style={styles.heading}>Node {selectedNode.name}</h3>
                        <p>Sales Impacted: {selectedNode.salesImpacted}%</p>
                        <p>Average Sales: {selectedNode.averageSales}%</p>
                        <p>
                            Not Sold: {selectedNode.notSold == null
                                ? "No data"
                                : `${selectedNode.notSold}%`}
                        </p>
                    </div>
                ) : (
                    <div style={styles.placeholder}>
                        <h3 style={styles.heading}>Select a Node</h3>
                        <p style={styles.subtitle}>
                            Click any Node to see its details.
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Leftpanel;
