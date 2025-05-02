import ProfileTabs from "@/app/components/profile/ProfileTabs";
import ToastNotification from "@/app/components/ui/ToastNotification";

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <ProfileTabs />
        {children}
        <ToastNotification />
    </>
  );
}