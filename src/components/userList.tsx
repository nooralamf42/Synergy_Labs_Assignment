import { useContext,} from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import Container from "./container";
import AppContext from "@/context/appContext";

const UsersList = () => {
  type userType = { id : any, name:string, email:string, phone:any }
 const {loading, users} = useContext(AppContext)
  
  return (
    <Container>
      <h1 className="text-2xl font-bold mt-6">Users List</h1>
      <p className="text-sm mb-8">(click on username to view user details)</p>

      {loading ? (
         <div className="overflow-x-auto">
         <table className="min-w-full table-auto">
           <thead>
             <tr className="border-b">
               <th className="px-4 py-2">
                 <Skeleton className="h-4 max-w-12 md:max-w-20 lg:max-w-24" /> 
               </th>
               <th className="px-4 py-2">
                 <Skeleton className="h-4 max-w-12 md:max-w-20 lg:max-w-24" />
               </th>
               <th className="px-4 py-2 hidden md:table-cell">
                 <Skeleton className="h-4 max-w-12 md:max-w-20 lg:max-w-24" />
               </th>
               <th className="px-4 py-2">
                 <Skeleton className="h-4 max-w-12 md:max-w-20 lg:max-w-24" />
               </th>
             </tr>
           </thead>
           <tbody>
             {Array.from({ length: 6 }).map((_, idx) => (
               <tr key={idx} className="border-b">
                 <td className="px-4 py-4">
                   <Skeleton className="h-4 max-w-52 lg:max-w-40 lg:w-44" />
                 </td>
                 <td className="px-4 py-4">
                   <Skeleton className="h-4 max-w-52 lg:max-w-40 lg:w-44" />
                 </td>
                 <td className="px-4 py-4 hidden md:table-cell">
                   <Skeleton className="h-4 max-w-52 lg:max-w-40 lg:w-44" />
                 </td>
                 <td className="px-4 py-4">
                   <Skeleton className="h-4 max-w-52 lg:max-w-40 lg:w-44" />
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>

      ) : (
        
        <div className="overflow-x-auto">
          <Table className="min-w-full border-collapse border border-gray-400">
            <TableHeader>
              <TableRow className="text-sm sm:text-xl">
                <TableCell className="border border-gray-300 px-4 py-2">
                  Name
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Email
                </TableCell>
                <TableCell className="hidden sm:table-cell border border-gray-300 px-4 py-2">
                  Phone
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="text-xs sm:text-md">
              {users.map(({ id, name, email, phone }:userType) => (
                <TableRow key={id}>
                  <TableCell
                    id={id}
                    className="border cursor-pointer border-gray-300 px-4 py-2"
                  >
                    <Link className="hover:underline" to={`/users/${id}`}>{name}</Link>
                  </TableCell>
                  <TableCell
                    id={id}
                    className="border border-gray-300 px-4 py-2"
                  >
                    {email}
                  </TableCell>
                  <TableCell
                    id={id}
                    className="hidden sm:table-cell border border-gray-300 px-4 py-2"
                  >
                    {phone}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default UsersList;
