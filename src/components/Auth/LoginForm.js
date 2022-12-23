import React, { useState } from "react";
import useValidPhone from "../../Hook/useValidPhone";
import Logo from "../../assets/logo.png";
import log from "../../assets/log.png";
import {
  FormControl,
  FormLabel,
  Stack,
  PinInput,
  PinInputField,
  HStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
const LoginForm = ({ setIsSignIn ,setIsModalOpen}) => {
  const [phone, setPhone, PhoneError] = useValidPhone();
  const [hasPhone, setHasPhone] = useState(false);
  const [Code, setCode] = useState("");
  const toast = useToast();
  const {login} = useAuth()
  const navigate = useNavigate()
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const LoginHandler = () => {
    if (!hasPhone) {

      if (!phone) {
        toast({
          title: "Please Enter you phone number.",
          status: "warning",
          duration: 1800,
          isClosable: true,
        });
        return;
      }

      loginSubmitHandler();
    } else {
      if ([...Code].length !== 5) {
        toast({
          title: "Verification Code must 6 digits",
          status: "warning",
          duration: 1800,
          isClosable: true,
        });
        return;
      }
      toast({
        title: "Please wait...",
        status: "info",
        duration: 1800,
        isClosable: true,
      });
      otpSubmitHandler();
    }
  };

  const otpMutation = useMutation(
    async (newData) =>
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}verify-login`,
        newData,
        {
          headers,
        }
      ),
    {
      retry: false,
    }
  );


  const loginMutation = useMutation(
    async (newData) =>
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}client-login`,
        newData,
        {
          headers,
        }
      ),
    {
      retry: false,
    }
  );

  const loginSubmitHandler = async (values) => {
    try {
        loginMutation.mutate(
        {
          phone: "251".concat(phone),
          // verificationCode: Code,
        },
        {
          onSuccess: (responseData) => {
            console.log(responseData?.data)
            setHasPhone(true);
            toast({
              title: "Otp Sent",
              description: "Please check your phone for Otp message",
              status: "info",
              duration: 2500,
              isClosable: true,
            });
          },
          onError: (err) => {
            console.log(err);
            toast({
              title: "error",
              description: err?.response?.data?.message,
              status: "error",
              duration: 1800,
              isClosable: true,
            });
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const otpSubmitHandler = async (values) => {
    try {
      otpMutation.mutate(
        {
          phone: "251".concat(phone),
          password: Code,
        },
        {
          onSuccess: (responseData) => {
            setIsModalOpen(false)
            console.log(responseData?.data)
            navigate('/profile')
            login(responseData?.data?.token, responseData?.data?.user);
            toast({
              title: "Success",
              status: "info",
              duration: 2500,
              isClosable: true,
            });
          },
          onError: (err) => {
            console.log(err);
            toast({
              title: "error",
              description: err?.response?.data?.message,
              status: "error",
              duration: 1800,
              isClosable: true,
            });
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className=" grid grid-cols-1 sm:grid-cols-2">
      <div className="bg-[#EAF5FC] hidden sm:flex sm:flex-col items-start space-y-2 flex-grow w-full">
          <div 
             style={{
              backgroundImage: `url(${log})`,
              backgroundPosition: "center",
              width: "100%",
              minHeight: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          className="relative p-3">
            <h1 className="absolute bottom-5 font-semibold text-white text-3xl pt-3">
              Nib Insurance
            </h1>
          </div>
        </div>
        <div className=" flex flex-col items-start flex-grow w-full space-y-4 p-6">
          <div className="flex flex-col items-start space-y-1 pt-10">
            <h1 className="font font-semibold text-lg">
              Welcome to Nib insurance
            </h1>
            <p className="font-normal text-sm">Log in to your account</p>
          </div>
          <div className="flex flex-col flex-grow w-full ">
            {!hasPhone ? (
              <div className="flex flex-col items-start  w-full space-y-1  ">
                <p className="font-normal text-sm text-[#91A8A7]">
                  Phone Number
                </p>
                <div className="flex items-center  h-[42px]   border-2 rounded-md border-amber-700 w-full">
                  <span className="border-r-2 border-amber-700  rounded-l-md h-full flex flex-grow text-center px-2 items-center justify-center ">
                    +251
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="9-********"
                    name="phoneNo"
                    className="w-full flex-grow pl-3 bg-transparent border-none focus:border-none focus:ring-0    focus:outline-none"
                  />
                </div>

                {/* <button className='bg-[#00a69c] flex-grow w-full p-2 px-4 text-white font-medium mt-2 rounded-md
  hover:opacity-70 '>Log in</button> */}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-3 pt-5">
                <p className="font-normal text-sm text-[#91A8A7]">
                  Enter your Confirmation Number
                </p>
                <div>
                  <HStack>
                    <PinInput
                      placeholder=""
                      value={Code}
                      onChange={(e) => setCode(e)}
                    >
                      <PinInputField bg={"white"} />
                      <PinInputField bg={"white"} />
                      <PinInputField bg={"white"} />
                      <PinInputField bg={"white"} />
                      <PinInputField bg={"white"} />
                    </PinInput>
                  </HStack>
                </div>
              </div>
            )}
            <button
              onClick={LoginHandler}
              disabled={otpMutation.isLoading || loginSubmitHandler.isLoading}
              className="bg-amber-700  w-full p-2 px-4
               text-white font-medium mt-2 rounded-md
  hover:opacity-70 "
            >
              {!hasPhone ?  loginMutation.isLoading ? <Spinner size="sm" /> : "Log in" : otpMutation.isLoading ? <Spinner size="sm" /> : "Verify"}
            </button>
            <div className="flex items-center justify-between">
              {!hasPhone && (
                <p className="font-normal text-sm py-2">
                  Don't have account?
                  <span
                    onClick={() => {
                      setIsSignIn(false);
                    }}
                    className="font-semibold  text-amber-700 cursor-pointer 
    hover:underline"
                  >
                    {" "}
                    Register
                  </span>
                </p>
              )}
            </div>
          </div>
          <p className="text-[#91A8A7] font-normal text-sm text-center flex items-center justify-center w-full">
            2022 all right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
