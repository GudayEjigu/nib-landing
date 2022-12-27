import React, { useState ,useContext} from "react";
import { useLang } from "../../context/lang";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { LangContext } from "../../context/LangContext";
import car from "../../assets/car.png";
const MainBranch = () => {
  const {isAmh} =useContext(LangContext);
  const [page, setPage] = useState(1);
  const [departments, setDepartments] = useState([]);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };

  const departmentsDatas = useQuery(
    ["departmentsDataApi"],
    async () =>
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}home/departments?page=${page}`,
        {
          headers,
        }
      ),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      retry: false,
      // enabled: !!token,
      onSuccess: (res) => {
        setDepartments(
          res?.data?.data?.data?.map((data, index) => ({
            ...data,
            index: index + 1,
          }))
        );
      },
    }
  );

  const columns = [
    { field: "index", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "name",
      width: 480,
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
      field: "phone",
      headerName: "phone",
      width: 210,
      editable: true,
    },
    {
      field: "fax",
      headerName: "fax",
      width: 180,
      editable: true,
    },
  ];
console.log({departments})
  return (
    <div >
      <div className="flex flex-col items-center justify-center w-full py-5">
        <h1 className="font-bold text-2xl text-gray-700">{isAmh ? 'ዋና መስሪያ ቤት' :'Head Office'}</h1>
        <p className="text-gray-500">{isAmh ?'አዲስ አበባ - ኢትዮጵያ' :'Addis Ababa - Ethiopia'}</p>
        <p className="text-gray-500">{isAmh ? 'ደምበል ከተማ ማዕከል - ሁለተኛ ፎቅ' :'Dembel City Center - Second Floor'}</p>
        <p className="text-gray-500">
          Tel. 552 81 95/96, 553 51 29-32, 554 37 05
        </p>
        <p className="text-gray-500">Fax +251-11-552 81 93/ P.O.Box 285</p>
        <p className="text-gray-500">E-mail: info@nibinsurancethiopia.com</p>
        <p className="text-gray-500">Website: www.nibinsurancethiopia.com</p>
      </div>
      {departmentsDatas.isFetched ? (
       <div className='w-full grid grid-col-1 md:grid-cols-3 gap-3'>
          {/* <DataGrid
            rows={departments}
            columns={columns}
            pageSize={12}
            rowsPerPageOptions={[12]}
            getRowId={(row) => row.id}
            checkboxSelection={false}
            disableSelectionOnClick
            // experimentalFeatures={{ newEditingApi: true }}
          /> */}
             {departments?.map((item)=>(
          <div className="bg-white p-3 rounded-md shadow-lg flex flex-col items-center justify-center">
          <img src={car} className="h-20" alt="" />
          <h1 className="font-bold text-lg text-center text-gray-800">{isAmh ? item.name.amharic :item.name.english}</h1>
          <p className="font-medium text-gray-500">Phone: {item.phone}</p>
          <p className="font-medium text-gray-500">Fax: {item.fax}</p>
        </div>
      ))}
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
      <div>
        <div className="flex items-center justify-between">
          {departmentsDatas?.data?.data?.data?.prev_page_url !== null && (
            <button
              onClick={() => setPage((prev) => prev - 1)}
              className="bg-[#FAD03C] p-2 px-5 text-white rounded-sm 
            font-medium w-fit"
            >
              Previous
            </button>
          )}
          {departmentsDatas?.data?.data?.data?.next_page_url !== null && (
            <button
              onClick={() => setPage((prevPage) => prevPage + 1)}
              className="bg-[#FAD03C] p-2 px-5 text-white rounded-sm 
            font-medium w-fit"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainBranch;
