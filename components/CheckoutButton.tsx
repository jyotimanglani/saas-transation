"use client"

import { useSession } from "next-auth/react";

function CheckoutButton() {
  const {data: session} = useSession();

  const createCheckoutSession = async () => {
    if (!session) return;
    // push a document into firestore db



    // stripe extension on firebase will create a checkout session



    // redirect user to checkout page

  }


  return (
    <div className="flex flex-col space-y-2">
      {/* if subscribed show that the user is subscribed */}
    <button onClick={() => createCheckoutSession()} className="mt-8 block rounded-md text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer disabled:opacity-80 disabled:bg-indigo-600/50 bg-indigo-600 px-3.5 py-2 text-center hover:bg-indigo-500 focus-visible:outline focus-visible:outline-indigo-600 disabled:text-white disabled:cursor-default">
      Sign Up
    </button>
    </div>
  );
}

export default CheckoutButton;
