import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useState } from "react";
import Container from "./container";
import AppContext from "@/context/appContext";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export function CreateNewUser() {
  const { setUsers, users} = useContext(AppContext);
  const navigate = useNavigate()
  const [newUser, setNewUser] = useState({
    id: users.length + 1,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
    company: {
      name: "",
    },
  });

  const { toast } = useToast();
  const [btnLoading, setBtnLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    newUser.id = users.length+1
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/user/create`, {
      method: "PUT",
      body: JSON.stringify({
        ...newUser,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
        setBtnLoading(false)
        navigate('/')
        toast({
          title: "User Created Successfully",
          description: "The new user has been added to the system.",
          duration: 1500, 
          style: {
            backgroundColor: "#2196F3",
            color: "#ffffff",
          },
        })
      setUsers((users: [any]) => [...users, newUser]);
        console.log(typeof users, users)
        setIsSubmitting(false);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto space-y-1 md:space-y-6 p-6 border border-gray-200 shadow-md rounded-md"
      >
        <h2 className="text-xl font-bold mb-4">Create New User</h2>

        {/* Name */}
        <div className="sm:grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={newUser.name}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Username */}
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              value={newUser.username}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={newUser.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={newUser.phone}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
        </div>
        {/* Website */}
        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            name="website"
            value={newUser.website}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        {/* Address */}
        <div className="space-y-2">
          <Label>Address</Label>
          <Input
            id="street"
            name="address.street"
            value={newUser.address.street}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                address: { ...newUser.address, street: e.target.value },
              })
            }
            placeholder="Street"
            required
            className="w-full"
          />
          <Input
            id="suite"
            name="address.suite"
            value={newUser.address.suite}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                address: { ...newUser.address, suite: e.target.value },
              })
            }
            placeholder="Suite"
            required
            className="w-full"
          />
          <Input
            id="city"
            name="address.city"
            value={newUser.address.city}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                address: { ...newUser.address, city: e.target.value },
              })
            }
            placeholder="City"
            required
            className="w-full"
          />
          <Input
            id="zipcode"
            name="address.zipcode"
            value={newUser.address.zipcode}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                address: { ...newUser.address, zipcode: e.target.value },
              })
            }
            placeholder="Zipcode"
            required
            className="w-full"
          />
        </div>

        {/* Company */}
        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company.name"
            value={newUser.company.name}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                company: { ...newUser.company, name: e.target.value },
              })
            }
            required
            className="w-full"
          />
        </div>

        {/* Submit Button */}
        <div>
          {btnLoading ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full text-lg mt-2 md:mt-0 py-3">
              Create User
            </Button>
          )}
        </div>
      </form>
    </Container>
  );
}
