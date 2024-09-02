"use client";

import React, { useState } from "react";
import { Textarea } from "../../components/Textarea";
import { Input } from "../../components/Input";
import { MultiFilepnd } from "@/app/components/MultiFilepond";

export default function NewProduct() {
  const [imgUrl, setImgUrl] = useState<string>("");

  return (
    <div className="pt-24 container bg-gray-900 h-screen">
      <div className="w-full flex justify-center">
        <h1 className="mt-6 mb-4 text-2xl font-bold leading-none tracking-tight md:text-5xl lg:text-4xl text-white">
          Post a{" "}
          <span className="underline underline-offset-3 decoration-4 decoration-blue-600">
            Product
          </span>
        </h1>
      </div>
      <form action="submit" className="w-1/2 m-auto">
        <Input label="Product Title" value="ss" onChange={() => {}} />
        <Textarea
          label="Product Description"
          value="aa"
          onChange={() => {}}
          placeholder="asacav"
        />
        <MultiFilepnd src={imgUrl} setSrc={setImgUrl} />
      </form>
    </div>
  );
}
