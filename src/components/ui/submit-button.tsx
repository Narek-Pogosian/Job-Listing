"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button } from "./button";

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return <Button disabled={pending}>{children}</Button>;
}

export default SubmitButton;
