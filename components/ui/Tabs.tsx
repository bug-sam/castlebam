import { ReactElement, ReactNode, useState } from "react";

import "@/styles/tabs.css";

interface TabsProps {
    children: ReactElement<TabProps>[];
}

const Tabs = ({ children }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(children.at(0)?.props.id);

    return (
        <div className="tabs-container">
            <div className="tabs-headers">
                {children.map((tab) => (
                    <div className={`tab-header ${tab.props.id === activeTab ? "selected" : ""}`}
                        key={tab.props.id}
                        onClick={() => setActiveTab(tab.props.id)}
                    >
                        {tab.props.children.find(
                            (child) => child.type === TabHeader
                        )}
                    </div>
                ))}
            </div>
            <div className="tabs-body">
                {children.map((tab) => {
                    const isActive = tab.props.id === activeTab;
                    return (
                        <div
                            key={tab.props.id}
                            style={{ display: isActive ? "block" : "none" }}
                            aria-hidden={!isActive}
                        >
                            {tab.props.children.find(
                                (child) => child.type === TabBody
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

interface TabProps {
    id: string;
    children: ReactElement<TabHeaderProps | TabBodyProps>[];
}

const Tab = ({ children }: TabProps) => <div>{children}</div>;

interface TabHeaderProps {
    children: ReactNode;
}

const TabHeader = ({ children }: TabHeaderProps) => {
    return <div>{children}</div>;
};

interface TabBodyProps {
    children: ReactNode;
}

const TabBody = ({ children }: TabBodyProps) => {
    return <div>{children}</div>;
};

export { Tabs, Tab, TabHeader, TabBody };
