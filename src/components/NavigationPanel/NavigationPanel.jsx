import "../NavigationPanel/NavigationPanel.css";

const NavigationPanelCategories = ({ category, quantity }) => {
    return (
        <div>
            <strong>{category}</strong>
            <p>{quantity}</p>
        </div>
    );
};

const NavigationPanelYears = ({ year }) => {
    return (
        <div>
            <p>{year} Year</p>
        </div>
    );
};

const NavigationPanelStates = ({ state }) => {
    return (
        <div>
            <p>{state}</p>
        </div>
    );
};

const NavigationPanelChannels = ({ channel }) => {
    return (
        <div>
            <p>- {channel}</p>
        </div>
    );
};

const NavigationPanelSerials = ({ serial_type }) => {
    return (
        <div>
            <p>- {serial_type}</p>
        </div>
    );
};

export { NavigationPanelCategories };
export { NavigationPanelYears };
export { NavigationPanelStates };
export { NavigationPanelChannels };
export { NavigationPanelSerials };
