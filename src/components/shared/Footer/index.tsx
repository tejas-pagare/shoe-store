import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <h1 className=" p-5 text-center">
        {currentYear} {APP_NAME} All Right Reservred
      </h1>
    </footer>
  )
}

export default Footer
