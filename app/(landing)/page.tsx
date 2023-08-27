import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
const LandingPage = () => {
  return (
    <div>
      LandingPage (unprotected)
      <UserButton afterSignOutUrl="/" />
      <Button>Sign in</Button>
      <Button>Sign up</Button>
    </div>
  );
};

export default LandingPage;
