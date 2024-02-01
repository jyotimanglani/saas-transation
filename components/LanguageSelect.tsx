"use client";
import {
  LanguagesSupported,
  LanguagesSupportedMap,
  useLanguageStore,
  useSubscriptionStore,
} from "@/store/store";
import { usePathname } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LoadingSpinner from "./LoadingSpinner";
import Link from "next/link";

const LanguageSelect = () => {
  const [language, setLanguage, getLanguages, getNotSupportedLanguages] =
    useLanguageStore((state) => [
      state.language,
      state.setLanguage,
      state.getLanguages,
      state.getNotSupportedLanguages,
    ]);
  const subscription = useSubscriptionStore((state) => state.subscription);
  const isPro =
    subscription?.role === "pro" && subscription?.status === "active";
  const pathName = usePathname();
  const isChatPage = pathName.includes("/chat");
  //   console.log("language", language, setLanguage);
  //   useEffect(() => {
  //     console.log("selected", language);
  //   }, [language]);

  return (
    isChatPage && (
      <Select onValueChange={(value: LanguagesSupported) => setLanguage(value)}>
        <SelectTrigger className="w-[150px] text-black dark:text-white">
          <SelectValue placeholder={LanguagesSupportedMap[language]} />
        </SelectTrigger>
        <SelectContent>
          {subscription === undefined ? (
            <LoadingSpinner />
          ) : (
            <>
              {getLanguages(isPro).map((language) => (
                <SelectItem key={language} value={language}>
                  {LanguagesSupportedMap[language]}
                </SelectItem>
              ))}

              {getNotSupportedLanguages(isPro).map((language) => (
                <Link href="/register" key={language} prefetch={false}>
                  <SelectItem
                    key={language}
                    className="bg-gray-300/50 text-gray-500 dark:text-white py-2 my-1"
                    disabled
                    value={language}
                  >
                    {LanguagesSupportedMap[language]} (PRO)
                  </SelectItem>
                </Link>
              ))}
            </>
          )}
        </SelectContent>
      </Select>
    )
  );
};

export default LanguageSelect;
