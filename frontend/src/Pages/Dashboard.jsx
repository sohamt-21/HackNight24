import Barchart from "..//components/CustomComponents/Charts/Barchart";
import { Button, buttonVariants } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { DollarSign } from "lucide-react";

import React, { useState } from "react";

function Dashboard() {
  const chartData = [
    { month: "January", crop: 186 },
    { month: "February", crop: 305 },
    { month: "March", crop: 237 },
    { month: "April", crop: 73 },
    { month: "May", crop: 209 },
    { month: "June", crop: 214 },
    { month: "July", crop: 186 },
    { month: "August", crop: 305 },
    { month: "September", crop: 237 },
    { month: "October", crop: 73 },
    { month: "November", crop: 209 },
    { month: "December", crop: 214 },
  ];

  const chartConfig = {
    crop: {
      label: "crop",
      color: "rgb(var(--primary-main))",
    },
  };

  const [activeButton, setActiveButton] = useState("Overview");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className=" p-4 border-2 h-screen m-4">
      <div className=" flex flex-row justify-between items-center border-b h-[3rem]">
        <p className=" font-bold text-lg">Dashboard</p>
        <p className=" ">User name and icon</p>
      </div>
      <div className=" flex flex-col gap-4 pt-4">
        <h1 className=" font-bold text-3xl">Hi, Welcome Back 👋🏻</h1>

        <div className=" h-fit w-fit px-2 py-2 rounded-xl bg-neutral-100 flex gap-2">
          <Button
            variant={activeButton === "Overview" ? "outline" : "link"}
            onClick={() => handleButtonClick("Overview")}
          >
            Overview
          </Button>
          <Button
            variant={activeButton === "Analytics" ? "outline" : "link"}
            onClick={() => handleButtonClick("Analytics")}
          >
            Analytics
          </Button>
          <Button
            variant={activeButton === "Notifications" ? "outline" : "link"}
            onClick={() => handleButtonClick("Notifications")}
          >
            Notifications
          </Button>
        </div>

        <div className=" grid gap-4  md:grid-cols-2 md:gap-8 lg:grid-cols-4 ">
          <Card x-chunk="A card showing the total revenue in USD and the percentage difference from last month.">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card x-chunk="A card showing the total revenue in USD and the percentage difference from last month.">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Savings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">000000</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card x-chunk="A card showing the total revenue in USD and the percentage difference from last month.">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Any Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2103</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className=" flex flex-row gap-8">
          <div className=" w-[35rem]">
            <Barchart chartConfig={chartConfig} chartData={chartData} />
          </div>

          <div className=" flex flex-col border rounded-xl shadow-sm">
            <div className=" flex flex-row gap-4 p-2">
              <div
                className="flex flex-1 items-center justify-center rounded-lg border shadow-sm w-[15rem] h-[13rem] hover:shadow-lg"
                x-chunk="dashboard-02-chunk-1"
              >
                <div className="flex flex-col items-center gap-1 text-center">
                  <h3 className="text-2xl font-bold tracking-tight">
                    Evaluation Model
                  </h3>
                  <p className="text-sm text-muted-foreground px-2">
                    Give us your details and we will evaluate and review your crop investment.
                  </p>
                  <a href="/" className={`${buttonVariants('default')} mt-4`}>Evaluate</a>
                </div>
              </div>

              <div
                className="flex flex-1 items-center justify-center rounded-lg border shadow-sm hover:shadow-lg"
                x-chunk="dashboard-02-chunk-1"
              >
                <div className="flex flex-col items-center gap-1 text-center">
                  <h3 className="text-2xl font-bold tracking-tight">
                    G&S Trade Signal
                  </h3>
                  <p className="text-sm text-muted-foreground px-2">
                    Get alerted about Trade with the price and news on Gold and Silver Prices.
                  </p>
                  <a href="/" className={`${buttonVariants('default')} mt-4`}>Evaluate</a>
                </div>
              </div>
            </div>

            <div className=" flex flex-row gap-2 p-3">
              <div
                className="flex flex-1 items-center justify-center rounded-lg border shadow-sm w-[15rem] h-[13rem] hover:shadow-lg"
                x-chunk="dashboard-02-chunk-1"
              >
                <div className="flex flex-col items-center gap-1 text-center">
                  <h3 className="text-2xl font-bold tracking-tight">
                    Small Scale Buisness
                  </h3>
                  <p className="text-sm text-muted-foreground px-2">
                    Get fundings from NFO, NGO and farmers especially for women empowerment.
                  </p>
                  <a href="" className={`${buttonVariants('default')} mt-4`}>Evaluate</a>
                </div>
              </div>

              {/* <div
                className="flex flex-1 items-center justify-center rounded-lg border shadow-sm hover:shadow-lg"
                x-chunk="dashboard-02-chunk-1"
              >
                <div className="flex flex-col items-center gap-1 text-center">
                  <h3 className="text-2xl font-bold tracking-tight">
                    You have no products
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You can start selling as soon as you add a product.
                  </p>
                  <Button className="mt-4">Add Product</Button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;