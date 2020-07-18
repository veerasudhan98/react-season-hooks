import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
import useLocation from "./hooks/useLocation";

const App = () => {
    const [lat, errorMessage] = useLocation();

    let content;
    if (lat) {
        content = (
            <div>
                <SeasonDisplay lat={lat} />
            </div>
        );
    } else if (errorMessage) {
        content = <div>Error:{errorMessage}</div>;
    } else {
        content = <Loader message="Please accept the request" />;
    }

    return <div className="border red">{content}</div>;
};
ReactDOM.render(<App />, document.querySelector("#root"));
