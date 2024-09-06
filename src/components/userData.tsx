import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react"
import { Button } from "./ui/button";
import { useContext, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import AppContext from "@/context/appContext";
import Container from "./container";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast"
import { UpdateUser } from "./updateUser";
import { Skeleton } from "@/components/ui/skeleton";

function UserData() {
  const navigate = useNavigate()
  const {toast} = useToast()

  type UserType = {
    id: number;
  };

  const { users, loading, error, setUsers} = useContext(AppContext);
  let { userId }: any = useParams();
  const user: any = users.find(
    (user: UserType) => user.id == parseInt(userId)
  );

  const [btnLoading, setBtnLoading] = useState(false)
  const deleteUserHandler = () => {
    setBtnLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/user/${userId}`, {
      method: "DELETE",
    }).then(()=>{
      setBtnLoading(false)
      setUsers(users.filter((userData:any)=>{
        if(userData.id !== user.id) return userData
      }))
      navigate('/')
      toast({
        title: "User Deleted Successfully",
        description: "The user data has been removed from the system.",
        duration: 1500, // Duration in milliseconds
        style: {
          backgroundColor: "#f44336", // Red background for delete
          color: "#ffffff", // White text color
        }
      })
    })
  };

  if(loading) return(
    <Container>
    <Card className="max-w-4xl mx-auto p-4 mt-20">
        <CardContent className="flex flex-wrap-reverse justify-between pb-0">
          <div>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> <Skeleton className="h-4 w-48" />
              </p>
              <p>
                <strong>Phone:</strong> <Skeleton className="h-4 w-32" />
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <Skeleton className="h-4 w-40" />
              </p>
              <p>
                <strong>Address:</strong> <Skeleton className="h-4 w-64" />
              </p>
              <p>
                <strong>Company:</strong> <Skeleton className="h-4 w-48" />
              </p>
            </div>

            <div className="mt-4 inline-block mr-4">
              <Skeleton className="h-10 w-24 md:w-32" />
            </div>
            <div className="mt-4 inline-block">
              <Skeleton className="h-10 w-32 md:w-48" />
            </div>
          </div>
          <div>
            <CardTitle className="text-xl font-bold">
              <Skeleton className="h-6 w-40" />
            </CardTitle>
            <h2 className="text-gray-700 mb-4 text-lg italic">
              <Skeleton className="h-5 w-32" />
            </h2>
          </div>
        </CardContent>
      </Card>
      </Container>
  )
  return (
      <Container>
        {!user ?(
          <h1 className="text-2xl font-semibold text-red-500 ! text-center">User not found</h1>
        ) : (
          <Card className="max-w-4xl mx-auto p-4 mt-20">
            <CardContent className="flex flex-wrap-reverse justify-between pb-0">
              <div>
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {user.phone}
                  </p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <a
                      href={`http://${user.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {user.website}
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong> {user.address.street},{" "}
                    {user.address.suite}, {user.address.city},{" "}
                    {user.address.zipcode}
                  </p>
                  <p>
                    <strong>Company:</strong> {user.company.name} -{" "}
                    {user.company.catchPhrase}
                  </p>
                </div>

                <UpdateUser user={user} setUsers={setUsers}/>
                <AlertDialog>
                  <AlertDialogTrigger>
                    {
                      btnLoading ? <Button disabled>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </Button> :
                    <Button variant={"destructive"}>Delete Account</Button>
                    }
                  </AlertDialogTrigger>
                  <AlertDialogContent className="w-[90%] sm:w-auto">
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={deleteUserHandler}>
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <div>
                <CardTitle className="text-xl font-bold">
                  {user.name}
                </CardTitle>
                <h2 className="text-gray-700 mb-4 text-lg italic">
                  ({user.username})
                </h2>
              </div>
            </CardContent>
          </Card>
        )}
      </Container>
    )
}

export default UserData;
