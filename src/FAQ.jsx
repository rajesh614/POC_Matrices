import { useState } from "react";

const faqData = [
    {
        id: 1,
        question: "What is the difference between state and props in React?",
        answer: "props (short for properties) are passed into a component from its parent, making them immutable from within the child component. state is managed internally within the component, is mutable via setter functions, and triggers a re-render whenever its value changes.",
    },
    {
        id: 2,
        question: "Why should you never mutate state directly in React?",
        answer: "React relies on immutable state updates to detect changes and trigger efficient re-renders via its reconciliation (diffing) algorithm. Mutating state directly bypasses this mechanism, leading to stale UI representations, unpredictable side effects, and bugs that are hard to trace.",
    },
    {
        id: 3,
        question: "What is the purpose of the useEffect hook?",
        answer: "useEffect lets you synchronize a component with external systems or perform side effects—such as data fetching, manual DOM manipulations, setting up subscriptions, or managing timers—after the render cycle has completed.",
    },
    {
        id: 4,
        question: "Why are keys required when rendering lists in React?",
        answer: "Keys help React identify which items have changed, been added, or been removed. They provide a stable identity across re-renders, allowing React to optimize the DOM diffing process rather than re-rendering an entire list when a single item changes.",
    },
    {
        id: 5,
        question: "What is 'lifting state up' in React?",
        answer: "Lifting state up is a pattern where shared state is moved from sibling components up to their closest common ancestor. This allows multiple child components that need access to the same data to communicate and stay synchronized through props.",
    },
];

const FAQ = () => {
    const [openIds, setOpenIds] = useState(null);

    const handleToggle = (id) => {
        setOpenIds((prevId) => (prevId === id ? null : id));
    };

    return (
        <>
            <div className="faq-container">
                <div className="faq-header">
                    <h2>React Focused FAQ Questions:</h2>
                </div>
                <div className="faq-body">
                    {faqData.map((question) => {
                        const isOpen = openIds === question.id;
                        return (
                            <div key={question.id}>
                                <button
                                    className="faq-question"
                                    onClick={() => handleToggle(question.id)}>
                                    {question.question}
                                    <span className="faq-arrow">
                                        {isOpen ? "▲" : "▼"}
                                    </span>
                                </button>
                                {isOpen && (
                                    <div>
                                        <p><b>Ans:</b> {question.answer}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default FAQ;
