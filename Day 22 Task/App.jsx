import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
 {/* functions for each button to show the success message */}
  const handleSubscribeFree = () => {
    setSubscriptionStatus('Successfully Subscribed to Free Package');
  };

  const handleSubscribePlus = () => {
    setSubscriptionStatus('Successfully Subscribed to Plus Package');
  };

  const handleSubscribePro = () => {
    setSubscriptionStatus('Successfully Subscribed to Pro Package');
  };

  

  return (
    <>
       {/* success texts are append here */}
    <h1 id='subscriptionStatus'> {subscriptionStatus} </h1>
    <div className='priceCard'>
 {/* free subscription card */}
      <div className='free'>
        <h5>Free</h5>
        <h3>$0/month</h3>
        <hr />
        <p>&#x2713;  single user</p>
        <p>&#x2713;  50GB Storage</p>
        <p>&#x2713;  Unlimited Public Project</p>
        <p>&#x2713;  Community Access</p>
        <p>&#x2718;  Unlimited Private Project</p>
        <p>&#x2718;  Dedicated Phone Support</p>
        <p>&#x2718;  Free SubDomain</p>
        <p>&#x2718;  Monthly Status Report</p>
        <button id='btn1' onClick={handleSubscribeFree} disabled={subscriptionStatus !== ''}>
            {subscriptionStatus !== '' ? 'Success' : 'Subscribe'}
          </button>

      </div>
      {/* plus subscription card */}
      <div className='plus'>
      <h5>Plus</h5>
        <h3>$9/month</h3>
        <hr />
        <p>&#x2713;  5 user</p>
        <p>&#x2713;  50GB Storage</p>
        <p>&#x2713;  Unlimited Public Project</p>
        <p>&#x2713;  Community Access</p>
        <p>&#x2713;  Unlimited Private Project</p>
        <p>&#x2713;  Dedicated Phone Support</p>
        <p>&#x2713;  Free SubDomain</p>
        <p>&#x2718;  Monthly Status Report</p>
        <button id='btn2' onClick={handleSubscribePlus} disabled={subscriptionStatus !== ''}>
            {subscriptionStatus !== '' ? 'Success' : 'Subscribe'}
          </button>
      </div>
      {/* Pro subscription card */}
      <div className='pro'>
      <h5>Pro</h5>
        <h3>$49/month</h3>
        <hr />
        <p>&#x2713;  single user</p>
        <p>&#x2713;  50GB Storage</p>
        <p>&#x2713;  Unlimited Public Project</p>
        <p>&#x2713;  Community Access</p>
        <p>&#x2713;  Unlimited Private Project</p>
        <p>&#x2713;  Dedicated Phone Support</p>
        <p>&#x2713;  Free SubDomain</p>
        <p>&#x2713;  Monthly Status Report</p>
        <button id='btn3' onClick={handleSubscribePro} disabled={subscriptionStatus !== ''}>
            {subscriptionStatus !== '' ? 'Success' : 'Subscribe'}
          </button>
      </div>

    </div>
    
    
    
    
    </>
  )
}

export default App
