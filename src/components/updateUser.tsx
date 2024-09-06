import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function UpdateUser({ user, setUsers }: any) {
  const {toast} = useToast()
  const [btnLoading, setBtnLoading] = useState(false)
  const [userData, setUserData] = useState(user);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    setBtnLoading(true)
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/user/${user.id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...userData
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => {
      setUsers((users: any) =>
        users.map((user: any) => {
          if (user.id === userData.id) return userData;
          else return user;
        })
        );
        setBtnLoading(false)
        setIsOpen(false)
        toast({
          title: "User Updated Successfully",
          description: "The user data has been updated successfully.",
          duration: 1500, 
          style: {
            backgroundColor: "#4CAF50", 
            color: "#ffffff", 
          },
        });
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="mt-8 mr-2 mb-2">
          Update User
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="space-y-1 sm:space-y-4">
          {/* Name */}
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Username */}
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              value={userData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={userData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Website */}
          <div>
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              name="website"
              value={userData.website}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <div className="space-y-1">
            <Label htmlFor="address">Address</Label>
            <Input
              id="street"
              name="address.street"
              value={userData.address.street}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  address: { ...userData.address, street: e.target.value },
                })
              }
              placeholder="Street"
              required
            />
            <Input
              id="suite"
              name="address.suite"
              value={userData.address.suite}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  address: { ...userData.address, suite: e.target.value },
                })
              }
              placeholder="Suite"
              required
            />
            <Input
              id="city"
              name="address.city"
              value={userData.address.city}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  address: { ...userData.address, city: e.target.value },
                })
              }
              placeholder="City"
              required
            />
            <Input
              id="zipcode"
              name="address.zipcode"
              value={userData.address.zipcode}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  address: { ...userData.address, zipcode: e.target.value },
                })
              }
              placeholder="Zipcode"
              required
            />
          </div>

          {/* Company */}
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company.name"
              value={userData.company.name}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  company: { ...userData.company, name: e.target.value },
                })
              }
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
          {btnLoading ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit">Update User</Button>
          )}
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
