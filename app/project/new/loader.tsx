import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export default function Loader({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();
  return pending ? (
    <div className="flex flex-col items-center">
      <video
        src="/3d-glassy-torus-with-petals.webm"
        muted
        autoPlay
        loop
        controls={false}
      ></video>
      <p className="text-2xl/8 font-medium">Generating proposal</p>
      <p className="mt-10">Hold on a second while AI does the magic</p>
    </div>
  ) : (
    children
  );
}
