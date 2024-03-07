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

export default function Component() {
  return (
    <div className="space-y-4">
      <Card className="space-y-4 p-4">
        <CardHeader>
          <CardTitle>Shipping Address</CardTitle>
          <CardDescription>Enter your shipping address below</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="shipping-first-name">First name</Label>
              <Input
                id="shipping-first-name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shipping-last-name">Last name</Label>
              <Input
                id="shipping-last-name"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="shipping-address">Address</Label>
            <Input id="shipping-address" placeholder="Enter your address" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="shipping-city">City</Label>
              <Input id="shipping-city" placeholder="Enter your city" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shipping-state">State</Label>
              <Input id="shipping-state" placeholder="Enter your state" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="shipping-zip">ZIP</Label>
              <Input id="shipping-zip" placeholder="Enter your ZIP" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shipping-country">Country</Label>
              <Input id="shipping-country" placeholder="Enter your country" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="space-y-4 p-4">
        <CardHeader>
          <CardTitle>Billing Address</CardTitle>
          <CardDescription>Enter your billing address below</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-y-2">
            <Switch className="mr-2" id="same-address" />
            <Label className="mb-0" htmlFor="same-address">
              My billing information is the same as my shipping
            </Label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="billing-first-name">First name</Label>
              <Input
                id="billing-first-name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing-last-name">Last name</Label>
              <Input
                id="billing-last-name"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="billing-address">Address</Label>
            <Input id="billing-address" placeholder="Enter your address" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="billing-city">City</Label>
              <Input id="billing-city" placeholder="Enter your city" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing-state">State</Label>
              <Input id="billing-state" placeholder="Enter your state" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="billing-zip">ZIP</Label>
              <Input id="billing-zip" placeholder="Enter your ZIP" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing-country">Country</Label>
              <Input id="billing-country" placeholder="Enter your country" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
