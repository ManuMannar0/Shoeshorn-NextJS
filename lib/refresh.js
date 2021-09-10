import { useRouter } from "next/router";

const refresh = () => {
  const Composition = () => {
    const router = useRouter();
    const refresh = () => {
      router.replace(router.asPath);
    };
    return refresh;
  };

  return <Composition />;
};
export default refresh;
