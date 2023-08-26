import { UserButton } from "@clerk/nextjs";
const RootPage = () => {
  return (
    <>
      <div>landing page</div>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default RootPage;
