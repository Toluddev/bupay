import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalance";


const Home = () => {
  const loggedIn = { firstName : 'Tolu', lastName : 'Oludipe', email: 'toluwalaseoludipe7@gmail.com'};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={8255000.35}
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
