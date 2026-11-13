import { useState } from "react";
import "./App.css";
import Leftpanel from "./Leftpanel";
import Rightpanel from "./Rightpanel";
import Filter from "./Filter";
import FAQ from "./FAQ";
import Forms from "./Forms";

const nodes = [
    {
        id: 1,
        name: "A",
        salesImpacted: 88,
        averageSales: 12,
        notSold: 0,
        level: "high",
    },
    {
        id: 2,
        name: "B",
        salesImpacted: 20,
        averageSales: 79,
        notSold: 1,
        level: "medium",
    },
    {
        id: 3,
        name: "C",
        salesImpacted: 60,
        averageSales: 37,
        notSold: 3,
        level: "high",
    },
    {
        id: 4,
        name: "D",
        salesImpacted: 41,
        averageSales: 36,
        notSold: 28,
        level: "medium",
    },
];

function App() {
    const [selectedNode, setSelectedNode] = useState(nodes[0]);
    const [selectedMetric, setSelectedMetric] = useState("sales_impacted");

    const metricValues = {
        sales_impacted: "salesImpacted",
        average_sales: "averageSales",
        not_sold: "notSold",
    };

    const getMetricLevel = (value) => {
        if (value < 33.33) return "low";
        if (value < 66.67) return "medium";
        return "high";
    };

    return (
        <div className="container">
            <Leftpanel selectedNode={selectedNode} />

            <main className="product-card-container">
                <div className="panel-header">
                    <div>
                        <h1>NODES</h1>
                    </div>
                </div>

                <div className="node-grid">
                    {nodes.map((node) => (
                        <button
                            key={node.id}
                            type="button"
                            className={`node-card ${getMetricLevel(node[metricValues[selectedMetric]])} ${selectedNode.id === node.id ? "active" : ""}`}
                            onClick={() => setSelectedNode(node)}>
                            <h3 className="node-title">{node.name}</h3>
                        </button>
                    ))}
                </div>
                <Filter />
                <FAQ />
                <Forms />
            </main>

            <aside className="panel right-panel">
                <Rightpanel
                    selectedMetric={selectedMetric}
                    onMetricChange={setSelectedMetric}
                />
            </aside>
        </div>
    );
}

export default App;
