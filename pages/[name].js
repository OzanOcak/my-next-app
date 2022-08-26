import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  //console.log(router);
  const { name } = router.query;
  return <div>hello {name}</div>;
};
export default Name;
