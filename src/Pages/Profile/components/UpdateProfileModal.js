import React, { Fragment, useContext, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import UpdateProfileForm from "./UpdateProfileForm";
import { FaTimes } from "react-icons/fa";

const UpdateProfileModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className=" relative z-50 "
          onClose={() => setIsModalOpen(true)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className="flex min-h-full items-center justify-center p-2
           sm:p-4 text-center max-w-2xl mx-auto "
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-2xl transform overflow-hidden rounded-2xl
               bg-white  text-left align-middle shadow-xl transition-all"
                >
                  <div
                    onClick={() => setIsModalOpen(false)}
                    className="absolute right-3 top-2 border-2 rounded-md border-[#00a69c] p-1 cursor-pointer"
                  >
                    <FaTimes size={15} className="" />
                  </div>
                  <div className="py-8">
                    <UpdateProfileForm setIsModalOpen={setIsModalOpen} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default UpdateProfileModal;
