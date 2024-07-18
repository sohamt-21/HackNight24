import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../ui/card"
import { Label } from "../..//ui/label"
import { Input } from "../..//ui/input"
import { RadioGroup, RadioGroupItem } from "../..//ui/radio-group"
import { Button } from "../..//ui/button"

export default function Request() {
  return (
    <Card className="w-full max-w-md mx-auto p-4 rounded-lg shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Expense Request</CardTitle>
        <CardDescription className="text-sm text-gray-600">Fill out the form to submit your expense.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 mt-4">
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-lg">Name</Label>
          <Input id="name" className="p-2 text-lg rounded-md border-gray-300" placeholder="Enter your name" />
        </div>
        <div className="flex gap-2">
          <Label className="text-lg">Type :</Label>
          <RadioGroup defaultValue="personal" className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="personal" id="personal" />
              <Label htmlFor="personal" className="text-lg">Personal</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="business" id="business" />
              <Label htmlFor="business" className="text-lg">Business</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="required-money" className="text-lg">Required Money:</Label>
          <Input id="required-money" type="number" className="p-2 text-lg rounded-md border-gray-300" placeholder="Enter amount" />
        </div>
        <div className="flex gap-2 ">
          <Label className="text-lg">Mode :</Label>
          <RadioGroup defaultValue="request" className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="request" id="request" />
              <Label htmlFor="request" className="text-lg">Equity</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="money" id="money" />
              <Label htmlFor="money" className="text-lg">Interest</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="rate" className="text-lg">Rate :</Label>
          <Input id="rate" type="number" className="p-2 text-lg rounded-md border-gray-300" placeholder="Enter rate" />

          <Label htmlFor="phone" className="text-lg">Mobile No.</Label>
          <Input id="phone" type="number" className="p-2 text-lg rounded-md border-gray-300" placeholder="Enter mobile number" />
        </div>
      </CardContent>
      <CardFooter className="mt-4">
        <Button variant="ghost" className="dark ">Submit</Button>
      </CardFooter>
    </Card>
  )
}
