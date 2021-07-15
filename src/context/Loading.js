import React, { useState } from "react";

 export const LoaderContext = React.createContext();

 export function LoaderContextController({ children }) {
  const [loading, setLoading] = useState(false);

  const toggleLoading = (toggle) => {
    setLoading(toggle);
  };

  return (
    <LoaderContext.Provider
      value={{
        toggleLoading,
        loading,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
}

export { LoaderContext as default };
