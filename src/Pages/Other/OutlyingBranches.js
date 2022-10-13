import React, { useState } from 'react'
import { useLang } from "../../context/lang";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import axios from "axios";
import {
    DataGrid,
  } from "@mui/x-data-grid";
const OutlyingBranches = () => {
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
      onSuccess: (res) => {console.log(res?.data?.data?.OutlyingBranches?.data)
        setaddisBranches(res?.data?.data?.OutlyingBranches?.data?.map((data, index) => ({ ...data, index: index + 1 })))
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
     <div className='w-full' style={{ height: 630 }}>
     <DataGrid
        rows={addisBranches}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[12]}
        getRowId={(row) => row.id}
        checkboxSelection={false}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
     </div>
     <div>
     <div className="flex items-center justify-between py-3">
            {addisAbebaBranchDatas?.data?.data?.data?.OutlyingBranches?.prev_page_url !== null && (
                <button onClick={()=>setPage((prev)=>prev - 1)}
                  className="bg-[#FAD03C] p-2 px-5 text-white rounded-sm 
            font-medium w-fit"
                >
                  Previous
                </button>
              )}
              {addisAbebaBranchDatas?.data?.data?.data?.OutlyingBranches?.next_page_url !== null && (
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

export default OutlyingBranches