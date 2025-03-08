import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalance";
import { getLoggedInUser } from "@/lib/actions/user.actions";


const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={820000.35}
          />
        </header>
        Recent Transactions
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance: 285000}, {currentBalance: 1250000}]}
      
      />
    </section>
  )
}

export default Home
