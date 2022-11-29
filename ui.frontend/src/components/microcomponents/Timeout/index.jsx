import React from "react";

const Timeout = () => {
    const [counter, setCounter] = React.useState(600);

    React.useEffect(() => {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);
    if (counter === 0) {
      window.location.replace(
        // "http://localhost:4502/content/compass-login/us/en/home.html?wcmmode=disabled"
      );
    }
  
    return (
      <div>
        <span className="timer">{counter}</span>
        <p className="seconds">seconds</p>
      </div>
    );
}

export default Timeout;