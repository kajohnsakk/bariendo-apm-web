import { useRouter } from "next/navigation";

const useRedirect = () => {
  const router = useRouter();

  const redirect = (url: string) => {
    return router.push(url);
  };

  return {
    redirect,
  };
};

export default useRedirect;
