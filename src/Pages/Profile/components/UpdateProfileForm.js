import React from "react";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { Spinner, useToast } from "@chakra-ui/react";
import * as Yup from "yup";
import { useAuth } from "../../../context/auth";
const UpdateProfileForm = ({ setIsModalOpen }) => {
  const toast = useToast();
  const { user, token } = useAuth();
  const headers = {
    "Content-Type": "application/json",
    Accept: "multipart/form-data",
    Authorization: `Bearer ${token}`,
  };
  const profileValidationSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    dob: Yup.string().required("date of birth is required"),
    city: Yup.mixed().nullable().required("city is required"),
    sub_city: Yup.string().required("sub city category is required"),
    woreda: Yup.string().required("woreda is required"),
    kebele: Yup.string().required("kebele  is required"),
    height: Yup.mixed().nullable().required("height is required"),
    weight: Yup.string().required("weight is required"),
    profession: Yup.string().required("profession is required"),
    image: Yup.mixed().nullable().optional(),
  });

  const updateMutation = useMutation(
    async (newData) =>
      await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}update-profile`,
        newData,
        {
          headers,
        }
      ),
    {
      retry: false,
    }
  );
  const updateProfileMutationHandler = async (values) => {
    try {
      updateMutation.mutate(
        {
          name: values.name,
          nameAm: values.nameAm,
          dob: values.dob,
          city: values.city,
          sub_city: values.sub_city,
          woreda: values.woreda,
          kebele: values.kebele,
          height: values.height,
          weight: values.weight,
          profession: values.profession,
          profile_image: values.image,
        },
        {
          onSuccess: (responseData) => {
            setIsModalOpen(false);
            console.log(responseData?.data);
            toast({
              title: "success",
              status: "success",
              duration: 1800,
              isClosable: true,
            });
          },
          onError: (err) => {
            toast({
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
    <div className="p-3 w-full">
      <h1 className="text-gray-700 text-xl font-bold pb-4">
        Update Your Profile
      </h1>
      <Formik
        initialValues={{
          name: "",
          dob: "",
          city: "",
          sub_city: "",
          woreda: "",
          kebele: "",
          height: "",
          weight: "",
          profession: "",
          image: null,
        }}
        validationSchema={profileValidationSchema}
        onSubmit={updateProfileMutationHandler}
      >
        {({ errors, touched, values, setTouched, setFieldValue }) => (
          <Form className="flex flex-col w-full items-start space-y-2 ">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
              <div className="flex flex-col w-full items-start space-y-1">
                <Field
                  as="input"
                  name="name"
                  placeholder="name"
                  className={`rounded-md w-full h-[40px] focus:outline-none  pl-3
                         text-dark-gray  border border-slate-400 text-gray-500  ${
                           errors.name && touched.name
                             ? "border border-red-600"
                             : "border border-slate-400  "
                         }`}
                />
                {errors.name && touched.name ? (
                  <p className="text-[13px] text-red-500">{errors.name}</p>
                ) : null}
              </div>

              {/* dob */}
              <div className="flex flex-col w-full items-start space-y-1">
                <Field
                  as="input"
                  name="dob"
                  type="date"
                  placeholder="dob"
                  className={`rounded-md w-full h-[40px] focus:outline-none  pl-3
                         text-dark-gray  border border-slate-400 text-gray-500  ${
                           errors.dob && touched.dob
                             ? "border border-red-600"
                             : "border border-slate-400  "
                         }`}
                />
                {errors.dob && touched.dob ? (
                  <p className="text-[13px] text-red-500">{errors.dob}</p>
                ) : null}
              </div>
              {/* city */}
              <div className="flex flex-col w-full items-start space-y-1">
                <Field
                  as="input"
                  name="city"
                  placeholder="city"
                  className={`rounded-md w-full h-[40px] focus:outline-none  pl-3
                         text-dark-gray  border border-slate-400 text-gray-500  ${
                           errors.city && touched.city
                             ? "border border-red-600"
                             : "border border-slate-400  "
                         }`}
                />
                {errors.city && touched.city ? (
                  <p className="text-[13px] text-red-500">{errors.city}</p>
                ) : null}
              </div>
              {/* sub city */}
              <div className="flex flex-col w-full items-start space-y-1">
                <Field
                  as="input"
                  name="sub_city"
                  placeholder="sub_city"
                  className={`rounded-md w-full h-[40px] focus:outline-none  pl-3
                         text-dark-gray  border border-slate-400 text-gray-500  ${
                           errors.sub_city && touched.sub_city
                             ? "border border-red-600"
                             : "border border-slate-400  "
                         }`}
                />
                {errors.sub_city && touched.sub_city ? (
                  <p className="text-[13px] text-red-500">{errors.sub_city}</p>
                ) : null}
              </div>
              {/* woreda */}
              <div className="flex flex-col w-full items-start space-y-1">
                <Field
                  as="input"
                  name="woreda"
                  placeholder="woreda"
                  className={`rounded-md w-full h-[40px] focus:outline-none  pl-3
                         text-dark-gray  border border-slate-400 text-gray-500  ${
                           errors.woreda && touched.woreda
                             ? "border border-red-600"
                             : "border border-slate-400  "
                         }`}
                />
                {errors.woreda && touched.woreda ? (
                  <p className="text-[13px] text-red-500">{errors.woreda}</p>
                ) : null}
              </div>
              {/* kebele */}
              <div className="flex flex-col w-full items-start space-y-1">
                <Field
                  as="input"
                  name="kebele"
                  placeholder="kebele"
                  className={`rounded-md w-full h-[40px] focus:outline-none  pl-3
                         text-dark-gray  border border-slate-400 text-gray-500  ${
                           errors.kebele && touched.kebele
                             ? "border border-red-600"
                             : "border border-slate-400  "
                         }`}
                />
                {errors.kebele && touched.kebele ? (
                  <p className="text-[13px] text-red-500">{errors.kebele}</p>
                ) : null}
              </div>
              {/* height */}
              <div className="flex flex-col w-full items-start space-y-1">
                <Field
                  as="input"
                  name="height"
                  placeholder="height"
                  className={`rounded-md w-full h-[40px] focus:outline-none  pl-3
                         text-dark-gray  border border-slate-400 text-gray-500  ${
                           errors.height && touched.height
                             ? "border border-red-600"
                             : "border border-slate-400  "
                         }`}
                />
                {errors.height && touched.height ? (
                  <p className="text-[13px] text-red-500">{errors.height}</p>
                ) : null}
              </div>
              {/* weight */}
              <div className="flex flex-col w-full items-start space-y-1">
                <Field
                  as="input"
                  name="weight"
                  placeholder="weight"
                  className={`rounded-md w-full h-[40px] focus:outline-none  pl-3
                         text-dark-gray  border border-slate-400 text-gray-500  ${
                           errors.weight && touched.weight
                             ? "border border-red-600"
                             : "border border-slate-400  "
                         }`}
                />
                {errors.weight && touched.weight ? (
                  <p className="text-[13px] text-red-500">{errors.weight}</p>
                ) : null}
              </div>
              {/* proffession */}
              <div className="flex flex-col w-full items-start space-y-1">
                <Field
                  as="input"
                  name="profession"
                  placeholder="profession"
                  className={`rounded-md w-full h-[40px] focus:outline-none  pl-3
                         text-dark-gray  border border-slate-400 text-gray-500  ${
                           errors.profession && touched.profession
                             ? "border border-red-600"
                             : "border border-slate-400  "
                         }`}
                />
                {errors.profession && touched.profession ? (
                  <p className="text-[13px] text-red-500">
                    {errors.profession}
                  </p>
                ) : null}
              </div>
            </div>
            {/* image */}
            <div className="flex flex-col w-full items-start space-y-1">
              <input
                as="input"
                name="image"
                type="file"
                className={`rounded-md w-[50%] p-1 flex items-center focus:outline-none  pl-3
                text-dark-gray  border border-slate-400 text-gray-500  ${
                  errors.image && touched.image
                    ? "border border-red-600"
                    : "border border-slate-400  "
                }`}
                onChange={(event) => {
                  setTouched({
                    touched,
                    image: true,
                  });
                  setFieldValue("image", event.target.files[0]);
                }}
              />
              {errors.image && touched.image ? (
                <p className="text-[13px] text-red-500">{errors.image}</p>
              ) : null}
            </div>
            <button
              type="submit"
              className="bg-amber-700 p-2 px-10 rounded-md mt-3 text-white"
            >
              {updateMutation.isLoading ? <Spinner /> : "Update"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateProfileForm;
