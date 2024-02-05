"use client";

import { subscriptionRef } from "@/lib/converters/Subscription";
import { useSubscriptionStore } from "@/store/store";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const setSubscription = useSubscriptionStore(
    (state) => state.setSubscription
  );

  useEffect(() => {
    if (!session?.user?.id) return;

    return onSnapshot(
      subscriptionRef(session?.user?.id),
      (snapshot) => {
        // console.log("Raw Firestore Data:", snapshot.docs[0]?.data());
        if (snapshot.empty) {
          // console.log("user has NO subscription");
          // set no subscription
          setSubscription(null);
        } else {
          // console.log("user has subscription");
          // console.log("Raw Firestore Data:", snapshot.docs[0]?.data());
          setSubscription(snapshot.docs[0].data());
          // console.log("Raw Firestore Data:", snapshot.docs[0]?.data());
        }
      },
      (error) => {
        console.log("Error getting document", error);
      }
    );
  }, [session, setSubscription]);

  return <>{children}</>;
}

export default SubscriptionProvider;
