import React, { useState, useContext } from "react";
import axios from "axios";
import LoaderContext from "./Loading";

export const LoginContext = React.createContext();

export function LoginContextController({ children }) {
  let intialState = { data: null };
  const { toggleLoading } = useContext(LoaderContext);
  const [userBalanceLoading, setUserBalanceLoading] = useState(intialState);
  const [userBalanceState, setUserBalanceState] = useState({});
  const [profileState, setProfileState] = useState(intialState);
  const [updateProfileState, setUpdateProfileState] = useState({});
  const [resetLinkState, setResetLinkState] = useState({ data: null });
  const [passwordState, setPasswordState] = useState({});
  const [resetPasswordState, setResetPasswordState] = useState({});
  const [state, setState] = useState(intialState);
  const [inputs, setInputs] = useState({});
  const [editInputs, setEditInputs] = useState({});
  const [profileLoading, setProfileLoading] = useState(false);
  const [isAuthenticatedState, setIsAuthenticatedState] = useState(false);
  const [logoutState, setLogoutState] = useState(intialState);
  const [userAddressState, setUserAddressState] = useState(intialState);
  const [addAddressState, setAddAddressState] = useState({ data: null });
  const [updateAddressState, setUpdateAddressState] = useState({ data: null });
  const [addressRemovalState, setAddressRemovalState] = useState({
    data: null,
  });
  const [locationState, setLocationState] = useState({ data: null });
  const [cityLocationState, setCityLocationState] = useState({ data: null });

  const login = () => {
    toggleLoading(true);
    axios
      .post(`login`, {
        username: inputs.username,
        password: inputs.password,
      })
      .then((res) => {
        const access_token = res.data.data.access_token;
        const user_data = res.data.data;

        console.log()

        localStorage.setItem("access_token", access_token);
        localStorage.setItem("user_data", JSON.stringify(user_data));

        isAuthenticated(true);
        toggleLoading(false);
        setState({
          data: res.data,
        });
      })
      .catch((err) => {
        toggleLoading(false);
        setState({
          data: err.response.data,
        });
      });
  };

  const logout = () => {
    toggleLoading(true);
    axios
      .post(`logout`)
      .then((res) => {
        console.log(res.data);
        localStorage.clear();

        isAuthenticated(false);
        toggleLoading(false);

        setState({
          data: null,
        });

        setLogoutState({
          data: res.data,
        });
      })
      .catch((err) => {
        toggleLoading(false);

        setLogoutState({
          data: err.response,
        });
      });
  };

  const updateProfile = (userId) => {
    toggleLoading(true);
    axios
      .put(`/user/${userId}`, {
        first_name: inputs.first_name,
        last_name: inputs.last_name,
        email: inputs.email,
        phone: inputs.phone,
      })
      .then((res) => {
        toggleLoading(false);
        setUpdateProfileState({
          data: res.data,
        });
      })
      .catch((err) => {
        toggleLoading(false);
        setUpdateProfileState({
          data: err.response.data,
        });
      });
  };

  const showProfile = () => {
    setProfileLoading(true);
    axios
      .get(`user/view/profile`)
      .then((res) => {
        isAuthenticated(true);
        setProfileLoading(false);
        setProfileState({
          data: res.data,
        });
      })
      .catch((err) => {
        setProfileLoading(false);

        if (err.toJSON().message === "timeout of 2000ms exceeded") {
          console.log(err.message);
        }

        if (err.response.status === 401) {
          isAuthenticated(false);
          setProfileState({
            data: 401,
            success: false,
          });
          return;
        }

        setProfileState({
          data: err.response.data,
        });
      });
  };

  const firstTimeLogin = () => {
    toggleLoading(true);
    axios
      .post(`first-time-login`, {
        password: inputs.new_password,
        password_confirmation: inputs.confirm_password,
        terms: inputs.terms,
      })
      .then((res) => {
        isAuthenticated(true);
        toggleLoading(false);
        setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setState({
          data: err.response.data,
        });
      });
  };

  const getUserBalance = () => {
    setProfileLoading(true);
    axios
      .get(`user/balance`)
      .then((res) => {
        setUserBalanceLoading(false);
        setUserBalanceState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        setUserBalanceLoading(false);
        setUserBalanceState({
          data: err.response.data,
        });
      });
  };

  const getUserAddresses = () => {
    toggleLoading(true);
    axios
      .get(`user/addresses`)
      .then((res) => {
        console.log('get userADDRESS', res)
        toggleLoading(false);
        setUserAddressState({
          data: res.data,
        });
      })
      .catch((err) => {
        // console.log(err.response);
        // toggleLoading(false);
        // setUserAddressState({
        //   data: err.response.data,
        // });
      });
  };

  const addUserAddress = () => {
    toggleLoading(true);
    axios
      .post(`user/add/address`, {
        first_name: inputs.first_name,
        last_name: inputs.last_name,
        email: inputs.email,
        address: inputs.address,
        city_id: inputs.city_id,
        phone_no: inputs.phone_no,
        state_id: inputs.state_id,
        country_id: 1,
      })
      .then((res) => {
        toggleLoading(false);
        setAddAddressState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setAddAddressState({
          data: err.response.data,
        });
      });
  };

  const updateUserAddress = () => {
    toggleLoading(true);
    axios
      .post(`user/edit/address`, {
        first_name: editInputs.first_name,
        last_name: editInputs.last_name,
        email: editInputs.email,
        address: editInputs.address,
        city_id: editInputs.city_id,
        phone_no: editInputs.phone_no,
        state_id: editInputs.state_id,
        country_id: 1,
        address_id: editInputs.address_id,
      })
      .then((res) => {
        toggleLoading(false);
        setUpdateAddressState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setUpdateAddressState({
          data: err.response.data,
        });
      });
  };

  const removeUserAddress = (address_id) => {
    toggleLoading(true);
    axios
      .post(`user/remove/address`, {
        address_id,
      })
      .then((res) => {
        toggleLoading(false);
        setAddressRemovalState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        toggleLoading(false);
        setAddressRemovalState({
          data: err.response.data,
        });
      });
  };

  const isAuthenticated = (condition) => {
    setIsAuthenticatedState(condition);
  };

  const forgotPassword = () => {
    toggleLoading(true);
    axios
      .post(`/forgot-password`, {
        email: inputs.email,
        password_reset_link:
          "https://demoportal.perxclm2.com/portal/password-reset",
      })
      .then((res) => {
        toggleLoading(false);
        setResetLinkState({
          data: res.data,
        });
      })
      .catch((err) => {
        toggleLoading(false);
        setResetLinkState({
          data: err.response.data,
        });
      });
  };

  const resetPassword = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get("email");
    const token = urlParams.get("token");

    toggleLoading(true);
    axios
      .post(`/forgot-password/reset`, {
        password: inputs.password,
        password_confirmation: inputs.password_confirmation,
        token,
        email,
      })
      .then((res) => {
        toggleLoading(false);
        setResetPasswordState({
          data: res.data,
        });
      })
      .catch((err) => {
        toggleLoading(false);
        setResetPasswordState({
          data: err.response.data,
        });
      });
  };

  const getStates = async () => {
    toggleLoading(true);
    try {
      const states = await axios.post(`states`, {
        country_id: 1,
      });

      toggleLoading(false);
      setLocationState({
        state: states.data,
      });

      return { states: states.data };
    } catch (err) {
      toggleLoading(false);
      setLocationState({
        state: err.response.data,
      });

      return { err };
    }
  };

  const getCities = async (state_id) => {
    toggleLoading(true);

    axios
      .post(`cities`, {
        country_id: 1,
        state_id,
      })
      .then((res) => {
        toggleLoading(false);
        setCityLocationState({
          data: res.data,
        });
      })
      .catch((err) => {
        toggleLoading(false);
        setCityLocationState({
          data: err.response.data,
        });
      });
  };

  return (
    <LoginContext.Provider
      value={{
        showProfile,
        login,
        setInputs,
        setProfileState,
        updateProfile,
        isAuthenticated,
        forgotPassword,
        resetPassword,
        firstTimeLogin,
        getUserBalance,
        setIsAuthenticatedState,
        logout,
        getUserAddresses,
        addUserAddress,
        updateUserAddress,
        removeUserAddress,
        setEditInputs,
        getStates,
        getCities,
        locationState,
        cityLocationState,
        editInputs,
        addressRemovalState,
        updateAddressState,
        addAddressState,
        userAddressState,
        isAuthenticatedState,
        userBalanceState,
        userBalanceLoading,
        resetPasswordState,
        resetLinkState,
        passwordState,
        profileLoading,
        updateProfileState,
        profileState,
        inputs,
        state,
        logoutState,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
