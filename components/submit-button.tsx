import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="rounded-md bg-rose-950 text-white px-[0.2rem]"
    >
      {pending ? "Adding todo... " : "Add todo"}
    </button>
  );
};

export default SubmitButton;
