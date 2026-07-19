import { htmlContent } from "./htmlContent";

export default function Home() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
