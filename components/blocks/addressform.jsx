import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

// AddressForm.js
export default function AddressForm({ onSubmitAddress }) {
  // Assume AddressForm uses useForm from react-hook-form as well
  const { handleSubmit, register } = useForm({
    defaultValues: {
      address: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmitAddress)}>
      {/* Address form fields */}
      <Input {...register("address")} placeholder="Address" />
      {/* Add more fields as necessary */}
      <Button type="submit">Submit</Button>
    </form>
  );
}
