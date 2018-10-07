import * as React from "react";

const RegisterContext = React.createContext({
  registerLayer: null,
  unregisterLayer: null
});

export default RegisterContext;
