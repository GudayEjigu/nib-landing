import React, { useState } from 'react'
import { useLang } from "../../context/lang";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import axios from "axios";
import car from "../../assets/car.png";
import {
    DataGrid,
  } from "@mui/x-data-grid";
const AddisAbeba = () => {
    const { isAmh } = useLang();
    const [page, setPage] = useState(1)
    const [addisBranches,setaddisBranches] = useState([])
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };

  const addisAbebaBranchDatas = useQuery(
    ["addisAbebaBranchDataApi",page],
    async () =>
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}home/branches?page=${page}`, {
        headers,
      }),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      retry: false,
      // enabled: !!token,
      onSuccess: (res) => {console.log(res?.data?.data?.AddisAbabaBranches?.data)
        setaddisBranches(res?.data?.data?.AddisAbabaBranches?.data?.map((data, index) => ({ ...data, index: index + 1 })))
      },
    }
  );
console.log(page)  
const columns = [
    { field: 'index', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'name',
      width: 280,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="flex items-center space-x-1">
            <h1>{isAmh ? params.row.name.amharic : params.row.name.english}</h1>
          
          </div>
        );
      },
    },
    {
      field: 'direct_phone',
      headerName: 'direct_phone',
      width: 210,
      editable: true,
    },
    {
      field: 'mobile_phone',
      headerName: 'mobile_phone',
      width: 210,
      editable: true,
    },
    {
        field: 'fax',
        headerName: 'fax',
        width: 180,
        editable: true,
      },
  ];

  return (
    <div className='pt-5'>

     <div>
{addisAbebaBranchDatas.isFetched ? (
  <div>
     <div className='w-full grid grid-col-1 md:grid-cols-3 gap-3'>

      {addisBranches?.map((item)=>(
          <div className="bg-white p-3 rounded-md shadow-lg flex flex-col items-center justify-center">
          <img src={car} className="h-20" alt="" />
          <h1 className="font-bold text-xl text-gray-800">{isAmh ? item.name.amharic :item.name.english}</h1>
          <p className="font-medium text-gray-500">Phone: {item.direct_phone}</p>
          <p className="font-medium text-gray-500">Fax: {item.fax}</p>
        </div>
      ))}
     </div>
     <div>
     <div className="flex items-center justify-center space-x-3 py-3">
            {addisAbebaBranchDatas?.data?.data?.data?.AddisAbabaBranches?.prev_page_url !== null && (
                <button onClick={()=>setPage((prev)=>prev - 1)}
                  className="bg-[#FAD03C] p-2 px-5 text-white rounded-sm 
            font-medium w-fit"
                >
                  Previous
                </button>
              )}
              {addisAbebaBranchDatas?.data?.data?.data?.AddisAbabaBranches?.next_page_url !== null && (
                <button onClick={()=>setPage((prevPage)=>prevPage + 1)}
                  className="bg-[#FAD03C] p-2 px-5 text-white rounded-sm 
            font-medium w-fit"
                >
                  Next
                </button>
              )}
            </div></div> 
  </div>
) : (
  <div className="flex items-center justify-center w-full py-10">
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#a27128"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
</div>
)}
    
     </div>
     </div>
    
  )
}

export default AddisAbeba