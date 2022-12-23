import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";
import UpdateProfileModal from "./components/UpdateProfileModal";
const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, token } = useAuth();
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };
  const profileData = useQuery(
    ["profileDataApi", isModalOpen],
    async () =>
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}profile`, {
        headers,
      }),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: !!token,
      onSuccess: (res) => {
        console.log(res?.data);
      },
    }
  );
  console.log(profileData?.data?.data);
  return (
    <div>
      <div className="max-w-7xl mx-auto p-20">
        <div className="flex items-center space-x-2">
          <BiUserCircle size={20} />
          <h2 className="font-bold text-gray-600 text-xl">
            Your Contact Detail
          </h2>
        </div>

        <div className="flex items-center  justify-between space-x-3 pt-5 border-gray-400 pb-3 border-b">
          <div className="flex items-center space-x-3 ">
            <img
              src={
                user?.profile_image
                  ? ""
                  : "https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              }
              className="h-12 w-12 rounded-sm"
              alt=""
            />
            <h2>{user?.email}</h2>
            <h2>{user?.phone}</h2>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-amber-700 p-2 rounded-md mt-3 text-white"
          >
            Update Profile
          </button>
        </div>
        {/* contact info */}
        <div>
          <h2 className="font-bold text-gray-600 text-xl">Address</h2>
          <div>
            {profileData.isFetched ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-5">
                <div>
                  <h1 className="text-sm text-gray-400">City</h1>
                  <h1>{profileData?.data?.data?.address?.city}</h1>
                </div>
                <div>
                  <h1 className="text-sm text-gray-400">kebele</h1>
                  <h1>{profileData?.data?.data?.address?.kebele}</h1>
                </div>
                <div>
                  <h1 className="text-sm text-gray-400">sub-city</h1>
                  <h1>{profileData?.data?.data?.address?.sub_city}</h1>
                </div>
                <div>
                  <h1 className="text-sm text-gray-400">Woroda</h1>
                  <h1>{profileData?.data?.data?.address?.woreda}</h1>
                </div>
                {/* height */}
                <div>
                  <h1 className="text-sm text-gray-400">Date of Birth</h1>
                  <h1>{profileData?.data?.data?.dob}</h1>
                </div>
                <div>
                  <h1 className="text-sm text-gray-400">Height</h1>
                  <h1>{profileData?.data?.data?.additional_info?.height}</h1>
                </div>
                <div>
                  <h1 className="text-sm text-gray-400">Weight</h1>
                  <h1>{profileData?.data?.data?.additional_info?.weight}</h1>
                </div>
                <div>
                  <h1 className="text-sm text-gray-400">Profession</h1>
                  <h1>
                    {profileData?.data?.data?.additional_info?.Profession}
                  </h1>
                </div>
              </div>
            ) : (
              <div>
                <h1>Loading</h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <UpdateProfileModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

export default Profile;
