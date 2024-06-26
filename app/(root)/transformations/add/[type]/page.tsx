import Header from "@/components/shared/header";
import TransformationForm from "@/components/shared/transformation-form";
import { transformationTypes } from "@/constants";
import React from "react";

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <TransformationForm />
    </>
  );
};

export default AddTransformationTypePage;
