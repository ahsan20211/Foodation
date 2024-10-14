import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Switch } from "@/components/ui/switch";



export function Cardions({ icon , color , text , time , desc , price ,className, ...props }) {
  return (
    <Card className={cn("", className)} {...props}>
      <CardContent className=" gap-4">
        <div>
                        
                <div className="flex gap-4 items-center">
              <div className={`${color}  w-9  h-10 flex justify-center items-center rounded-full text-white `}> 
                {icon }
                </div>
                <div className="content">
                <p className="font-medium text-base text-black">
                  {text}
                </p>
                <div className="flex">
                   <p className="text-sm text-muted-foreground mr-1 text-black ">
                  {time}
                </p>
                <p className="text-sm text-black  text-muted-foreground">
                  {desc}
                </p>
                </div>
                </div>
                    </div>
                <div className="box flex justify-between">
                  <div className="left"> 
              
                </div>

                <p className="text-muted-foreground">
                  {price}
                </p>
            </div>
        </div>
      </CardContent>
      
    </Card>
  );
}
